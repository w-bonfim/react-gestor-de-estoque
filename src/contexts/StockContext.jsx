import { createContext, useState } from "react";

export const StockContext = createContext({})

export function StockContextProvider({ children }) {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('obc-react-stock')
        if (!storedItems) return []

        const items = JSON.parse(storedItems)
        //criando a data de criação e atualização (por isso esse pedaço de código ficou grande)
        items.forEach((item) => {
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

    const updateItem = (itemId, newAttributes) => {
        setItems(current => {
            const itemIndex = current.findIndex(i => i.id === itemId)
            const updatedItems = [...current]
            Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })// atualiza o array com dados editados pelo usuárip
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const getItem = (itemId) => {
        return items.find(i => i.id === +itemId)
    }

    const deleteItem = (itemId) => {
        setItems(current => {
          const updatedItems = current.filter(item => item.id !== itemId)
          localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
          return updatedItems
        })
    }

    const stock = {
        items,
        addItem,
        updateItem,
        deleteItem,
        getItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}