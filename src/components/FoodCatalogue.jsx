import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Mie Kondang',
    href: '#',
    price: 'Rp 48.0000',
    imageSrc: 'https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    kecamatan: 'Banyuwangi'
  },
  {
    id: 2,
    name: 'Ayam Panggang',
    href: '#',
    price: 'Rp 48.0000',
    imageSrc: 'https://i.pinimg.com/564x/05/5e/4e/055e4e82d548029f91d96c30499341fb.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    kecamatan: 'Kalipuro'
  },
  {
    id: 3,
    name: 'Burger Bangor',
    href: '#',
    price: 'Rp 48.0000',
    imageSrc: 'https://i.pinimg.com/564x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    kecamatan: 'Pesanggaran'
  },
  {
    id: 4,
    name: 'Iga Bakar',
    href: '#',
    price: 'Rp 48.0000',
    imageSrc: 'https://i.pinimg.com/564x/3f/30/56/3f30567a0cfa245b405cb2febda9eaaf.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    kecamatan: 'Licin'
  },
]

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

export default function FoodCatalogue({ foodData }) {
  const [selectedWilayah, setSelectedWilayah] = useState(null)
  const [query, setQuery] = useState('')

  // Filter products based on selected wilayah
  const filteredProducts = selectedWilayah
    ? foodData.filter(product => product.kecamatan === selectedWilayah)
    : foodData

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
