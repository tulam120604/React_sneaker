import Breadcump from "@/_components/UI/breadcump";
import Footer_website from "@/_components/UI/footer";
import Header_website from "@/_components/UI/header";
import { Outlet } from "react-router-dom";

export default function Layout_website() {
    return (
        <div className="mx-auto max-w-[1440px] w-[95vw]">
            <Header_website />
            <main className="mt-20">
                <Breadcump/>
                <div className="my-4">
                    <Outlet />
                </div>
            </main>
            <Footer_website />
        </div>
    )
}
