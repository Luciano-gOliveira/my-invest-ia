import {
  TransactionsCategory,
  TransactionsPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saude",
  HOUSTING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTIMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTION = [
  {
    value: TransactionsPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionsPaymentMethod.CASH],
  },
  {
    value: TransactionsPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionsPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionsPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionsPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionsPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[
        TransactionsPaymentMethod.BANK_TRANSFER
      ],
  },
  {
    value: TransactionsPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionsPaymentMethod.PIX],
  },
  {
    value: TransactionsPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionsPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionsPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionsPaymentMethod.OTHER],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionsCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.OTHER],
  },
  {
    value: TransactionsCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.EDUCATION],
  },
  {
    value: TransactionsCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.ENTERTAINMENT],
  },
  {
    value: TransactionsCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.FOOD],
  },
  {
    value: TransactionsCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.HEALTH],
  },
  {
    value: TransactionsCategory.HOUSTING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.HOUSTING],
  },
  {
    value: TransactionsCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.SALARY],
  },
  {
    value: TransactionsCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.TRANSPORTATION],
  },
  {
    value: TransactionsCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionsCategory.UTILITY],
  },
];
