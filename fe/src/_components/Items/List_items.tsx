import Item from "./Item";

export default function List_items() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 *:rounded">
            {
                Array.from({ length: 20 }, () => (
                    <div key={Math.random()} className="*:h-[400px]">
                        <Item/>
                    </div>
            ))
            }
        </div>
    )
}
