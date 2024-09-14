import Banner_shops from "./_components/Baner_shops";
import Menu_shops from "./_components/Menu_shops";
import Products_shops from "./_components/Products";

export default function Shops_website() {
  return (
    <>
    <Banner_shops/>
    <div className="grid lg:grid-cols-[250px_auto] gap-6 *:rounded my-8">
      <Menu_shops/>
      <Products_shops/>
    </div>
    </>
  )
}
