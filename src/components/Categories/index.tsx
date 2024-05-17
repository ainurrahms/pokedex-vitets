interface CategoriesProps {
  text: string;
}

const Categories: React.FC<CategoriesProps> = props => {
  return (
    <div className="inline-block p-1 my-3 duration-300 bg-white rounded-md outline group hover:bg-red-500 hover:cursor-pointer hover:outline-none">
      <p className="font-mono text-sm font-bold text-red-500 group-hover:text-white">{props.text}</p>
    </div>
  );
};

export default Categories;
