import CardWithHeader from "../ui/CardWithHeader";
import { FiCreditCard } from "react-icons/fi";

const paymentList = [
  {
    bank_name: "BANK BCA",
    account_number: 123123123,
    account_holder: "John Doe",
    transfer_method: "Bank Transfer",
  },
  {
    bank_name: "BANK BRI",
    account_number: 231231231,
    account_holder: "John Doe",
    transfer_method: "Bank Transfer",
  },
  {
    bank_name: "E-WALLET DANA",
    account_number: 312312312,
    account_holder: "John Doe",
    transfer_method: "E-Wallet",
  },
  {
    bank_name: "E-WALLET GOPAY",
    account_number: 123123123,
    account_holder: "John Doe",
    transfer_method: "E-Wallet",
  },
];

const PaymentOption = () => {
  return (
    <CardWithHeader title="Payment Option">
      {paymentList.map((payment, i) => (
        <div className="flex gap-5 p-5 border-b border-gray-100 " key={i}>
          <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
            <FiCreditCard size="24" />
          </div>
          <div className="self-center">
            <div className="font-bold">{payment.bank_name}</div>
            <div className="text-sm">{payment.account_number}</div>
            <div className="text-sm opacity/70">{payment.account_holder}</div>
          </div>
          <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">
            {payment.transfer_method}
          </div>
        </div>
      ))}
    </CardWithHeader>
  );
};

export default PaymentOption;
