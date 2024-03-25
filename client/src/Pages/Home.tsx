import { IoSearchSharp } from "react-icons/io5";
import IconNav from "../Components/IconNav";
import { FaHamburger } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { PiBowlFoodFill } from "react-icons/pi";
import { LuDonut } from "react-icons/lu";
import { GiChickenOven, GiSlicedBread } from "react-icons/gi";
import Carousel from "../Components/Carousel";
const Home = () => {
  return (
    <main className="pt-16">
      <Carousel />
      <form className="w-full sm:hidden">
        <div className="flex items-center sm:hidden h-8 border rounded-lg mx-5">
          <input
            type="text"
            className="outline-none text-blue-950 bg-blue-secondary rounded-l-lg w-full px-3 h-full"
            placeholder="Lagi mau maem apa nih?"
          />
          <button className="h-full">
            <IoSearchSharp
              size={24}
              className="text-blue-primary bg-blue-secondary rounded-r-lg p-1 h-full"
            />
          </button>
        </div>
      </form>
      <aside className="w-11/12 mx-3 my-3 sm:mx-auto">
        <h3 className="mx-2 mb-3">Aneka Makanan</h3>
        <div className="pb-2 flex sm:justify-around overflow-x-auto">
          <IconNav Icons={PiBowlFoodFill} text="Foods" />
          <IconNav Icons={FaHamburger} text="Fast Foods" />
          <IconNav Icons={CiCoffeeCup} text="Drinks" />
          <IconNav Icons={LuDonut} text="Sweets" />
          <IconNav Icons={GiChickenOven} text="Chickens" />
          <IconNav Icons={GiSlicedBread} text="Breads" />
        </div>
      </aside>
    </main>
  );
};

export default Home;
