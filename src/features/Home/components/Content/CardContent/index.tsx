import { renderColor } from '@helper/typeColor';
import { CardContentProps } from '../../type';

const CardContent: React.FC<CardContentProps> = props => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="pt-5 bg-center bg-no-repeat bg-contain h-1/2"
      ></div>
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
    </>
  );
};

export default CardContent;
