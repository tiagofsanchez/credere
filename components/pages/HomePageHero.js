import Button from "../shared/Button";
import BlurredBottom from "../styles/BlurredBottom";
import BlurredTop from "../styles/BlurredTop";

const HomePageHero = () => {
  return (
    <section>
      <BlurredTop />
      <div className="relative px-8 lg:px-8">
        <div className="mx-auto max-w-3xl pt-40 pb-32 sm:pb-40">
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
                <Button description="Waiting list" primary={true} />
                <Button description="Current Services" />
              </div>
            </div>
            <BlurredBottom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
