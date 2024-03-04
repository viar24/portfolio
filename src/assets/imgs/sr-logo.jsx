export function SRLogo({ fontsize }) {
  return (
    <div
      className="text-green dark:text-cyan pl-2 pr-2 font-bold"
      style={{ fontSize: `${fontsize}rem` }}
      onClick={() => navigate('/')}
    >
      ƧR
    </div>
  );
}
