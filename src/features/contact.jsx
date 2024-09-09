import Navbar from "../ui/components/navbar";
import { useState, useContext } from "react";
import { ThemeContext } from "../ui/components/themeSwitcher";

function Contact() {
  const { isDarkMode } = useContext(ThemeContext);
  const [error, setError] = useState(false); // State untuk mengelola error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      setError(true); // Tampilkan error jika message kosong
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-[90vh] items-center justify-center p-8">
        <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
        <div
          className={`mockup-code w-1/2 p-6 rounded-lg shadow-md ${
            isDarkMode
              ? "bg-[#2a323c] text-[#E6EBF0]"
              : "bg-[#E6EBF0] text-[#2c3137]"
          }`}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Write your message here..."
              />
            </div>

            {error && (
              <div
                role="alert"
                className="alert w-1/2 text-white alert-error absolute bottom-1/2 left-[25%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Masih Dalam Pengembangan...</span>
              </div>
            )}

            <button
              onClick={() => setError(true)}
              className="w-full bg-[#06b6d4] text-white py-2 px-4 rounded-md hover:bg-[#059cba] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Informasi Kontak */}
        <div className="mt-6 text-center">
          <p className="text-lg">
            <strong>Phone:</strong> +62 85155157856
          </p>
          <p className="text-lg">
            <strong>Email:</strong> syahdan22001@mail.unpad.ac.id
          </p>
          <p className="text-lg">
            <strong>Address:</strong> Jalan Parakanmuncang, Sumedang, Indonesia
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
