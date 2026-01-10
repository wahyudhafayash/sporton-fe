import React from "react";
import CardWithHeader from "../ui/CardWithHeader";

const OrderInformation = () => {
  return (
    <CardWithHeader title=" Order Information">
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
    </CardWithHeader>
  );
};

export default OrderInformation;
