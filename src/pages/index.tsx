/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import SurauList from '../components/SurauList'
import Image from 'next/image'
import Head from 'next/head'
import Modal from '../components/shared/Modal'
import { useState } from 'react'
import AddSurauForm from '../components/AddSurauForm'
import SearchBar from '../components/SearchBar'


export default function Index() {

  const [openAddSurauForm, setOpenAddSurauForm] = useState(false)

  return (
    <>
      <Head>
        <title>ratemysurau</title>
      </Head>
      <div className="bg-white">
        {/* Hero section */}
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <Image
              src="/sejadah.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              width={1920}
              height={1080}
              priority
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

          {/* Navigation */}
          <header className="relative z-10">
            <nav aria-label="Top">
              {/* Top navigation */}

              {/* Secondary navigation */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div>
                    <div className="flex h-16 items-center justify-between">
                      {/* Logo (lg+) */}
                      <div className="hidden lg:flex lg:flex-1 lg:items-center">
                        <a href="#">
                          <Image
                            src="/assets/logo/homepage_bar_logo.png"
                            alt="homepagebarlogo"
                            width={100}
                            height={100}
                          />
                        
                        </a>
                      </div>

                      {/* Mobile menu and search (lg-) */}
                      {/* Logo (lg-) */}
                      <a href="#" className="lg:hidden">
                      <Image
                            src="/assets/logo/homepage_bar_logo.png"
                            alt="homepagebarlogo"
                            width={100}
                            height={100}
                          />
                        
                      </a>

                      <div className="flex flex-1 items-center justify-end">
                        <Link href="#" className="hidden text-sm font-medium text-white lg:block">
                          Sign in
                        </Link>

                        <div className="flex items-center lg:ml-8">
                          {/* Help */}
                          <Link href="#" className="text-sm font-medium text-white lg:hidden ">
                            Sign in
                          </Link>
                          <a href="#" className="p-2 text-white lg:hidden">
                            <span className="sr-only">Help</span>
                            <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                          </a>
                          <a href="#" className="hidden text-sm font-medium text-white lg:block">
                            Help
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </nav>
          </header>

          <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Ratemysurau.com</h1>
            <p className="mt-4 text-xl text-white">
              Rate, Review, and Connect with Your Local Surau: Your Ultimate Resource for Islamic Worship!
            </p>
            <SearchBar />
            <p className="font-extralight text-white text-xs mt-2 md:text-lg italic z-0">Can`t find your Surau? <span className="underline" onClick={() => setOpenAddSurauForm(true)}>Add here</span></p>
          </div>
        </div>
        <Modal open={openAddSurauForm} setOpen={setOpenAddSurauForm}>
          <AddSurauForm setOpen={setOpenAddSurauForm} />
        </Modal>
        <main>
          {/* Category section */}
          <section aria-labelledby="category-heading" className="pt-12 sm:pt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Recently added
              </h2>
            </div>
            <SurauList />
          </section>


        </main>
      </div>
    </>
  )
}
