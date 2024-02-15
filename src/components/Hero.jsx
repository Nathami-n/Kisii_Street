import {Foods} from './'
const Hero = () => {
  return (
    <section className="h-full max-w-[1040px] sm:p-5 md:p-3 md:mx-auto">
      <div className="flex flex-col items-center mt-6 md:gap-10 md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-extrabold"> Savory & Delicious</h1>
            <p className="text-gray-400">
              Get our organic and delicious meals. You do not not want to miss
              the bliss!
            </p>
          </div>
          <div className="flex gap-10 md:gap-4 items-center justify-center md:justify-start">
            <button className="button">Order Now</button>
            <button className="button">View Menu</button>
          </div>
        </div>
        <div>
          <img
            className=" w-full h-full object-contain mt-4 transtion-all"
            src="/burger2.jpg"
            alt="burger image"
          />
        </div>
      </div>
     
       <Foods/>
    </section>
  );
};

export default Hero;
