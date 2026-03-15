import { Link } from "react-router-dom";

export default function Navbar({ cartCounter, setsearch, search }) {

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="bg-black">

      <div className="
        max-w-[1200px] 
        mx-auto 
        px-4 
        py-3 
        flex 
        flex-col 
        sm:flex-row 
        sm:items-center 
        sm:justify-between 
        gap-3
      ">

        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <Link to="/home">
            <img
              src="https://i.pinimg.com/736x/a1/ed/36/a1ed365fbe02a15c911a617ef523e8ef.jpg"
              alt="Company Logo"
              className="w-[35px] h-[35px] object-cover rounded-2xl hover:scale-110 transition hover:opacity-70"
            />
          </Link>
        </div>

        {/* Search */}
        <div className="w-full sm:w-auto flex justify-center">
          <input
            type="search"
            placeholder="Search Products"
            autoFocus
            value={search}
            onChange={handleSearch}
            className="
              border border-amber-700 
              rounded 
              w-full 
              sm:w-[250px] 
              text-center 
              p-2 
              focus:border-amber-500 
              outline-none
            "
          />
        </div>

        {/* Links */}
        <div className="
          flex 
          justify-center 
          sm:justify-end 
          gap-6 
          sm:gap-10
        ">

          <Link
            to="/home"
            className="
              text-[16px] 
              sm:text-[17px] 
              text-amber-700 
              relative 
              after:content-[''] 
              after:block 
              after:h-[2px] 
              after:w-0 
              after:bg-amber-500 
              after:transition-all 
              after:duration-300 
              hover:after:w-full
            "
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="
              text-[16px] 
              sm:text-[17px] 
              text-amber-700 
              relative 
              after:content-[''] 
              after:block 
              after:h-[2px] 
              after:w-0 
              after:bg-amber-500 
              after:transition-all 
              after:duration-300 
              hover:after:w-full
            "
          >
            Cart ({cartCounter})
          </Link>

        </div>

      </div>

    </div>
  );
}