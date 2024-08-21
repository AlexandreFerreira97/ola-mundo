import styles from './Inicio.module.css'
import posts from '../../componentes/json/posts.json'
import Post from "../../componentes/Post"

const Inicio = () => {
    return (
        <ul className={styles.pts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    )
}

export default Inicio