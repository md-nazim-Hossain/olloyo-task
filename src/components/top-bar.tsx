type Props = {
  checkDataLength: number;
  handleDelete: () => void;
};
function TopBar({ checkDataLength, handleDelete }: Props) {
  return (
    <div className="border-b-2">
      <div className="py-5 px-5 sm:px-10 flex items-center justify-between">
        {!checkDataLength ? (
          <h1 className="text-2xl font-bold">Gallery</h1>
        ) : (
          <div className="flex gap-3 items-center">
            <input
              checked={true}
              type="checkbox"
              className="w-5 h-5 rounded-xl"
            />
            <p className="font-bold text-base sm:text-lg">
              {checkDataLength} {checkDataLength > 1 ? "Files" : "File"}{" "}
              Selected
            </p>
          </div>
        )}
        {!!checkDataLength && (
          <button
            onClick={handleDelete}
            className="text-red-500 text-base font-semibold hover:underline px-3 py-1"
          >
            Delete files
          </button>
        )}
      </div>
    </div>
  );
}

export default TopBar;
