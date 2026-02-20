import opened from "../assets/freeRoomsLogo.png"
import closed from "../assets/freeroomsDoorClosed.png"
import { useState } from "react";

export default function Logo() {
    const [logo, setLogo] = useState(opened);

    const handleClick = () => {
        if (logo === opened) {
            setLogo(closed);
        } else {
            setLogo(opened);
        }
    }

    return (
        <div className="flex items-center gap-1 text-theme font-logo text-3xl font-semibold">
            <button onClick={handleClick}>
                <img src={logo} alt="Freerooms Logo" className="w-12 h-12"/>
            </button>
            Freerooms
        </div>
    );
}