"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll"


const navigation = [
  { name: 'Pantallas', href: '/screens' },
  { name: 'Clientes', href: '/clients' },
  { name: 'Precios', href: '/prices' },
]

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between md:justify-start p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:mr-12 lg:flex-none md:flex-1">
            <a href="/" className="-m-1.5 p-0">
              <img
                className="h-10 w-auto"
                src="/assets/images/logonegro.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5  items-center justify-center rounded-md p-2.5 text-gray-700 hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:gap-x-6">
            {navigation.map((item) => (
                <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} className="text-md leading-6 text-gray-900 cursor-pointer hover:bg-grayish p-2 rounded-lg font-inter">
                  {item.name}
                </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between ">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="/assets/images/logogris.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
