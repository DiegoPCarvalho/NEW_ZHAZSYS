import CardsFila from "@/components/Cards/CardsFila";

export default function FilaUser() {
    return (
        <div className="flex dark:text-neutral-200 justify-between w-full mt-10 max-sm:grid max-sm:grid-cols-1">
            <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[680px] max-2xl:h-[330px]">
                <div className="flex justify-center font-bold text-2xl">TO DO</div>
                <div id="hiddenScroll" className="p-2 flex flex-col overflow-auto">
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                </div>
            </div>
            <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[680px] max-2xl:h-[330px]">
                <div className="flex justify-center font-bold text-2xl">DOING</div>
                <div id="hiddenScroll" className="p-2 flex flex-col overflow-auto">
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                </div>
            </div>
            <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[680px] max-2xl:h-[330px]">
                <div className="flex justify-center font-bold text-2xl">DOES</div>
                <div id="hiddenScroll" className="p-2 flex flex-col overflow-auto">
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                    <CardsFila />
                </div>
            </div>
        </div>
    )
}   