export const BuildingCard = (props: { name: string, availability: number, image: string }) => {
    return (
        <button type="button" className="rounded-2xl overflow-hidden aspect-3/4 relative">
            <img src={props.image} alt="" className="w-full h-full object-cover"/>
            <div className="absolute top-2 right-2 bg-white rounded-full flex items-center gap-2 text-sm font-bold p-2">
                <div className="rounded-full bg-green-600 h-2 w-2"></div>
                {props.availability} rooms available
            </div>
            <div className="rounded-xl bg-orange-400 text-white font-bold absolute bottom-3 inset-x-3 text-left p-3">
                {props.name}
            </div>
        </button>
    );
}