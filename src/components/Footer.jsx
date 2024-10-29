import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div data-testid="footer" className="footer text-white">
      <div className="col1 flex w-[20%] flex-col gap-4 px-6">
        <span className="text-3xl font-black">dress.me</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          consectetur, dolores quidem, earum, quia, voluptate temporibus
          voluptates quae cumque quos.
        </p>
      </div>

      <div className="col2 flex w-[10%] flex-col gap-3 px-6">
        <h2 className="text-xl font-black">Discover</h2>
        <Link to="shop" onClick={scrollToTop}>
          New Arrivals
        </Link>
        <Link to="shop" onClick={scrollToTop}>
          Best Sellers
        </Link>
        <a
          onClick={() =>
            alert("This link would normally send you to another page")
          }
        >
          About Us
        </a>
        <a
          onClick={() =>
            alert("This link would normally send you to another page")
          }
        >
          Careers
        </a>
      </div>

      <div className="col3 flex w-[10%] flex-col gap-3 px-6">
        <h2 className="text-xl font-black">Support</h2>
        <a
          onClick={() =>
            alert("This link would normally send you to another page")
          }
        >
          Order Status
        </a>
        <a
          onClick={() =>
            alert("This link would normally send you to another page")
          }
        >
          FAQs
        </a>
        <a
          onClick={() =>
            alert("This link would normally send you to another page")
          }
        >
          Contact Us
        </a>
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
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
