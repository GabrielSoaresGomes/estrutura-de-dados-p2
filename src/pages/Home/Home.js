import CardContainer from "../../layouts/CardContainer/CardContainer";
import Card from "../../components/Card/Card";
import Container from '../../layouts/Container/Container'
import H1 from "../../layouts/H1/H1";

import './Home.css'

const Home = () => {
  return (
      <div>
        <H1 text={'Estrutura de Dados '} subtext={'Árvore Binária'}/>
        <div className="content">
          <CardContainer>
              <Card title='Árvore B' text={'Em ciência da computação, uma árvore B é uma estrutura de dados em árvore, auto-balanceada...'} to={'/arvoreB'} imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png'} />
              <Card title='Árvore B+' text={'Na ciência da computação uma árvore B+ é uma estrutura de dados do tipo árvore derivada das árvores B, mas com uma forma...'} to={'/arvoreB+'} imageUrl={''} />
              <Card title='Árvore Mengão' text={'Uma árvore rubro-negra é um tipo de árvore binária de busca balanceada, uma estrutura de dados usada em ciência da computação, tipicamente para...'} to={'/arvoreVermelhoPreto'} imageUrl={'https://www.dgp.toronto.edu/public_user/JamesStewart/378notes/16redBlack/d_RB01.gif'} />
              <Card title='Árvore B*' text={'Uma árvore B* é uma estrutura de dados na ciência da computação e uma variação da árvore B proposta em 1973 por Donald E. Knuth. Esta...'} to={'/arvoreBAsterisk'} imageUrl={''} />

          </CardContainer>
        </div>
      </div>
  )
}

export default Home