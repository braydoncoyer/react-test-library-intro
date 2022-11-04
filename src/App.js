import './App.css';

import { useState } from 'react';

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [address, setAddress] = useState('');

  function handleOnSubmit(event) {
    event.preventDefault();
    setShowSuccessMessage(true);
  }

  function handleChange(event) {
    setAddress(event.target.value);
  }
  
  return (
    <div className="bg-[#101827] min-h-screen grid place-content-center relative">
      <h1 className="text-7xl font-bold absolute top-[200px] left-[200px] text-slate-800/50">
        React Testing Library Introduction
      </h1>
      <div className="border rounded-lg p-6 my-4 w-full border-gray-700 bg-[#1E293B] text-gray-400">
        <h3 className="flex items-center mt-2 font-bold md:text-2xl text-gray-100">
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
            className="w-full px-4 bg-white rounded-lg py-3 focus:ring-gray-100 border-gray-400 text-slate-800 placeholder:text-slate-500"
          />
          <button
            className="py-0.5 md:py-1 items-center justify-center px-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {showSuccessMessage ? (
          <span className="text-teal-500 font-bold">You're subscribed!</span>
        ) : null}
      </div>
    </div>
  );
}

export default App;
