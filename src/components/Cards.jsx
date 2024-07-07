import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Cards() {
    return (










        <>

            <div className="container m-3">
                <div className="flex space-x-4">
                    {/* Card 1 */}
                  
                    <div className="max-w-sm mx-auto bg-card shadow-sm rounded-md overflow-hidden ">
                    <img
                        src="https://placehold.co/400x250.png?text=Food+Item"
                        alt="Food Item"
                        className="w-full h-32 object-cover object-center"
                    />
                    <div className="p-8">
                        <h2 className="text-lg font-semibold text-primary-foreground">Delicious Burger</h2>
                        <div className="flex items-center justify-between mt-2">
                            <select className="px-3 py-1 border border-input rounded-md bg-secondary text-secondary-foreground">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                                <option value="quarter">Quarter</option>
                            </select>
                            <span className="text-primary-foreground font-semibold">$9.99</span>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-info text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 transition-colors">
                                Buy Now
                            </button>
                            <div className="flex space-x-4">
                                <button className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80 transition-colors">
                                    <img
                                        src="https://openui.fly.dev/openui/cart.svg?text=🛒"
                                        alt="Add to Cart"
                                        className="w-6 h-6"
                                    />
                                </button>
                                <button className="bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80 transition-colors">
                                    <img
                                        src="https://openui.fly.dev/openui/bookmark.svg?text=🔖"
                                        alt="Save for Later"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>

                  
                </div>
        

























            {/* <div className="container m-3">
                <div className="max-w-sm mx-auto bg-card shadow-sm rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img
                        src="https://placehold.co/400x250.png?text=Food+Item"
                        alt="Food Item"
                        className="w-full h-32 object-cover object-center"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-primary-foreground">Delicious Burger</h2>
                        <div className="flex items-center justify-between mt-2">
                            <select className="px-3 py-1 border border-input rounded-md bg-secondary text-secondary-foreground">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                                <option value="quarter">Quarter</option>
                            </select>
                            <span className="text-primary-foreground font-semibold">$9.99</span>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 transition-colors">
                                Buy Now
                            </button>
                            <div className="flex space-x-4">
                                <button className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80 transition-colors">
                                    <img
                                        src="https://openui.fly.dev/openui/cart.svg?text=🛒"
                                        alt="Add to Cart"
                                        className="w-6 h-6"
                                    />
                                </button>
                                <button className="bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80 transition-colors">
                                    <img
                                        src="https://openui.fly.dev/openui/bookmark.svg?text=🔖"
                                        alt="Save for Later"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
