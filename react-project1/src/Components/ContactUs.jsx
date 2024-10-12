const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen border-neutral-800">
      <form className="w-full max-w-md  bg-gradient-to-r from-orange-500 to-orange-800 p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-white text-center">
          Contact Us
        </h2>
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-2 py-1 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-700 text-white"
            placeholder="Your name"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-2 py-1 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-700 text-white"
            placeholder="Your email"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-2 py-1 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-700 text-white"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-1 rounded hover:bg-indigo-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
