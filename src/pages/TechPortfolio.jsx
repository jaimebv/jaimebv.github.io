import { Github, Code2, ExternalLink } from 'lucide-react';

export default function TechPortfolio() {
    const projects = [
        {
            id: 2,
            title: "EDF Port for FreeRTOS",
            description: "Custom port introducing Earliest Deadline First (EDF) scheduling to FreeRTOS, enabling dynamic priority assignment for deterministic real-time execution.",
            tags: [
                { name: "C", bg: "bg-zinc-500/20 text-zinc-200" },
                { name: "FreeRTOS", bg: "bg-orange-500/20 text-orange-200" },
                { name: "Real-Time", bg: "bg-teal-500/20 text-teal-200" }
            ],
            link: "https://github.com/jaimebv/EDF-Port-FreeRTOS"
        },
        {
            id: 4,
            title: "Plug-and-Play Sensor Hub",
            description: "FreeRTOS-based application for seamless plug-and-play discovery and asynchronous scheduling of multiple connected sensors.",
            tags: [
                { name: "C++", bg: "bg-blue-500/20 text-blue-200" },
                { name: "FreeRTOS", bg: "bg-orange-500/20 text-orange-200" },
                { name: "PlatformIO", bg: "bg-purple-500/20 text-purple-200" }
            ],
            link: "https://github.com/jaimebv/plug-play_sensor_hub"
        },
        {
            id: 5,
            title: "Embedded Edge-Aware Scheduler",
            description: "Real-time scheduling framework for IoT environments, balancing local execution and Mobile Edge Computing (MEC) to optimize QoS and predictability.",
            tags: [
                { name: "Python", bg: "bg-yellow-500/20 text-yellow-200" },
                { name: "C++", bg: "bg-blue-500/20 text-blue-200" },
                { name: "Edge Computing", bg: "bg-teal-500/20 text-teal-200" }
            ],
            link: "https://github.com/jaimebv/Embedded_Edge-Aware_Scheduler_PUB"
        }
    ];

    return (
        <article className="animate-in fade-in duration-1000 pb-32">
            {/* Header */}
            <header className="container-fluid mt-12 mb-20 md:mt-20 md:mb-24">
                <div className="max-w-5xl">
                    <h1 className="font-serif italic tracking-tighter leading-[0.85] text-5xl md:text-7xl mb-6 text-white">
                        Tech Portfolio <span className="text-silver-gradient bg-clip-text text-transparent">& Coding</span>
                    </h1>
                    <p className="font-sans font-light text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
                        A curated selection of technical repositories in systems programming, embedded environments, and high-performance engineering.
                    </p>
                </div>
            </header>

            {/* Projects Grid */}
            <section className="container-fluid mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col h-full group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 bg-obsidian-800/50"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                    <Code2 size={20} />
                                </div>
                                <Github size={24} className="text-white/20 group-hover:text-white/50 transition-colors" />
                            </div>

                            <h3 className="font-sans font-semibold text-xl text-white mb-3 group-hover:text-silver-gradient transition-colors">
                                {project.title}
                            </h3>

                            <p className="font-sans font-light text-sm text-white/60 leading-relaxed mb-8 line-clamp-2 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/5 ${tag.bg}`}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-white/10 hover:border-white group/btn"
                            >
                                <Github size={14} className="group-hover/btn:text-black" />
                                View Repository
                                <ExternalLink size={12} className="opacity-50 group-hover/btn:opacity-100" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}
