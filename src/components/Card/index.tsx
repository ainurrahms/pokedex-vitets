import { renderColor } from '@helper/typeColor';
import { CardProps } from './type';

const Card: React.FC<CardProps> = props => {
  return (
    <div className="flex flex-col justify-center w-48 h-48 duration-300 rounded-md cursor-pointer group bg-slate-200 hover:bg-slate-500">
      <div style={{ backgroundImage: `url(${props.img})` }} className="pt-5 bg-center bg-no-repeat h-1/2"></div>
      <p className={`py-2 font-mono font-bold text-slate-800 bg capitalize group-hover:text-slate-200`}>{props.name}</p>
      <div className="flex flex-row justify-center gap-2">
        {props.types.map((val, index) => (
          <p
            key={index}
            className={`inline p-1 font-mono text-xs font-bold text-white uppercase rounded-md ${renderColor(
              val.type.name,
            )}`}
          >
            {val.type.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
