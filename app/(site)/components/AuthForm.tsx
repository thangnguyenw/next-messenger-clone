'use client'
import Input  from '../../components/input/Input';
import Button  from '../../components/Button';
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import {BsGoogle, BsGithub } from 'react-icons/bs';
type Variant = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(()=> {
    variant === 'LOGIN' ? setVariant('REGISTER') : setVariant('LOGIN');
  }, [variant]);
  
  const {register, handleSubmit, formState: {
    errors
  }} = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'REGISTER') {
      // Axios Register
    }
    if (variant === 'LOGIN') {
      // NextAuth Sign In
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);
    // NextAuth Social Sign In
  }

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && <Input id='name' register={register} errors={errors} label='Name' disabled={isLoading}/>
          }
          <Input id='email' register={register} errors={errors} type='email' label='Email Address' disabled={isLoading}/>
          <Input id='password' register={register} errors={errors} type='password' label='Password' disabled={isLoading}/>
          <div>
            <Button disabled={isLoading} fullWidth type='submit'>
              {variant === 'LOGIN'? 'Sign In': 'Register'}
            </Button>
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'/>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className='bg-white text-gray-500 px-2'>
                Or continue with
              </span>
            </div>
          </div>
          <div className='flex mt-6 gap-2'>
            <AuthSocialButton icon={BsGithub} onClick={()=>socialAction('GITHUB')} />
            <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('GOOGLE')} />
          </div>
        </div>
        <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-grap-500'>
          <div>
            {variant === 'LOGIN' ? 'New to Messenger' : 'Already have am account'}
          </div>
          <div onClick={toggleVariant} className='underline cursor-pointer'>{
            variant === 'LOGIN' ? 'Create an account' : 'Login'
          }</div>
        </div>
      </div>
    </div>
  )
}
