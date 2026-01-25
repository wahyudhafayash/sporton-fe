"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/_components/ui/Button";
import BankInfoList from "../../_components/bank-info/BankInfoList";
import BankInfoModal from "../../_components/bank-info/BankInfoModal";

const BankInfoManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Bank Information Management</h1>
          <p className="opacity-50">
            Manage destination accounts for customer transfers.
          </p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>
      <BankInfoList />
      <BankInfoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default BankInfoManagement;
