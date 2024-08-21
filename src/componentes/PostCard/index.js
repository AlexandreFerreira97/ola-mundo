import styles from './Post.module.css'
import github from '../assets/github.png'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>

            <div className={styles.post}>
                <img className={styles.capa}
                    src={`/imgPR/posts/${post.id}/capa.PNG`}
                    alt='Imagem do Projeto'
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <button className={styles.botaoLer}>Descrição</button>

            </div>
        </Link>
    )
}

export default PostCard