import { useRouter } from "next/router"

export default function SurauOverview() {
const router = useRouter()
  return (
    <>
      <div className="flex flex-col mb-4">
        <button className="text-left underline text-indigo-500" onClick={() => void router.push("/")}>Go back</button>
        <div className="text-left font-light text-3xl">
          Surau KLCC
        </div>
        <img
          className="rounded-lg"
          src="/klcc.jpeg"
          alt=""
        />
        <div className="space-x-2 flex items-center justify-center overflow-auto">
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />
          <img
            className="inline-block h-14 w-14 rounded-md mt-2"
            src="/klcc.jpeg"
            alt=""
          />

        </div>
      </div>
    </>
  )

}
