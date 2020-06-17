import Link from 'next/link';

export default function QuaiPage() {
    return (
      <div className="p-20">
        <p className="text-center lg:p-20 text-2xl">Vous devriez pouvoir identifier un récepteur autour de vous. <br/>Les récepteurs prennent cette forme sur notre planète :</p>
        <img src="http://img.over-blog.com/500x500/1/21/73/37/3e-repertoire/invader-vert.jpg" className="transform scale-50 mx-auto"/>
        <p className="text-center lg:p-20"> <Link href="couleur"><button class="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          <a>J'ai trouvé !</a>
</button></Link></p>
      </div>
    )
  }
  