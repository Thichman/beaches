import { useEffect, useState } from "react";
import { getAllBeaches } from "../lib/beaches/searchBeaches";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    try {
      getAllBeaches().then((beaches) => {
        setBeaches(beaches);
        console.log(beaches);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1 className="py-6 text-4xl font-bold mx-auto">Beaches</h1>
      <p className="mx-auto font-semibold text-gray-700">
        Browse beaches in and around the Miami area to see nearby water quality and reviews from other beach
        goers. You will be able to see the most recent posts and experiences from users at 19 of the most popular
        locations in the area. Feel free to share your experience and leave a rating on the beach!
      </p>
      <div className="w-full h-full flex flex_wrap justify-center mx-auto py-4 bg">
        <Image
          src="/beachimg.jpeg"
          alt="beach pic"
          width={960}
          height={540}
        />
      </div>


      <div className="w-5/12 mx-auto py-9">


        {beaches && beaches.length > 0 ? (
          <ul>
            {beaches.map((beach) => (
              <li className="bg-gray-300 py-2 my-2 text-center w-25" key={beach.id}>
                <Link href={`/beaches/${beach.id}`}>
                  <a>{beach.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No rows returned</p>
        )}
      </div>
    </div>
  );
}
