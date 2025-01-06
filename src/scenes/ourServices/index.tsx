import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/schedule.jpg";
import image2 from "@/assets/datacollection.jpg";
import image3 from "@/assets/dashboard.jpg";
import image4 from "@/assets/communication.jpg";
import image5 from "@/assets/inventory.jpg";
import image6 from "@/assets/mobile.jpg";
import HText from "@/shared/HText";
import Class from "./Class";
import { BoltIcon } from "@heroicons/react/24/solid";

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
  const [hoveredImages, setHoveredImages] = useState<boolean[]>(new Array(classes.length).fill(false));
  const [startAnimation, setStartAnimation] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredImages((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredImages((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  // Sequential hover for first 3 images with no overlap
  useEffect(() => {
    if (startAnimation) {
      let timeout = 0;
      const newHoveredImages = new Array(classes.length).fill(false);

      // Sequentially hover first 3 images
      const hoverSequentially = (index: number) => {
        setTimeout(() => {
          newHoveredImages[index] = true;
          setHoveredImages([...newHoveredImages]);

          // Reset hover effect after each image
          setTimeout(() => {
            newHoveredImages[index] = false;
            setHoveredImages([...newHoveredImages]);
            if (index < 2) hoverSequentially(index + 1); // Move to next image
          }, 1000); // Duration for hover effect
        }, timeout);
        timeout += 2000; // Delay before the next hover
      };

      // Add an initial delay before starting the sequential hover
      setTimeout(() => {
        hoverSequentially(0); // Start with the first image after the initial delay
      }, 1500); // Initial delay of 1.5 seconds
    }
  }, [startAnimation]);

  return (
    <section id="ourservices" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.OurServices);
          setStartAnimation(true); // Trigger animation when entering the viewport
        }}
      >
        
          <div className="mx-auto w-5/6">
            <HText>OUR SERVICES</HText>
            <p className="py-5 text-lg">
                Manufacturing Execution Systems PLUS 4.0 (MES+4.0) are cloud-based
                systems that manage and monitor the production process in real-time
                on the factory floor. <br />
                MES+4.0 software provides various features to improve operational
                efficiency, track production metrics, and ensure quality control.
              <br />
              <br />
                Here are the features of our Manufacturing Execution System PLUS
                4.0 :
            </p>
          </div>
          
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <motion.ul
            className="flex w-[2800px] whitespace-nowrap"
            animate={
              startAnimation
                ? { x: ["0%", "-10%", "0%"] } // Move left and back to the original position
                : { x: "0%" } // Initial state
            }
            transition={
              startAnimation
                ? {
                    delay: 0.9, // Delay the animation by 1.5 seconds
                    duration: 6, // Total duration for one cycle (left and right)
                    repeat: 0, // No repetition
                    ease: "easeInOut",
                  }
                : {}
            }
          >
            {classes.map((item: ClassType, index) => (
              <Class
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
                isHovered={hoveredImages[index]}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            ))}
          </motion.ul>
        </div>
    
        <div className="mx-auto w-5/6">
          <p className="py-11 text-lg flex items-center">
            <BoltIcon className="h-6 w-6 text-yellow-500 mr-2" />{" "}
            {/* Light bulb icon */}
            Implementing all features will maximize the potential of MES+4.0.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;
