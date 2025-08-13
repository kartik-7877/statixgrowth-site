// pages/contact.js

import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - StatixGrowth</title>
      </Head>
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl bg-gray-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>

          {/* Google Form Embed */}
          <iframe
            src="https://docs.google.com/forms/d/1i87dYw4O-IioROw_L3sR4pgflw4pWRz3LRH5KZ2bA70/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
}



