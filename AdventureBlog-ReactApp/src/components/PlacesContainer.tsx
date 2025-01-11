import { useEffect, useState } from "react";
import Place from "./Place";

interface PlaceData {
  id: number;
  place: string;
  desc: string;
  img: string;
}

function PlacesContainer() {
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await fetch("http://localhost:5001/places");
        if (!response.ok) throw new Error("Failed to fetch places");
        const data: PlaceData[] = await response.json();
        setPlaces(data);
      } catch (err) {
        setError((err as Error).message);
      }
    }
    fetchPlaces();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (places.length === 0) return <div>Loading...</div>;

  return (
    <div className="card-group custom-container">
      {places.map((place) => (
        <div className="col-12 col-md-6 col-lg-4 p-0" key={place.id}>
          <Place image={place.img} title={place.place} text={place.desc} />
        </div>
      ))}
    </div>
  );
}

export default PlacesContainer;
