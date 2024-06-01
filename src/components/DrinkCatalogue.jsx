import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'


const wilayah = [
  {
    id: 1,
    kecamatan: 'Banyuwangi'
  },
  {
    id: 2,
    kecamatan: 'Pesanggaran'
  },
  {
    id: 3,
    kecamatan: 'Licin'
  },
  {
    id: 4,
    kecamatan: 'Glagah'
  },
  {
    id: 5,
    kecamatan: 'Muncar'
  },
  {
    id: 6,
    kecamatan: 'Kalipuro'
  }
]

export default function DrinkCatalogue({drinkData}) {
  const [selectedWilayah, setSelectedWilayah] = useState(null)
  const [query, setQuery] = useState('')

  // Filter products based on selected wilayah
  const filteredProducts = selectedWilayah
    ? drinkData.filter(product => product.kecamatan === selectedWilayah)
    : drinkData

  // Filter wilayah based on search query
  const filteredWilayah =
    query === ''
      ? wilayah
      : wilayah.filter(wilayah => {
        return wilayah.kecamatan.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <div className="bg-white mt-36">
      <Combobox value={selectedWilayah} onChange={setSelectedWilayah}>
        <div className='mx-8 py-2'>
          <label htmlFor="">Pilih daerah yang diinginkan</label>
        </div>
        <Combobox.Input
          className="w-auto mx-8  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options
          className="mt-1 overflow-auto border border-gray-300 rounded-md shadow-md max-h-40 focus:outline-none"
        >
          {filteredWilayah.map((wilayahOption) => (
            <Combobox.Option
              key={wilayahOption.id}
              value={wilayahOption.kecamatan}
              className={({ active }) =>
                `${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                } cursor-pointer select-none relative py-2 pl-3 pr-9`
              }
            >
              {({ selected }) => (
                <>
                  {selected && (
                    <CheckIcon className="w-5 h-5 absolute top-0 bottom-0 my-auto right-2 text-blue-500" />
                  )}
                  <span className="block truncate">{wilayahOption.kecamatan}</span>
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

      <div>
        <div className="mx-auto max-w-2xl">

        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map(product => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imagesrc}
                  alt={product.imagealt}
                  className="h-72 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
