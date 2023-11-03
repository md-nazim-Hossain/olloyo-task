import * as React from "react";
import Image from "../components/image";
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

  return (
    <div className="w-screen bg-gray-100 min-h-screen py-10">
      <div className="bg-white w-10/12 mx-auto rounded-md shadow">
        {/* ===================== Topbar part ==============*/}
        <div className="border-b-2">
          <div className="py-5 px-10">
            <h1 className="text-2xl font-bold">Gallery</h1>
          </div>
        </div>

        {/* =================== image gallery part ===============*/}
        <div className="py-5 px-10 w-full">
          <div className="w-full grid grid-cols-5 gap-10">
            {images.map((image: IImage, index: number) => (
              <Image
                setChecked={(id: number, checked: boolean) =>
                  setChecked({ checked, id })
                }
                index={index}
                key={index}
                image={image}
              />
            ))}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
