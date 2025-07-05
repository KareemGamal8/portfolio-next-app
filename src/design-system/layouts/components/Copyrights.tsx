export function Copyrights() {
  const date = new Date();

  return (
    <footer className="text-white border-t-2 shadow-lg border-secondary max-lg:flex-col flex gap-2 justify-center items-center py-4 mt-8">
      <p>
        Designed and Developed by <span className="font-bold">Kareem Gamal</span>
      </p>
      <p>© All rights reserved {date.getFullYear()}</p>
    </footer>
  );
}
