import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegsitrada}  from '../assets/marca_registrada.svg'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegsitrada/>
            Desenvolvido por Alexandre Ferreira
        </footer>
    )
}

export default Rodape