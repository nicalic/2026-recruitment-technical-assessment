import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import GridViewIcon from "@mui/icons-material/GridView";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import FilterListIcon from "@mui/icons-material/FilterList"

import LogoOpen from "../assets/freeRoomsLogo.png"
import IconButton from "./IconButton";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className="sticky bg-white top-0 z-10">
            <div className="p-4 mx-auto">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                    {/* Logo and name */}
                    <div className="flex items-center gap-1 text-theme font-logo text-3xl font-semibold">
                        <img src={LogoOpen} alt="Freerooms Logo" className="w-12 h-12"/>
                        Freerooms
                    </div>
                    {/* Icon group */}
                    <div className="flex items-center gap-2">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton>
                            <MapIcon />
                        </IconButton>
                        <IconButton>
                            <GridViewIcon />
                        </IconButton>
                        <IconButton>
                            <DarkModeIcon />
                        </IconButton>
                    </div>
                </div>
                {/* Filter, search and sort */}
                <div className="flex items-center justify-between mt-3 gap-8">
                    <FilterButton label="Filter">
                        <FilterAltIcon />
                    </FilterButton>

                    <SearchBar />

                    <FilterButton label="Sort">
                        <FilterListIcon />
                    </FilterButton>
                </div>
            </div>
        </div>
    );
}