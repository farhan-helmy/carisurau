import type { FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signIn } from "next-auth/react";

type SignInProps = {
  setOpenSignInModal: (value: boolean) => void;
  openSignInModal: boolean;
  message: string;
  callbackUrl: string;
};

const SignIn: FC<SignInProps> = ({
  setOpenSignInModal,
  openSignInModal,
  message,
  callbackUrl,
}) => {
  return (
    <Transition.Root show={openSignInModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenSignInModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-0 overflow-y-auto">
          <div className="mt-36 flex items-end justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg shadow-xl transition-all">
                <div className="mx-auto max-w-7xl">
                  <div className="relative isolate overflow-hidden rounded-xl bg-gray-900 p-12 text-center shadow-2xl">
                    <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
                      {message}
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 italic">
                      Sign in and earn contribution point!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <button
                        onClick={() =>
                          void signIn("google", { callbackUrl: callbackUrl })
                        }
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Sign in with Google
                      </button>
                      <button
                        onClick={() => setOpenSignInModal(false)}
                        className="text-sm font-semibold leading-6 text-white"
                      >
                        Cancel
                      </button>
                    </div>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                      aria-hidden="true"
                    >
                      <circle
                        cx={512}
                        cy={512}
                        r={512}
                        fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                        fillOpacity="0.7"
                      />
                      <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                          <stop stopColor="#7775D6" />
                          <stop offset={1} stopColor="#E935C1" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignIn;
