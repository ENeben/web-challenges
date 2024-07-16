import dbConnect from "@/db/connect";
import Product from "@/db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const fishes = await Product.find();
    return response.status(200).json(fishes);
  } else {
    return response.stats(405).json({ message: "Method not allowed" });
  }
}
