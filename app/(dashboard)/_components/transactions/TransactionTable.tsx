import priceformatter from "@/app/utils/price-formatter";

import { FiEye } from "react-icons/fi";

const TransactionData = [
  {
    date: "23/02/2026 19:23",
    customer: "Jhon Doe",
    contact: "+2302432",
    total: 219032,
    status: "pending",
  },

  {
    date: "23/02/2026 19:23",
    customer: "Jhon Doe2",
    contact: "+2302432",
    total: 219032,
    status: "paid",
  },

  {
    date: "23/02/2026 19:23",
    customer: "Jhon Doe3",
    contact: "+2302432",
    total: 219032,
    status: "rejected",
  },
];

type TCategoryTableProps = {
  onViewDetails: () => void;
};

const TransactionTable = ({ onViewDetails }: TCategoryTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-600";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-600";
      case "paid":
        return "bg-green-100 text-green-600 border-green-600";
    }
  };

  return (
    <div className="bg-white rounded xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {TransactionData.map((data, i) => (
            <tr key={i} className="border-b border-gray-200 last:border-b-0">
              <td className="px-6 py-4 font-medium">{data.date}</td>
              <td className="px-6 py-4 font-medium">{data.customer}</td>
              <td className="px-6 py-4 font-medium">{data.contact}</td>
              <td className="px-6 py-4 font-medium">
                {priceformatter(data.total)}
              </td>

              <td className="px-6 py-4 font-medium">
                <div
                  className={`px-2 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.status)}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="px-4 py-7.5 flex items-center h-full gap-3 text-gray-600">
                <button
                  onClick={onViewDetails}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit px-2 rounded-md "
                >
                  <FiEye size={18} />
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
