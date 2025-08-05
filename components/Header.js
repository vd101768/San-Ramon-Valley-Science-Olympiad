import { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  const DialogRoot = forwardRef((props, forwardedRef) => {
    const { className, ...itemProps } = props;
    return (
      <Dialog.Root {...itemProps} ref={forwardedRef} className={className} />
    );
  });
  return (
    <>
      <header
        className="sticky top-0 z-10 flex items-center justify-between w-full max-w-5xl px-4 py-4 mx-auto mb-14 backdrop-saturate-150 backdrop-blur-md lg:hidden"
        style={{
          backgroundColor: "transparent",
          minWidth: "90%"
        }}
      >
        <Link href="/">
          <a>
            <figure className="relative w-12 h-12 mr-20">
              <Image
                src="/images/srvso-logo.png"
                alt="SRVSO Logo"
                layout="fill"
                objectFit="cover"
                
              />
            </figure>
          </a>
        </Link>
        <ul className="flex justify-between text-sm gap-x-5">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
           {/* <li>
            <Link href="/resources">
              <a>2026 Resources</a>
            </Link>
          </li> */}
          <li>
            <Link href="/past-olympiads">
              <a>Past Olympiads</a>
            </Link>
          </li>
         
          <li>
            <Link href="/board-of-officers">
              <a>Board of Officers</a>
            </Link>
          </li>
        </ul>
      </header>

      {/* On small devices, show a hamburger menu */}
      <header
        className="sticky top-0 z-10 items-center justify-between hidden w-full max-w-5xl py-3 mx-auto px-7 mb-14 backdrop-saturate-150 backdrop-blur-md lg:flex"
        
      >
        <Link href="/">
          <a>
            <figure className="relative w-10 h-10">
              <Image
                src="/images/srvso-logo.png"
                alt="SRVSO Logo"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </a>
        </Link>
        <DialogRoot>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="grid px-3 py-2 text-gray-300 transition-colors bg-gray-800 rounded-full place-items-center hover:text-gray-100"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 grid overflow-y-auto bg-black bg-opacity-95 place-items-center">
              <Dialog.Content>
                <ul className="flex flex-col">
                  <li className="border-b border-gray-900">
                    <Link href="/">
                      <a className="menu-link">Home</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-900">
                    <Link href="/past-olympiads">
                      <a className="menu-link">Past Olympiads</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/board-of-officers">
                      <a className="menu-link">Board of Officers</a>
                    </Link>
                  </li>
                </ul>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </DialogRoot>
      </header>
    </>
  );
}

