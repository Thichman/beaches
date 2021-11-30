import { supabase } from "../../client";

async function getPostsByBeach(id) {
  console.log(id);
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("beach", id);
    if (error) {
      console.log(error);
      throw error;
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
    return {};
  }
}

export { getPostsByBeach };
