import { certification } from "../../data";

const Certificate = () => {
  return (
    <section className="px-5">
      <h1 class="text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
        Certification
      </h1>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {certification.map((item, index) => (
          <a
            href={item.url}
            key={index}
            className="md:even:pt-12 ease-in-out duration-75 cursor-pointer hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
          >
            <div className="bg-white border-2 border-black border-b-2 rounded-xl rounded-br-xl mx-4 p-4 text-lg flex justify-between gap-4 items-center">
              <div>
                <span className="font-bold">{item.title} </span>
                <span className="text-zinc-400">{item.desc}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
