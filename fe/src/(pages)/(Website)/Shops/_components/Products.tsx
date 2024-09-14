import List_items from "@/_components/Items/List_items";
import Search from "@/_components/UI/Search";
import Paginate_shop from "./Paginate_shop";

export default function Products_shops() {
    return (
        <div>
            {/* search */}
            <Search />
            {/* render item */}
            <div>
                <div className="*:lg:grid-cols-4 *:md:grid-cols-3 *:grid-cols-2 my-6">
                    <List_items />
                </div>
                <Paginate_shop />
            </div>
        </div>
    )
}
