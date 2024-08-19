import styles from './Banner.module.css'
import circuloColorido from "../assets/circulo_colorido.png"
import minhaFoto from "../assets/minha_foto.png"

const Banner = () =>{
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo!</h1>

                <p className={styles.paragrafo}>
                    Olá, bem-vindo ao meu cantinho de projetos!
                    Sou apaixonado por transformar ideias em códigos e dar vida a soluções criativas. Como desenvolvedor front-end, adoro explorar as infinitas possibilidades que a web oferece. Aqui, você vai encontrar alguns dos meus projetos, onde coloco em prática o que aprendo e desafio meus limites.

                    Cada linha de código é uma nova oportunidade para evoluir, e eu estou sempre em busca de novos desafios. Sinta-se à vontade para explorar, dar sugestões ou até mesmo colaborar. Vamos construir algo incrível juntos!
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden= {true} 
                />

                <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Alexandre'
                />

            </div>

        </div>
    )
}

export default Banner 