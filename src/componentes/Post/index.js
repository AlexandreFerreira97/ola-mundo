import styles from './Post.module.css'

const Post = ( {post} ) => {
    return (
        <div className={styles.post}>
            <img className={styles.capa}
                src={`/imgPR/posts/${post.id}/capa.PNG`}
                alt='Imagem do Projeto'
            />
        </div>
    )
}

export default Post