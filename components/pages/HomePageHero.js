import Button from "../shared/Button";
import BlurredBottom from "../styles/BlurredBottom";
import BlurredTop from "../styles/BlurredTop";

const HomePageHero = () => {
  return (
    <main>
      <BlurredTop />
      <div className="relative px-8 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-40 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Credere, the only way to get your 📑 mortgage.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                We are building the best experience in the market to help you
                with everything about your mortgage. Credere, the mortgage with
                social impact!
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <Button description="Waiting list" primary={true} />
              </div>
            </div>
            <BlurredBottom />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePageHero;
