import PostModelo from "../../componentes/PostModelo"
import fotoCapa from '../../componentes/assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

const SobreMim = () => {
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subTitulo}>d</h3>
        </PostModelo>
    )
}

export default SobreMim