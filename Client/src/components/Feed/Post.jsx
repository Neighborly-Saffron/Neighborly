import React from 'react';

const { useState, useEffect } = React;

function Post() {
  return (
    <div className="border-2 m-2 border-black bg-blue-700">
      <div className="flex">
        <div className="aspect-square h-20 w-20 border-2 border-black text-xs text-center m-1 bg-white">img</div>
        <div className="flex flex-col p-3">
          <h3 className="italic text-white">Group Name</h3>
          <h3 className="italic text-red-500">User Name</h3>
          <p className="text-white">Dummy post text. Some more dummy post text. Lots of dummy post text.Dummy post text. Some more dummy post text. Lots of dummy post text.Dummy post text. Some more dummy post text. Lots of dummy post text.Dummy post text. Some more dummy post text. Lots of dummy post text. Dummy post text. Some more dummy post text. Lots of dummy post text.Dummy post text. Some more dummy post text. Lots of dummy post text.Dummy post text. Some more dummy post text. Lots of dummy post text.Dummy post text. Some more dummy post text. Lots of dummy post text.</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="h-6 w-6 border-2 border-black m-1 bg-red-500"></div>
        <div className="h-6 w-6 border-2 border-black m-1 bg-red-500"></div>
        <div className="h-6 w-6 border-2 border-black m-1 bg-red-500"></div>
        <div className="h-6 w-6 border-2 border-black m-1 bg-red-500"></div>
      </div>
    </div>
  )
}

export default Post;