import { portfolioData } from "../../data";

const ProjectCard = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 mb-28">
        {portfolioData.map((item, index) => (
          <a
            href={item.url}
            key={index}
            className="md:even:pt-12 ease-in-out duration-75 cursor-pointer hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
          >
            <div className="border-2 border-black rounded-xl overflow-hidden bg-black">
              <img src={item.img} alt={item.desc} />
            </div>

            <div className="bg-white border-x-2 border-black border-b-2 rounded-bl-xl rounded-br-xl mx-4 p-4 flex justify-between gap-4 items-center ">
              <div>
                <span className="font-bold text-xl ">{item.title} </span>
                <span className="text-zinc-400 text-sm">
                  &#9679; {item.badge}
                </span>
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
      {/* view all */}
      <a
        href="/projects"
        className="flex text-xl gap-4 font-bold text-white justify-center mb-8"
      >
        View All Projects
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
      </a>
    </section>
  );
};

export default ProjectCard;
