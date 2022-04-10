import Link from "next/link";
import Image from "next/image";
export default function contact_us() {
    return (
        <div className="flex flex-col w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <p>
                <div className="flex flex-col w-screen text-center text-xl"> Creator: Tyson Hichman</div>
                <div className="flex flex-col w-screen text-center text-xl">Email: thichman@unca.edu </div>

            </p>
            <div className="flex flex_wrap justify-center mx-auto py-4 bg object-cover md:object-scale-down">
                <Image
                    src="/Men_s_Soccer_Headshots_Tyson_Hichman.jpeg"
                    alt="beach pic"
                    width={300}
                    height={1500}
                />
            </div>
            <div className="mx-auto text-center py-9 text-lg"> Please contact us with any further questions.</div>
        </div>

    );
}