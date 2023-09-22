import Head from 'next/head'
import 'bulma/css/bulma.css'
import { Layout } from 'components'

const Home: React.FC = () =>{
  return (
    <div>
      <Head>
        <title>Vendas-App</title>  
        
      </Head>
      <Layout/>
    </div>
  )
}
export default Home;