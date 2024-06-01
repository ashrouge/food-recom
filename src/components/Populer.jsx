import React, { useEffect, useState } from 'react';

export default function Populer({ data }) {
  const [selectedDaerah, setSelectedDaerah] = useState(0);

  useEffect(() => {
    console.log("Data received:", data);
    // Retrieve the selectedDaerah from local storage
    const storedDaerah = localStorage.getItem('selectedDaerah');
    if (storedDaerah) {
      setSelectedDaerah(parseInt(storedDaerah, 10));
    }
  }, [data]);

  // Check if data is an array and has the required structure
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }

  // Filter the data to include only products with status 'Popular' and matching daerah
  const filteredData = data.filter((product) => {
    return product.status === 'Popular' && product.daerah === selectedDaerah;
  });

  console.log(filteredData);

  return (
    <div className="bg-white">
      <div>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Populer
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredData.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imagesrc}
                  alt={product.imagealt}
                  className="h-72 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Rp.{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
