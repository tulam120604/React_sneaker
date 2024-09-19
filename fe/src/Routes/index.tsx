import { Layout_dashboard } from "@/(Layouts)/Layout_dashboard/page";
import Layout_website from "@/(Layouts)/Layout_website/page";
import Cart_page from "@/(pages)/(Website)/Cart/page";
import Detail_product from "@/(pages)/(Website)/Detail/page";
import Home_website from "@/(pages)/(Website)/Home/page";
import Shops_website from "@/(pages)/(Website)/Shops/page";
import Signin from "@/(pages)/Auth/Signin";
import Signup from "@/(pages)/Auth/Signup";
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
        {/* auth */}
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* dashboard */}
        <Route path="/dashboard" element={<Layout_dashboard/>}> 

        </Route>
    </Routes>
  )
}
