import { ReactNode } from 'react';

interface CardProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = props => {
  return (
    <main className={`rounded-md bg-slate-200 ${props.className}`} onClick={props.onClick}>
      {props.children}
    </main>
  );
};

export default Card;
