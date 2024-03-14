import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"

export default function Home() {
    const { items } = useContext(StockContext)

    const total = items.length
    const quantity = items.reduce((sum, item) => sum + item.quantity, 0)
    const today = new Date()
    const limitDate = new Date()
    limitDate.setDate(limitDate.getDate() - 10) // - 10 dias 

    const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
    const recentTotal = recentItems.length

    const lowQuantityItems = items.filter((item) => item.quantity < 10)
    const lowQuantityTotal = lowQuantityItems.length


    return (
        <main>
            <h1>Dashboard</h1>
            <div className="row">
                <div className="dashboard-card">
                    Diversidade de itens
                    <span>{total}</span>
                </div>
                <div className="dashboard-card">
                    Quantidade total
                    <span>{quantity}</span>
                </div>
                <div className="dashboard-card">
                    Itens recentes
                    <span>{recentTotal}</span>
                </div>
                <div className="dashboard-card">
                    Itens acabando
                    <span>{lowQuantityTotal}</span>
                </div>
            </div>
        </main>
    )
}