import { useContext } from "react";
import ItemsTable from "../../components/ItemsTable";
import { StockContext } from "../../contexts/StockContext";
import { useParams } from "react-router-dom"
import ItemForm from "../../components/ItemForm";

export default function UpdateItem() {
    const { getItem } = useContext(StockContext)
    const { id } = useParams()

    const item = getItem(id)

    return (
        <>
           <h2>Editar item</h2>
           <ItemForm formUpdate={item}/>
        </>
    )
}