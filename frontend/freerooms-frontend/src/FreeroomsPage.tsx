import { CardGrid } from "./components/CardGrid";
import Header from "./components/Header";

export default function FreeroomsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <div className="mx-auto max-w-full p-4">
                <CardGrid />
            </div>
        </div>
    );
}