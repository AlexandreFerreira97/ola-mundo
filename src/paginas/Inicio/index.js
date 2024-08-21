import styles from './Inicio.module.css'
import posts from '../../componentes/json/posts.json'
import Post from "../../componentes/PostCard"
import gh from '../../componentes/assets/github.png'
import lk from '../../componentes/assets/linkedin.png'

const Inicio = () => {
    return (
        <ul className={styles.pts}>
            <h2>Acesse minhas redes</h2>
            <li className={styles.lista}>
                <a title='github' className={styles.anc} href='https://github.com/AlexandreFerreira97'> <img className={styles.imgG} src={gh}  alt='github'/> </a>
            </li>

            <li className={styles.lista}>
                <a title='linkedin' className={styles.anc} href='https://www.linkedin.com/in/alexandre-ferreira-545229236/'> <img className={styles.img} src={lk}  alt='Linkedin'/> </a>
            </li>

            <hr className={styles.lh}/>

            <h2> Veja alguns projetos</h2>
            {posts.map((post) => (
                <li className={styles.lista} key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    )
}

export default Inicio