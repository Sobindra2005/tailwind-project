import { useState } from "react"
import { initialItems } from "../data"
import { CartItem } from "./Item"

export function ShoppingCart() {
    const [items, setItems] = useState(initialItems)

    // console.log({...items[0],quantity:10,title:"hii"})

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

    // handleItemQuantity(2, 10)
    // deleteItem(2)

    return (
        <main className="min-h-screen ">
            <div className=" max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-gray-900">Shopping Cart</h1>
                <div className="flex gap-8">
                    {/* product */}
                    <div className="w-full border border-gray-300 rounded-xl p-4">
                        <div className="flex text-sm font-semibold pb-6">
                            <h2 className="flex-1">Product code</h2>
                            <h2 className="w-[120px]">Quantity</h2>
                            <h2 className="w-[80px]">Total</h2>
                            <h2 className="w-[40px]">Action</h2>
                        </div>
                        <div>
                            {
                                items.map(item => <CartItem key={item.id} item={item} />)
                            }
                        </div>
                    </div>

                    {/* summary */}
                    <div className="w-[380px] ">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
                            <div>
                                {/* discount input section */}
                            </div>

                            <div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Sub Total</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Discount (10%)</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Delivery fee</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Total</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    )
}