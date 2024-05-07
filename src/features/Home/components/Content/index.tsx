import Card from '@components/Card';
import Search from '@components/Search';

const Content = () => {
  return (
    <div>
      <Search />
      <div className="flex gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Content;
