import {
  TransactionsCategory,
  TransactionsPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const upsetTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionsCategory),
  paymentMethod: z.nativeEnum(TransactionsPaymentMethod),
  date: z.date(),
});
