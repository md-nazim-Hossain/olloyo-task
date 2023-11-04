import { Reorder, useMotionValue } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { useRaisedShadow } from "../hooks/use-raised-shadow";
import { cn } from "../lib/utils";
import { IChecked, IImage } from "../types";
import Item from "./item";

type Props = {
  images: IImage[];
  setImages: Dispatch<SetStateAction<IImage[]>>;
  setChecked: (value: IChecked) => void;
};
function ReorderGroup({ images, setImages, setChecked }: Props) {
  const containerRef = React.useRef(null);
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  return (
    <Reorder.Group
      axis="y"
      ref={containerRef}
      values={images}
      onReorder={setImages}
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 sm:gap-5"
    >
      {images.map((image: IImage, index: number) => (
        <Reorder.Item
          id={image.src}
          key={image.id}
          value={image}
          drag
          layout
          dragConstraints={containerRef}
          dragElastic={0}
          style={{ boxShadow }}
          className={cn(
            "w-full aspect-square bg-white relative overflow-hidden rounded-lg border-2 group",
            index === 0 && "sm:row-span-2 sm:col-span-2"
          )}
        >
          <Item image={image} setChecked={setChecked} />
        </Reorder.Item>
      ))}

      {/* =================== upload image design ===============*/}
      <div className="w-full flex justify-center items-center bg-gray-50 aspect-square rounded-lg border-2 border-dashed cursor-pointer">
        <div className="space-y-5">
          <img
            src="/assets/images/empty.png"
            width={24}
            height={16}
            alt="Empty Images"
            className="object-cover mx-auto"
          />
          <h2 className="text-xl font-bold text-gray-600">Add Images</h2>
        </div>
      </div>
    </Reorder.Group>
  );
}

export default ReorderGroup;
