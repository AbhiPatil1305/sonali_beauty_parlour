import { motion } from 'framer-motion';

const reasons = [
  { num: '01', title: 'Personalized Care', desc: 'Every customer receives thoughtful, individualized attention from our team.' },
  { num: '02', title: 'Beauty-Focused Experience', desc: 'Services presented with care, precision and attention to your unique needs.' },
  { num: '03', title: 'Comfortable Environment', desc: 'A welcoming, relaxed space where you can truly unwind.' },
  { num: '04', title: 'Professional Service', desc: 'A clean, organized and professional beauty experience every time.' },
  { num: '05', title: 'Attention to Detail', desc: 'Every aspect of your beauty service is handled with care and intention.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4 block">Our Promise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Why SonaliHerbal?
            </h2>
            <p className="text-text/70 font-light text-lg leading-relaxed">
              We believe every customer deserves a beauty experience that feels truly personal — comfortable, attentive and care-focused.
            </p>
          </motion.div>

          <div className="divide-y divide-secondary/40">
            {reasons.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="py-8 flex gap-8 group"
              >
                <span className="font-serif text-3xl text-accent/40 group-hover:text-accent transition-colors duration-300 shrink-0 leading-tight">{item.num}</span>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-2">{item.title}</h3>
                  <p className="text-text/65 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
