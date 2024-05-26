import { renderColor } from '@helper/typeColor';

export interface ProgressBarProps {
  max?: number;
  current: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ max = 100, current, color }) => {
  const progressWidth = `${(current / max) * 100}%`;

  return (
    <div className="relative flex w-full h-2 overflow-hidden rounded-md bg-slate-500">
      <div style={{ width: progressWidth }} className={`absolute top-0 left-0 z-10 h-2 ${renderColor(color)}`}></div>
    </div>
  );
};

export default ProgressBar;
