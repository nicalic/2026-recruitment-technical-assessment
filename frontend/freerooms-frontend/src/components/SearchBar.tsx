import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    return (
        <div className="border-2 border-gray-300 rounded-lg flex items-center gap-2 p-2 flex-1">
            <SearchIcon className="text-gray-300 w-4 h-4"/>
            <input type="text" placeholder="Search for a building..." className="outline-none flex-1"/>
        </div>
    );
}