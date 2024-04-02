export function Title({ index, title }) {
  return (
    <div className="font-bold justify-center flex text-white text-base md:text-3xl tracking-widest p-3">
      <span className="text-sky-blue mr-5">{index}</span> {title}
    </div>
  );
}
