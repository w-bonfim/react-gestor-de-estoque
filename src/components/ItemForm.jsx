import { useContext, useRef, useState } from "react"
import  StockItem, { CATEGORIES } from "../model/StockItem"
import { StockContext } from "../contexts/StockContext"

export default function ItemForm({ formUpdate}) {

    const defaultItem = {
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      category: ""
    }

    const [item, setItem] = useState(formUpdate ? formUpdate : defaultItem) 
    const { addItem, updateItem } = useContext(StockContext)
    const inputRef = useRef(null)
    
    const handleSubmit = (env) => {
      env.preventDefault()

      try {

        if (formUpdate) {
          updateItem(formUpdate.id, item)
          alert(`Item ${formUpdate.name} atualizado com sucesso!`)

        } else {
          
          const stockItem = new StockItem(item)
          addItem(stockItem)
          setItem(defaultItem) // limpar os campos para estado default
          alert(`Item cadastrado com sucesso`)
        }
        
      } catch(err) {
        console.log(`Error ${err}`)
      } finally {
        inputRef.current.focus() //focar no primeiro campo do forumulário
      }
    }

    //armazenando o valor do estado de todos os campos de uma forma gernerica 
    const handleChange = (env) => {
        setItem(currentState => {
          return {
            ...currentState,
            [env.target.name]: env.target.value
          }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                ref={inputRef}
                value={item.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantidade</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                required
                min={0}
                step={1}
                value={item.quantity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                name="price"
                id="price"
                required
                min={0.00}
                step={0.01}
                value={item.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category">Categoria</label>
              <select
                name="category"
                id="category"
                required
                value={item.category}
                onChange={handleChange}
              >
                <option disabled value="">Selecione uma categoria...</option>
                {CATEGORIES.map((category) => (
                  <option
                    key={category}
                    value={category}
                    defaultChecked={item.category === category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              id="description"
              required
              rows={6}
              value={item.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="button is-primary is-large">
            Salvar
          </button>
        </form>
      )
    }