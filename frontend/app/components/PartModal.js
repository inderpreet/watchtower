'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon, PlusIcon} from '@heroicons/react/24/outline'

function Input1({
  label, onChange
}) {
  return (
    <div className='grid py-1'>
      <div className="text-sm text-gray-500 px-2 py-2">{label}</div> 
    <input onChange={onChange} className='w-full py-2 px-2 text-gray-600 bg-white border border-gray-400 focus:border-red-400 focus:outline-none rounded'/>
  </div>
  )
}

function onChange(e) {
  console.log(e.target.value)
}

export default function PartModal({open, setOpen}) {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <PlusIcon aria-hidden="true" className="size-6 text-blue-600" />
                </div>
                <div className="mt-3 text-center w-full sm:mr-4 sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Create New Part
                  </DialogTitle>
                  <div className="mt-2">
                    <Input1 label={'Part Name'} onChange={onChange}/>
                    <Input1 label={'Category'} onChange={onChange} />
                    <Input1 label={'Description'} />
                    <Input1 label={'Price'} />
                    <Input1 label={'Datasheet URL'} />
                    <Input1 label={'Mfg Part No.'} />
                    <Input1 label={'URL1'} />
                    <Input1 label={'URL2'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Create
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
