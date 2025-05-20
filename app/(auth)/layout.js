'use client';
import React from 'react'

const AuthLayout = ({children}) => {
    console.log("AuthLayout rendered");
  return (
    
    <div className='flex justify-center pt-40'>{children}</div>
  );
};

export default AuthLayout