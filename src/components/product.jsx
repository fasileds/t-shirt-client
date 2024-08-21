import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/product";
export default function Product() {
  const location = useLocation();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("product/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log("there is error");
      }
    };
    getProduct();
  });

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  // const handleClik = (type) => {
  //   if (type === "Add") {
  //     setQuantity(quantity + 1);
  //   }
  //   {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   }
  // };
  return (
    <div className="ml-14 mr-14 mb-14">
      <div className="flex items-center justify-center mt-14 mb-14">
        <img
          class="h-auto max-w-lg"
          src={product.img}
          alt="image description"
        />
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 class="text-4xl font-bold">{product.title}</h1>

            <div class="flex flex-col items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 mt-10 dark:text-black">
                ${product.price}
              </span>

              <form class="max-w-xs mx-auto mb-6">
                <label for="size_select" class="sr-only">
                  Choose a size
                </label>
                <select
                  id="size_select"
                  class="block py-3 px-2 w-full text-lg text-blue-600 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500"
                >
                  <option selected>Choose a size</option>
                  {product.size?.map((s) => (
                    <option onChange={(e) => setSize(e)} key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </form>

              <form class="max-w-xs mx-auto mb-6">
                <label for="color_select" class="sr-only">
                  Choose a color
                </label>
                <select
                  id="color_select"
                  class="block py-3 px-2 w-full text-lg text-green-600 bg-transparent border-0 border-b-2 border-green-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500"
                >
                  <option selected>Choose a color</option>
                  {product.color?.map((c) => (
                    <option onChange={(e) => setColor(e)} key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </form>

              <div className="flex flex-row mt-10 ">
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  +
                </button>
                <a class="text-xl font-semibold text-gray-700 mx-4">
                  {quantity}
                </a>
                <button
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                  class="bg-red-500 mr-14 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  -
                </button>
                <Link to="/cart">
                  <button
                    onClick={handleClick}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-black leading-snug max-w-prose">{product.desc}</p>

        <div data-popper-arrow></div>
      </div>
    </div>
  );
}
