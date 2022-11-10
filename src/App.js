import './App.css';

import { useState } from 'react';

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [address, setAddress] = useState('');

  function handleOnSubmit(event) {
    event.preventDefault();
    setShowSuccessMessage(!!address);
    setAddress('');
  }

  function handleChange(event) {
    setAddress(event.target.value);
  }
  
  return (
    <div className="bg-[#101827] min-h-screen grid place-content-center relative">
      <h1 className="text-7xl font-bold absolute top-[200px] left-[200px] text-slate-700/60">
        React Testing Library Introduction
      </h1>
      <div className="border rounded-lg p-6 my-4 w-full border-gray-700 bg-[#1E293B] text-gray-400">
        <h3 className="flex items-center mt-2 font-bold text-gray-100 md:text-2xl">
          Join my newsletter!
        </h3>

        <p className="my-3">
          Interested in testing React applications? Subscribe to my newsletter
          and gain confidence that your app works!
        </p>
        <p>No spam - unsubscribe at any time!</p>

        <form
          className="relative my-4 space-x-4 md:space-y-0 md:flex"
          onSubmit={handleOnSubmit}
        >
          <input
            placeholder="bobloblaw@gmail.com"
            type="email"
            value={address}
            onChange={handleChange}
            autoComplete="email"
            required
            className="w-full px-4 py-3 bg-white border-gray-400 rounded-lg focus:ring-gray-100 text-slate-800 placeholder:text-slate-500"
          />
          <button
            className="py-0.5 md:py-1 items-center justify-center px-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {showSuccessMessage ? (
          <span className="font-bold text-teal-500">You're subscribed!</span>
        ) : null}
      </div>
    </div>
  );
}

export default App;
