/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/r3KEd0gZhgI
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "@remix-run/react"
import { SVGProps, useState } from "react"
import { JSX } from "react/jsx-runtime"

export function Signin() {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username or Email</Label>
          <Input id="username" placeholder="Enter your username or email" required type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input id="password" placeholder="Enter your password" required type={isShow ? "text" : "password"} />
            <Button onClick={() => setIsShow((show) => show ? false : true)} className="absolute inset-y-0 right-0 rounded-r-md" size="icon" variant="ghost">
              <EyeIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            className="text-sm font-medium underline underline-offset-4 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:focus:ring-gray-300"
            to="#"
          >
            Forgot Password?
          </Link>
          <Button className="shrink-0" type="submit">
            Sign In
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        Don't have an account? 
        <Link
          className="pl-1 font-medium underline underline-offset-4 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

function EyeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
