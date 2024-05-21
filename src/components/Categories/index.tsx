import { CategoriesProps } from './type';

const Categories: React.FC<CategoriesProps> = props => {
  return (
    <main
      className={`${
        props.isActive ? 'bg-red-500' : 'bg-white'
      } inline-block p-1 my-3 duration-300  rounded-md outline group hover:bg-red-500 hover:cursor-pointer hover:outline-none`}
      onClick={props.onClick}
    >
      <p
        className={`${
          props.isActive ? 'text-white' : 'text-red-500'
        } font-mono text-sm font-bold text-red-500 group-hover:text-white`}
      >
        {props.text}
      </p>
    </main>
  );
};

export default Categories;
