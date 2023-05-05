import Image from "next/image";

export default function Hero({ image, text }: { image: string, text: string}) {
  
    return (
      <div className="w-[100%] flex justify-center items-center relative min-h-[350px]">
        <div className="absolute top-0 object-cover object-center min-w-[100%] h-[100%] z-[0]"><Image src={image} fill={true} alt="hero background" /></div>
        <div className="z-[1] text-heading-lg h-[350px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <h1>{text}</h1>
        </div>
      </div>
    );
  }