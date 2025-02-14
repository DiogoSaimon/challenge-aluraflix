import NaoEncontrada from "components/NaoEncontrada"
import PaginaBase from "components/PaginaBase"
import Player from "components/Player"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes