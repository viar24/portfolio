export function Card({ children }) {
  return (
    <div className="bg-cover bg-no-repeat flex flex-col items-center">
      {children}
    </div>
  );
}
