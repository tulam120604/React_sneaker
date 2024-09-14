import Description_item from "./_components/Description_item"
import Feedback_item from "./_components/Feedback_item"
import Img_item from "./_components/Img_item"
import Infor_item from "./_components/Infor_item"
import Related_item from "./_components/Related_item"

export default function Detail_product() {
    return (
        <div className="flex flex-col gap-y-10">
            {/* img and infor item */}
            <div className="grid lg:grid-cols-[45%_50%] justify-between *:border *:h-[500px]">
                <Img_item/>
                <Infor_item/>
            </div>
            {/* description */}
            <Description_item/>

            {/* feedback */}
           <Feedback_item/>
            {/* item related */}
            <Related_item/>
        </div>
    )
}
