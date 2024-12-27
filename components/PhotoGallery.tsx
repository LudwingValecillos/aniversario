import { motion } from "framer-motion";
import Image from "next/image";
import img2 from "../app/imgs/2.jpg";
import img3 from "../app/imgs/3.jpg";
import img4 from "../app/imgs/4.jpg";
import img5 from "../app/imgs/5.jpg";
import img6 from "../app/imgs/6.jpg";
import img7 from "../app/imgs/7.jpg";
import img8 from "../app/imgs/8.jpg";
import img9 from "../app/imgs/9.jpg";
import img10 from "../app/imgs/10.jpg";
import img11 from "../app/imgs/11.jpg";
import img12 from "../app/imgs/12.jpg";
import img13 from "../app/imgs/13.jpg";
import img14 from "../app/imgs/14.jpg";
import img15 from "../app/imgs/15.jpg";
import img16 from "../app/imgs/16.jpg";
import img17 from "../app/imgs/17.jpg";
import img18 from "../app/imgs/18.jpg";
import img19 from "../app/imgs/19.jpg";
import img20 from "../app/imgs/20.jpg";
import img22 from "../app/imgs/22.jpg";
import img25 from "../app/imgs/25.jpg";
import img26 from "../app/imgs/26.jpg";
import img27 from "../app/imgs/27.jpg";
import img28 from "../app/imgs/28.jpg";
import img29 from "../app/imgs/29.jpg";
import img30 from "../app/imgs/30.jpg";
import img31 from "../app/imgs/31.jpg";
import img32 from "../app/imgs/32.jpg";
import img33 from "../app/imgs/33.jpg";
import img34 from "../app/imgs/34.jpg";


export default function PhotoGallery() {
  const photos = [
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img22,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34
  ];

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center text-red-600">
        Algunas fotitos juntos
      </h2>
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        
        >
        {photos.map((photo, index) => (
          <div key={`photo-container-${index}`} data-aos="fade-up-right" >
          <motion.div
            key={`photo-${index}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={photo}
              alt={`Momento especial ${index + 1}`}
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
