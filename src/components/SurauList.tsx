import Image from "next/image"
import { useRouter } from "next/router"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const suraus = [
  {
    id: 1,
    location: 'WP Kuala Lumpur',
    href: '#',
    name: 'Surau KLCC',
    imageSrc: '/klcc.jpeg',
    imageAlt: '..',
  },
  {
    id: 2,
    location: 'Putrajaya',
    href: '#',
    name: 'Surau IOI City Mall',
    imageSrc: '/ioi.jpeg',
    imageAlt: '..',
  },
  {
    id: 3,
    location: 'Cyberjaya',
    href: '#',
    name: 'Surau Shell Cyberjaya',
    imageSrc: '/shell.jpeg',
    imageAlt: '..',
  },
  {
    id: 4,
    location: 'Seremban',
    href: '#',
    name: 'Surau Petronas R&R Seremban',
    imageSrc: '/petronas.jpeg',
    imageAlt: '..',
  },
  // More products...
]

export default function SurauList() {

  const router = useRouter()

  const transformUrl = (surauName: string) => {
    return surauName.replace(/\s/g, '-').toLocaleLowerCase()
  }

  const handleRouterPush = (e: React.FormEvent, surauName: string) => {
    e.preventDefault()
    void router.push(`/surau/${transformUrl(surauName)}`)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Surau</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {suraus.map((surau) => (
            <a key={surau.id} href={surau.href} className="group">
              <div className=" w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1" onClick={(e) => handleRouterPush(e, surau.name)}>
                <Image
                  src={surau.imageSrc}
                  alt={surau.imageAlt}
                  className="h-full w-full object-fill object-center group-hover:opacity-75"
                  width={500}
                  height={200}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{surau.location}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{surau.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
