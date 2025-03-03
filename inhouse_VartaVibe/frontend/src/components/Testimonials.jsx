import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="mt-20 tracking-wide text-center"
    >
      {/* Centered Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-orange-500 mb-4">
        Testimonials
      </h2>
      {/* Orange Line Below Heading */}
      <div className="w-20 h-[3px] bg-orange-500 mx-auto mb-10"></div>

      {/* Testimonials Content */}
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              {/* Testimonial Text */}
              <p>{testimonial.text}</p>
              {/* User Info */}
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="text-white font-medium">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;