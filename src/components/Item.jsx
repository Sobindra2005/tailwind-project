export function CartItem({item}) {
    return (
        <div className="flex">
            <div className="flex-1 flex items-center gap-2">
                <img className="w-20 h-20 rounded-xl object-cover" src={item.image} alt="" />
                <div>
                    <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{item.subtitle}</p>
                </div>
            </div>
            <div className="w-[120px] flex gap-2">
                <button className=" ">-</button>
                <span className=" h-full align-middle">{item.quantity}</span>
                <button className=" ">+</button>
            </div>
            <div className="w-[80px]">${item.price}</div>
            <div className="w-[40px] ">delete</div>
        </div>
    )
}