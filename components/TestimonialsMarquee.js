import React from 'react';
import Image from 'next/image';
import styles from '../styles/TestimonialsMarquee.module.css';

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      id: 1,
      text: "He is such an amazing person with immense talent in photography. He covered all aspects of our event and pictures turned out very graceful. All of our friends liked the pictures clicked by Varun and will definitely recommend his services to others.",
      author: "SAMRITI & VARUN",
      image: "/images/reviews/samriti-varun.jpg",
      alt: "feedback-from-samriti-varun-maternity-shoot"
    },
    {
      id: 2,
      text: "Thank you for the beautiful captures and lovely edits. From your way of explaining each and every pose, your attention to every minute details to make pictures look perfect, your patience, to giving comfort and care to your clients, we are impressed by everything.",
      author: "AMAN & NIKHIL",
      image: "/images/reviews/aman-nikhil.jpg",
      alt: "feedback-from-aman-nikhil-maternity-shoot"
    },
    {
      id: 3,
      text: "Varun was absolute delight to work with, he knew exactly what we wanted and captured our family moments with his lenses. He is a very talented photographer and I would highly recommend him.",
      author: "SHIWANEE GAUTAM",
      image: "/images/reviews/review6.jpg",
      alt: "feedback-from-shiwanee-gautam-for-family-shoot"
    },
    {
      id: 4,
      text: "We narrowed down VM pics (Varun) after going through lots of available options out there. It was not the reference but his variety of work, the natural pictures he had on his profile and the affordability which confirmed our choice.",
      author: "AANCHAL AND PRATEEK",
      image: "/images/reviews/review5.jpg",
      alt: "feedback-from-aanchal-prateek-for-maternity-shoot"
    },
    {
      id: 5,
      text: "We recently had a newborn baby and were looking for a good and reasonably priced photographer to capture some family photos. We contacted Varun who did a wonderful job and captured some beautiful shots for us.",
      author: "TEJAL & BIPLAV",
      image: "/images/reviews/review1.jpg",
      alt: "Family shoot testimonial from Tejal and Biplav"
    },
    {
      id: 6,
      text: "Time Management and Affordable! photographer was patient with my kids and was on to it with his shots! photos turned out amazing despite the hot day we eventually got there with all my kids.",
      author: "FATAI HAVILI UHILA",
      image: "/images/reviews/review2.jpg",
      alt: "Family shoot testimonial from Fatai Havili Uhila"
    },
    {
      id: 7,
      text: "Thank you for catching our family memories. The photos turned out beautifully. You were also very patience with our kids, thank you and we highly recommend you.",
      author: "KELLIE TO OIZUMI",
      image: "/images/reviews/review3.jpg",
      alt: "feedback-from-kellie-to-oizumi-for-family-shoot"
    },
    {
      id: 8,
      text: "We booked Varun for our maternity Photoshoot. He understands clients comfort and their preference. He made our shoot not some 60 min time slot but a wonderful and memorable experience.",
      author: "KIRTI PARIJA",
      image: "/images/reviews/review4.jpg",
      alt: "feedback-from-kirti-parija-for-maternity-shoot"
    },
    {
      id: 9,
      text: "Varun's attention to detail and professional approach made our photoshoot experience exceptional. The golden hour shots were absolutely stunning and captured our emotions perfectly.",
      author: "PRIYA & ROHIT",
      image: "/images/reviews/review1.jpg",
      alt: "testimonial-from-priya-rohit"
    },
    {
      id: 10,
      text: "Outstanding service and beautiful photography! Varun made us feel comfortable throughout the shoot and delivered photos that exceeded our expectations. Highly recommended for any special occasion.",
      author: "MEERA SHARMA",
      image: "/images/reviews/review2.jpg",
      alt: "testimonial-from-meera-sharma"
    }
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {/* First set of testimonials */}
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={80}
                height={80}
                className={styles.clientImage}
              />
            </div>
            <div className={styles.testimonialText}>
              <p className={styles.quote}>{testimonial.text}</p>
              <p className={styles.author}>- {testimonial.author}</p>
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {testimonials.map((testimonial) => (
          <div key={`duplicate-${testimonial.id}`} className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={80}
                height={80}
                className={styles.clientImage}
              />
            </div>
            <div className={styles.testimonialText}>
              <p className={styles.quote}>{testimonial.text}</p>
              <p className={styles.author}>- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
