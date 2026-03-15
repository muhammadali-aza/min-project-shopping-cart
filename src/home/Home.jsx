import { useEffect, useState } from "react";

export default function Home({ setcartCounter, search, setcartItems }) {
  const [productsItems, setproductsItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonfakery.com/carts/paginated")
      .then((res) => res.json())
      .then((data) => setproductsItems(data.data));
  }, []);

  const filterProducts = productsItems.filter((item) =>
    item.product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4">

      <h1 className="text-2xl md:text-3xl font-bold text-center mt-6">
        Home Page
      </h1>

      <div
        className="
        max-w-[1200px] 
        mx-auto 
        mt-[40px] 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      "
      >
        {filterProducts.length > 0 ? (
          filterProducts.map((productsItam, id) => (
            <div
              key={id}
              className="shadow-md rounded-lg bg-black text-white overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={productsItam.product.image}
                  alt={productsItam.product.name}
                  className="w-full h-[180px] sm:h-[200px] object-cover hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-3 text-sm sm:text-base">
                <p className="pt-1">
                  <span className="text-amber-500">Created:</span>{" "}
                  {productsItam.created_at}
                </p>

                <p className="pt-1">
                  <span className="text-amber-500">Product:</span>{" "}
                  {productsItam.product.name}
                </p>

                <p className="pt-1">
                  <span className="text-amber-500">Price:</span> $
                  {productsItam.product.price}
                </p>
              </div>

              <div className="flex justify-end px-3 pb-3">
                <button
                  className="
                  bg-amber-700 
                  px-3 
                  py-1.5 
                  rounded-lg 
                  text-sm 
                  hover:bg-amber-500 
                  hover:text-black 
                  transition
                "
                  onClick={() => {
                    setcartCounter((prev) => prev + 1);
                    setcartItems((prev) => [...prev, productsItam]);
                  }}
                >
                  Add Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-600 text-lg col-span-full">
            Not Found Products
          </p>
        )}
      </div>
    </div>
  );
}