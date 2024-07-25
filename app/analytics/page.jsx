"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation"


const Analytics = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      router.push('/analytics-page');
      setError('');
    } 
    else if (username === 'AdbotLicorera' && password === 'Adbot1001' || username === 'Licorera' && password === 'TheGutMedia1001') {
      setIsLoggedIn(true);
      router.push('/fotos-licorera');
      setError('');
    }
    else {
      setError('Contraseña o usuario incorrectos');
      setIsLoggedIn(false);
    }
  }

  return (
    <div className='mt-20 w-full h-screen'>
        <div className='flex flex-col gap-4 items-center justify-center pt-20'>
          <form onSubmit={handleLogin} className='flex flex-col gap-4 items-center w-60'>
            <label className="flex justify-start w-full text-md font-bold text-black font-inter">Usuario</label>
            <input
              type="text"
              placeholder="Juan"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <label className="flex justify-start w-full text-md font-bold text-black font-inter">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <button type="submit" className='w-full p-2 bg-dark-grayish hover:bg-greenish text-white rounded-md font-inter'>Iniciar sesión</button>
            {error && <p className='text-red-500 text-center'>{error}</p>}
          </form>
        </div>
    </div>
  );
}

export default Analytics;
