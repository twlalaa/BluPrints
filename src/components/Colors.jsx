// Icons
import Chevron from "../icons/chevron";

// Components
import Color from "./Color";

//Hooks
import { useState } from "react";

//React Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { colorActions } from "../redux/slices/colorSlice";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2 pb-4",
};

//Fake Colors
const fakeColors = [
  {
    title: "Black",
    color: "bg-black",
  },
  {
    title: "White",
    color: "bg-white",
  },
  {
    title: "Red",
    color: "bg-red-500",
  },
  { title: "Orange", color: "bg-orange-500" },
  {
    title: "Green",
    color: "bg-green-500",
  },
];

const Colors = () => {
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const dispatch = useDispatch();

  const colorState = useSelector((state) => state.color);

  // console.log(colorState);

  const setColor = (color) => {
    dispatch(colorActions.addColor(color));
  };

  return (
    <div className="border-b">
      <button className={styles.btn} onClick={toggleColors}>
        <span className="font-bold">Color</span>
        <div>
          <Chevron
            color="black"
            className={`${styles.icon} ${!showColors && "rotate-180"}`}
          />
        </div>
      </button>
      {showColors && (
        <ul className={styles.ul}>
          {fakeColors.map((fc, index) => {
            return (
              <Color
                click={() => {
                  setColor(fc.title);
                }}
                selected={colorState.includes(fc.title)}
                color={fc.color}
                title={fc.title}
                key={index}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Colors;
