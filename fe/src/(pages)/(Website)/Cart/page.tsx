import { Button } from "@/_components/shadcn/ui/button";
import Table_cart from "./_components/table_cart";

export default function Cart_page() {
    return (
        <div className="pb-8">
            {/* list items */}
            <Table_cart />
            <div className="w-full rounded-lg flex flex-col lg:flex-row items-center lg:justify-between justify-center bg-white py-2 px-4 lg:p-4 gap-x-4 sticky bottom-0 z-[10] shadow-[0_-5px_20px_-15px_rgba(0,0,0,0.3)] mt-8">
                <span className="text-gray-800 whitespace-nowrap text-sm lg:text-base">Số lượng ({0} sản phẩm)</span>
                <Button type='button' className="flex gap-x-4 mt-2 lg:mt-0">
                    <span>Tiến hành thanh toán</span>
                    |
                    <span>{0?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                </Button>
            </div>
        </div>
    )
}
