import IconButton from "./IconButton";

import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import GridViewIcon from "@mui/icons-material/GridView";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function IconGroup() {
    return (
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
    )
}