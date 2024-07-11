import { getAllProducts } from "/services/productServices.js";

export default function handler(request, response) {
  if (request.method === "GET") {
    const products = getAllProducts();
    response.status(200).json(products);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
