import Link from "next/link";
import Image from "next/image";
export default function contact_us() {
    return (
        <div className="flex flex-col w-screen l-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <p>
                <div className="flex flex-col w-screen text-center"> Creater: Tyson Hichman</div>
                <div className="flex flex-col w-screen text-center">Email: thichman@unca.edu </div>
                <div className="flex flex-col w-screen text-center">Phone: nunya</div>
            </p>
            <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                <Image
                    src="/Men_s_Soccer_Headshots_Tyson_Hichman.jpeg"
                    alt="beach pic"
                    width={960}
                    height={540}
                />
            </div>
        </div>

    );
}