const ProgressBar: React.FC = () => {
  return (
    <div className="relative flex w-full h-2 overflow-hidden rounded-md bg-slate-500">
      <div className="absolute top-0 left-0 z-10 h-2 bg-green-500"></div>
      <div className="absolute top-0 left-0 h-2 bg-green-500"></div>
    </div>
  );
};

export default ProgressBar;
