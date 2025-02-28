import { useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

function Messages() {
  const [newMessage, setNewMessage] = useState({
    sender: "",
    subject: "",
    content: "",
  });

  const [error, setError] = useState("");

  // Email Validation
  const validateEmail = (email) => {
    if (!email.endsWith("@gmail.com")) {
      setError("Email must end with @gmail.com");
    } else {
      setError("");
    }
    setNewMessage({ ...newMessage, sender: email });
  };

  // Send Message Function
  const sendMessage = () => {
    if (error || newMessage.sender === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: error || "Please enter an email.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    axios
    .post("https://nextgen-backend-1.onrender.com/api/send-message", newMessage, {
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setNewMessage({ sender: "", subject: "", content: "" });

        // Success Alert
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your email has been successfully sent.",
          confirmButtonColor: "#30d685",
        });
      })
      .catch(() => {
        // Error Alert
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to send message. Please try again.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Compose Email
        </h2>

        {/* Sender Email Input */}
        <input
          type="email"
          className={`w-full p-3 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg mb-2 focus:ring-2 focus:ring-green-500 outline-none`}
          placeholder="Your Email (must end with @gmail.com)"
          value={newMessage.sender}
          onChange={(e) => validateEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Subject Input */}
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Subject"
          value={newMessage.subject}
          onChange={(e) =>
            setNewMessage({ ...newMessage, subject: e.target.value })
          }
        />

        {/* Message Input */}
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-green-500 outline-none"
          rows="5"
          placeholder="Write your message..."
          value={newMessage.content}
          onChange={(e) =>
            setNewMessage({ ...newMessage, content: e.target.value })
          }
        ></textarea>

        {/* Send Button */}
        <button
          className="w-full flex justify-center items-center gap-2 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-6 py-3 transition-all duration-300"
          onClick={sendMessage}
        >
          <Send size={20} /> Send
        </button>
      </div>
    </div>
  );
}

export default Messages;
