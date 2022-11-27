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
      <form onSubmit={submitForm}>
        <input
          className='w-full border-2 border-lighterblue p-1'
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
