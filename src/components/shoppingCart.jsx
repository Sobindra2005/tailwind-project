import { useState } from "react"
import { initialItems } from "../data"
import { CartItem } from "./Item"

const discount_percentage = 10

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
);


export function ShoppingCart() {
    const [items, setItems] = useState(initialItems)

    function handleItemQuantity(id, quantity) {
        const newItems = items.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: quantity
                }
            }

            return item
        })

        setItems(newItems)
    }

    function deleteItem(id) {
        const arrayItems = items.filter(item => item.id !== id)

        setItems(arrayItems)
    }

    const SubTotal = items.reduce((sum, item) => { return sum + (item.quantity * item.price) }, 0);
    const discount = (discount_percentage / 100) * SubTotal;
    const DeliveryFee = 100;
    const total = SubTotal - discount + DeliveryFee

    // handleItemQuantity(2, 10)
    // deleteItem(2)

    return (
        <main className="min-h-screen ">
            <div className=" max-w-6xl mx-auto mt-10">
                <h1 className="text-4xl font-bold mb-12 text-gray-900">Shopping Cart</h1>
                <div className="flex gap-8">
                    {/* product */}
                    <div className="w-full border border-gray-300 rounded-3xl p-6 ">
                        <div className="flex text-sm font-semibold pb-3 border-b border-gray-100">
                            <h2 className="flex-1">Product code</h2>
                            <h2 className="w-[120px]">Quantity</h2>
                            <h2 className="w-[80px]">Total</h2>
                            <h2 className="w-[40px]">Action</h2>
                        </div>
                        <div>
                            {
                                items.length > 0 ? items.map(item => <CartItem key={item.id} item={item} deleteItem={deleteItem} handleItemQuantity={handleItemQuantity} />)
                                    :
                                    <p> No Product </p>
                            }
                        </div>
                    </div>

                    {/* summary */}
                    <div className="w-[380px] ">
                        <div className="border border-gray-300 rounded-3xl p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
                            <div className="flex gap-3">
                                <input type="text" placeholder="Discount Voucher" className="border rounded-full focus:outline-gray-500 px-3 border-gray-200" />
                                <button className="border border-gray-200 px-6 py-2 rounded-full font-semibold text-sm">Apply</button>
                            </div>

                            <div className="mt-8 flex gap-3 flex-col mb-6">
                                <SummaryData label={"Sub Total"} value={SubTotal.toFixed(2)} />
                                <SummaryData label={"Discount (10%)"} value={discount.toFixed(2)} />
                                <SummaryData label={"Delivery fee"} value={DeliveryFee} />
                                <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4 mt-3">
                                    <span className=" text-md text-gray-900 font-semibold">Total</span>
                                    <span className=" text-gray-900 text-lg font-bold">{`${total.toFixed(2)} USD`}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 mb-6 bg-gray-50/50 p-3 rounded-xl text-xs text-gray-600">
                                <div className="shrink-0 mt-0.5 text-gray-400">
                                    <ShieldIcon />
                                </div>
                                <p>
                                    90 Day Limited Warranty against manufacturer's defects <a href="#" className="font-semibold underline decoration-gray-300 hover:text-black">Details</a>
                                </p>
                            </div>

                            <button className="rounded-full px-6 py-3 w-full bg-gray-900 text-white text-lg font-semibold">Checkout Now</button>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    )
}


function SummaryData({ label, value }) {
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{label}</span>
            <span className="font-semibold text-gray-900 text-md font-semibold">{`${value} USD`}</span>
        </div>
    )
}