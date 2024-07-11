import { getRandomProduct } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    const randomProduct = getRandomProduct();
    response.status(200).json(randomProduct);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
