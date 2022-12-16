import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Dialog } from "@headlessui/react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const navigation = [
  { name: "#️⃣ NIF", href: "#" },
  { name: "🏦 Bank Account", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="px-8 pt-8 ">
      <nav
        className="flex h-9 items-center justify-between"
        aria-label="Global"
      >
        <div aria-label="Global">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <h1 className="text-5xl text-pink-700 font-bold">Cr</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <BiMenu className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-gray-900 hover:text-pink-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className={inter.className}
      >
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-8 py-8 lg:hidden"
        >
          <div className="flex h-9 items-center justify-between">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <h1 className="text-5xl text-pink-700 font-bold">Cr</h1>
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <MdClose className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Header;
