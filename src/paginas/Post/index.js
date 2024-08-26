import { useParams } from "react-router-dom"
import posts from '../../componentes/json/posts.json'
import PostModelo from "../../componentes/PostModelo"
import ReactMarkDown from 'react-markdown'
import './Post.css'

const Post = () => {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post){
        return <h1>Post não encontrado!</h1>
    }

    return (
        <h1>
            <PostModelo fotoCapa={`/public/imgPr/posts/${post.id}/capa.png`} titulo={post.titulo}>

                <div className="post-mark-down-container">
                    <ReactMarkDown>
                        {post.descrição}
                    </ReactMarkDown>
                </div>

            </PostModelo>
        </h1>
    )
}

export default Post