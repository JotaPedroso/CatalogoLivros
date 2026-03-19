import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../services/api"


export default function LivroForm() {
    const [titulo, setTitulo] = useState("")
    const [paginas, setPaginas] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descricao, setDescricao] = useState("")
    
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(id){
            api.get(`/${id}`).then(res => {
                const livro = res.data
                setTitulo(livro.titulo)
                setPaginas(livro.paginas)
                setCategoria(livro.categoria)
                setDescricao(livro.descricao)
            })
        }
    },[id])

    const salvar = async (e) => {
        e.preventDefault()
        const dados = {titulo, paginas, categoria, descricao}
        if(id){
            // edição
            await api.put(`/${id}`, dados)
        }
            // criação       
        else {
            await api.post("/", dados)
        }
        navigate("/")
    }

    return(
        <div className="container card p-0 mt-5" style={{maxWidth: "500px"}}>
            <div className="card-header">
                <h4>{id ? "Editar Livro" : "Novo Livro"}</h4>
            </div>
            <div class="card-body"> 

                <form>
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input type="text" className="form-control" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Número de Páginas</label>
                        <input type="number" className="form-control" value={paginas} onChange={e => setPaginas(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Categoria</label>
                        <select className="form-control" value={categoria} onChange={e => setCategoria(e.target.value)}>
                            <option value="">Selecione uma categoria</option>
                            <option value="Romance">Romance</option>
                            <option value="Ficção">Ficção</option>
                            <option value="Não-Ficção">Não-Ficção</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Biografia">Biografia</option>
                            <option value="Terror">Terror</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descrição</label>
                        <textarea className="form-control" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <button type="submit" onClick={salvar} className="btn btn-primary">{id ? "Salvar" : "Adicionar"}</button>
                    <Link to="/" className="btn btn-secondary ms-2">Cancelar</Link>
                </form>
            </div>
        </div>    
        )

}