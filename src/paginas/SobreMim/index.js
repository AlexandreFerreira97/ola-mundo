import PostModelo from "../../componentes/PostModelo"
import fotoCapa from '../../componentes/assets/sobre_mim_capa.png'
import fotoSobreMim from '../../componentes/assets/minhaFoto.jpg'
import styles from './SobreMim.module.css'

const SobreMim = () => {
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subTitulo}>Olá, me chamo Alexandre!</h3>
            <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="Foto do Alexandre"/>
            <p className={styles.paragrafo}>Sou formado em Engenharia da Computação pela PUC-GO e atualmente estou me especializando em Análise e Desenvolvimento de Sistemas. Minha paixão por tecnologia me levou a seguir o caminho do desenvolvimento full stack, com um foco especial no front-end. Estou me dedicando ao estudo de React e TypeScript, buscando criar interfaces intuitivas e dinâmicas. Acredito no poder da tecnologia para transformar ideias em soluções reais e estou sempre em busca de novas oportunidades para expandir meus conhecimentos e habilidades.</p>
        </PostModelo>
    )
}

export default SobreMim