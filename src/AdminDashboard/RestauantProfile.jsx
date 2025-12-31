import React from "react";

export default function RestaurantProfile() {
  const kpis = [
    { label: "Total Restaurants", value: 12, color: "bg-blue-50 text-blue-600" },
    { label: "Pending", value: 3, color: "bg-yellow-50 text-yellow-600" },
    { label: "Approved", value: 8, color: "bg-green-50 text-green-600" },
    { label: "Rejected", value: 1, color: "bg-red-50 text-red-600" },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Spicy Bites",
      address: "123 Food Street, New York",
      createdAt: "01 Jan 2024",
      approvedAt: "10 Jan 2024",
      rating: 4.5,
      orders: 320,
      items: 48,
      status: "Approved",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Urban Tadka",
      address: "45 Spice Avenue, Chicago",
      createdAt: "12 Feb 2024",
      approvedAt: "20 Feb 2024",
      rating: 4.2,
      orders: 210,
      items: 36,
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const statusColor = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-6 space-y-10">
      {/* KPI SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className={`rounded-xl p-5 shadow-sm border ${kpi.color}`}
          >
            <p className="text-sm font-medium">{kpi.label}</p>
            <p className="text-3xl font-bold mt-2">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* RESTAURANT LIST */}
      <div className="space-y-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
              {/* IMAGE */}
              <div className="lg:col-span-3">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              {/* DETAILS */}
              <div className="lg:col-span-5 space-y-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {restaurant.name}
                  </h2>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      statusColor[restaurant.status]
                    }`}
                  >
                    {restaurant.status}
                  </span>
                </div>

                <p className="text-gray-500 text-sm">{restaurant.address}</p>

                <div className="grid grid-cols-2 gap-2 text-sm mt-3 text-gray-600">
                  <p>
                    <span className="font-medium">Created:</span>{" "}
                    {restaurant.createdAt}
                  </p>
                  <p>
                    <span className="font-medium">Approved:</span>{" "}
                    {restaurant.approvedAt}
                  </p>
                  <p>
                    <span className="font-medium">Rating:</span> ⭐{" "}
                    {restaurant.rating}
                  </p>
                </div>
              </div>

              {/* STATS */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center gap-4">
                <div className="bg-gray-50 w-full rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {restaurant.orders}
                  </p>
                  <p className="text-xs text-gray-500">Orders</p>
                </div>
                <div className="bg-gray-50 w-full rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {restaurant.items}
                  </p>
                  <p className="text-xs text-gray-500">Items</p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="lg:col-span-2 flex flex-col justify-center gap-3">
                <button className="w-full py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition">
                  Show Details
                </button>
                <button className="w-full py-2.5 rounded-xl text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-50 transition">
                  View Orders
                </button>
                <button className="w-full py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-100 transition">
                  View Items
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
