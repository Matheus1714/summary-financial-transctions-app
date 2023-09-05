import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL

const api = axios.create({
  baseURL,
})

export const getTransactionsQuantityInYear = async (
  year: string,
  accountId: string,
): Promise<number> => {
  try {
    const response = await api.get(
      `/transactions/quantity/${accountId}/${year}`,
    )
    const { quantity } = response.data
    return quantity
  } catch (error) {
    console.error(error)
    return 0
  }
}

export interface TransactionsCategory {
  category: string
  percentage: number
}

export const getTransactionsCategoryInYear = async (
  year: string,
  accountId: string,
): Promise<TransactionsCategory[]> => {
  try {
    const response = await api.get(
      `/transactions/category/${accountId}/${year}`,
    )
    const { transactionsByCategoryInYear } = response.data

    const formattedData: TransactionsCategory[] =
      transactionsByCategoryInYear.map((item: any) => ({
        category: item.transaction_type,
        percentage: Number(item.percentage),
      }))

    formattedData.sort((a, b) => b.percentage - a.percentage)

    const topFiveTransactions = formattedData.slice(0, 5)

    return topFiveTransactions
  } catch (error) {
    console.error(error)
    return []
  }
}

export interface TransactionsMonth {
  month: number
  quantity: number
  percentage: number
}

export const getTransactionsMonthInYear = async (
  year: string,
  accountId: string,
): Promise<TransactionsMonth[]> => {
  try {
    const response = await api.get(`/transactions/month/${accountId}/${year}`)
    const { quantityTransactionsByMonthInYear } = response.data

    const formattedData: TransactionsMonth[] =
      quantityTransactionsByMonthInYear.map((item: any) => ({
        month: Number(item.month),
        quantity: Number(item.transaction_count),
        percentage: Number(item.percent),
      }))

    return formattedData
  } catch (error) {
    console.error(error)
    return []
  }
}

export interface Accounts {
  account_id: string
  customer_id: string
  account_number: string
  balance: number
  created_at: Date
}

export const getAccounts = async (): Promise<Accounts[]> => {
  try {
    const response = await api.get('/accounts')
    const { accounts } = response.data
    return accounts
  } catch (error) {
    console.error(error)
    return []
  }
}
