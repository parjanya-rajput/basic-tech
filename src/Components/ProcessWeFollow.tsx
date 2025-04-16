import { ChefronCardText } from "./ChefronCard";
import Comprehend from "../assets/Comprehend.png";
import Design from "../assets/Design.png";
import Development from "../assets/Development.png";
import Test from "../assets/Test.png";
import Maintaince from "../assets/Maintaince.png";
const ProcessWeFollow = () => {
  const benefits = [
    {
      icon: Comprehend,
      title: "Comprehend",

    },
    {
      icon: Design,
      title: "Design",

    },
    {
      icon: Development,
      title: "Development",

    },
    {
      icon: Test,
      title: "Test",

    },
    {
      icon: Maintaince,
      title: "Maintenance",

    }
  ];

  return (
    <section className="w-full bg-green-50 py-12 border-t border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10 font-neue">Process we Follow</h2>

        <div className="flex items-center justify-center flex-wrap">
          {benefits.map((benefit, index) => (
            <ChefronCardText text={benefit.title} icon={benefit.icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessWeFollow;