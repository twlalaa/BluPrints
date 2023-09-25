// Images
import TShirt from "../images/t-shirt.png";

const ProductImage = () => {
  return (
    <div className="col-span-5 border border-neutral-200 rounded-lg cursor-pointer">
      <img src={TShirt} alt="t-shirt" className="w-full" />
    </div>
  );
};

export default ProductImage;
