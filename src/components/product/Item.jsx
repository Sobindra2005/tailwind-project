const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
);


export function CartItem({ item, deleteItem, handleItemQuantity }) {
    return (
        <div className="flex py-6 border-b border-gray-100 last:border-b-0 gap-2 items-center">
            <div className="flex-1 flex items-center gap-2">
                <img className="w-20 h-20 rounded-xl object-cover" src={item.image} alt="" />
                <div>
                    <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{item.subtitle}</p>
                </div>
            </div>
            <div className="w-[120px] flex gap-2 items-center ">
                <div className="flex border border-gray-200 h-fit rounded-full px-3 py-1 jutify-center gap-5">
                    <button disabled={item.quantity === 1} onClick={() => handleItemQuantity(item.id, item.quantity - 1)} className="text-gray-500 cursor-pointer"><MinusIcon /></button>
                    <span className="  align-middle font-semibold text-gray-700">{item.quantity}</span>
                    <button onClick={() => handleItemQuantity(item.id, item.quantity + 1)} className=" text-gray-500 cursor-pointer"><PlusIcon /></button>
                </div>
            </div>
            <div className="w-[80px] font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
            <div className="w-[40px]">
                <button onClick={() => deleteItem(item.id)} className="cursor-pointer text-gray-500"><TrashIcon /></button>
            </div>
        </div>
    )
}