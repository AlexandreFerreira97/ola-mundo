import styles from './Post.module.css'

const Post = ( {post} ) => {
    return (
        <div className={styles.post}>
            <img className={styles.capa}
                src={`/imgPR/posts/${post.id}/capa.PNG`}
                alt='Imagem do Projeto'
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>

        </div>
    )
}

export default Post