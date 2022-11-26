import React from 'react';

const { useState, useEffect } = React;

function GroupChat ({ socket, userData, groupId }) {
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
        .map((message) => {
          if (message.groupId === groupId) {
            if (message.user === `${userData.given_name} ${userData.family_name}`) {
              return (
                <div
                  key={message.id}
                  className=""
                  title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
                >
                  <span className="font-bold">You </span>
                  <span className="">{new Date(message.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} </span>
                  <span className="">{message.value}</span>
                </div>
              )
            } else {
              return (
                <div
                  key={message.id}
                  className=""
                  title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
                >
                  <span className="font-bold">{message.user || message.user.name} </span>
                  <span className="text-gray-400">{new Date(message.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} </span>
                  <span className="">{message.value}</span>
                </div>
              )
            }
          }
        })
      }
      </div>
    </div>
  )
}

export default GroupChat;