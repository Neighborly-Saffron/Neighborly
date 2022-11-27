import React from 'react';
const ModalTemplate = () => {

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white border-2 sm:mx-0 sm:h-10 sm:w-10">
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Modal Template</h3>
              <div className="mt-2">
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lighterblue px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-lightergreen px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-darkerblue focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Another button</button>
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">A button</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalTemplate;