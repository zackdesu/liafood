import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="fixed px-5 py-3 flex justify-between items-center w-full bg-blue-secondary text-slate-50 border-b border-slate-300 shadow-md">
      <h1 className="group cursor-pointer">
        <span className="text-pink-primary group-hover:text-blue-primary group-hover:drop-shadow-md transition-colors">
          Lia
        </span>
        <span className="text-blue-primary group-hover:text-pink-primary group-hover:drop-shadow-md transition-colors">
          Food
        </span>
      </h1>
      {/* <ul className="flex w-1/4 justify-between">
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
      </ul> */}
      <form className="flex items-center w-2/4 max-sm:hidden h-8 border rounded-lg">
        <input
          type="text"
          className="outline-none text-blue-950 bg-blue-secondary rounded-l-lg w-full px-3 h-full"
          placeholder="Search"
        />
        <button className="h-full">
          <IoSearchSharp
            size={24}
            className="text-blue-primary bg-blue-secondary rounded-r-lg p-1 h-full"
          />
        </button>
      </form>
      <button className="border hover:bg-pink-primary hover:shadow-md hover:text-slate-50 text-blue-950 px-3 py-1 rounded-lg flex items-center">
        <FaCartShopping className="sm:mr-3" size={16} />{" "}
        <span className="max-sm:hidden">Cart</span>
      </button>
    </header>
  );
};

export default Navbar;
