import Link from 'next/link'

function product(){
  return(
    <>
      <h1>Produto</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}

export default product;