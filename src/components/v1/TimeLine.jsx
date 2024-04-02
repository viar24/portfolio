import { TimeLineItem } from './TimeLineItem';

export function TimeLine() {
  return (
    <div className="grid grid-cols-2 mt-5 md:mt-10">
      <div className="col-span-1" dir="rtl">
        <ol className="h-[-0.5vw] relative border-r-2 border-green dark:border-cyan">
          <TimeLineItem
            className="animate-slideLeft"
            duration="Jan'23 - Mar'23"
            title="InstaClone (POC)"
            role={'Full Stack Developer'}
            description={
              'Designed front-end of a hybrid app InstaClone using Ionic Framework. Architected and developed a web api for InstaClone using NodeJS and NestJS Framework'
            }
            pt={'11'}
            pr={'2'}
          />
          <TimeLineItem
            className="animate-slideLeft"
            duration="June'22 - June'23"
            title="Harman Connected Services"
            role="Associate Engineer"
            description={`Implemented RESTful APIs, enhancing the backend performance and
              scalability of the system.Implemented efficient data management
              and storage solutions, leveraging MongoDB to optimize data
              retrieval and manipulation`}
            pt={'11'}
            pr={'2'}
          />

          <TimeLineItem pt={'8'} />
        </ol>
      </div>
      <div className="col-span-1">
        <ol className="relative">
          <TimeLineItem
            className="animate-slideRight"
            duration="June'23 - Current"
            title="Harman Connected Services"
            role="Associate Engineer II"
            description={`Recognized for outstanding contributions and promoted to Associate
            Engineer II. Working with cross functional teams
            to build scalable web API using Nodejs and Nestjs`}
            pl={'2'}
          />
          <TimeLineItem
            className="animate-slideRight"
            duration="June'22 - July'22"
            title="Swiggy Clone (POC)"
            role="Frontend developer"
            description={`Designed a user-friendly front-end for SwiggyClone using Ionic
            Framework`}
            pt={'11'}
            pl={'2'}
          />
          <TimeLineItem
            className="animate-slideRight"
            duration="Sep'21 - June'22"
            title="Harman Connected Services"
            role="Intern (Frontend Developer)"
            description={`Contributed to develop an engaging user interface, ensuring a
            seamless user experience`}
            pt={'11'}
            pl={'2'}
          />
        </ol>
      </div>
    </div>
  );
}
