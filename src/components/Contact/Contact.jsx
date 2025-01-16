import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import Button from "../Button/Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/22/01/48/03/87a08405-6091-46bc-83a7-21abd9ce8103/Live.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/22/14/21/04/c30e8d0c-f73b-4e87-b3b1-e6d367f0c082/citygate-105.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/24/02/59/18/d72af163-bd9f-4e25-a8ad-4405161bb340/89027625_10157594228263292_57432044984074240_n.jpg"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/24/02/59/18/d72af163-bd9f-4e25-a8ad-4405161bb340/89027625_10157594228263292_57432044984074240_n.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Citygate Fellowship Church
          </p>

          <AnimatedTitle
            title="let&#39;s build a <br /> new era of <br /> faith together"
            className="special-font !md:text-[6.2rem] w-full font-front-page-neue !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
