import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"
import { Link } from "react-router-dom"

export default function ItemsTable() {
    const { items } = useContext(StockContext)

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    <tr>
                        <td>{ item.id }</td>
                        <td>{ item.name }</td>
                        <td>{ item.quantity }</td>
                        <td>{ item.category }</td>
                        <td>
                            <Link to={`/items/${item.id}`} className="button is-primary is-small">
                                Ver
                            </Link>
                            <Link to={`/items/${item.id}/update`} className="button is-small">
                                Atualizar
                            </Link>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}