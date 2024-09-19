import { Link, NavLink } from "react-router-dom"
import { Button } from "../shadcn/ui/button"
import { useEffect, useRef } from "react"

export default function Header_website() {
    const refHeader = useRef<HTMLHeadElement>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scrollView = () => {
                if (window.scrollY > 100) {
                    refHeader?.current?.classList?.add('animate-[animationScrollYHeader_1s]', 'shadow-2xl')
                }
                else {
                    refHeader?.current?.classList?.remove('animate-[animationScrollYHeader_1s]', 'shadow-2xl')
                }
            }
            window.addEventListener('scroll', scrollView)
            return () => {
                window.removeEventListener('scroll', scrollView)
            }
        }
    }, []);
    console.count('Cpn: header. Re-render')

    const arr_menu = [
        {
            path: '/',
            name: 'Trang chủ',
        },
        {
            path: '/products',
            name: 'Sản phẩm',
        },
        {
            path: '/blog',
            name: 'Giới thiệu',
        },
        {
            path: '/contact',
            name: 'Liên hệ',
        },
    ]

    return (
        <header ref={refHeader} className="bg-white w-screen fixed left-0 top-0 after:fixed after:top-0 z-[10] overflow-hidden before:w-screen before:h-screen 
        before:absolute before:bg-red-500 before:rotate-45 before:top-0 before:-translate-x-1/2 before:left-1/4 before:z-[-1]">
            <div className="max-w-[1440px] w-[95vw] mx-auto flex h-16 items-center justify-between">
                <Link to="/">
                    <img width={80} height={50} className="h-12" src="https://irp.cdn-website.com/79e7f227/dms3rep/multi/logo-298w.webp" alt="" />
                </Link>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm *:p-2 *:rounded *:font-medium *:duration-200">
                            {
                                arr_menu && arr_menu?.map((value: { path: string, name: string }) => (
                                    <NavLink key={Math.random()} className={({ isActive }) => isActive ? 'bg-gray-800 text-gray-100' : 'hover:bg-gray-800 hover:text-gray-100'} to={value?.path}>{value?.name}</NavLink>
                                ))
                            }
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link to={'/'}>
                        <Button className="rounded hover:bg-gray-800 hover:text-gray-200">Đăng nhập</Button>
                    </Link>
                    <Link to={'/'}>
                        <Button className="rounded hover:bg-gray-800 hover:text-gray-200">Đăng kí</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
