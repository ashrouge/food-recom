import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex items-center sm:gap-5 py-32 sm:py-48 lg:py-56 sm:px-10">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Makanan Khas Banyuwangi
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Berbagai menu makanan dan jajanan khas Banyuwangi yang pasti bikin kamu ngiler
            </p>
            <div className="mt-10 flex sm:justify-start items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div
            className="hidden sm:flex -z-10 overflow-hidden border rounded-full"
            aria-hidden="true"
          >
            <img className='w-40 h-40 sm:w-96 sm:h-72 flex justify-end' src="https://www.blibli.com/friends-backend/wp-content/uploads/2023/06/B500566-Cover-Makanan-Khas-Banyuwangi.jpg" alt="" />
            {/* <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffff80] to-[#a6fc89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          /> */}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#bdff80] to-[#ebfc89] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
