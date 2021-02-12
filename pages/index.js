import {useState} from 'react'
import Link from 'next/link'

function Home(){
  return(
    <>
      <h1>Home</h1>

      <Link href='/product'>
        <a>Produto</a>
      </Link>

      <Contador/>
    </>
  );
}

function Contador(){
  const [contador,setContador] = useState(0);

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