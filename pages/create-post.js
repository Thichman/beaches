// pages/create-post.js
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { supabase } from "../client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
const initialState = { title: "", content: "" };

function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content } = post;
  const router = useRouter();
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  async function createNewPost() {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;
    const { data } = await supabase
      .from("posts")
      .insert([{ title, content }])
      .single();
    // router.push(`/posts/${data.id}`);
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        Create new post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Name"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-black placeholder-black y-2"
      />
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />


      <button
        type="button"
        className="mb-4 text-white font-semibold px-8 py-2 rounded-lg bg-green-500 hover:bg-green-700"
        onClick={createNewPost}
      >
        Create Post
      </button>

    </div>
  );
}

export default CreatePost;
