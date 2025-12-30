import React from 'react'
import Navbar from '../../components/collection/Navbar'
import RestaurantCard from '../../components/collection/RestaurantCard';

function CollectionPage() {

    const restaurants = [
{
image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
offer: "ITEMS AT ₹9",
isAd: true,
name: "Apna Sweets",
rating: "4.4",
time: "30–35 mins",
cuisines: "Sweets, Beverages, Street Food",
location: "Sudama Nagar",
},
{
image: "https://images.unsplash.com/photo-1604908177522-040b98c21c14",
offer: "₹50 OFF ABOVE ₹499",
isAd: false,
name: "Bikanervala",
rating: "4.3",
time: "35–40 mins",
cuisines: "Indian, Continental, Chinese",
location: "THE ONE",
},
];

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Header */}
                <h1 className="text-3xl font-bold">Jalebi</h1>
                <p className="text-gray-600 mt-1">
                    Bite into delicious, deep-fried Jalebis, a quintessential sweet for every occasion.
                </p>


                {/* Sort */}
                <div className="mt-4">
                    <button className="border px-4 py-2 rounded-full text-sm">
                        Sort By ▾
                    </button>
                </div>


                {/* Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {restaurants.map((item, index) => (
                        <RestaurantCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CollectionPage