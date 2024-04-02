export function SRLogo({ fontsize }) {
  return (
    <div
      className="text-green dark:text-cyan pl-1 md:pl-2 pr-1 md:pr-2 font-bold"
      style={{ fontSize: `${fontsize}rem` }}
      onClick={() => navigate('/')}
    >
      ƧR
    </div>
  );
}
