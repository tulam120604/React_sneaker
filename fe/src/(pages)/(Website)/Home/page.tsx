import { useGetItemsClientQuery } from "@/Redux/slicesApi/Items";
import Banner_website from "./_components/Banner";
import Images_Intro from "./_components/Images_Intro";
import Item_hots from "./_components/Item_hots";
import New_items from "./_components/New_items";
import Services_website from "./_components/Services";

export default function Home_website() {

  const { data, isLoading, isError } = useGetItemsClientQuery({
    page: 1,
    limit: 20
  });


  const propsData = {
    data,
    isLoading,
    isError
  }

  return (
    <>
      <Banner_website />
      <Services_website />
      <New_items dataProps={propsData} />
      <Images_Intro />
      <Item_hots dataProps={propsData} />
    </>
  )
}
