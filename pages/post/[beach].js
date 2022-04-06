import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { supabase } from "../../client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
const initialState = { title: "", content: "" };

function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content, rating } = post;
  const router = useRouter();
  const { beach } = router.query;

  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  async function createNewPost() {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;
    const { data } = await supabase
      .from("posts")
      .insert([{ title, content, beach, rating }])
      .single();
    router.push(`/beaches/${beach[0]}`);
  }
  return (
    <div className="mx-auto w-7/12 flex flex-col w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <div className="flex justify-between">
        <button
          type="button"
          className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
          onClick={createNewPost}
        >
          Create Post
        </button>
        <div>
          <label htmlFor="rating">Rating</label>
          <select
            className="bg-gray-200"
            name="rating"
            id="rating"
            onChange={onChange}
          >
            <option value={0}>0 Stars</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;