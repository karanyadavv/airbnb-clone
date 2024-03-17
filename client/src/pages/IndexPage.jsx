import LocationCard from "../LocationCard";
import locations from "../db/Locations";


export default function IndexPage(){
  return(
    <div className="app">
      {locations.map((locations) => (
          <LocationCard
            key={locations.id}
            image={locations.image}
            title={locations.title}
            description={locations.description}
            price={locations.price}
          />
      ))}
    </div>
  );
}