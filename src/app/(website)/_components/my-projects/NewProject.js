import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProject({ isModalOpen, setIsModalOpen }) {
  const router = useRouter();
  const [option, setOption] = useState({ option1: false, option2: false });
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setOption({ option1: false, option2: false });
    setConfirm(false);
  }, [])
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => { setIsModalOpen(false); setOption({ option1: false, option2: false }); setConfirm(false); }}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Add New Project
                  </DialogTitle>
                  <div className="mt-4 p-2 ">
                    <div
                      className={`p-4 text-center  cursor-pointer text-black rounded-lg border border-indigo-600  ${option.option1 ? 'bg-blue-100' : ''}  duration-200 w-full mb-4`}
                      onClick={() => {
                        setOption({ option1: true, option2: false });
                        setConfirm(true);
                      }}
                    >
                      <h4 className="text-xl font-semibold mb-2">Add customer yourself</h4>
                      <p className="text-sm">Fill out the form for your customers</p>
                    </div>
                    <div
                      className={`p-4 text-center cursor-pointer text-black rounded-lg border border-indigo-600 duration-200 w-full mb-4 ${option.option2 ? 'bg-blue-100' : ''}`}
                      onClick={() => {
                        setOption({ option1: false, option2: true });
                        setConfirm(true);
                      }}
                    >
                      <h4 className="text-xl font-semibold mb-2">Share magic link</h4>
                      <p className="text-sm">Share a link to allow customers to fill out the form themself with their contact information.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between gap-2">
                    <button
                      type="button"
                      className="w-1/2 inline-flex justify-center rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium bg-white text-black hover:bg-indigo-700 hover:text-white focus:outline-none"
                      onClick={() => { setIsModalOpen(false); setOption({ option1: false, option2: false }); setConfirm(false); }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className={`w-1/2 inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium  focus:outline-none ${confirm ? 'bg-indigo-700 border-indigo-700 hover:bg-indigo-800 text-white cursor-pointer' : 'bg-gray-300 text-gray-400 cursor-not-allowed'} `}
                      disabled={!confirm}
                      onClick={() => {
                        router.push('/my-projects/new/project-creation')
                      }}
                    >
                      Confirm
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}