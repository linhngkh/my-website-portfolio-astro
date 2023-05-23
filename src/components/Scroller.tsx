import Marquee from "react-fast-marquee";

export default function Scroller() {
  return (
    <section>
      <a href="/contact">
        <Marquee
          pauseOnHover
          gradient={false}
          className="bg-yellow-300 border-t-2 border-black py-2 font-bold text-3xl"
        >
          🌟 Let's get to work! 🌟 Have a project in mind? 🌟 Let's get to work!
          🌟 Have a project in mind?
        </Marquee>
      </a>
    </section>
  );
}
