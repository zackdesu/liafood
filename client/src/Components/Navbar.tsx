import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="fixed px-5 py-3 flex justify-between items-center w-full bg-blue-primary text-slate-50 border-b border-slate-300 shadow-md">
      <h1 className="w-3/5">
        <span className="text-pink-secondary">Lia</span>
        <span className="text-blue-secondary">Food</span>
      </h1>
      {/* <ul className="flex w-1/4 justify-between">
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
      </ul> */}
      <form className="flex items-center w-2/5 max-sm:hidden h-8">
        <input
          type="text"
          className="outline-none text-black bg-slate-50 rounded-l-lg w-10/12 px-3 h-full"
        />
        <button className="h-full">
          <IoSearchSharp
            size={24}
            className="text-blue-primary bg-slate-50 rounded-r-lg p-1 h-full"
          />
        </button>
      </form>
      <button className="border bg-white text-black px-3 py-1 rounded-lg">
        Login
      </button>
    </header>
  );
};

export default Navbar;
