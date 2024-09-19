import { Skeleton } from "@/_components/shadcn/ui/skeleton"

export function Loading() {
    return (
        <Skeleton className="w-screen z-[10] gap-4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center *:rounded">
            <Skeleton className="w-full z-[10] h-[300px] bg-[#11182725] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center"/>
            <Skeleton className="w-full z-[10] h-[300px] bg-[#11182725] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center"/>
            <Skeleton className="w-full z-[10] h-[300px] bg-[#11182725] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center"/>
            <Skeleton className="w-full z-[10] h-[300px] bg-[#11182725] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center"/>
            <Skeleton className="w-full z-[10] h-[300px] bg-[#11182725] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center"/>
        </Skeleton>
    )
}
