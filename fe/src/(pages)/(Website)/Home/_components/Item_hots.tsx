import List_items from "@/_components/Items/List_items";
import Error_page from "@/_components/UI/Error_page";
import { Loading } from "@/_components/UI/loading";
import { IProducts } from "@/types/Items";

interface IProps {
    data?: IProducts[],
    isLoading?: boolean,
    isError?: boolean
};

export default function Item_hots({ dataProps }: { dataProps: IProps }) {
    if (dataProps?.isError) return <Error_page />
    return (
        <div className="my-4 min-h-[400px]">
            <div className="text-center my-10">
                <span className="text-xl lg:text-2xl text-[#EB3D35] border-b-2 border-[#EB3D35] pb-1">Sản phẩm hot</span>
            </div>
            {
                (dataProps?.isLoading) ?
                    <Loading /> :
                    <List_items />
            }
        </div>
    )
}
