import { Link } from 'react-router-dom';

type HotelCardProps = {
  id: number;
  name: string;
};

const HotelCard = ({ id, name }: HotelCardProps) => {
  return (
    <>
      <h2>{name}</h2>
      <Link to={`/categoria/${id}`}>Ver más</Link>
    </>
  );
};

export default HotelCard;
