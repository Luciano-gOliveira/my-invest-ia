"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { upsetTransactionSchema } from "./schema";
import {
  TransactionsCategory,
  TransactionsPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

interface UpsetTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionsCategory;
  paymentMethod: TransactionsPaymentMethod;
  date: Date;
}

export const upsetTransaction = async (params: UpsetTransactionParams) => {
  upsetTransactionSchema.parse(params);

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  await db.transaction.upsert({
    where: {
      id: params.id ?? "",
    },
    update: { ...params, userId },
    create: { ...params, userId },
  });
  revalidatePath("/transactions");
};
