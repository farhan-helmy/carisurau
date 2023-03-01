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
import AddSurauFormModal from '../components/AddSurauFormModal'
import { useState } from 'react'


const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]
const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Index() {

  const [openAddSurauForm, setOpenAddSurauForm] = useState(false)

  return (
    <>
      <Head>
        <title>Ratemysurau</title>
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
                          <span className="sr-only">Ratemysurau</span>
                          <h1 className="font-bold text-2xl text-white tracking-wide">RateMySurau</h1>
                        </a>
                      </div>

                      {/* Mobile menu and search (lg-) */}
                      {/* Logo (lg-) */}
                      <a href="#" className="lg:hidden">
                        <span className="sr-only">RateMySurau</span>
                        <h1 className="font-bold text-xs text-white tracking-wide">RateMySurau</h1>
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
            <input
              type="text"
              placeholder="Search for a Surau"
              className="mt-8 rounded-md border border-transparent bg-white py-3 w-full px-2  text-base font-medium text-gray-900 hover:bg-gray-100"
            />
            <p className="font-extralight text-white text-xs mt-2 md:text-lg italic">Can`t find your Surau? <span className="underline" onClick={() => setOpenAddSurauForm(true)}>Add here</span></p>
          </div>
        </div>
        <AddSurauFormModal open={openAddSurauForm} setOpen={setOpenAddSurauForm} />
        <main>
          {/* Category section */}
          <section aria-labelledby="category-heading" className="pt-12 sm:pt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Recently reviewed
              </h2>
            </div>
            <SurauList />
          </section>


        </main>
      </div>
    </>
  )
}
