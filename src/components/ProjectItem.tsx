import { GithubLogo, Link } from 'phosphor-react'

interface Props {
  url: string
  image: any
  name: string
  links: boolean
  githubUrl?: string
}

export default function ProjectItem(props: Props) {
  return (
    <a
      href={props.url}
      target='_blank'
      className='group relative transition duration-500 ease-in-out hover:scale-[1.1] hover:bg-blackOpacity-800 hover:z-10'
    >
      <img src={props.image} alt='' className='w-full h-full' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-transparent p-5 hover:bg-blackOpacity-800 hover:text-white'>
        <p className='text-4xl text-bold text-center'>{props.name}</p>
        {props.links && (
          <div className='hidden justify-center z-20 group-hover:flex'>
            <a
              href={props.githubUrl}
              target='_blank'
              className='bg-white rounded-full p-2 m-4 transition duration-500 ease-in-out hover:scale-125'
            >
              <GithubLogo size={34} color='#7732E6' />
            </a>

            <a
              href={props.url}
              target='_blank'
              className='bg-white rounded-full p-2 m-4 transition duration-500 ease-in-out hover:scale-125'
            >
              <Link size={34} color='#7732E6' />
            </a>
          </div>
        )}
      </div>
    </a>
  )
}
