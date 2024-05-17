interface CardProps {
  name: string;
  img: string;
  color: string;
}

const Card: React.FC<CardProps> = props => {
  return (
    <div className="flex flex-col justify-center w-48 h-48 duration-300 rounded-md cursor-pointer group bg-slate-200 hover:bg-slate-500">
      <div style={{ backgroundImage: `url(${props.img})` }} className="pt-5 bg-center bg-no-repeat h-1/2"></div>
      <p className={`py-2 font-mono font-bold text-slate-800 bg capitalize group-hover:text-slate-200`}>{props.name}</p>
    </div>
  );
};

export default Card;
