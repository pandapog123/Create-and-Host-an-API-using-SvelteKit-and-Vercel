import { data } from "$lib/data.js";
import { error, json } from "@sveltejs/kit";

export async function GET({ params }) {
  const setName = params.SET_NAME;

  if (setName !== "users" && setName !== "books") {
    throw error(404, `Set of "${setName}" does not exist`);
  }

  return json(data[setName]);
}
