import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectOption({ data }) {
  const [selectedDaerah, setSelectedDaerah] = useState('');
  console.log(selectedDaerah)
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedDaerah(event.target.value);
  };

  const handleButtonClick = () => {
    localStorage.setItem('selectedDaerah', selectedDaerah);
    alert('Daerah saved to local storage!');
    navigate('/beranda'); // Redirect to /beranda
  };

  return (
    <div>
      {/* component */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
      />
      {/* This is an example component */}
      <div className="max-w-2xl mx-auto">
        <label
          htmlFor="daerah"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Pilih Daerah Anda
        </label>
        <select
          id="daerah"
          value={selectedDaerah}
          onChange={handleSelectChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>Pilih Daerah</option>
          {data.map((item, index) => (
            <option key={index} value={item.id_daerah}>{item.nama_daerah}</option>
          ))}
        </select>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 my-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Daerah
        </button>
      </div>
    </div>
  );
}
