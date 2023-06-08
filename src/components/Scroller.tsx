import Marquee from "react-fast-marquee";

const Scroller = () => {
  return (
    <section>
      <a href="/contact">
        <Marquee
          pauseOnHover
          gradient={false}
          className="bg-yellow-300 border-t-2 border-black py-2 font-bold text-3xl"
        >
          🌟 Hey, my future employer! 🌟 Have a project in mind? 🌟 Let's get to
          work!
        </Marquee>
      </a>
    </section>
  );
};

export default Scroller;
