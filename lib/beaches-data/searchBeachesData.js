import { supabase } from "../../client";

async function getAllBeaches() {
  try {
    const { data, error } = await supabase.from("beaches-data").select("*");
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

async function getBeachesDataByOrg(id) {
  console.log(id);
  try {
    const { data, error } = await supabase
      .from("beaches-data")
      .select("*")
      .eq("id", `${id}`);
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

export { getAllBeaches, getBeachesDataByOrg };
