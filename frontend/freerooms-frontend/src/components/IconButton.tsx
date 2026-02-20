export default function IconButton(props: { children: React.ReactNode}) {
    return (
        <button type="button" className="border border-theme text-theme hover:bg-theme hover:text-white w-10 h-10 rounded-lg grid place-items-center">
            {props.children}
        </button>
    );
}