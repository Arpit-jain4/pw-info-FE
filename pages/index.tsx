import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from '../components/Card'


const Home: NextPage = () => {
  const router = useRouter();
  return (<>
    <div className='flex flex-col justify-center gap-5 items-center content-center h-screen' >
    <div className='text-xl md:text-5xl mb-10 lg:mb-20 font-semibold text-center'>Welcome to Physics Wallah info bulletin</div>
      
      <div className='flex justify-center gap-0 md:gap-24 p-2'>
        <div onClick={() => router.push('/centers/pathshala')}>
        <Card name='Pathshala' icon='/images/logo.png' />
        </div>
      
        <div onClick={() => router.push('/centers/vidyapeeth')}>
        <Card name='Vidyapeeth' icon='/images/logo.png'/>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Home
