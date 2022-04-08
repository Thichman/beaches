//import { useRouter } from "next/router";
//import Link from "next/link";
//import { getBeachById } from "../../lib/beaches/searchBeaches";
//import { getBeachesDataByOrg } from "../../lib/beaches-data/searchBeachesData";
//import { getPostsByBeach } from "../../lib/posts/searchPosts";
//import { useState, useEffect } from "react";

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
        <div>This page is almsot complete!</div>
    )
}