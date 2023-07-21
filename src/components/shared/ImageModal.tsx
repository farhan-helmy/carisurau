import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import React, { FC } from "react";

import { XCircleIcon } from "@heroicons/react/20/solid";

type ModalProps = {
  open: boolean;
  url: string;
  onClose: () => void;
};

const ImageModal: FC<ModalProps> = ({ open, onClose, url }) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black opacity-75"
              onClick={onClose}
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative z-10 p-4 sm:p-0">
              <Image
                alt="logoratemysurau"
                width={500}
                height={300}
                className="rounded-xl"
                priority
                src={url}
              />
              <button className="absolute top-6 right-6 flex justify-center sm:top-2 sm:right-2">
                <XCircleIcon
                  className="h-6 w-6 self-end text-white hover:text-slate-900"
                  onClick={onClose}
                />
              </button>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ImageModal;
