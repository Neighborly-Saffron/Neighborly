import React from 'react';

const { useState, useEffect } = React;

function GroupChat ({ socket }) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
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

  return (
    <div className="">
      <h2>GROUP CHAT</h2>
      <div className="">
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div
            key={message.id}
            className=""
            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
          >
            <span className="">{new Date(message.time).toLocaleTimeString()} </span>
            <span className="">{message.user || message.user.name}: </span>
            <span className="">{message.value}</span>
          </div>
        ))
      }
    </div>

    </div>
  )
}

export default GroupChat;