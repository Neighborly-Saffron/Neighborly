import React, { useState } from 'react';

const GroupChatInput = ({ socket, userData, groupId }) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', {value: value, name: `${userData.given_name} ${userData.family_name}`, groupId: groupId});
    setValue('');
  };

  return (
    <>
      <form className='w-full space-x-3 flex justify-between' onSubmit={submitForm}>
        <input
          className='w-full p-1 my-2 rounded border-2 border-lightgray'
          autoFocus
          value={value}
          placeholder='Type your message'
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
        <button className="mt-1.5 border-2 bg-darkerblue hover:bg-lighterblue text-white hover:text-darkerblue hover:border-darkerblue h-10 px-2 rounded cursor-pointer">Send</button>
      </form>
    </>
  );
};

export default GroupChatInput;
