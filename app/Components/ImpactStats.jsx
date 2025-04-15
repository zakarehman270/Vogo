import React from "react";

const stats = [
  {
    value: "12k+",
    title: "Growers – Impact Creators",
    description:
      "At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum...",
  },
  {
    value: "24k+",
    title: "Impacts Made – Worldwide",
    description:
      "At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum...",
  },
  {
    value: "20k+",
    title: "Goers – Impact Workers",
    description:
      "At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum...",
  },
];

const ImpactStats = () => {
  return (
    <section className=" px-4 md:px-15 lg:px-15">
      <div className="flex flex-col lg:flex-row gap-[55px] text-center lg:text-left">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1">
            <h2 className="text-[35px] font-[900] text-gray-900">{stat.value}</h2>
            <h3 className="text-lg font-semibold mt-2">{stat.title}</h3>
            <p className="text-sm text-[#6A737B] leading-[24px] mt-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
