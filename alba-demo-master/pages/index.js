import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Space Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-20">
        <h1 className="title w-screen">
          Welcome to Space Contact
        </h1>

        <p className="text-center w-screen pt-20">
          Bienvenue dans le programme top-secret de l'ISEA dirigé par Darius Clark. <br/> Confirmez vous avoir les autorisations pour accéder au programme ? 
        </p>

        <p className="text-center w-screen pt-20">
          <Link href="hello"><button class="bg-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          <a>Je confirme !</a>
</button></Link>
        </p>

      </main>

  
    </div>
  )
}
