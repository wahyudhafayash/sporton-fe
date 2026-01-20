import PaymentOption from "../_components/payment/PaymentOption";
import PaymentSteps from "../_components/payment/PaymentSteps";

const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh] pt-10">
      <div className="max-w-5xl mx-auto py-16">
        <h1 className="text-5xl font-bold text-center mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOption />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
};

export default Payment;
