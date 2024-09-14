import Banner_website from "./_components/Banner";
import Images_Intro from "./_components/Images_Intro";
import Item_hots from "./_components/Item_hots";
import New_items from "./_components/New_items";
import Services_website from "./_components/Services";

export default function Home_website() {
  return (
    <>
    <Banner_website/>
    <Services_website/>
    <New_items/>
    <Images_Intro/>
    <Item_hots/>
    </>
  )
}
