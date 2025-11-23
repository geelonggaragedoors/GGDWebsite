import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: "Jason Aldridge",
    role: "Local Guide",
    content: "Really happy with the service. They came on time, fixed my door properly and were super professional. Would definitely use them again.",
    stars: 5,
    initials: "JA",
    image: "/images/review-images/jason.png",
    delay: 0
  },
  {
    name: "Margaret McNamara",
    role: "Local Guide",
    content: "We had David attend us today... David was very friendly, efficient and was such a whiz at his trade. Fixed our 2 roller doors very effectively. We were extremely happy and most satisfied.",
    stars: 5,
    initials: "MM",
    delay: 0.1
  },
  {
    name: "OG JDM",
    role: "Local Guide",
    content: "Absolutely phenomenal service. After screening through everyone in Geelong I chose Steve and the team at Geelong Garage Doors. They were the most professional and actually listened to everything I wanted.",
    stars: 5,
    initials: "OJ",
    image: "/images/review-images/od.png",
    delay: 0.2
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F9F9FB] relative overflow-hidden">
      {/* Background Decoration - Subtle Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pt-red blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1248px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pt-dark-grey-1 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We pride ourselves on providing exceptional service to Geelong and the Surf Coast. 
            Here's what our customers have to say about their experience with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: review.delay }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-red-50 transition-colors duration-300">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-[#F4B400]">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow relative z-10 italic">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                {/* @ts-ignore - Review type definition is implicit */}
                {review.image ? (
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full object-cover shadow-md border-2 border-white"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pt-red to-red-700 text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {review.initials}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-pt-dark-grey-1 text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/search?q=geelonggaragedoors" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pt-red font-bold hover:text-pt-red-dark transition-colors group"
          >
            <span>Read more reviews on Google</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
