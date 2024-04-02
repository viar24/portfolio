export function Home() {
  return (
    <div className="col-span-2 mt-[2rem] md:mt-[5rem] flex-1 ml-2 md:ml-0">
      <div className="text-white font-bold text-[2rem] md:text-[3rem] font-serif tracking-[0.2em]">
        <div>
          I<span className="text-green dark:text-cyan">'</span>M
        </div>
        <div>SNEHA</div>
        <div className="flex">
          REDDY <span className="text-green dark:text-cyan flex">. </span>
        </div>
      </div>
      <div className="tracking-widest bg-gradient-to-r from-green dark:from-cyan to-white  dark:to-white inline-block text-transparent bg-clip-text text-base md:text-[1.5rem] mt-7">
        FULL STACK DEVELOPER
      </div>
      <div className="mt-1 animate-gradient bg-repeat opacity-100 bg-gradient-to-r from-green dark:from-cyan to-white  dark:to-white h-1 shadow-white shadow-sm rounded-md"></div>
    </div>
  );
}
