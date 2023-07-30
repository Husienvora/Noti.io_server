import Socket from "./Controllers/Socket.js";
import { Send } from "./Controllers/Control.js";

class Noti {
  constructor(server, opts) {
    this.socket = new Socket(server, opts);
  }
  Send(data) {
    Send(this.socket, data);
  }
}
export { Noti };
