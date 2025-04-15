import Image from 'next/image';
import Button from './UI/Button';

export default function GlobalVocationCTA() {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-15 py-8 md:py-12 gap-8 md:gap-18">
            <div className="rounded-2xl overflow-hidden w-full md:w-1/2 max-w-[700px] mx-auto md:mx-0">
                <Image
                    src="/assets/GlobalVocationCTAImage.png"
                    alt="Woman working passionately"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                    priority
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between mt-8 md:mt-0">
                <h2 className="text-3xl sm:text-4xl md:text-[50px] mb-6 md:mb-12 font-bold text-[#00BFF0]   sm:leading-[68px]">
                    Are you called to go<br className="hidden sm:block" /> global with your<br className="hidden sm:block" /> vocation?
                </h2>
                <p className="text-[#323232] mb-8 md:mb-12 text-base sm:text-lg leading-relaxed">
                    You're driven by purpose. Whether you're a missionally driven professional, an actual missionary, a refugee seeking meaningful work, or a survivor starting fresh—your story, your skills, and your heart are ready to make an impact. As a Goer, you're not just find...
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button text={"Search an Impact"} />
                    <a href="#" className="text-[#00BFF0] text-base sm:text-[16px] underline hover:text-[#008CBA] transition-colors">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}