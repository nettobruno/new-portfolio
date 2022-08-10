import {
  ArrowLeft
} from 'phosphor-react'

import imageProjectSuckMyChic from '../assets/suck-my-chic.jpg'
import imageProjectCoobMais from '../assets/coob-mais.jpeg'
import imageProjectJuno from '../assets/juno.jpg'
import imageProjectOpa from '../assets/opa.jpg'
import imageProjectSignup from '../assets/signup.jpg'
import imageProjectSpotify from '../assets/spotify.jpg'
import imageProjectApparel from '../assets/apparel.jpg'
import imageProjectArticle from '../assets/article.jpg'
import imageProjectClipboard from '../assets/clipboard.jpg'
import imageProjectContaSimples from '../assets/conta-simples.jpg'
import imageProjectFlourish from '../assets/flourish.jpg'
import imageProjectFood from '../assets/food.jpg'
import imageProjectFylo from '../assets/fylo.jpg'
import imageProjectHuddle from '../assets/huddle.jpg'
import imageProjectManage from '../assets/manage.jpg'
import imageProjectPing from '../assets/ping.jpg'
import imageProjectPuraAgua from '../assets/pura-agua.jpg'

import ProjectItem from '../components/ProjectItem'

import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      <div className='bg-slate-200 flex items-center justify-center py-20 px-2 md:px-10'>
        <div className='w-full max-w-[1600px]'>
          <div className='flex justify-center mb-10 relative'>
            <Link to='/' className='absolute -top-20 lg:-top-6 left-0 flex items-center text-2xl text-blue-700 font-bold mt-10 hover:underline'>
              <ArrowLeft size={32} color="#5e00ff" className="mr-2" />
              voltar
            </Link>

            <h2 className='w-full lg:w-fit text-center text-5xl py-2 px-20 font-bold uppercase text-white inline-block bg-blue-700'>
              Mais projetos
            </h2>
          </div>

          <div className='grid grid-cols-1 grid-rows-17 md:grid-cols-2 md:grid-rows-8 lg:grid-cols-3 lg:grid-rows-6 gap-2 mb-10 md:mb-0'>
            <ProjectItem
              url='https://suckmychic.com/'
              githubUrl='https://github.com/nettobruno/suckMyChic'
              image={imageProjectSuckMyChic}
              name='Suck My Chic'
              links={true}
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
              links={true}
              githubUrl='https://github.com/nettobruno/cloneJuno'
            />
            <ProjectItem
              url='https://nettobruno.github.io/opa/'
              image={imageProjectOpa}
              name='Projeto Opa'
              links={true}
              githubUrl='https://github.com/nettobruno/opa'
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-signup/'
              image={imageProjectSignup}
              name='Front Challenge Signup'
              links={true}
              githubUrl='https://github.com/nettobruno/clone-signup'
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-spotify/'
              image={imageProjectSpotify}
              name='Clone Spotify'
              links={true}
              githubUrl='https://github.com/nettobruno/clone-spotify'
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-apparel/'
              image={imageProjectApparel}
              name='Front Challenge Apparel'
              links={true}
              githubUrl='https://github.com/nettobruno/clone-apparel'
            />
            <ProjectItem
              url='https://nettobruno.github.io/article-preview/'
              image={imageProjectArticle}
              name='Front Challenge Article'
              links={true}
              githubUrl='https://github.com/nettobruno/article-preview'
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-clipboard/'
              image={imageProjectClipboard}
              name='Front Challenge Clipboard'
              links={true}
              githubUrl='https://github.com/nettobruno/clone-clipboard'
            />
            <ProjectItem
              url='https://conta-simples.vercel.app/'
              image={imageProjectContaSimples}
              name='Conta Simples'
              links={true}
              githubUrl='https://github.com/nettobruno/conta-simples'
            />
            <ProjectItem
              url='https://nettobruno.github.io/Clone-Flourish-Collective/'
              image={imageProjectFlourish}
              name='Clone Flourish Collective'
              links={true}
              githubUrl='https://github.com/nettobruno/Clone-Flourish-Collective'
            />
            <ProjectItem
              url='https://nettobruno.github.io/Healthy-Food/'
              image={imageProjectFood}
              name='Healthy Food'
              links={true}
              githubUrl='https://github.com/nettobruno/Healthy-Food'
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-fylo/'
              image={imageProjectFylo}
              name='Clone Fylo'
              links={true}
              githubUrl='https://github.com/nettobruno/clone-fylo'
            />
            <ProjectItem
              url='https://github.com/nettobruno/clone-huddle/'
              image={imageProjectHuddle}
              name='Clone Huddle'
              links={true}
              githubUrl='https://nettobruno.github.io/clone-huddle/'
            />
            <ProjectItem
              url='https://nettobruno.github.io/manage-clone/'
              image={imageProjectManage}
              name='Clone Huddle'
              links={true}
              githubUrl='https://github.com/nettobruno/manage-clone'
            />
            <ProjectItem
              url='https://nettobruno.github.io/clone-ping/'
              image={imageProjectPing}
              name='Clone Ping'
              links={true}
              githubUrl='https://github.com/nettobruno/clone-ping'
            />
            <ProjectItem
              url='https://nettobruno.github.io/puraAgua/'
              image={imageProjectPuraAgua}
              name='Pura Água'
              links={true}
              githubUrl='https://github.com/nettobruno/puraAgua'
            />
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
  );
}
