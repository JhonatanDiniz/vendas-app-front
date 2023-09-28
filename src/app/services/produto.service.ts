import { httpClient } from 'app/http'
import { Produto } from 'app/models/produtos'
import { AxiosResponse } from 'axios'

const resourceURL: string = '/produtos'

export const useProdutoService = () => {

    const create = async (produto: Produto): Promise<Produto> => {
        const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceURL, produto)
        return response.data;
    }

    const update = async (produto: Produto): Promise<Produto> => {
        const url: string = `${resourceURL}/${produto.id}`
        const response: AxiosResponse<Produto> = await httpClient.put<Produto>(url, produto)
        return response.data;
    }

    return {
        create,
        update
    }

}