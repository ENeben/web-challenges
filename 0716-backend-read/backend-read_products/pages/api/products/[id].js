import dbConnect from "@/db/connect";
import Product from "@/db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const fish = await Product.findById(id).populate("reviews");

    if (!fish) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(fish);
  } else {
    return response.stats(405).json({ message: "Method not allowed" });
  }
}
