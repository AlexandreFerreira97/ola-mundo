import styles from './Post.module.css'
import github from '../assets/github.png'

const Post = ( {post} ) => {
    return (
        <div className={styles.post}>
            <img className={styles.capa}
                src={`/imgPR/posts/${post.id}/capa.PNG`}
                alt='Imagem do Projeto'
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>

            <a className={styles.ancora} href='https://github.com/AlexandreFerreira97'>
                <img className={styles.gitH}
                    src={github}
                    alt='github'
                />
            </a>

        </div>
    )
}

export default Post