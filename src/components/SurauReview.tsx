import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import SurauOverview from './SurauOverview'
import { useEffect, useState } from 'react'
import ReviewSurauFormModal from './ReviewSurauFormModal'
import { api } from "../utils/api";
import { useRouter } from "next/router";
import Modal from './shared/Modal'
import ReviewSurauForm from './ReviewSurauForm'
import { capitalizeFirstLetter } from '../utils'

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>I think this surau is the best surau I've ever visited</p>
      `,
      author: 'Farhan Helmy',
      avatarSrc:
        'https://api.dicebear.com/5.x/thumbs/svg?seed=Lucky',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>I think this surau is the best surau I've ever visited</p>
      `,
      author: 'Farhan Helmy',
      avatarSrc:
        'https://api.dicebear.com/5.x/thumbs/svg?seed=Lucky',
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>I think this surau is the best surau I've ever visited</p>
      `,
      author: 'Farhan Helmy',
      avatarSrc:
        'https://api.dicebear.com/5.x/thumbs/svg?seed=Lucky',
    },
    {
      id: 4,
      rating: 5,
      content: `
        <p>I think this surau is the best surau I've ever visited</p>
      `,
      author: 'Farhan Helmy',
      avatarSrc:
        'https://api.dicebear.com/5.x/thumbs/svg?seed=Lucky',
    },
    // More reviews...
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const SurauReview = () => {
  const [open, setOpen] = useState(false)
  const [uniqueName, setUniqueName] = useState<string>("")

  const router = useRouter();
  const surau = api.surau.getSurau.useQuery({
    unique_name: uniqueName,
  })

  useEffect(() => {
    if (router.query.id) {
      setUniqueName(router.query.id as string)
    }
  }, [router.query.id])

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <ReviewSurauForm setOpen={setOpen} surauName={capitalizeFirstLetter(surau.data?.name as string)} />
      </Modal>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-18 mt-8 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8">

          <div className="lg:col-span-4">
            {surau.data ? <SurauOverview surau={surau.data} /> : <div>Loading...</div>}

            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Reviews</h2>

            <div className="mt-3 flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                        'flex-shrink-0 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
              <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {reviews.counts.map((count) => (
                  <div key={count.rating} className="flex items-center text-sm">
                    <dt className="flex flex-1 items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {count.rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                        <StarIcon
                          className={classNames(
                            count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                            'flex-shrink-0 h-5 w-5'
                          )}
                          aria-hidden="true"
                        />

                        <div className="relative ml-3 flex-1">
                          <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                          {count.count > 0 ? (
                            <div
                              className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                              style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                      {Math.round((count.count / reviews.totalCount) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
              <p className="mt-1 text-sm text-gray-600">
                If you’ve been / went to this surau, write a review and post some pictures.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
              >
                Write a review
              </button>
            </div>
          </div>

          <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <h3 className="sr-only">Recent reviews</h3>

            <div className="flow-root">
              <div className="divide-y divide-gray-200 max-h-screen overflow-auto">
                {reviews.featured.map((review) => (
                  <div key={review.id} className="py-8">
                    <div className="flex items-center">
                      <Image src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" width={12} height={12} />
                      <div className="ml-4">
                        <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                        <div className="mt-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">{review.rating} out of 5 stars</p>
                      </div>
                    </div>

                    <div
                      className="mt-4 space-y-6 text-base italic text-gray-600"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                    <div className="space-x-2">
                      <img
                        className="inline-block h-14 w-14 rounded-md mt-4"
                        src="/klcc.jpeg"
                        alt=""
                      />
                      <img
                        className="inline-block h-14 w-14 rounded-md mt-4"
                        src="/klcc.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SurauReview