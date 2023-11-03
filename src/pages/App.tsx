import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Image from "../components/image";
import TopBar from "../components/top-bar";
import { data } from "../data";
import { IImage } from "../types";

function App() {
  const [images, setImages] = React.useState(data);
  const [checked, setChecked] = React.useState<null | {
    id: number;
    checked: boolean;
  }>(null);

  React.useEffect(() => {
    setImages((prev) =>
      prev.map((image) => {
        if (image.id === checked?.id) {
          return {
            ...image,
            checked: checked.checked,
          };
        }
        return image;
      })
    );
  }, [checked]);

  const checkDataLength = images.filter((image) => image.checked).length;

  // ====== delete data function =======
  const handleDelete = () => {
    setImages((prev) => prev.filter((image) => !image.checked));
  };

  return (
    <div className="w-screen bg-gray-100 min-h-screen py-10">
      <div className="bg-white w-full max-w-[1200px] mx-auto rounded-md shadow ">
        <TopBar checkDataLength={checkDataLength} handleDelete={handleDelete} />

        {/* =================== image gallery part ===============*/}

        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="droppable" type="image">
            {(provided) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="p-5 sm:p-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 sm:gap-5"
                >
                  {images.map((image: IImage, index: number) => (
                    <Image
                      index={index}
                      image={image}
                      setChecked={(id, checked) => setChecked({ id, checked })}
                      key={image.id}
                    />
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
                      <h2 className="text-xl font-bold text-gray-600">
                        Add Images
                      </h2>
                    </div>
                  </div>
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
