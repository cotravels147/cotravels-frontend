import React from "react";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ExploreAzores from "../components/Explorejone";
import TopCardWeeks from "../components/TopCardWeeks";
import ExploreCardSection from "../components/ExploreCardSection";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      {/* <div className="px-52">
        <div className="flex flex-wrap justify-evenly px-4 w-full h-32 border-2 outline-2">
          <div className="py-8 flex flex-col p-2 ">
            <h2 className="text-xl">Location</h2>
            <h2 className="text-lg">Location</h2>
          </div>
          <div className="py-8 flex flex-col p-2 border-l-2">
            <h2 className="text-xl">Location</h2>
            <h2 className="text-lg">Location</h2>
          </div>
          <div className="py-8 flex flex-col p-2 border-l-2">
            <h2 className="text-xl">Location</h2>
            <h2 className="text-lg">Location</h2>
          </div>
          <div className="py-8 flex flex-col p-2 border-l-2">
            <h2 className="text-xl">Location</h2>
            <h2 className="text-lg">Location</h2>
          </div>
        </div>
      </div> */}
              <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-4 xl:grid-cols-4 dark:text-white sm:p-8">
                <div class="flex flex-col text-center">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col text-center">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col text-center">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col text-center">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
 
            </dl>
        </div>
      <CategorySection />
      <ExploreAzores/>
      {/* <TopCardWeeks/> */}
      <ExploreCardSection/>
      <NewsLatter/>
    
    </>
  );
};

export default LandingPage;
