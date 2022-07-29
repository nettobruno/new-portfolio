import teste from '../assets/eu.jpg';

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
        <div className='w-fullmax-w-[1400px] grid grid-cols-2'>
          <div className='flex justify-center'>
            <img src={teste} alt="" />
          </div>

          <div className='flex justify-center flex-col pl-8 pr-8'>
            <h3 className='text-5xl font-bold uppercase text-gray-600 mb-6'>Seja bem vindo(a)</h3>
            <p className='text-3xl leading-9 text-gray-500 mb-5'>Fico feliz que tenha chegado até minha página.</p>
            <p className='text-3xl leading-9	text-gray-500 mb-5'>Meu nome é Bruno, tenho 20 anos de idade e uma grande paixão por desenvolvimento. No final de 2019 me formei no curso técnico de Informática para Internet, foi lá que entendi o quanto a tecnologia pode ajudar e melhorar a vida das pessoas.</p>
            <p className='text-3xl leading-9 text-gray-500'>Desde então passo os meus dias estudando para que tenha um bom conhecimento.</p>
          </div>
        </div>
      </div>
    </>
  )
}
