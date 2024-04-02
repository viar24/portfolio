import { useState } from 'react';
import { SRLogo } from '../../assets/imgs/sr-logo';

export function Resume() {
  const [downloading, setDownloading] = useState(false);

  return (
    <div className="mt-[5rem] flex justify-center bg-navy-blue dark:bg-black-900 w-[90vw] md:w-[35rem] px-2 md:px-[7rem] md:pt-[2rem] py-10 md:pb-[5rem]">
      <div>
        <div className="text-center px-2 md:p-8">
          <SRLogo fontsize={2} />
        </div>

        <div className="text-white text-center text-[0.6rem] md:uppercase leading-5">
          Hello! I'm Sneha Reddy, a passionate Full Stack Web Developer with a
          knack for creating efficient, scalable, and robust web applications.
          With a strong foundation in both front-end and back-end technologies,
          I enjoy bringing ideas to life and delivering high-quality,
          user-centric experiences.{' '}
        </div>

        <div className="text-center mt-4 md:mt-8">
          <div
            onClick={() => {
              setDownloading(true);
              setTimeout(() => {
                setDownloading(false);
              }, 1000);
            }}
            className="cursor-pointer border-[1px] border-solid border-green dark:border-cyan text-white hover:bg-green dark:hover:bg-cyan active:bg-transparent text-[0.6rem] inline-block p-2 pr-8 pl-8"
          >
            {downloading ? (
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p className="ml-2">DOWNLOADING</p>
              </div>
            ) : (
              <a
                href="/Sneha_Reddy.pdf"
                download={'Sneha_Reddy.pdf'}
                type="application/pdf"
                rel="noreferrer"
              >
                <p>DOWNLOAD RESUME</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
