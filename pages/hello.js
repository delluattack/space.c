import Link from 'next/link';

export default function Hello() {
    return (
      <div className="p-20">
    
        <p className="content-center lg:p-20 text-lg">Bonjour chers agents, <br/> <br/>J'imagine que si Darius ne m'a pas contacté lui-même, c'est qu'il est dans l'incapacité de le faire, j'espère qu'il ne lui est rien arrivé. Quoiqu'il en soit s'il vous a fait confiance, je vous fait confiance aussi. <br/> <br/>Je vais vous transmettre toutes les informations sur le programme de contact avec la lointaine planète WASP-106 que nous avions mis en place durant nos jeunes années. <br/> Il semblerait, contre toute attente, que nous <strong>la planète WASP-106 nous a envoyé une réponse. </strong>Le message a été fragmenté sur <strong>plusieurs recepteurs</strong>. Je repère le premier signal au <strong>15 quai de Jemmapes</strong>, commencez par vous y rendre !
        
        </p>
        <p className="text-center pt-20 lg:p-20"><Link href="quai-de-gmap"><button class="bg-transparent hover:bg-green-500 ext-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          <a>J'y suis !</a>
</button></Link></p>

      </div>
    )
  }
  