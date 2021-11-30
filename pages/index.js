import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { getAllBeaches } from "../lib/beaches/searchBeaches";
import Link from "next/link";

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
    <div className={styles.container}>
      <h1>Beaches</h1>
      <p>
        Browse beaches to see nearby water quality and reviews from other beach
        goers.
      </p>
      {beaches && beaches.length > 0 ? (
        <ul>
          {beaches.map((beach) => (
            <li key={beach.id}>
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
  );
}
