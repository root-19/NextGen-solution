import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { Mail, Send, Pencil } from "lucide-react";

const socket = io("http://localhost:5000");

function Messages() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [newMessage, setNewMessage] = useState({ sender: "", recipient: "", subject: "", content: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/messages").then((res) => setEmails(res.data));

    socket.on("newMessage", (message) => {
      setEmails((prev) => [message, ...prev]);
    });

    return () => socket.off("newMessage");
  }, []);

  const sendMessage = () => {
    axios.post("http://localhost:5000/send-message", newMessage).then(() => {
      setNewMessage({ sender: "", recipient: "", subject: "", content: "" });
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-center text-3xl font-bold mb-4">Inbox</h1>

      <div className="flex border shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 bg-gray-100 p-4 border-r h-96 overflow-y-auto">
          <button className="flex items-center gap-2 bg-green-600 text-white w-full py-2 rounded-lg mb-4 hover:bg-green-700"
            onClick={() => setSelectedEmail(null)}>
            <Pencil size={18} /> Compose
          </button>

          {emails.map((email) => (
            <div key={email.id} className={`p-3 cursor-pointer rounded-lg hover:bg-gray-200 ${selectedEmail?.id === email.id ? "bg-gray-300" : ""}`}
              onClick={() => setSelectedEmail(email)}>
              <p className="font-bold text-green-600">{email.sender}</p>
              <p className="text-sm">{email.subject}</p>
              <p className="text-xs text-gray-500">{email.created_at}</p>
            </div>
          ))}
        </div>

        <div className="w-2/3 p-6 h-96 overflow-y-auto">
          {selectedEmail ? (
            <div>
              <h2 className="text-xl font-bold">{selectedEmail.subject}</h2>
              <p className="text-sm text-gray-500">From: {selectedEmail.sender}</p>
              <hr className="my-2" />
              <p>{selectedEmail.content}</p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-2">Compose Email</h2>
              <input type="email" className="w-full p-2 border rounded-lg mb-2" placeholder="To"
                value={newMessage.recipient} onChange={(e) => setNewMessage({ ...newMessage, recipient: e.target.value })} />
              <input type="text" className="w-full p-2 border rounded-lg mb-2" placeholder="Subject"
                value={newMessage.subject} onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })} />
              <textarea className="w-full p-2 border rounded-lg mb-2" rows="5" placeholder="Write your message..."
                value={newMessage.content} onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}></textarea>
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                onClick={sendMessage}>
                <Send size={18} /> Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;
