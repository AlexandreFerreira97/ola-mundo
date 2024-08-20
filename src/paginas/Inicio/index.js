import Banner from "../../componentes/Banner"
import styles from './Inicio.module.css'
import posts from '../../componentes/json/posts.json'

const Inicio = () => {
    return (

        <main>
            <Banner/>

            <ul className={styles.pts}>
                {posts.map( (post) => (
                    <li key={post.id}>
                        Post...
                    </li>
                ) )}
            </ul>

        </main>
    )
}

export default Inicio