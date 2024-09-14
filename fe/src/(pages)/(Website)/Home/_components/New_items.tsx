import List_items from "@/_components/Items/List_items";

export default function New_items() {
    return (
        <div className="my-4">
            <div className="text-center my-10">
                <span className="text-xl lg:text-2xl text-[#EB3D35] border-b-2 border-[#EB3D35] pb-1">Hàng mới về</span>
            </div>
            <List_items />
        </div>
    )
}
