import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/schedule.jpg";
import image2 from "@/assets/datacollection.jpg";
import image3 from "@/assets/dashboard.jpg";
import image4 from "@/assets/communication.jpg";
import image5 from "@/assets/inventory.jpg";
import image6 from "@/assets/mobile.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Production Scheduling and Resource Allocation",
    description:
      " We help in creating and managing production schedules based on orders, resources, and constraints. It optimizes the use of equipment and labor. It allocates resources such as materials, machines, and labor based on real-time data, ensuring optimal utilization and minimizing downtime.",
    image: image1,
  },
  {
    name: "Data Collection and Analysis",
    description:
      "Collects data from various sources, downtime tracking, and analyzes it to provide insights into production performance. It helps in identifying bottlenecks and areas for improvement.",
    image: image2,
  },
  {
    name: "Reporting and Dashboards",
    description:
      " Generates real-time reports and visual dashboards that provide a clear overview of production metrics, allowing managers to make data-driven decisions.",
    image: image3,
  },
  {
    name: "Collaboration and Communication",
    description:
      " This will be the highlight of our MES+ (Manufacturing Execution System PLUS - Industry 4.0",
    image: image4,
  },
  {
    name: "Inventory Management",
    description:
      " It tracks parts usage, parts for repair, and inventory levels. This feature helps in reducing excess inventory and stockouts.",
    image: image5,
  },
  {
    name: "Mobile Access",
    description:
      " We offer mobile applications, allowing users to monitor and manage production processes remotely.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourservices" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR SERVICES</HText>
            <p className="py-5 text-lg">
            Manufacturing Execution Systems PLUS 4.0 (MES+4.0) are cloud-based system that manage and monitor the production process in real-time on the factory floor. <br />
            MES+4.0 software provides various features to improve operational efficiency, track production metrics, and ensure quality control.<br /><br />
            Here are the features of our Manufacturing Execution System PLUS 4.0 :
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="py-11 text-lg">
            <br /><br />Implementing all features will maximize the potential of MES+4.0.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurServices;
