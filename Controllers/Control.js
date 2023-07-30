const Send = (socket, data) => {
  socket.emit("recieve", data);
};

export { Send };
