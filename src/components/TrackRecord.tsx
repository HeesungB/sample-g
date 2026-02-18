import React from "react";

const TrackRecord = () => {
  const stats = [
    {
      label: "Since",
      value: "2018",
      sub: "Longest-running builder-first conference",
    },
    {
      label: "Events",
      value: "150+",
      sub: "Flagship conferences and builder gatherings",
    },
    { label: "Attendees", value: "20K+", sub: "Week-long participants" },
    {
      label: "Organizations",
      value: "100+",
      sub: "Global leading foundations & researchers",
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">
            Track Record
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">
            From Market Momentum <br className="hidden md:block" /> to{" "}
            <span className="text-primary">Builder Reality</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-tighter">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-4">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
