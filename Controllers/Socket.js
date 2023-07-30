import { Server } from "socket.io";

class Socket {
  constructor(server, opts) {
    this.socket = new Server(server, opts);

    this.initialize();
  }

  initialize() {
    this.socket.on("connect", () => {
      console.log("Socket connected");

      // Additional initialization logic if needed
    });

    this.socket.on("disconnect", () => {
      console.log("Socket disconnected");
      // Additional cleanup logic if needed
    });
  }

  emit(event, data) {
    this.socket.emit(event, data);
  }

  on(event, callback) {
    this.socket.on(event, callback);
  }

  off(event, callback) {
    this.socket.off(event, callback);
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export default Socket;
