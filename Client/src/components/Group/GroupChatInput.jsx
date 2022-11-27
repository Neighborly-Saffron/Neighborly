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
      <div>
        <form className='w-full space-x-3' onSubmit={submitForm}>
          <input
            className='w-4/5 p-1 my-2'
            autoFocus
            value={value}
            placeholder='Type your message'
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          <button className="border-2 bg-darkerblue hover:bg-lighterblue text-white rounded px-1.5 cursor-pointer">Send</button>
        </form>
      </div>
    </>
  );
};

export default GroupChatInput;
