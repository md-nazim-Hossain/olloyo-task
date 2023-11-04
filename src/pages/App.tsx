/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import ReorderGroup from "../components/reorder-group";
import TopBar from "../components/top-bar";
import { data } from "../data";
import { IChecked } from "../types";

function App() {
  const [images, setImages] = React.useState(data);
  const [checked, setChecked] = React.useState<IChecked>(null);

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
        <div className="p-5 sm:p-10">
          <ReorderGroup
            setChecked={setChecked}
            images={images}
            setImages={setImages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
