import Button from "../shared/Button";
import BlurredBottom from "../styles/BlurredBottom";
import BlurredTop from "../styles/BlurredTop";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Form from "../shared/Form";

const HomePageHero = () => {
  const [popupForm, setPopupForm] = useState(false);
  return (
    <section>
      <BlurredTop />
      <div className="relative px-8 lg:px-8">
        <div className="mx-auto max-w-3xl pt-40 pb-52">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Credere, the only way to get your 📑 mortgage.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                We are building the best and totally free experience in the
                market to help you with everything about your mortgage. Credere,
                the mortgage with social impact!
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <Button
                  description="Waiting list"
                  primary={true}
                  setPopupForm={setPopupForm}
                />
                <Button description="Current Services" />
              </div>
            </div>
            <Dialog
              as="div"
              open={popupForm}
              onClose={() => setPopupForm(false)}
            >
              <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel
                  focus="true"
                  className="w-full max-w-sm rounded bg-white p-8 grid gap-10"
                >
                  <h1 className="text-4xl text-center font-semibold">
                    Join the waiting list
                  </h1>
                  <Form />
                </Dialog.Panel>
              </div>
            </Dialog>
            <BlurredBottom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
