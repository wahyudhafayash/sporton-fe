import Button from "@/app/(landing)/_components/ui/Button";
import Modal from "../ui/Modal";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              placeholder="e.g. Mandiri, BCA, BRI"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="number"
              id="accountNumber"
              name="accountNumber"
              placeholder="e.g. 1234567890"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountName">Account Name</label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              placeholder="Holder Name as registered on the account"
            />
          </div>
        </div>
        <Button className="ml-auto mt-2 rounded-md">Create Bank Account</Button>
      </div>
    </Modal>
  );
};

export default BankInfoModal;
