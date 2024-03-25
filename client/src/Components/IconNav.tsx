import { IconType } from "react-icons";

const IconNav = ({ Icons, text }: { Icons: IconType; text: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-secondary text-blue-primary rounded-lg p-3 border w-fit mx-3 hover:bg-pink-primary hover:text-blue-secondary active:border active:border-pink-600 active:ring-1 active:ring-pink-700 cursor-pointer">
        <Icons className="sm:w-8 sm:h-8" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default IconNav;
