import React, { useState, FormEvent } from 'react';
import Navbar from './Navbar';
import './index.css';

type LoginProps = {
  onLogin: (token: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ...rest of the handleLogin function
  };

  return (
  <div>
  <Navbar />
   <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/bg.jpg')` }}>
        <div className="flex justify-center items-center h-full">
          <div className="max-w-md w-full space-y-8 border p-8 shadow-lg bg-white">
          <h2 className="text-center text-3xl font-light text-gray-900">
            Sign in to your account
          </h2>
{/*           <div className="text-center">
              <a href="/" className="text-black text-9xl font-semibold mt-4 mb-4">
                <i>FH</i>
              </a>
           </div> */}
           <form className="space-y-6" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="username" className="sr-only">
                          Username
                        </label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          required
                          className="appearance-none -none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 -t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-4"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none -none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 -b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 "
                        />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
          {errorMessage && (
            <div className="mt-2 text-center text-sm text-red-600">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
      </div>
      </div>
  );
};

export default Login;
