import { useEffect, useState } from "react";
import Block from "../../../components/Block";
import Layout from "../../../components/Layout";
import Title from "../../../components/Title";

const Testimonial: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
      name: "Jane Doe",
      role: "Professional chef",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      id: 2,
      text: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
      name: "Jane Doe",
      role: "Professional chef",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      id: 3,
      text: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
      name: "Jane Doe",
      role: "Professional chef",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces&auto=format&q=80",
    },
  ];

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-28 ">
      <div className="flex flex-col gap-4 items-center text-center pb-4">
        <Block>Testimonial</Block>
        <Title>What Our Customers Say</Title>
        <Layout>
          Don't just take our word for it—here's what some of our customers have
          to say about their experience with Fresh Harvest:
        </Layout>
      </div>
      <div>
        {/* Testimonial Content */}
        <div className="relative h-[400px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : index < currentSlide
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex items-center gap-16">
                {/* Avatar */}

                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-[287px] h-[396px] rounded-[200px] object-cover border-4 border-white"
                />

                {/* Testimonial Text */}
                <div className="flex flex-col gap-8 p-8 rounded-3xl bg-[#F4F6F6] max-w-[643px]">
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    "{testimonial.text}"
                  </p>
                  <div className="text-lg text-[#212337]">
                    <strong>{testimonial.name} -</strong> {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-green-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
