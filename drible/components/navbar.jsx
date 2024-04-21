"use client"

function NavBar() {
    return(
        <div className="flex justify-between">
            <button className="border border-2 mr-24 rounded-md py-1 px-4 border-[#E9E9EB]">Popular</button>
            <div className="flex gap-4">
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full bg-[#F8F7F4] hover:text-[#6E6D7A]">Discover</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Animation</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Branding</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Illustration</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Mobile</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Print</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Product Design</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Typography</button>
                <button className="py-[0.2px] px-2 font-bold text-[14px] rounded-full hover:text-[#6E6D7A]">Web Design</button>
            </div>
            <button className="border border-2 ml-24 rounded-full py-1 px-4 border-[#E9E9EB]">Filters</button>
        </div>
    );
}

export default NavBar;
