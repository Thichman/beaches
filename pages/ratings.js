//import { useRouter } from "next/router";
//import Link from "next/link";
//import { getBeachById } from "../../lib/beaches/searchBeaches";
//import { getBeachesDataByOrg } from "../../lib/beaches-data/searchBeachesData";
//import { getPostsByBeach } from "../../lib/posts/searchPosts";
//import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Beach({ }) {
    // const router = useRouter();
    // const { id } = router.query;
    // const [beach, setBeach] = useState([]);
    // const [beachData, setBeachData] = useState([]);
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     try {
    //         console.log("id: ", id);
    //         getBeachById(id).then((data) => {
    //             setBeach(data);
    //             getBeachesDataByOrg(data[0]?.datapoint).then((data) => {
    //                 setBeachData(data);
    //             });
    //             getPostsByBeach(id).then((data) => {
    //                 setPosts(data);
    //             });
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);



    return (
        <div className="flex flex-col w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="mx-auto text-center text-bold text-xl py-12">
                Browse all of our beaches to see their average ratings from our users!
            </div>


            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/21st.jpeg"
                        alt="beach pic1"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">21st to 45th Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/bal harbor.jpeg"
                        alt="beach pic2"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Bal Harbor Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/bill-bags-cape-florida-state-park.jpeg"
                        alt="beach pic3"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Bill Baggs Cape Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/CrandonParkPalmandBeach-1440x900.jpeg"
                        alt="beach pic4"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Crandon Park Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/fort myers.jpeg"
                        alt="beach pic5"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">For Myers Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/haulover.jpeg"
                        alt="beach pic6"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Haulover Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/hobie.jpeg"
                        alt="beach pic7"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Hobie Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/jensen.jpeg"
                        alt="beach pic8"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Jensen Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/Lummus-Miami-Getty.jpeg"
                        alt="beach pic9"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Lummus Park Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/matheson1.png"
                        alt="beach pic10"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Matheson Hammock Park Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/mcnears1.jpeg"
                        alt="beach pic11"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Mcnears Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/miamibeach.jpeg"
                        alt="beach pic12"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Miami Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/northbeach.jpeg"
                        alt="beach pic13"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">North Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/oleta river.jpeg"
                        alt="beach pic14"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Oleta River State Park Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/south-beach-jetty-1440x900.jpg.jpeg"
                        alt="beach pic15"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">South Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/south pointe.jpeg"
                        alt="beach pic16"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">South Pointe Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/sunny.jpeg"
                        alt="beach pic17"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Sunny Isles Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/surfside.jpeg"
                        alt="beach pic18"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Surfside Beach rating: </div>
            </div>
            <div>
                <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
                    <Image
                        src="/beaches images/Virginiakeybeach.jpeg"
                        alt="beach pic19"
                        width={960}
                        height={540}
                    />
                </div>
                <div className="mx-auto text-center py-9 text-lg">Virginia Key Beach rating: </div>
            </div>





        </div>

    )

}