import { createContext, useState } from "react";

export const StockContext = createContext({})


export function StockContextProvider({ children }) {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('obc-react-stock')
        if (!storedItems) return []

        const items = JSON.parse(storedItems)
        //criando a data de criação e atualização (por isso esse pedaço de código ficou grande)
        items.array.forEach(item => {
            item.createdAt = new Date(item.createdAt),
            item.updatedAt = new Date(item.updatedAt)
        });

        return items
    })

    const addItem = (item) => {
        //criando um novo valor baseado no state anterior
        setItems(currentState => {
            const newItem = [item, ...currentState] //currentState é função que pega o estado atual (podia ser qualquer outro nome)
            localStorage.setItem('obc-react-stock', JSON.stringify(newItem))
            return newItem
        }) 
    }

    const stock = {
        items,
        addItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}