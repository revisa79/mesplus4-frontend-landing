import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/Saturn-LogoFNL-50percent.png";
import HomePageGraphic from "@/assets/stepdown.png";
import SponsorRedBull from "@/assets/Universal_Robots_Logo_205x34.png";
import SponsorForbes from "@/assets/mir-png.png";
import SponsorFortune from "@/assets/litepoint-teradyne-logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-primary-100 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.75 }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-1 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-xl">
            MANUFACTURING EXECUTION SYSTEM PLUS 4.0 <br />
            ( MES+4.0 )
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 0.85, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Get an Access
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-primary-300"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end overflow-hidden"
        >
          <img className="w-full" src={HomePageGraphic} alt="home-pageGraphic"  style={{ opacity: 0.7 }}/>
        </div>
      </motion.div>
      {/* CLOSING OF IMAGE/MAIN HEADER */}

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-gray-10 py-5">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 opacity-90">
              <img src={SponsorRedBull} alt="redbull-sponsor" style={{ opacity: 0.5 }} />
              <img src={SponsorForbes} alt="forbes-sponsor"  style={{ opacity: 0.5 }} />
              <img src={SponsorFortune} alt="fortune-sponsor"  style={{ opacity: 0.5 }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
