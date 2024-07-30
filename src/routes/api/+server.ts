import { data } from "$lib/data.js";
import { json } from "@sveltejs/kit";

export async function GET() {
  return json(data);
}
