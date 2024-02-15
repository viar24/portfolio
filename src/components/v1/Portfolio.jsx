import { Title } from '../Title';

export function Portfolio() {
  return (
    <div className="mt-[5rem]">
      <Title index={'02'} title={'PORTFOLIO'} />
      <div className="text-white tracking-widest flex">
        MY LATEST WORK.
        <a href="/" className="text-sky-blue">
          SEE MORE
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="ml-2 mt-[0.35rem] w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      <div className="align-middle mt-10"></div>
    </div>
  );
}
