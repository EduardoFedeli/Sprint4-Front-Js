import Menu from './Menu'
import Rodape from './Rodape'
import './styles/style.scss'
import { Outlet } from 'react-router-dom'

function App() {
    return(
        <>
            <Menu />
            <Outlet />
            <Rodape />
        </>
    )
}

export default App
