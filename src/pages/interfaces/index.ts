export type Transcation = {
  createAt: string | number | Date
  amount: number | string
  category: string
  note: string
  transactionTitle: string
  transactionType: string
  userId?: string
  __v: number
  _id: string
}
