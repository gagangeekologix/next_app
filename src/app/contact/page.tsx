const Contact: React.FC = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full border border-gray-300 p-2 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  