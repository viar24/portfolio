import { NavItem } from './NavItem';
import { SRLogo } from '../../assets/imgs/sr-logo';

export function Navbar() {
  let id = 0;
  const navItems = [
    { title: 'HOME', url: '' },
    { title: 'RESUME', url: '#resume' },
    { title: 'PROFESSIONAL', url: '#professional' },
    { title: 'EXPERIENCE', url: '#experience' },
    { title: 'CONTACT', url: '#contact' },
  ];

  return (
    <div className="w-full dark:bg-black-900">
      <div>
        <div className="text-[0.55rem] pt-2 pb-2 w-full">
          <div className="flex justify-center shadow-md p-2 pb-3">
            <SRLogo fontsize={1} />
            <div className="flex ml-10">
              {navItems.map((x) => {
                id++;
                return <NavItem title={x.title} url={x.url} key={id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
