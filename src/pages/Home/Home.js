import CardContainer from "../../layouts/CardContainer/CardContainer";
import Card from "../../components/Card/Card";

import './Home.css'

const Home = () => {
  return (
      <div>
        <h1 className={'home-title'}>Home</h1>
        <CardContainer>
            <Card text='Apenas' to={'/arvoreB'} linkText={'arvoreB'} />
            <Card text='Apenas' to={'/arvoreB+'} linkText={'arvoreB+'} />
            <Card text='Apenas' to={'/arvoreBAsterisk'} linkText={'arvoreB*'} />
            <Card text='Apenas' to={'/arvoreVermelhoPreto'} linkText={'arvoreVermelhoPreto'} />
            <Card text='Apenas' to={'/integrantes'} linkText={'integrantes'} />

        </CardContainer>
      </div>
  )
}

export default Home