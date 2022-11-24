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
              <Card title='Árvore B' text={'rtertertertertete'} to={'/arvoreB'} imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png'} />
              <Card title='Árvore B+' text={'tertertertertertert'} to={'/arvoreB+'} imageUrl={''} />
              <Card title='Árvore Mengão' text={'ertertertertertaert'} to={'/arvoreVermelhoPreto'} imageUrl={'https://www.dgp.toronto.edu/public_user/JamesStewart/378notes/16redBlack/d_RB01.gif'} />
              <Card title='Árvore B*' text={'erterterterte'} to={'/arvoreBAsterisk'} imageUrl={''} />
              <Card title='integrantes' text={'earteraterteartaertet'} to={'/integrantes'} imageUrl={''} />

          </CardContainer>
        </div>
      </div>
  )
}

export default Home