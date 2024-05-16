interface CardProps {
  name: string;
  img: string;
  color: string;
}

const Card: React.FC<CardProps> = props => {
  return (
    <div className="flex flex-col justify-center w-48 h-48 rounded-md bg-slate-200">
      <div style={{ backgroundImage: `url(${props.img})` }} className="pt-5 bg-center bg-no-repeat h-1/2"></div>
      <p className={`py-2 font-mono font-bold text-${props.color}-500 bg capitalize`}>{props.name}</p>
    </div>
  );
};

export default Card;
