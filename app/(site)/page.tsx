import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
  return (
    <div className='sm:mx-auto sm:w-full sm:max-w-md'>
      <Image className='mx-auto w-auto' alt='logo' height='48' width='48' src='/images/logo.png'></Image>
      <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Sign in to your account</h2>
      <AuthForm/>
    </div>
  )
}
