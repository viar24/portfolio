export function TimeLineItem({
  duration,
  title,
  role,
  description,
  pt,
  pl,
  pr,
}) {
  return (
    <li
      className="mb-10 ms-4 pr-10"
      style={{
        paddingTop: `${pt}rem`,
        paddingLeft: pl ? `${pl}rem` : 0,
        paddingRight: pr ? `${pr}rem` : 0,
      }}
    >
      <div className="absolute w-[0.60rem] h-[0.60rem] bg-green rounded-full -start-[0.340rem] dark:bg-cyan"></div>
      <time className="mb-1 font-bold text-sm tracking-wider text-green dark:text-cyan">
        {duration}
      </time>
      <div className="text-[0.80rem] mt-1 uppercase text-white dark:text-white">
        {title}
      </div>

      <div className="text-sm mt-4 font-semibold text-white dark:text-white">
        {role}
      </div>
      <p className="mb-4 mt-2 text-[0.6rem] tracking-wider font-normal text-sky-blue dark:text-gray-400">
        {description}
      </p>
    </li>
  );
}
