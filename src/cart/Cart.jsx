export default function Cart({ cartItems, setcartItems, setcartCounter, cartCounter }) {

  const removeItem = (index) => {
    setcartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalProducts = cartItems.reduce((prev, item) => {
    return prev + item.product.price;
  }, 0);

  return (
    <div className="max-w-[1200px] mx-auto mt-[50px] px-4">

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Cart Page
      </h1>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      ">

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white p-4 rounded-lg shadow-md"
            >

              <div className="overflow-hidden rounded">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-[160px] sm:h-[180px] object-cover hover:scale-110 transition duration-300"
                />
              </div>

              <p className="mt-3 text-sm sm:text-base">
                <span className="text-amber-500">Product:</span>{" "}
                {item.product.name}
              </p>

              <p className="text-sm sm:text-base mt-1">
                <span className="text-amber-500">Price:</span> $
                {item.product.price}
              </p>

              <button
                onClick={() => {
                  removeItem(index);
                  setcartCounter(cartCounter - 1);
                }}
                className="mt-3 w-full bg-amber-700 px-3 py-2 rounded hover:bg-amber-500 hover:text-black transition"
              >
                Remove
              </button>

            </div>
          ))
        ) : (
          <p className="text-center text-xl text-red-700 col-span-full">
            Cart is Empty
          </p>
        )}

      </div>

      <div className="flex justify-center sm:justify-end mt-6">
        <div className="bg-black text-white px-6 py-3 rounded-lg shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold">
            Total:
            <span className="text-amber-500 ml-2">
              ${totalProducts.toFixed(2)}
            </span>
          </h3>
        </div>
      </div>

    </div>
  );
}