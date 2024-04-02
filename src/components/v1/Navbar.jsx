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
    <div className="w-[100vw] dark:bg-black-900">
      <div>
        <div className="text-[2.5vw] md:text-[0.55rem] pt-2 pb-2 w-[100vw]">
          <div className="flex gap-1 justify-center shadow-md md:p-1 pb-3 items-center">
            <SRLogo fontsize={1} />
            <div className="flex md:ml-10">
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
