import { SRLogo } from '../../assets/imgs/sr-logo';

export function Footer() {
  return (
    <div className="mt-[3rem] md:mt-[6rem] bg-navy-blue dark:bg-black-900 p-5 text-gray text-[0.6rem] flex justify-around">
      <div className="w-[80vw] flex justify-center">
        <SRLogo fontsize={1} />

        <div className="ml-[3rem] flex justify-center mt-1">
          Made with{' '}
          <div className="text-green dark:text-cyan pl-1 pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
          by Sneha Reddy
        </div>
      </div>
    </div>
  );
}
