import React, { useState } from 'react';
import axios from 'axios';
import { useUI } from '../../contexts/managed-ui';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { openModal, setModalView } = useUI();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/subscriptions', { email: email })
      .then((res) => {
        setModalView('SUBSCRIBED');
        openModal();
      })
      .catch((error) => {
        console.error(error);
        setModalView('ERROR');
        openModal();
      });
    // Reset the form
    event.target.reset();
    setEmail('');
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="w-[100%] max-w-[1024px] flex flex-col justify-center items-center h-[200px] box-shadow--4 px-8 rounded-md pt-8 sm:pt-2 pb-10 z-[10] absolute top-[-170px] bg-white-50 text-blue-900">
      <h4 className="text-heading-md">Newsletter Signup </h4>
      <form
        onSubmit={handleSubmit}
        className="flex space-y-4 sm:space-y-0 sm:space-x-8 flex-col sm:flex-row items-center sm:items-end justify-center w-[100%]"
      >
        <div className="w-[100%] max-w-[550px]">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white-50 text-body-lg py-1 pt-2 px-12 leading-9 rounded-full focus:outline-none focus:shadow-outline"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
