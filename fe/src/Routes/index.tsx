import Layout_website from "@/(Layouts)/Layout_website/page";
import Cart_page from "@/(pages)/(Website)/Cart/page";
import Detail_product from "@/(pages)/(Website)/Detail/page";
import Home_website from "@/(pages)/(Website)/Home/page";
import Shops_website from "@/(pages)/(Website)/Shops/page";
import { Route, Routes } from "react-router-dom";

export default function Routes_Page() {
  return (
    <Routes>
        {/* webite */}
        <Route path="/" element={<Layout_website/>}>
        <Route index element={<Home_website/>}/>
        <Route path="/products" element={<Shops_website/>}/>
        <Route path="/products/detail" element={<Detail_product/>}/>
        <Route path="/cart" element={<Cart_page/>}/>
        </Route>
    </Routes>
  )
}
