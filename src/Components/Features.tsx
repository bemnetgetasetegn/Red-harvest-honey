import Cards from "./Cards";
import { FaLeaf, FaUtensils } from "react-icons/fa";
import { GiFlowerPot, GiHealthIncrease } from 'react-icons/gi';


const Features = () => {
  return (
    <div id="features" className="my-7 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Features</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <Cards
        icon={<FaLeaf />}
          title="100% Natural & Pure"
          text="Our honey is completely natural, free from any additives or artificial ingredients.
Harvested straight from the hive, it preserves the original taste and texture.
Enjoy honey as nature intended—pure, raw, and unprocessed."

        />
        <Cards
        icon={<GiFlowerPot />}
          title="Sourced from Ethiopia’s Finest Flora"
          text="Collected from the blossoms of wildflowers, acacia trees, and forest plants.
Each region gives the honey a distinct flavor and aroma.
It’s a true taste of Ethiopia’s rich biodiversity."
        />
        <Cards
        icon={<GiHealthIncrease />}
          title="Rich in Nutrients"
          text="Packed with antioxidants, enzymes, and natural sugars for a healthy boost.
It provides quick energy and supports overall wellness.
Perfect for a nutritious start to your day."
        />
        <Cards
        icon={<FaUtensils />}
          title="Multiple Uses"
          text="Great as a natural sweetener in tea, coffee, or baking.
Also used in skincare routines for hydration and glow.
Versatile and delicious in every drop."
        />
      </div>
    </div>
  );
};

export default Features;
