import { Layout, Input, TextArea } from "components"
import { useState } from "react"

export const CadastroProdutos: React.FC = () =>{
    const [ codigo, setCodigo ] = useState<string>('')
    const [ valor, setValor ] = useState<string>('')
    const [ nome, setNome ] = useState<string>('')
    const[ descricao, setDescricao ] = useState<string>('')

    const submit = () =>{
        const produto = {
            codigo, valor, nome, descricao
        }
        console.log(produto)
    }

    return(
        <Layout titulo="Cadastro de Produtos">
            <div className="columns">
                <Input
                    label="Código:"
                    columnClasse="is-half"
                    onChange={setCodigo}
                    id="codigo"
                    placeholder="Código do produto"
                />

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