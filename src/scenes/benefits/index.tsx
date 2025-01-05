import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/viper.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "POWERED BY REAL-TIME DATA",
    description:
      "Leverage the use of up-to-the-minute information from various sources within the manufacturing process.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "ENGAGING PLATFORM",
    description:
      "Designed to actively involve and captivate users, whether they are employees, customers, or partners.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "DOCUMENTING DATA, EVENTS AND ACTIONS",
    description:
      "Making the task more efficient and reliable. This not only a best practice but a necessity. ",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-9 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.7 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>BENEFITS OF MES+4.0</HText>
          {/*<p className="my-5 text-sm">
          MANUFACTURING EXECUTION SYSTEM PLUS 4.0
        </p>*/}
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16  items-center justify-between gap-20 md:mt-14 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            style={{ opacity: 0.5 }}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    ALIGN YOUR DECISION WITH THE REAL-TIME {" "}
                    <span className="text-primary-500">DATA</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
              Ensure that your team is aligned with real-time data to make informed decisions.<br></br>
              Utilize the latest data available to stay ahead in your fast-paced manufacturing environment..
              </p>
              <p className="mb-5 ">
              Respond diligently to meet your commitment to stakeholders.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              {/*<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"> */}
              <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
