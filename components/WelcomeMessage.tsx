import { motion } from "framer-motion";

export default function WelcomeMessage() {
  return (
    <motion.div
      className="text-center py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-red-600">
        Te amo mi bebota hermosa
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        <strong>Mi Bebota de dulce de leche rellena de chocolate</strong>{" "}
        <br></br> Hoy se cumple un año desde que nuestras vidas se entrelazaron,
        y siento que no hay palabras suficientes para expresar cuánto te amo y
        lo agradecido que estoy por tenerte a mi lado. Eres mi luz en los días
        oscuros, mi calma en las tormentas y la razón detrás de cada una de mis
        sonrisas. En este año he aprendido muchas cosas a tu lado donde cada dia
        construimos una relacion estable y linda. Contigo todo se siente
        posible mi amor. Cada momento que hemos compartido, desde las risas
        interminables hasta las conversaciones profundas y las peleas que al final nos hace mas fuertes, se ha convertido en un
        tesoro que guardo en mi corazón. Tienes una forma única de hacer que
        todo a tu alrededor brille, y yo soy el hombre más afortunado por ser
        quien recibe tu luz todos los días. No solo admiro la belleza que hay en
        ti, sino también la fuerza, la bondad y esa chispa que ilumina mi mundo
        de una forma que nunca pensé posible. Te prometo seguir siendo tu
        compañero, tu cómplice, tu refugio, y la persona que estará a tu lado,
        pase lo que pase. Este año ha sido solo el inicio de una historia que
        quiero seguir escribiendo contigo, paso a paso, día tras día.
        Gracias por ser mi Sol, por darme calor, por iluminar mis días y por
        llenar mi vida de amor. Este aniversario no es solo un recordatorio del
        tiempo que hemos compartido, sino una celebración del amor que nos une y
        que seguirá creciendo con cada paso que demos juntos. Te amo, Bebota. Más
        de lo que las palabras pueden decir. Feliz aniversario, mi amor. Siempre
        tuyo.
      </p>
      
    </motion.div>
  );
}
