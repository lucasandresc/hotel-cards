import { categories } from '../../data/hoteles';
import HotelCard from '../HotelCard/HotelCard';

const HotelList = () => {
  return (
    <div>
      {categories.map((category) => (
        <HotelCard key={category.id} name={category.name} id={category.id} />
      ))}
    </div>
  );
};

export default HotelList;
