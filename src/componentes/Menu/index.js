import { Link, useLocation } from "react-router-dom"
import styles from "./Menu.module.css"

const Menu = () => {

    const localizacao = useLocation()

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    Inicio
                </Link>
                <Link className="link" to="/sobremim">
                    SobreMim
                </Link>
            </nav>
        </header>
    )
}

export default Menu