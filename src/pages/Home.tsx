import imageAuthor from '../assets/eu.jpg';
import imageProjectSuckMyChic from '../assets/suck-my-chic.jpg';
import imageProjectCoobMais from '../assets/coob-mais.jpeg';
import imageProjectJuno from '../assets/juno.jpg';
import imageProjectOpa from '../assets/opa.jpg';
import imageProjectSignup from '../assets/signup.jpg';
import imageProjectSpotify from '../assets/spotify.jpg';
import imageProjectApparel from '../assets/apparel.jpg';
import imageProjectArticle from '../assets/article.jpg';
import imageProjectClipboard from '../assets/clipboard.jpg';


export default function Home() {
  return (
    <>
      <div className='min-h-screen bg-blur bg-cover bg-center bg-no-repeat flex items-center justify-center p-10'>
        <div className='w-full max-w-[1400px]'>
          <h3 className='text-7xl text-white -ml-1'>Meu nome é</h3>
          <h1 className='text-9xl text-white font-bold -ml-2 mb-6'>Bruno Netto.</h1>
          <h2 className='text-7xl text-white'>
            sou desenvolvedor <span className='bg-blue-700 font-bold'>Front End</span>
          </h2>
        </div>
      </div>

      <div className='min-h-screen bg-slate-200 flex items-center justify-center p-10'>
        <div className='w-full max-w-[1400px] grid grid-cols-2'>
          <div className='flex items-center'>
            <img src={imageAuthor} alt="Foto do Author do Site, Bruno Netto" />
          </div>

          <div className='flex justify-center flex-col pl-8 pr-8'>
            <h3 className='text-5xl font-bold uppercase text-gray-600 mb-6'>Seja bem vindo(a)</h3>
            <p className='text-3xl leading-9 text-gray-500 mb-5'>Fico feliz que tenha chegado até minha página.</p>
            <p className='text-3xl leading-9	text-gray-500 mb-5'>Meu nome é Bruno, tenho 20 anos de idade e uma grande paixão por desenvolvimento. No final de 2019 me formei no curso técnico de Informática para Internet, foi lá que entendi o quanto a tecnologia pode ajudar e melhorar a vida das pessoas.</p>
            <p className='text-3xl leading-9 text-gray-500'>Desde então passo os meus dias estudando para que tenha um bom conhecimento.</p>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-slate-200 flex items-center justify-center p-10'>
        <div className='w-full max-w-[1400px]'>
          <div className='flex justify-center'>
            <h2 className='text-6xl p-5 mb-10 text-bold uppercase text-white inline-block bg-blue-700'>Alguns trabalhos</h2>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <a href='https://suckmychic.com/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectSuckMyChic} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Suck My Chic</p>  
              </div>
            </a>

            <a href='https://coobrastur.com/coobmaisbus/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectCoobMais} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Coob+</p>  
              </div>
            </a>

            <a href='https://nettobruno.github.io/cloneJuno/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectJuno} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Clone Site Juno</p>  
              </div>
            </a>
           
            <a href='https://nettobruno.github.io/opa/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectOpa} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Projeto Opa</p>  
              </div>
            </a>

            <a href='https://nettobruno.github.io/clone-signup/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectSignup} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Front Challenge Signup</p>  
              </div>
            </a>

            <a href='https://nettobruno.github.io/clone-spotify/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectSpotify} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Clone Spotify</p>  
              </div>
            </a>

            <a href='https://nettobruno.github.io/clone-apparel/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectApparel} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Front Challenge Apparel</p>  
              </div>
            </a>

            <a href='https://nettobruno.github.io/article-preview/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectArticle} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Front Challenge Article</p>  
              </div>
            </a>

            <a href='https://nettobruno.github.io/clone-clipboard/' target='_blank' className="relative transition-all hover:scale-125 hover:bg-blackOpacity-800 hover:z-10">
              <img src={imageProjectClipboard} alt="" className='w-full h-full' />
              <div className='absolute top-0 w-full h-full flex justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
                <p className='text-4xl text-bold text-center'>Front Challenge Clipboard</p>  
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
