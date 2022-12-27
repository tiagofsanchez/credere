import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const NifPageFaq = () => {
  return (
    <section className="w-full px-8 max-w-6xl mx-auto">
      <div className="mx-auto text-center grid gap-4 mb-8">
        <span className="uppercase text-pink-700 text-m font-bold ">
          Have any questions?
        </span>
        <h2 className="text-3xl text-center font-bold">
          Frequently Asked Questions about the NIF
        </h2>
      </div>
      <div className="mx-auto w-full rounded-2xl bg-pink-400/10 p-4 shadow">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl sm:text-2xl">What is a NIF?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                <>
                  <p>
                    NIF stands for "Número de Identificação Fiscal," which is
                    the Portuguese tax identification number. It is a unique
                    number assigned to individuals and businesses for tax
                    purposes in Portugal. The NIF is used to identify taxpayers
                    and track their tax obligations and payments. It is similar
                    to a social security number or a taxpayer identification
                    number in other countries.
                  </p>
                  <p>
                    In Portugal, the NIF is issued by the Portuguese tax
                    authorities, known as the Autoridade Tributária e Aduaneira
                    (AT). It is typically required for various financial and
                    legal transactions, including opening a bank account,
                    applying for a loan or mortgage, buying or selling property,
                    and registering a business.
                  </p>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl sm:text-2xl">
                  Why do I need a NIF?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                <>
                  <p>
                    If you are a resident of Portugal or if you conduct business
                    in the country, you will need a NIF. The NIF is used by the
                    Portuguese tax authorities to identify you as a taxpayer and
                    to track your tax obligations and payments. It is also used
                    by other government agencies, financial institutions, and
                    businesses to verify your identity and to facilitate various
                    financial and legal transactions.{" "}
                  </p>
                  <p>
                    In addition to its use in tax and financial matters, the NIF
                    is also used as a general identification number in Portugal.
                    For example, you may be asked to provide your NIF when
                    applying for certain government services, such as obtaining
                    a driver's license or enrolling in a public healthcare plan.
                    Overall, having a NIF is important for living and conducting
                    business in Portugal, as it allows you to fully participate
                    in the country's financial and legal systems.
                  </p>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl sm:text-2xl">
                  How long does it takes to get a NIF for foreigners in
                  Portugal?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                <>
                  <p>
                    The process for obtaining a NIF for foreigners in Portugal
                    is similar to the process for obtaining a NIF for Portuguese
                    citizens. The main difference is that, as a foreigner, you
                    may be required to provide additional documentation to prove
                    your identity and your legal status in Portugal.
                  </p>
                  <p>
                    You will also need to provide certain documents, such as
                    proof of identification (such as a passport) and proof of
                    address in Portugal. Depending on your situation, you may
                    also be required to provide other documents, such as a copy
                    of your employment contract or a certificate of residence.
                  </p>
                  <p>
                    The process for obtaining a NIF can take a few weeks, but
                    the exact timeline may vary depending on the tax office and
                    your specific circumstances. If you have any questions about
                    the process, you can contact the tax office or seek the
                    assistance of a professional, such as an accountant or
                    lawyer.
                  </p>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl sm:text-2xl">
                  Who will be my fiscal representative?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Xxxx
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl sm:text-2xl">
                  Do you have more questions?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Xxxx
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
};

export default NifPageFaq;
