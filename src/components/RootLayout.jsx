import { Outlet } from "react-router-dom";
import LogoGui from "../assets/logoGuiDev.svg";
import '../components/RootLayout.css';

export default function RootLayout(){
    return(
        <>
            <div className="divPhoto m-5">
                <a href="http://guisouza95.github.io" target="_blank">
                    <img src={LogoGui} className="logo logoGui img-fluid" alt="Logo Dev Gui" />
                </a>
            </div>
            <div>
                <q>Veja aqui meu site e algumas informações</q>
            </div>

            <Outlet/>
        </>
    )
}