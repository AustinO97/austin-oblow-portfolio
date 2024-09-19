import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              <span className="text-yellow-200">Austin Oblow</span>
            </h1>
            <span className="text-xl">Software Developer</span>
            <p className="max-w-[500] mb-9 text-white/80">
              I am proficient in JavaScript and React.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://docs.google.com/document/d/1B9yPdz_bCAREbQ8RrE6xxyXEKM4oT7bLWasLK5xbUTc/export?format=pdf
"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-14 h-14 border border-[#4F75FF] rounded-full flex justify-center items-center text-[#4F75FF] text-base hover:bg-[#4F75FF] hover:text-primary hover:transition-all"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
