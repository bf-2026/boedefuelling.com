import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import sergioImage from "../../assets/team/sergio-boede.jpg";
import lucasImage from "../../assets/team/lucas-fuelling.jpg";

export default function CompanyPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Über BoedeFuelling
          </h1>
          <p className="text-xl text-slate-600">
            Unternehmen durch KI und Automatisierung transformieren
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Unsere Geschichte</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Mit der Mission gegründet, die Lücke zwischen Prozessexpertise und hochmoderner KI-Technologie zu schließen, 
              kombiniert BoedeFuelling tiefes Geschäftsverständnis mit modernen Automatisierungslösungen.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Wir glauben, dass erfolgreiche digitale Transformation mehr als nur Technologie erfordert – sie verlangt 
              strategisches Denken, organisatorische Reife und kontinuierliche Unterstützung während der gesamten Reise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Sergio Böde",
                  role: "Co-Founder",
                  image: sergioImage,
                  linkedin: "https://www.linkedin.com/in/sergio-felipe-b%C3%B6de-jimenez-leon-36567916b/",
                  email: "sergio@boedefuelling.com"
                },
                {
                  name: "Lucas Fülling",
                  role: "Co-Founder",
                  image: lucasImage,
                  linkedin: "https://www.linkedin.com/in/lucas-fuelling/",
                  email: "lucas@boedefuelling.com"
                }
              ].map((profile, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={profile.image} 
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{profile.name}</h3>
                  <p className="text-brand-primary font-medium mb-4">{profile.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-slate-600 hover:text-brand-primary hover:shadow-md transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${profile.email}`}
                      className="p-2 bg-white rounded-full text-slate-600 hover:text-brand-primary hover:shadow-md transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
