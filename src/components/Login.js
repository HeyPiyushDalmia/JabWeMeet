import React from 'react'
import { Link } from 'react-router-dom'
import login_page from '../Assets/img/home_hero_image.jpg'
export default function Login() {
  return (
    <>
        <div className="grid md:grid-cols-2 min-h-screen w-full">
      <div className="flex items-center justify-center bg-primary text-primary-foreground">
        <div className="max-w-md space-y-6 px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Sign in to your account</h1>
            <p className="text-muted-foreground">Enter your email and password below to access your account.</p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="name@example.com" required />
            </div>
            <div>
              <div className="flex items-center justify mx-5">
                <label htmlFor="password">Password</label>
                <Link href="#" className="text-sm underline" prefetch={false}>
                  Forgot password?
                </Link>
              </div>
              <input id="password" type="password" required />
            </div>
            <button type="submit" className="w-full">
              Sign in
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <button className="p-x-5 text-red-600 text-bold">
            <Link to="/">
              Sign up
            </Link>
            </button>
       
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={login_page}
          alt="Login illustration"
          width={1920}
          height={1080}
          className="h-full w-full object-contain p-x-5"
          style={{ aspectRatio: "1920/1080", objectFit: "contain" }}
        />
      </div>
    </div>
    
    </>
  )
}
