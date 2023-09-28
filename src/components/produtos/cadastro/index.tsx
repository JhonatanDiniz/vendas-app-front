import { Layout, Input, TextArea } from "components"
import { useState } from "react"
import { useProdutoService } from 'app/services'
import { Produto } from 'app/models/produtos'

export const CadastroProdutos: React.FC = () =>{

    const service = useProdutoService()
    const [ id, setId ] = useState<number>()
    const [ dtCadastro, setDtCadastro ] = useState<string>()
    const [ valor, setValor ] = useState<string>('')
    const [ nome, setNome ] = useState<string>('')
    const[ descricao, setDescricao ] = useState<string>('')

    const submit = () =>{
        const produto: Produto = {
            valor: parseFloat(valor), 
            nome: nome.toUpperCase(), 
            descricao
        }
        service.create(produto).then(produtoResposta => {
            setId(produtoResposta.id)
            setDtCadastro(produtoResposta.dtCadastro)
            console.log(produtoResposta)
        })
    }

    return(
        <Layout titulo="Cadastro de Produtos">
            {id &&
                <div className="columns">
                    <Input
                        label="Id:"
                        columnClasse="is-half"
                        value={id}
                        id="id"
                        disabled={true}
                    />

                    <Input
                        label="Data Cadastro:"
                        columnClasse="is-half"
                        value={dtCadastro}
                        id="dtCadastro"
                        disabled={true}
                    />
                </div>
            }
            <div className="columns">
                <Input
                    label="Valor:"
                    columnClasse="is-half"
                    onChange={setValor}
                    id="valor"
                    placeholder="Informe o valor do produto"
                />
            </div>
            <div className="columns">
                <Input
                    label="Nome:"
                    columnClasse="is-full"
                    onChange={setNome}
                    id="nome"
                    placeholder="Informe o nome do produto"
                />
            </div>
            <div className="columns">
                <TextArea
                    label="Descrição:"
                    columnClass="is-full"
                    placeholder="Descrição detalhada do produto"
                    id="descricao"
                    onChange={setDescricao}
                />
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={submit}>Cadastrar</button>
                </div>
                <div className="control">
                    <button className="button is-danger">Cancelar</button>

                </div>

            </div>
        </Layout>
    )
}