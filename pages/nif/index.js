import NifPageFaq from "../../components/pages/NifPageFaq";
import NifPageHero from "../../components/pages/NifPageHero";
import NifPageHow from "../../components/pages/NifPageHow";
import NifPageRequirements from "../../components/pages/NifPageRequirements";
import Layout from "../../components/shared/Layout";

const NifPage = () => {
  return (
    <Layout>
      <NifPageHero />
      <div className="grid gap-52">
        <NifPageHow />
        <NifPageRequirements />
        <NifPageFaq />
      </div>
    </Layout>
  );
};

export default NifPage;
