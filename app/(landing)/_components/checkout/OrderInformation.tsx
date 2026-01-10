import React from "react";

const OrderInformation = () => {
  return (
    <div className="bg-white">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">Order Information</h2>
      </div>
      <div className="p-5">
        <div className="mb-5 input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" placeholder="Type your full name" id="full_name" />
        </div>
        <div className="mb-5 input-group">
          <label htmlFor="full_name">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number"
            id="wa_number"
          />
        </div>
        <div className="mb-5 input-group">
          <label htmlFor="full_name">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="shipping_address"
            rows={6}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
