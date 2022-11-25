import React, { useState } from 'react';

const GroupChatInput = ({ socket, userData }) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', {value: value, name: userData.name});
    setValue('');
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          className='w-full'
          autoFocus
          value={value}
          placeholder="Type your message"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
      </form>
    </>
  );
};

export default GroupChatInput;
