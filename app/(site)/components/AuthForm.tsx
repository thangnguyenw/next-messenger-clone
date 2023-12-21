'use client'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

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
        </div>
    </div>
  )
}
