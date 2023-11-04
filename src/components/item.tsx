/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "../lib/utils";
import { IChecked, IImage } from "../types";
type Props = {
  image: IImage;

  setChecked: (value: IChecked) => void;
};
function Item({ image, setChecked }: Props) {
  const { checked, id, src } = image;

  return (
    <>
      <div
        className={cn(
          "w-full h-full transition-opacity duration-500 invisible overflow-hidden absolute",
          checked
            ? "bg-gray-200/60 opacity-100 visible"
            : "bg-gray-900/60 opacity-0 group-hover:visible group-hover:opacity-100"
        )}
      >
        <div className="p-5">
          <input
            onChange={() => setChecked({ id, checked: !checked })}
            checked={checked}
            type="checkbox"
            className="w-5 h-5 rounded-xl"
          />
        </div>
      </div>
      <img
        loading="lazy"
        src={src}
        alt={"Gallery Image-" + id}
        className="w-full h-full object-cover"
      />
    </>
  );
}

export default Item;
