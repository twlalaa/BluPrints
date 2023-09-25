// Icons
import Chevron from "../icons/chevron";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";

//React Redux
import { useSelector, useDispatch } from "react-redux";
import { sizeActions } from "../redux/slices/sizeSlice";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2",
};

//Fake Sizes
const fakeSizes = [
  { title: "Extra Small", size: "xs" },
  { title: "Small", size: "s" },
  { title: "Medium", size: "m" },
  { title: "Large", size: "l" },
  { title: "Extra Large", size: "xl" },
];

const Colors = () => {
  const [showSize, setShowSize] = useState(false);

  const toggleSize = () => {
    setShowSize(!showSize);
  };

  const dispatch = useDispatch();

  const setSize = (size) => {
    dispatch(sizeActions.addSize(size));
  };

  const size = useSelector((state) => state.size);

  console.log(size);

  return (
    <div>
      <button onClick={toggleSize} className={styles.btn}>
        <span className="font-bold">Size</span>
        <div>
          <Chevron
            className={`${styles.icon} ${!showSize && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showSize && (
        <ul className={styles.ul}>
          {fakeSizes.map((fs, index) => {
            return (
              <Size
                key={index}
                title={fs.title}
                click={() => {
                  setSize(fs.size);
                }}
              >
                {fs.size}
              </Size>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Colors;
