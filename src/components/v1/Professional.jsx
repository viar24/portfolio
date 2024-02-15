import { ProgressBar } from './ProgressBar';
import { Title } from './Title';

let id = 1;

const technicalSkills = [
  { title: 'JAVASCRIPT', width: '90%' },
  { title: 'NODEJS', width: '85%' },
  { title: 'REACT', width: '80%' },
  { title: 'EXPRESSJS', width: '80%' },
  { title: 'TYPESCRIPT', width: '90%' },
  { title: 'NESTJS', width: '80%' },
  { title: 'ANGULAR', width: '70%' },
];

export function Professional() {
  return (
    <div className="mt-[5rem]">
      <Title index={'01'} title={'PROFESSIONAL'} />
      <div className="text-white tracking-widest">
        MY KNOWLEDGE LEVEL IN SOFTWARE
      </div>

      <div className="relative mt-10">
        {technicalSkills.map((x) => {
          id++;
          return <ProgressBar key={id} title={x.title} width={x.width} />;
        })}
      </div>
    </div>
  );
}
