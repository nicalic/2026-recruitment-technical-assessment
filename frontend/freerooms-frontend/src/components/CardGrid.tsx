import buildings from "../data.json"
import { BuildingCard } from "./BuildingCard"

export const CardGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {buildings.map(b => (
                <BuildingCard 
                    key={b.name} 
                    name={b.name} 
                    availability={b.rooms_available}
                    image={b.building_picture}
                />
            ))}
        </div>
    );
}