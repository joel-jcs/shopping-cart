export default function Footer() {
  return (
    <div className="footer text-white">
      <div className="col1 flex w-[20%] flex-col gap-4 px-6">
        <span className="text-3xl">dress.me</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          consectetur, dolores quidem, earum, quia, voluptate temporibus
          voluptates quae cumque quos.
        </p>
      </div>

      <div className="col2 flex w-[10%] flex-col gap-3 px-6">
        <h2 className="text-xl font-black">Discover</h2>
        <a>New Arrivals</a>
        <a>Best Sellers</a>
        <a>About Us</a>
        <a>Careers</a>
      </div>

      <div className="col3 flex w-[10%] flex-col gap-3 px-6">
        <h2 className="text-xl font-black">Support</h2>
        <a>Order Status</a>
        <a>FAQs</a>
        <a>Contact Us</a>
      </div>

      <div className="col-4 subscribe flex w-[25%] flex-col">
        <h2 className="text-left text-xl font-black">
          Subscribe to our newsletter
        </h2>
        <form className="flex h-20 items-center justify-start gap-3">
          <input
            className="w-[60%] rounded-md border-none bg-white p-2 text-black"
            type="email"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
