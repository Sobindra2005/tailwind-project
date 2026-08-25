export function CartItem({ item, deleteItem, handleItemQuantity }) {
    console.log("this is rendering - cartItem")
    return (
        <div className="flex">
            <div className="flex-1 flex items-center gap-2">
                <img className="w-20 h-20 rounded-xl object-cover" src={item.image} alt="" />
                <div>
                    <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{item.subtitle}</p>
                </div>
            </div>
            <div className="w-[120px] flex gap-2 items-center">
                <button disabled={item.quantity === 1} onClick={() => handleItemQuantity(item.id, item.quantity - 1)} className=" ">-</button>
                <span className="  align-middle">{item.quantity}</span>
                <button onClick={() => handleItemQuantity(item.id, item.quantity + 1)} className=" ">+</button>
            </div>
            <div className="w-[80px]">${(item.price * item.quantity).toFixed(2)}</div>
            <div className="w-[40px]">
                <button onClick={() => deleteItem(item.id)} className="cursor-pointer">delete</button>
            </div>
        </div>
    )
}