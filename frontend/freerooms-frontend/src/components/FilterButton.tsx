export default function FilterButton(props: {children: React.ReactNode, label: string}) {
    return (
        <button className="flex items-center border-2 border-orange-400 text-orange-400 font-semibold hover:bg-orange-400 hover:text-white rounded-xl p-2 gap-1">
            {props.children}
            {props.label}
        </button>
    );
}