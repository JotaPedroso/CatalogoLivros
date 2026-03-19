import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

export default function LivroList() {

    const [livros, setLivros] = useState([])
    useEffect(() => {
        carregarLivros()
    }, [])

    const carregarLivros = async () => {
        const resposta = await api.get('/')
        const ordenado = resposta.data.sort((a, b) => a.id - b.id) //  ordena por ID
        setLivros(ordenado)
        setLivros(resposta.data)
    }

    const excluir = async (id) => {
        if(!window.confirm("Confirma a exclusão do livro?")){
            return
        }
           await api.delete(`/${id}`)
            carregarLivros()
        }    

    
    return(
        <div className="container card p-0 mt-5">
            <div className="card-header">
            <h4>Livros no catálogo</h4>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Páginas</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {livros.map(livro => (
                        <tr key={livro.id}>
                            <td>{livro.id}</td>
                            <td>{livro.titulo}</td>
                            <td>{livro.paginas}</td>
                            <td>{livro.categoria}</td>
                            <td>{livro.descricao}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Link to={`/editar/${livro.id}`} className="btn btn-primary btn-sm">Editar</Link>
                                    <button className="btn btn-danger btn-sm" onClick={ () => excluir(livro.id)}>Excluir</button>
                                </div>
                            </td>    
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        )

}