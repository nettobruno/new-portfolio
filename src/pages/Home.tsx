import {
  ArrowRight,
  EnvelopeSimple,
  PhoneCall,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
} from 'phosphor-react'

import imageAuthor from '../assets/eu.jpg'
import imageProjectSuckMyChic from '../assets/suck-my-chic.jpg'
import imageProjectCoobMais from '../assets/coob-mais.jpeg'
import imageProjectJuno from '../assets/juno.jpg'
import imageProjectOpa from '../assets/opa.jpg'
import imageProjectSignup from '../assets/signup.jpg'
import imageProjectSpotify from '../assets/spotify.jpg'
import imageProjectApparel from '../assets/apparel.jpg'
import imageProjectArticle from '../assets/article.jpg'
import imageProjectClipboard from '../assets/clipboard.jpg'

import ProjectItem from '../components/ProjectItem'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='min-h-screen bg-[url("../assets/home.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center p-2 md:p-5 lg:p-10'>
        <div className='w-full max-w-[1600px]'>
          <h3 className='text-4xl md:text-6xl lg:text-7xl text-white -ml-1'>Meu nome é</h3>
          <h1 className='text-6xl md:text-8xl lg:text-9xl text-white font-bold -ml-1 md:-ml-[6px] mb-6'>
            Bruno Netto.
          </h1>
          <h2 className='text-4xl md:text-6xl lg:text-7xl text-white'>
            sou desenvolvedor <span className='bg-blue-700 font-bold px-2'>Front End</span>
          </h2>
        </div>
      </div>

      <div className='min-h-screen bg-slate-200 flex items-center justify-center p-2 md:p-5 lg:p-10'>
        <div className='w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-center justify-center mb-10 lg:justify-start'>
            <img src={imageAuthor} alt='Foto do Author do Site, Bruno Netto' />
          </div>

          <div className='flex justify-center flex-col px-1 lg:px-8'>
            <h3 className='text-3xl lg:text-5xl text-center lg:text-left font-bold uppercase text-gray-600 mb-6'>
              Seja bem vindo(a)
            </h3>
            <p style={{ lineHeight: '3rem' }} className='text-2xl lg:text-3xl text-center lg:text-left text-gray-500 mb-5'>
              Fico feliz que tenha chegado até minha página.
            </p>
            <p style={{ lineHeight: '3rem' }} className='text-2xl lg:text-3xl text-center lg:text-left	text-gray-500 mb-5'>
              Meu nome é Bruno, tenho 21 anos de idade e uma grande paixão por desenvolvimento. No
              final de 2019 me formei no curso técnico de Informática para Internet, foi lá que
              entendi o quanto a tecnologia pode ajudar e melhorar a vida das pessoas.
            </p>
            <p style={{ lineHeight: '3rem' }} className='text-2xl lg:text-3xl text-center lg:text-left text-gray-500 mb-20 md:mb-10'>
              Desde então passo os meus dias estudando para que tenha um bom conhecimento.
            </p>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-white flex items-center justify-center p-2 md:p-5 lg:p-10'>
        <div className='w-full max-w-[1600px]'>
          <div className='flex justify-center'>
            <h2 className='w-full lg:w-fit text-center text-3xl md:text-5xl py-2 px-20 mb-10 font-bold uppercase text-white inline-block bg-blue-700'>
              Alguns trabalhos
            </h2>
          </div>

          <div className='grid grid-cols-1 grid-rows-9 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-2'>
            <ProjectItem
              url='https://suckmychic.com/'
              image={imageProjectSuckMyChic}
              name='Suck My Chic'
              links={false}
            />
            <ProjectItem
              url='https://coobrastur.com/coobmaisbus/'
              image={imageProjectCoobMais}
              name='Coob+'
              links={false}
            />
            <ProjectItem
              url='https://nettobruno.github.io/cloneJuno/'
              image={imageProjectJuno}
              name='Clone Site Juno'
              links={false}
            />
            <ProjectItem
              url='https://nettobruno.github.io/opa/'
              image={imageProjectOpa}
              name='Projeto Opa'
              links={false}
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-signup/'
              image={imageProjectSignup}
              name='Front Challenge Signup'
              links={false}
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-spotify/'
              image={imageProjectSpotify}
              name='Clone Spotify'
              links={false}
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-apparel/'
              image={imageProjectApparel}
              name='Front Challenge Apparel'
              links={false}
            />
            <ProjectItem
              url='https://nettobruno.github.io/article-preview/'
              image={imageProjectArticle}
              name='Front Challenge Article'
              links={false}
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-clipboard/'
              image={imageProjectClipboard}
              name='Front Challenge Clipboard'
              links={false}
            />
          </div>

          <div className='flex justify-start items-center'>
            <Link to='/projects' className='flex items-center text-2xl text-blue-700 font-bold mt-4 lg:mt-10 mb-10 md:mb-0 hover:underline'>
              Veja mais projetos
              <ArrowRight size={32} color="#5e00ff" className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-slate-200 flex items-center justify-center p-2 md:p-5 lg:p-10'>
        <div className='w-full max-w-[1600px]'>
          <div className='flex justify-center'>
            <h2 className='w-full lg:w-fit text-center text-3xl md:text-5xl py-2 px-20 mb-10 font-bold uppercase text-white inline-block bg-blue-700'>
              Contato
            </h2>
          </div>

          <p style={{ lineHeight: '3rem' }} className='text-2xl md:text-3xl text-gray-500 mb-14'>
            Que bom que chegou até aqui e conheceu um pouco sobre mim, mas infelizmente eu ainda não
            te conheço e adoraria que isso acontecesse. Abaixo verá algumas forma de me encontrar,
            sinta-se a vontade para entrar em contato.
          </p>

          <div className='flex flex-col items-start md:flex-row md:items-center md:justify-between'>
            <div className='flex items-center justify-center mb-2 md:mb-0'>
              <EnvelopeSimple size={34} color='#5e00ff' />
              <p className='text-2xl md:text-3xl break-all text-gray-500 ml-2'>brunonettomac@outlook.com</p>
            </div>

            <div className='flex items-center justify-center'>
              <PhoneCall size={34} color='#5e00ff' />
              <p className='text-2xl md:text-3xl text-gray-500 ml-2'>(41) 99269-0420</p>
            </div>
          </div>

          <div className='flex items center justify-center mt-10'>
            <a
              href='https://www.linkedin.com/in/bruno-netto-77434b187/'
              target='_blank'
              className='bg-blue-700 rounded-full p-2 m-2 md:m-4 transition-all hover:scale-125'
            >
              <LinkedinLogo size={34} color='#ffffff' />
            </a>

            <a
              href='https://github.com/nettobruno'
              target='_blank'
              className='bg-blue-700 rounded-full p-2 m-2 md:m-4 transition-all hover:scale-125'
            >
              <GithubLogo size={34} color='#ffffff' />
            </a>

            <a
              href='https://twitter.com/brunonettto'
              target='_blank'
              className='bg-blue-700 rounded-full p-2 m-2 md:m-4 transition-all hover:scale-125'
            >
              <TwitterLogo size={34} color='#ffffff' />
            </a>

            <a
              href='https://www.instagram.com/netttobruno/'
              target='_blank'
              className='bg-blue-700 rounded-full p-2 m-2 md:m-4 transition-all hover:scale-125'
            >
              <InstagramLogo size={34} color='#ffffff' />
            </a>

            <a
              href='https://www.facebook.com/bruno.netto.125/'
              target='_blank'
              className='bg-blue-700 rounded-full p-2 m-2 md:m-4 transition-all hover:scale-125'
            >
              <FacebookLogo size={34} color='#ffffff' />
            </a>
          </div>
        </div>
      </div>

      <div className='w-full bg-blue-700 text-center p-5'>
        <p className='text-2xl text-white'>
          Feito com ❤️ por{' '}
          <a href='https://github.com/nettobruno' target='_blank' className='underline'>
            Bruno Netto
          </a>
        </p>
      </div>
    </>
  )
}
