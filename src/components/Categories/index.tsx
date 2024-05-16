interface CategoriesProps {
  text: string;
}

const Categories: React.FC<CategoriesProps> = props => {
  return (
    <div className="inline-block p-1 my-3 bg-red-500 rounded-md">
      <p className="font-mono text-sm font-bold text-white">{props.text}</p>
    </div>
  );
};

export default Categories;
