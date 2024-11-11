"use client";

import { Button } from "@/app/_components/ui/button";
import UpersetTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionsButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({
  transaction,
}: EditTransactionsButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpersetTransactionDialog
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default EditTransactionButton;
