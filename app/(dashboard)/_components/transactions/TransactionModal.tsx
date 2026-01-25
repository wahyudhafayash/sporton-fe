import Image from "next/image";
import Modal from "../ui/Modal";
import priceformatter from "@/app/utils/price-formatter";
import Button from "@/app/(landing)/_components/ui/Button";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Transaction">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image
            src="/images/payment-proof-dummy.png"
            alt="200"
            width={200}
            height={401}
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4 text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">23/02/2026 19:23</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">Jhon Doe</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">+24135342</div>
            </div>
            <div className="flex justify-between gap-10 font-medium">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">
                Merdeka Street, Jakarta, Indonesia, 1231243
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-sm mb-2">Item Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
            <div className="bg-gray-100 rounded aspect-square w-8 h-8 flex items-center justify-center">
              <Image
                src="/images/products/product-1.png"
                alt="product image"
                width={30}
                height={30}
              />
            </div>
            <div className="font-medium text-sm">SportOn Hyperfast Jersey</div>
            <div className="font-medium ml-auto text-sm">3 Units</div>
          </div>
          <div className="flex justify-between text-sm font-semibold mt-6">
            <h4>Total</h4>
            <div className="text-primary ">{priceformatter(500000)}</div>
          </div>
          <div className="flex justify-end gap-5 mt-12">
            <Button
              className="text-primary! bg-primary-light! rounded-md"
              size="small"
            >
              <FiX size={20} />
              Reject
            </Button>
            <Button
              className="text-white! bg-[#50C252]! rounded-md"
              size="small"
            >
              <FiCheck size={20} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;
