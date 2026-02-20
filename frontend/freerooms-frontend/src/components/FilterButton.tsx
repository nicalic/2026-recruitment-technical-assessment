export default function FilterButton(props: {children: React.ReactNode, label: string}) {
    return (
        <button className="flex items-center border-2 border-theme text-theme font-semibold hover:bg-theme hover:text-white rounded-xl px-8 py-2 gap-1">
            {props.children}
            {props.label}
        </button>
    );
}