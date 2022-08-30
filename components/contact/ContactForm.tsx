import * as React from "react";
import Notification from "../ui/Notification";

const sendContactData = async (contactDetails: any) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = React.useState<string>("");
  const [enteredName, setEnteredName] = React.useState<string>("");
  const [enteredMessage, setEnteredMessage] = React.useState<string>("");
  const [requestStatus, setRequestStatus] = React.useState<any>();

  React.useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredName("");
      setEnteredEmail("");
    } catch (error) {
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent succesfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Error sending the message!",
    };
  }

  return (
    <section className='mx-auto h-screen z-[-50]'>
      <div className='mt-10 sm:mt-5'>
        <h1 className='flex justify-center items-center text-3xl sm:text-7xl font-semibold text-center text-[#4de1ff]'>
          Let's Start Working Together 👨‍💻
        </h1>
      </div>

      <form
        className='flex flex-col items-center justify-center bg-[#3499adbd] sm:max-w-[600px] p-3 rounded-lg shadow-2xl mx-auto max-w-[300px] sm:mt-[3rem] mt-[9rem] z-[99]'
        onSubmit={sendMessageHandler}
      >
        <div className='space-y-5 sm:w-[500px] w-[250px]'>
          <div className='flex flex-col text-xl space-y-2'>
            <label htmlFor='email' className='text-[1.3rem] text-white'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='rounded-md'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className='flex flex-col text-xl space-y-2'>
            <label htmlFor='name' className='text-[1.3rem] text-white'>
              Name
            </label>
            <input
              type='text'
              id='name'
              required
              className='rounded-md'
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div className='flex flex-col text-xl space-y-2'>
            <label htmlFor='message' className='text-[1.3rem] text-white'>
              Message
            </label>
            <textarea
              id='message'
              rows={4}
              required
              className='rounded-md'
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div>
          <button className='text-white bg-[#4de1ff] p-3 rounded-xl mt-5 shadow-lg hover:bg-white font-semibold hover:text-[#f9be29] transition delay-150 ease-in-out'>
            Send Message
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
