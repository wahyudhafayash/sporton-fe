import priceformatter from "@/app/utils/price-formatter";
import CardWithHeader from "../ui/CardWithHeader";
import FileUpload from "../ui/FileUpload";
import Button from "../ui/Button";
import { FiCheckCircle } from "react-icons/fi";

const PaymentSteps = () => {
  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-5">
        <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5 ">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
            bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b> or a
            screenshot of the transfer confirmation. This will be needed for the
            next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the{" "}
            <b>'Upload Receipt & Confirm'</b> button below to validate your
            transaction.
          </li>
        </ol>
        <FileUpload />
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between items-center font-semibold">
          <div>Total</div>
          <div className="text-primary text-sm">{priceformatter(400000)}</div>
        </div>

        <Button
          variant="dark"
          size="small"
          className="w-full mt-4 flex items-center justify-center gap-2"
        >
          <FiCheckCircle />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
