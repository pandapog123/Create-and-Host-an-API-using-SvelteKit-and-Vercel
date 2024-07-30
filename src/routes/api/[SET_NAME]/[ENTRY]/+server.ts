import { data } from "$lib/data.js";
import { error, json } from "@sveltejs/kit";

export async function GET({ params }) {
  const setName = params.SET_NAME;

  if (setName !== "users" && setName !== "books") {
    throw error(404, `Set of "${setName}" does not exist`);
  }

  const entry = Number(params.ENTRY);

  if (typeof entry !== "number") {
    throw error(406, `Entry must be a number`);
  }

  if (entry > data[setName].length - 1) {
    throw error(404, `Entry "${entry}" does not exist`);
  }

  return json(data[setName][entry]);
}
