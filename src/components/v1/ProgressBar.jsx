export function ProgressBar({ title, width }) {
  return (
    <div className="grid grid-cols-7 h-2 w-full p-4">
      <div className="col-span-1 text-[0.55rem] text-white">{title}</div>

      <div className="col-span-6 w-full flex flex-grow ml-4 animate-[wiggle_1s_linear_1]">
        <div
          className="items-center h-2 bg-green"
          style={{ width: width }}
        ></div>
        <div className="ml-4 text-[0.55rem] text-white"> {width}</div>
      </div>
    </div>
  );
}
