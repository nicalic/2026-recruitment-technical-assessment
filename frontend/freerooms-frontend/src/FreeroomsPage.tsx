import FilterAltIcon from "@mui/icons-material/FilterAlt"
import FilterListIcon from "@mui/icons-material/FilterList"

import FilterButton from "./components/FilterButton";
import SearchBar from "./components/SearchBar";
import Logo from "./components/Logo";
import IconGroup from "./components/IconGroup";
import CardGrid from "./components/CardGrid";

export default function FreeroomsPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="p-4 mx-auto">
                {/* Top bar */}
                <div className="sticky bg-white top-0 z-10 flex items-center justify-between border-b border-gray-300 p-2">
                    <Logo />
                    <IconGroup />
                </div>
                {/* Filter, search and sort */}
                <div className="flex items-center justify-between m-3 gap-8">
                    <FilterButton label="Filter">
                        <FilterAltIcon />
                    </FilterButton>

                    <SearchBar />

                    <FilterButton label="Sort">
                        <FilterListIcon />
                    </FilterButton>
                </div>
                <div className="max-w-full">
                    <CardGrid />
                </div>
            </div>
        </div>
    );
}