import React from 'react';
import axios from 'axios'
const { useState, useEffect } = React;
import ModalTemplate from '../Modals/ModalTemplate.jsx'


const AdminGroup = ({group}) => {
  // console.log('group.groupPic:', group.groupPic)
  const [showModal, setShowModal] = useState(false);

  const handleNotificationClick = (e) =>{
    setShowModal(true)
  }



  return (
    <>
    {/* <div>
      {group.groupName}
    </div>
    <img className='w-20 h-20' src=
      {group.groupPic}></img> */}





{/* <div class="my-6 inline-flex relative w-fit">
  <div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-500 text-white rounded-full z-10">writing…</div>
  <div class="w-24 h-24">
    <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="h-full w-full max-w-full object-cover rounded-lg"/>
  </div>
</div> */}





















{/* <ModalTemplate></ModalTemplate> */}

<div class="flex justify-center">
  <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
    <div class="flex items-center gap-3 px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">


<div class="my-6 inline-flex relative w-fit">
  <div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-red rounded-full z-10">writing…</div>
  <div class="w-24 h-24">
    <img src={group.groupPic} class="h-full w-full max-w-full object-cover rounded-lg"/>
  </div>
</div>
    <div>
      {group.groupName}
    </div>
    </div>

  </div>
</div>
      {/* <div class="flex justify-center">
  <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
  <div

      class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
    >
      1st Admin Group
    </div>
    <div

      class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
    >
      2nd Admin Group
    </div>
    <div

      class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
    >
      3rd Admin Group
    </div>
    <div

      class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
    >
      4th Admin Group
    </div>
    <div
      class="
        text-left
        px-6
        py-2
        border-gray-200
        w-full
        rounded-b-lg
        focus:outline-none focus:ring-0
        text-gray-400
        cursor-default
      "
    >
      5th Admin Group
    </div>
  </div>
</div> */}
</>
  )
}

export default AdminGroup

//<div class="my-6 inline-flex relative w-fit">
{/* <div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-500 text-white rounded-full z-10">writing…</div>
<div class="w-24 h-24">
  <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="h-full w-full max-w-full object-cover rounded-lg">
</div>
</div> */}

//https://tailwind-elements.com/docs/standard/components/notifications/
//check out avatar notifications

//
{/* <button
type="button"
class="
  text-left
  px-6
  py-2
  border-b border-gray-200
  w-full
  hover:bg-gray-100 hover:text-gray-500
  focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
  transition
  duration-500
  cursor-pointer
"
>
4th Admin Group
</button> */}