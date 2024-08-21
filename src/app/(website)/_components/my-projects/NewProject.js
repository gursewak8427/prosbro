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
                <DialogPanel className="flex gap-8 max-w-xl flex-col p-6 bg-white rounded-xl overflow-hidden relative">
                  <svg
                    onClick={() => { setIsModalOpen(false); setOption({ option1: false, option2: false }); setConfirm(false); }}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="absolute top-4 right-4 z-10 h-6 w-6 cursor-pointer"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>
                  <DialogTitle as="h3" className="text-xl font-bold text-left leading-6 text-gray-900">
                    Add a New Project
                  </DialogTitle>
                  <div className="">
                    <div
                      className={`flex w-full cursor-pointer flex-col space-y-2 rounded-lg border p-5 text-center bg-white  ${option.option1 ? 'bg-primary-soft border border-primary' : ''}  duration-200 w-full mb-4`}
                      onClick={() => {
                        setOption({ option1: true, option2: false });
                        setConfirm(true);
                      }}
                    >
                      <h4 className="text-lg font-[500]">Add customer yourself</h4>
                      <p className="text-base">Fill out the form for your customers</p>
                    </div>
                    <div
                      className={`flex w-full cursor-pointer flex-col space-y-2 rounded-lg border p-5 text-center bg-white  ${option.option2 ? 'bg-primary-soft border border-primary' : ''}  duration-200 w-full mb-4`}
                      onClick={() => {
                        setOption({ option1: false, option2: true });
                        setConfirm(true);
                      }}
                    >
                      <h4 className="text-lg font-[500]">Share magic link <span className='bg-green-200 text-sm p-1 rounded-xl px-2 text-green-600'>New</span></h4>
                      <p className="text-base">Share a link to allow customers to fill out the form themself with their contact information.</p>
                    </div>
                  </div>
                  <div class="flex justify-center gap-4">
                    <button
                      className="flex items-center cursor-pointer rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row pl-4 pr-4 py-3 text-base gap-2 justify-center border-2 border-primary text-primary hover:bg-primary-soft w-full" type="button" data-headlessui-state=""
                      onClick={() => { setIsModalOpen(false); setOption({ option1: false, option2: false }); setConfirm(false); }}
                    >
                      Cancel
                    </button>
                    <button
                      className={`flex items-center rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row pl-4 pr-4 py-3 text-base gap-2 justify-center w-full ${!confirm ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-primary text-white hover:bg-primary-dark cursor-pointer"}`} type="button" data-headlessui-state=""
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