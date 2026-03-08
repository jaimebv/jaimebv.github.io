import { FileText, Code2, ExternalLink } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Innovations() {
    const papers = [
        {
            id: 1,
            title: "SeQaM: A Service Quality Manager for Edge Computing",
            description: "A comprehensive framework for distributed observability and service quality management across the cloud-edge continuum.",
            tags: [
                { name: "Edge Computing", bg: "bg-orange-500/20 text-orange-200" },
                { name: "Distributed Systems", bg: "bg-zinc-500/20 text-zinc-200" }
            ],
            link: "https://ieeexplore.ieee.org/document/11059713"
        },
        {
            id: 2,
            title: "Demo: End-to-End Service Quality Manager for Edge Computing",
            description: "Demonstration of the SeQaM architecture orchestrating end-to-end telemetry and actionable metrics for edge environments.",
            tags: [
                { name: "Performance", bg: "bg-red-500/20 text-red-200" },
                { name: "Observability", bg: "bg-blue-500/20 text-blue-200" }
            ],
            link: "https://dl.acm.org/doi/abs/10.1109/SEC62691.2024.00059"
        },
        {
            id: 3,
            title: "Now You See Me: Embedded Mobile MEC Awareness for Optimizing Constrained IoT Devices",
            description: "A novel approach leveraging Embedded Mobile Edge Computing for optimizing resource-constrained IoT devices in multi-task scenarios.",
            tags: [
                { name: "IoT", bg: "bg-yellow-500/20 text-yellow-200" },
                { name: "Embedded Systems", bg: "bg-teal-500/20 text-teal-200" }
            ],
            link: "https://www.computer.org/csdl/proceedings-article/smartiot/2024/664400a115/22KwKlaQvja"
        },
        {
            id: 4,
            title: "Lightning Talk: Service Quality Management for Critical Edge Applications",
            description: "A KubeCon presentation detailing architectural patterns for ensuring Service Quality in Mission-Critical Edge environments.",
            tags: [
                { name: "Video", bg: "bg-rose-500/20 text-rose-200" },
                { name: "Conference Talk", bg: "bg-slate-500/20 text-slate-200" }
            ],
            link: "https://www.youtube.com/watch?v=YKspaqa1PTs&list=PLj6h78yzYM2MZ-bw7e9fZhV2jDdLVEP6C&index=7"
        }
    ];

    return (
        <article className="animate-in fade-in duration-1000 pb-32">
            {/* Header */}
            <header className="container-fluid mt-12 mb-20 md:mt-20 md:mb-24">
                <div className="max-w-5xl">
                    <h1 className="font-serif italic tracking-tighter leading-[0.85] text-5xl md:text-7xl mb-6 text-white">
                        Innovations <span className="text-silver-gradient bg-clip-text text-transparent">& Publications</span>
                    </h1>
                    <p className="font-sans font-light text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
                        A curated collection of my industry-oriented research papers, detailing novel solutions and architectural breakthroughs.
                    </p>
                </div>
            </header>

            {/* Papers Grid */}
            <section className="container-fluid mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {papers.map((paper) => (
                        <div
                            key={paper.id}
                            className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col h-full group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 bg-obsidian-800/50"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                    <FileText size={20} />
                                </div>
                                <FileText size={24} className="text-white/20 group-hover:text-white/50 transition-colors" />
                            </div>

                            <h3 className="font-sans font-semibold text-xl text-white mb-3 group-hover:text-silver-gradient transition-colors">
                                {paper.title}
                            </h3>

                            <p className="font-sans font-light text-sm text-white/60 leading-relaxed mb-8 flex-grow">
                                {paper.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {paper.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/5 ${tag.bg}`}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-white/10 hover:border-white group/btn"
                            >
                                <FileText size={14} className="group-hover/btn:text-black transition-colors" />
                                Learn more
                                <ExternalLink size={12} className="opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}
