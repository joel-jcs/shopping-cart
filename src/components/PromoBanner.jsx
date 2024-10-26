export default function PromoBanner({ title, subtitle, imageSrc }) {
  return (
    <div className="after:z-1 relative flex h-[80vh] w-screen cursor-pointer items-center justify-center bg-black after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-black after:opacity-40">
      <h1 className="absolute z-10 mt-[280px] text-5xl font-black text-white">
        {title}
      </h1>
      <h2 className="absolute z-10 mt-[380px] text-3xl font-black text-white">
        {subtitle}
      </h2>
      <img src={imageSrc} className="h-full w-full object-cover object-top" />
      <button className="absolute bottom-[15%] z-10 text-lg">SHOP NOW</button>
    </div>
  );
}
