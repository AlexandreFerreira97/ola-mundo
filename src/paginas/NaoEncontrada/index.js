import styles from './NaoEncontrada.module.css'

const NaoEncontrada = () => {
    return (
        <div className={styles.conteudoContainer}>

            <span className={styles.texto404}>404</span>
            
            <h1 className={styles.titulo}>Ops! Página não encontrada :(</h1>
            
            <p className={styles.paragrafo}>
                Tem certeza que era isso que estava procurando?
            </p>

            <p className={styles.paragrafo}>
                Aguarde um pouco e recarregue a página, ou volte para a página inicial.
            </p>

        </div>
    )
}

export default NaoEncontrada