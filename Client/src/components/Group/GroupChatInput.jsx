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
        <form onSubmit={submitForm}>
          <input
            className='w-full p-1 my-2'
            autoFocus
            value={value}
            placeholder="Type your message"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default GroupChatInput;
