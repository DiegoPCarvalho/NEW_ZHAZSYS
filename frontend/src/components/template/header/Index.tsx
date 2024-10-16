export default function Header() {
    return (
        <div className={`flex bg-neutral-700 p-3 box-border shadow-lg`}>
            <div className="mr-3 ">
                MENU
            </div>
            <div className="mr-3">
                    LOGO
            </div>
            <div className="flex grow justify-between">
                <div className="mr-3">
                    TITULO
                </div>
                <div className="mr-3">
                    USER
                </div>
            </div>
        </div>
    );
}