'use client'
import { useState, useRef, useEffect } from 'react';
import { ChevronsUpDown, Search, Check } from 'lucide-react';

const countries = [
    { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
    { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
    { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
    { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
    { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
    { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
    // Add more countries as needed
];

const PhoneInput = ({ name, value, onChange, error, required }) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.dialCode.includes(searchQuery)
    );

    useEffect(() => {
        // Split the value into country code and phone number if it exists
        if (value) {
            const country = countries.find(c => value.startsWith(c.dialCode));
            if (country) {
                setSelectedCountry(country);
                setPhoneNumber(value.replace(country.dialCode, ''));
            }
        }
    }, [value]);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
        setSearchQuery('');
        // Combine the dial code and phone number and call onChange
        const fullPhoneNumber = country.dialCode + phoneNumber;
        onChange({ target: { name, value: fullPhoneNumber } });
    };

    const handlePhoneNumberChange = (e) => {
        const number = e.target.value;
        setPhoneNumber(number);
        // Combine the dial code and phone number and call onChange
        const fullPhoneNumber = selectedCountry.dialCode + number;
        onChange({ target: { name, value: fullPhoneNumber } });
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full">
            <div className="relative">
                <div className={`flex rounded-[7px] shadow-sm border ${error ? 'border-red-500' : 'border-[#B3B5BF]'} focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200 h-[35px]`}>
                    {/* Country selector button */}
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-between px-3 py-2 bg-gray-50 border-gray-300 rounded-l-[7px] hover:bg-gray-100 transition-colors duration-200 h-full"
                    >
                        <div className="flex items-center">
                            <span className="font-[16px] text-[17px] leading-[20px] text-[#666666]">{selectedCountry.flag}</span>
                            <ChevronsUpDown 
                                className={`ml-2 h-4 w-4 transition-colors duration-200 ${isDropdownOpen ? 'text-[#FF7F50]' : 'text-gray-500'}`} 
                            />
                            <span className="text-[16px] text-[#666666] font-medium">{selectedCountry.dialCode}</span>
                        </div>
                    </button>

                    {/* Phone number input */}
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="block w-full px-3 py-2 border-0 focus:ring-0 rounded-r-[7px] text-sm h-full"
                        required={required}
                    />
                </div>

                {/* Error message */}
                {error && <p className="error-message text-red-500 text-xs mt-1">{error}</p>}

                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div
                        ref={dropdownRef}
                        className="absolute z-10 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fadeIn"
                    >
                        {/* Search input */}
                        <div className="p-2 border-b border-gray-200">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="Search country or code"
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Country list */}
                        <div className="max-h-60 overflow-y-auto">
                            {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country)}
                                        className={`flex items-center justify-between w-full px-4 py-2 text-left text-sm hover:bg-blue-50 transition-colors duration-150 ${country.code === selectedCountry.code ? 'bg-blue-50 font-medium' : ''
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-lg">{country.flag}</span>
                                            <span>{country.name}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-gray-500">{country.dialCode}</span>
                                            {country.code === selectedCountry.code && (
                                                <Check className="h-4 w-4 text-blue-500" />
                                            )}
                                        </div>
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                    No countries found
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhoneInput;