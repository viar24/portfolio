export function TimeLineItem({
  duration,
  title,
  role,
  description,
  pt,
  pl,
  pr,
  className,
}) {
  return (
    <li
      className={`mb-10 ms-3 md:ms-4 pr-10`}
      style={{
        paddingTop: `${pt}rem`,
        paddingLeft: pl ? `${window.outerWidth > '768' ? pl : pl / 10}rem` : 0,
        paddingRight: pr ? `${window.outerWidth > '768' ? pr : pr / 10}rem` : 0,
      }}
    >
      <div className="absolute w-[0.60rem] h-[0.60rem] bg-green rounded-full -start-[0.340rem] dark:bg-cyan"></div>
      <div className={`${className}`}>
        <time className="mb-1 font-bold text-xs md:text-sm tracking-wider text-green dark:text-cyan">
          {duration}
        </time>
        <div className="text-[0.60rem] md:text-[0.80rem] mt-1 uppercase text-white dark:text-white">
          {title}
        </div>

        <div className="text-xs md:text-sm mt-4 font-semibold text-white dark:text-white">
          {role}
        </div>
        <p className="mb-4 mt-2 text-[0.5rem] md:text-[0.6rem] tracking-wider font-normal text-sky-blue dark:text-gray-400">
          {description}
        </p>
      </div>
    </li>
  );
}
