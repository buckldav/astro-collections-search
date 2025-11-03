// src/pages/api/blog.json.js
import { getCollection } from "astro:content";

export async function GET() {
  const blog = await getCollection("blog");

  const jsonData = blog.map((entry) => ({
    id: entry.id,
    slug: entry.slug,
    data: entry.data,
  }));

  return new Response(JSON.stringify(jsonData, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
