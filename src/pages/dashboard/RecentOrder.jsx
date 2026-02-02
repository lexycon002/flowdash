import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function RecentOrder() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const orders = [
    { id: 1, product: "Sports Shoes", price: "$149", customer: "Julia Sunota", status: "Completed", rating: 5 },
    { id: 2, product: "Goldan Watch", price: "$168", customer: "Julia Sunota", status: "Completed", rating: 5 },
    { id: 3, product: "Men Polo Tshirt", price: "$124", customer: "Julia Sunota", status: "Pending", rating: 4 },
    { id: 4, product: "Blue Jeans Casual", price: "$289", customer: "Julia Sunota", status: "Completed", rating: 3 },
    { id: 5, product: "Fancy Shirts", price: "$389", customer: "Julia Sunota", status: "Canceled", rating: 2 },
    { id: 6, product: "Black iPhone", price: "$1049", customer: "Julia Sunota", status: "Completed", rating: 5 },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "Completed": return "text-green-400 bg-green-400/10 border border-green-400/20";
      case "Pending": return "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20";
      case "Canceled": return "text-red-400 bg-red-400/10 border border-red-400/20";
      default: return "text-gray-400 bg-gray-400/10";
    }
  };

  const filteredOrders = orders.filter(order => 
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-text-main">Recent Orders</h3>
        <div className="text-xl text-gray-500 hover:text-text-main cursor-pointer transition-colors">
          <BsThreeDotsVertical/>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder='Search...' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-10 rounded-full border border-border-color bg-input-bg px-4 pl-10 outline-none text-text-main font-sans placeholder-text-muted focus:border-indigo-500 transition-all text-sm dark:bg-[#121629] dark:text-gray-300 dark:border-gray-700 dark:placeholder-gray-500" 
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500"><IoSearchOutline /></span>
      </div>

      {/* Table Container - Added 'no-scrollbar' class */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-2 text-gray-400 font-medium text-xs uppercase tracking-wider">Item Name</th>
              <th className="text-left py-3 px-2 text-gray-400 font-medium text-xs uppercase tracking-wider">Amount</th>
              <th className="text-left py-3 px-2 text-gray-400 font-medium text-xs uppercase tracking-wider">Vendor</th>
              <th className="text-left py-3 px-2 text-gray-400 font-medium text-xs uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-2 text-gray-400 font-medium text-xs uppercase tracking-wider">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors last:border-0">
                  <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                          {/* Placeholder image circle */}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-text-main 
                            ${order.id % 2 === 0 ? 'bg-blue-600' : 'bg-purple-600'}`}>
                             {order.product.charAt(0)}
                          </div>
                          <span className="text-text-main text-sm font-medium">{order.product}</span>
                      </div>
                  </td>
                  <td className="py-4 px-2 text-gray-500 font-bold text-sm">{order.price}</td>
                  <td className="py-4 px-2 text-gray-600 text-sm">{order.customer}</td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-md text-[10px] font-semibold uppercase ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-text-main font-bold">{order.rating}.0</span>
                      <AiFillStar className="text-yellow-400" />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentOrder