import { useRouter } from "next/router";
import Link from "next/link";
import { getBeachById } from "../../lib/beaches/searchBeaches";
import { getBeachesDataByOrg } from "../../lib/beaches-data/searchBeachesData";
import { getPostsByBeach } from "../../lib/posts/searchPosts";
import { useState, useEffect } from "react";

export default function Beach({ }) {
  const router = useRouter();
  const { id } = router.query;
  const [beach, setBeach] = useState([]);
  const [beachData, setBeachData] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      console.log("id: ", id);
      getBeachById(id).then((data) => {
        setBeach(data);
        getBeachesDataByOrg(data[0]?.datapoint).then((data) => {
          setBeachData(data);
        });
        getPostsByBeach(id).then((data) => {
          setPosts(data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col w-screen">
      {beach && beach.length > 0 ? (
        <div className="flex flex-col">
          <h1 className="py-6 text-4xl font-bold mx-auto">{beach[0].name}</h1>
          <div>
            <p className="mx-auto font-semibold text-gray-700 w-5/12">
              {beach[0].description}
            </p>
          </div>
          {beachData && beachData.length > 0 ? (
            <div className="w-5/12 mx-auto py-9">
              <div className="py-w">
                <h2 className="text-lg font-semibold">Beach Water Data</h2>
                <hr />
              </div>
              <h2>Beach Water Data</h2>
              <p>
                <strong>Collected By: </strong>{" "}
                {beachData[0].OrganizationFormalName}
              </p>
              <p>
                <strong>Water Quality: </strong> {"Good ✅"}
              </p>
              <p>
                <strong>Vertical Measure: </strong>
                {`${beachData[0].VerticalMeasureMeasureValue} feet`}
              </p>
              <p>
                <strong>Latitude:</strong> {beachData[0].LatitudeMeasure}
              </p>
              <p>
                <strong>Longitude:</strong> {beachData[0].LongitudeMeasure}
              </p>
            </div>
          ) : (
            <p>No beach health data available</p>
          )}
          {posts && posts.length > 0 ? (
            <div className="w-5/12 mx-auto py-6">
              <div className="py-w">
                <h2 className="text-lg font-semibold">Posts</h2>
                <hr />
              </div>
              <Link href={`/post/${id}`}>
                <a>Create post</a>
              </Link>
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                    <p>
                      <strong>{post.title}</strong>
                    </p>
                    <p>{post.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <Link href={`/post/${id}`}>
                <a>Create post</a>
              </Link>
              <p>No posts available</p>
            </>
          )}
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
