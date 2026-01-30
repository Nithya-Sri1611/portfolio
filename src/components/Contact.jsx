export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-blue-100 dark:bg-gray-900 border-2 border-blue-400 dark:border-gray-700"
    >
      {/* 👇 CENTER WRAPPER (same fix as Skills & Projects) */}
      <div className="w-full text-center">

       <h2 className="text-5xl font-bold mb-20 text-indigo-900 dark:text-[#831DC6]">
          Contact
        </h2>

        <form className="max-w-md mx-auto space-y-4 px-6 text-left">

          <input
            className="
              w-full p-3 rounded
              border-2 border-indigo-500 dark:border-[#831DC6]
              placeholder:font-medium
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-400  dark:focus:ring-[#831DC6]
            "
            style={{
              backgroundColor: "var(--bg-main)",
              color: "var(--text-heading)",
            }}
            placeholder="Name"
          />

          <input
            className="
              w-full p-3 rounded
              border-2 border-indigo-500 dark:border-[#831DC6]
              placeholder:font-medium
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-400  dark:focus:ring-[#831DC6]
            "
            style={{
              backgroundColor: "var(--bg-main)",
              color: "var(--text-heading)",
            }}
            placeholder="Email"
          />

          <textarea
            className="
              w-full p-3 rounded
              border-2 border-indigo-500 dark:border-[#831DC6]
              placeholder:font-medium
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-400  dark:focus:ring-[#831DC6]
            "
            style={{
              backgroundColor: "var(--bg-main)",
              color: "var(--text-heading)",
            }}
            placeholder="Message"
          />

          <button
            className=" w-full py-3 rounded-lg transition-all duration-300
              hover:shadow-[0_0_20px_var(--accent-glow)]
    

    /* Light mode */
    bg-indigo-600 hover:bg-indigo-700 text-white shadow-md
     ]

    /* Dark mode – soft purple */
    dark:bg-[#831DC6]
    dark:text-[#F5F5F7]
    
    dark:hover:bg-[#9B3DF5]
    dark:shadow-md
    dark:shadow-purple-500/20
    ]
  "
  
            
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}