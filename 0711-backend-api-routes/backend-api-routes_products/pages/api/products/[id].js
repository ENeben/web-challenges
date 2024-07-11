import { getProductById } from "/services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;
  if (request.method === "GET") {
    const singleProduct = getProductById(id);
    response.status(200).json(singleProduct);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
