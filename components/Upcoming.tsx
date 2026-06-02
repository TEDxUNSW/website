// component to show that the route is currently under construction

export default function Upcoming() {
    return (
        <div className="flex h-[91vh] w-screen items-center justify-center">
            <div className="flex items-center justify-center bg-yellow-600 border-trasnparent rounded-2xl w-[30vw] h-[35vh] shadow-xl shadow-red-700">
                <div className="flex items-center justify-center bg-stone-700 border-trasnparent rounded-2xl w-[29vw] h-[33vh]">
                    <h1 className="text-3xl font-bold w-[22vw]">Under construction</h1>
                </div>
            </div>
        </div>
    )
}