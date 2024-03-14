import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"
import { useNavigate } from "react-router-dom"

export default function DeleteButton({ id, name }) {
    const { deleteItem } = useContext(StockContext)
    const navigate = useNavigate()

    const handDelete = () => {
        if (confirm(`Tem certeza que deseja excluir ${name}? `)) {
            deleteItem(id)
            navigate("/items") //redireciona para lista
        } 
    }

    return (
        <button onClick={handDelete} className="button is-danger is-small">
            Excluir
        </button>
    )
}


