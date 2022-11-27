import React from 'react';

const { useState, useEffect } = React;

function GroupChatMessages ({ socket, userData, groupId }) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        updateScroll();
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[messageID];
        return newMessages;
      });
    };

    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  const updateScroll = () => {
    let element = document.getElementById('chatBox');
    element.scrollTop = element.scrollHeight;
  }

  let messageDiv;
  messageDiv = [...Object.values(messages)]
    .sort((a, b) => a.time - b.time)
    .map((message) => {
      if (message.groupId === groupId) {
        if (message.user === `${userData.given_name} ${userData.family_name}`) {
          return (
            <div
              key={message.id}
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <span className='text-darkgrey text-sm'>{new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </span>
              <span className='font-bold'>You: </span>
              <span className='text-darkgrey'>{message.value}</span>
            </div>
          )
        } else {
          return (
            <div
              key={message.id}
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <span className='text-darkgrey text-sm'>{new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </span>
              <span className='font-bold capitalize'>{message.user || message.user.name}: </span>
              <span>{message.value}</span>
            </div>
          )
        }
      }
    })


  return (
    <>
      <h2 className='my-2'>Chat</h2>
      <div id='chatBox' className='h-44 p-2 overflow-y-auto flex flex-col bg-white'>
      {messageDiv.length > 0 ? messageDiv : <div className='italic text-darkgrey'> Start a conversation </div>
      }
      </div>
    </>
  )
}

export default GroupChatMessages;