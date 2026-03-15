import { useEffect, useState } from "react";

export default function Home({ setcartCounter, search, setcartItems }) {
  const [productsItems, setproductsItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://jsonfakery.com/carts/paginated");
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();
        const items = data?.data ?? data ?? [];
        if (mounted) setproductsItems(items);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        if (mounted)
          setError("Failed to load products. Please try again later.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  const filterProducts = productsItems.filter((item) =>
    item?.product?.name?.toLowerCase().includes((search || "").toLowerCase()),
  );

  return (
    <div className="px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-6">
        Home Page
      </h1>

      {loading && (
        <p className="text-center text-lg text-amber-500 mt-6">Loading...</p>
      )}

      {error && (
        <p className="text-center text-lg text-red-600 mt-6">{error}</p>
      )}

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
        {filterProducts.length > 0
          ? filterProducts.map((productsItam, id) => (
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
          : !loading && (
              <p className="text-center text-red-600 text-lg col-span-full">
                Not Found Products
              </p>
            )}
      </div>
    </div>
  );
}
