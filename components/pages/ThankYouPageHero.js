import Button from "../shared/Button";
import BlurredBottom from "../styles/BlurredBottom";
import BlurredTop from "../styles/BlurredTop";

import Form from "../shared/Form";

const ThankYouPageHero = () => {
  return (
    <section>
      <BlurredTop />
      <div className="relative px-8">
        <div className="mx-auto max-w-3xl pt-40 pb-52">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-wide sm:text-center sm:text-6xl">
                Thank you for joining us!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                We are building the best and totally free experience in the
                market to help you with everything about your mortgage. Credere,
                the mortgage with social impact!
              </p>
            </div>

            <BlurredBottom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPageHero;
