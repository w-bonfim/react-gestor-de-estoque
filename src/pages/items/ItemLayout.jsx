import { Outlet, Link, useLocation} from "react-router-dom";

export default function ItemLayout() {
    const { pathname } = useLocation() //pega a rota atual
 
    return (
        <main>
            <h1>Stock Item</h1>
            <div className="tabs">
                <Link to="/items" className={`tab ${pathname === '/items' ? "active" : "" }`}>Todos os item</Link>
                <Link to="/items/new" className={`tab ${pathname === '/items/new' ? "active" : "" }`}>Novo item</Link>
            </div>
            <Outlet />
        </main>
    )
}
