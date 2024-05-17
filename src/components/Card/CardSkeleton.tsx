const CardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-48 h-48 gap-4 duration-300 rounded-md cursor-pointer animate-pulse bg-slate-200">
      <div className="w-16 h-16 rounded-full bg-slate-800"></div>
      <div className="w-1/2 h-2 rounded bg-slate-800"></div>
      <div className="w-1/2 h-2 rounded bg-slate-800"></div>
    </div>
  );
};

export default CardSkeleton;
