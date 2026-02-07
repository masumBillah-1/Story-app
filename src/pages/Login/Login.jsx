import React from 'react';
import loginImg from '../../assets/login.png'

const Login = () => {
  return (
    <div className="flex h-screen w-full font-sans">
     
      <div className="relative hidden w-1/2 lg:block">
        <img 
          src={loginImg} 
          alt="Writing" 
          className="h-full w-full object-cover"
        />
       
          
      </div>

      <div className="flex flex-col justify-center w-full px-8 md:px-24 lg:w-1/2 bg-white">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-4xl font-serif font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 mt-2 mb-8">Continue your story where you left off.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  ✉️
                </span>
                <input 
                  type="email" 
                  placeholder="e.g. writer@storyflow.com" 
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  🔒
                </span>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="stay" className="rounded border-slate-300" />
              <label htmlFor="stay" className="text-sm text-slate-600">Stay signed in for 30 days</label>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex justify-center items-center gap-2">
              Sign In <span>→</span>
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-4 text-xs text-slate-400 uppercase tracking-widest font-semibold">Or continue with</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <span className="text-lg">G</span> <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <span className="text-lg">🍎</span> <span className="text-sm font-medium">Apple</span>
              </button>
            </div>

            <p className="mt-8 text-sm text-slate-600">
              Don't have an account? <a href="#" className="text-blue-600 font-bold hover:underline">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;