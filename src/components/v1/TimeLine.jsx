import { TimeLineItem } from './TimeLineItem';

export function TimeLine() {
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="col-span-1" dir="rtl">
        <ol className="h-[51rem] relative border-r-[1px] border-green dark:border-gray-700">
          <TimeLineItem
            duration="Jan'23 - Mar'23"
            title="InstaClone (POC)"
            role={'Full Stack Developer'}
            description={
              'Designed front-end of a hybrid app InstaClone using Ionic Framework.Architected and developed a web api for InstaClone using NodeJS and NestJS Framework.'
            }
            pt={'11'}
            pr={'2'}
          />
          <TimeLineItem
            duration="Jan'23 - Mar'23"
            title="Harman Connected Services"
            role="Associate Engineer"
            description={`Implemented RESTful APIs, enhancing the backend performance and
              scalability of the system.Implemented efficient data management
              and storage solutions, leveraging MongoDB to optimize data
              retrieval and manipulation.`}
            pt={'11'}
            pr={'2'}
          />

          <TimeLineItem pt={'8'} />
        </ol>
      </div>
      <div className="col-span-1">
        <ol className="h-[51rem] relative border-l-[1.50px] border-green dark:border-gray-700">
          <TimeLineItem
            duration="June'23 - Current"
            title="Harman Connected Services"
            role="Associate Engineer II"
            description={`Recognized for outstanding contributions and promoted to Associate
            Engineer II within one year. Working with cross functional teams
            to build scalable web API.`}
            pl={'2'}
          />
          <TimeLineItem
            duration="June'22 - July'22"
            title="Swiggy Clone (POC)"
            role="Frontend developer"
            description={`Designed a user-friendly front-end for SwiggyClone using Ionic
            Framework.`}
            pt={'11'}
            pl={'2'}
          />
          <TimeLineItem
            duration="Sep'21 - June'22"
            title="Harman Connected Services"
            role="Intern (Frontend Developer)"
            description={`Contributed to develop an engaging user interface, ensuring a
            seamless user experience.`}
            pt={'11'}
            pl={'2'}
          />
        </ol>
      </div>
    </div>
  );
}
