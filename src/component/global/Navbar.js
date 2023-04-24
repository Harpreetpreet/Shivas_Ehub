import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="">
      <nav
        className="mx-auto flex items-center justify-between  lg:px-8"
        aria-label="Global"
      >
        <div className="flex  flex-1 items-center md:justify-start justify-center">
          <Link href="#" className="py-4">
            <Image src="/images/logo1.png" height={80} width={100} />
          </Link>
          <span className="md:flex hidden text-slate-600 mt-10 text-sm">
            Computer Repair
          </span>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="mr-4"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <RxCross2 className="h-4 w-4" />
            ) : (
              <AiOutlineMenu className="h-4 w-4" />
            )}
          </button>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            News
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Pages
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Elements
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {isActive && (
        <div className="md:hidden  ">
          <ul className=" justify center text-center items-center py-3">
            <li>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              {' '}
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Features
              </a>
            </li>
            <li>
              {' '}
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Marketplace
              </a>
            </li>
            <li>
              {' '}
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
