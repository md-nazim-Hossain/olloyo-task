import { IImage } from "../types";
type Props = {
  image: IImage;
  index: number;
  setChecked: (id: number, checked: boolean) => void;
};
function Image({ image, index, setChecked }: Props) {
  const { checked, id, src } = image;

  return (
    <div
      className={`w-full relative overflow-hidden ${
        index === 0 && "col-span-2 row-span-2"
      } aspect-square rounded-lg border-2 cursor-pointer group`}
    >
      <div
        className={`w-full h-full transition-opacity duration-500 absolute ${
          checked
            ? "bg-gray-200/60 opacity-100 visible"
            : "bg-gray-900/60 opacity-0 group-hover:opacity-100"
        } `}
      >
        <div className="p-5">
          <input
            onClick={() => setChecked(id, !checked)}
            defaultChecked={checked}
            type="checkbox"
            className="w-5 h-5 rounded-lg"
          />
        </div>
      </div>
      <img
        loading="lazy"
        src={src}
        alt={"Gallery Image-" + id}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Image;
