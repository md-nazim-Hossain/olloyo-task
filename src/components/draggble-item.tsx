import { Draggable } from "react-beautiful-dnd";
import { cn } from "../lib/utils";
import { IImage } from "../types";
type Props = {
  image: IImage;
  index: number;
  setChecked: (id: number, checked: boolean) => void;
};
function DraggableItem({ image, index, setChecked }: Props) {
  const { checked, id, src } = image;

  return (
    <Draggable index={index} draggableId={image.id.toString()}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={cn(
              "w-full select-none bg-white relative overflow-hidden aspect-square rounded-lg border-2 cursor-pointer group",
              index === 0 && "sm:col-span-2 sm:row-span-2"
            )}
          >
            <div
              className={cn(
                "w-full h-full transition-opacity duration-500 overflow-hidden absolute",
                checked
                  ? "bg-gray-200/60 opacity-100 visible"
                  : "bg-gray-900/60 opacity-0 group-hover:opacity-100"
              )}
            >
              <div className="p-5">
                <input
                  onChange={() => setChecked(id, !checked)}
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
          </div>
        );
      }}
    </Draggable>
  );
}

export default DraggableItem;
