import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"
import { Link } from "react-router-dom"
import DeleteButton from "./DeleteButton"

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
                {items.map(item => (
                    <tr key={item.id}>
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
                            <DeleteButton id={item.id} name={item.name} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}