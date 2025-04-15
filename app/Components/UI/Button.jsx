

export default function Button({text}) {
  return (
    <button className="bg-[#FF7F50] cursor-pointer hover:bg-[#ff6f3f] text-white text-[16px] leading-[100%] px-[15px] py-[15px] rounded-[8px] transition-colors duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
    {text}
    </button>
    
  );
}
