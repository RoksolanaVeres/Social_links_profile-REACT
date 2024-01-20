export default function ProfileCardHeader({ children }) {
  return (
    <h1 className="pb-1 text-lg font-semibold text-slate-800 lg:pb-4 lg:text-xl dark:text-white">
      {children}
    </h1>
  );
}
