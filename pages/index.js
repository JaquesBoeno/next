import {useState} from 'react'

function Home(){
  return(
    <>
      <h1>Home</h1>
      <Contador/>
    </>
  );
}

function Contador(){

  const [contador,setContador] = useState(1);

  function adicionar(){
    setContador(contador +1);
  }

  function remover(){
    setContador(contador -1);
  }

  return(
    <div>
      <div>{contador}</div>
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={remover}>remover</button>
    </div>
  )
}

export default Home;