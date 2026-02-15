export default function IconButton(props: { children: React.ReactNode}) {
    return (
        <button type="button" className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white w-8 h-8 rounded-lg grid place-items-center">
            {props.children}
        </button>
    );
}