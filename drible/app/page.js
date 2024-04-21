import Image from "next/image";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-18 py-24">
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

        <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb1.jpeg" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof1.jpeg" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">Upnow Studio</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb2.png" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof2.png" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">One Week Wonders</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb3.png" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof2.png" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">One Week Wonders</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb4.jpeg" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof3.jpeg" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">Minh Pham</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb5.png" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof4.jpeg" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">Ronas IT | UI/UX</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb6.png" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof5.jpeg" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">Ledo</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb7.png" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof6.png" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">ooze</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Image className="rounded-lg" src="/thumb8.png" width={300} height={200} alt="1"/>
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                    <Image className="rounded-full" src="/prof7.png" width={24} height={24} alt="prof1" />
                    <p className="text-[14px] font-semibold ml-2">Purrweb UI/UX</p>
                    <span className="font-bold text-white bg-[#CCCCCC] text-[12px] px-[2px] rounded-sm">TEAM</span>
                    </div>
                    
                    <div className="justify-end flex gap-1">
                        <Image src="/heart.svg" width={20} height={20} alt="heart" />
                        <p className="text-[14px] font-semibold">1.2k</p>
                        <Image src="/eye.svg" width={20} height={20} alt="eye" />
                        <p className="text-[14px] font-semibold">240k</p>
                    </div>
                </div>
            </div>

        </div>

    </main>
  );
}
