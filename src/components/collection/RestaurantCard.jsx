import { Star } from "lucide-react";


/* =========================
Reusable Restaurant Card
========================= */
export default function RestaurantCard({
    image,
    offer,
    isAd,
    name,
    rating,
    time,
    cuisines,
    location,
}) {
    return (
        <div className="w-full shadow-xl p-4 max-w-[260px] cursor-pointer">
            {/* Image section */}
            <div className="relative rounded-2xl overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[170px] object-cover"
                />
                {offer && (
                    <div className="absolute bottom-2 left-2 text-white font-bold text-sm bg-black/60 px-2 py-1 rounded">
                        {offer}
                    </div>
                )}
            </div>


            {/* Details */}
            <div className="mt-3 space-y-1">
                <div className="flex items-center gap-2">
                    {isAd && (
                        <span className="text-[10px] px-1 border rounded text-gray-500">Ad</span>
                    )}
                    <h3 className="font-semibold truncate">{name}</h3>
                </div>


                <div className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded">
                        <Star size={12} fill="white" />
                        {rating}
                    </span>
                    <span className="text-gray-600">{time}</span>
                </div>


                <p className="text-sm text-gray-500 truncate">{cuisines}</p>
                <p className="text-sm text-gray-400">{location}</p>
            </div>
        </div>
    );
}