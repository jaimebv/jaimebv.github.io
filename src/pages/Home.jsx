import { Link } from 'react-router-dom';
import BentoFeatureGrid from '../components/BentoGrid';

export default function Home() {
    const bentoItems = [
        {
            category: "EMBEDDED SYSTEMS",
            title: "Wireless Sensor Network",
            description: "From Requirements to Real Product: A highly scalable, RTOS-based embedded platform for remote environmental monitoring.",
            link: "/wsn"
        },
        {
            category: "DISTRIBUTED SYSTEMS",
            title: "Service Quality Manager for Edge Computing",
            description: "High-throughput, distributed telemetry and workload orchestration platform built on Kubernetes to ensure end-to-end service quality in the Cloud-Edge Continuum.",
            link: "/seqam"
        },
        {
            category: "GREEN IT",
            title: "Green Workload Orchestration",
            description: "Architecting compliance-driven observability for virtualized workloads to support corporate ESG reporting and enable IT transparent carbon tracking.",
            link: "/greenshift"
        },
        {
            category: "AUTONOMOUS ORCHESTRATION",
            title: "Control Loop in Edge AI Applications",
            description: "Resilient, automated control loops for performance-sensitive Edge AI applications ensuring E2E Service Quality.",
            link: "/mape-k"
        },
        {
            category: "CLOUD-EDGE EXPERIMENTATION",
            title: "Edge-Cloud Load Emulator",
            description: "Distributed three-tier architecture to execute and test complex load scenarios in the Cloud-Edge Continuum.",
            link: "/cea"
        }
    ];

    return (
        <div className="animate-in fade-in duration-1000 pb-32">
            {/* Hero Section */}
            <section className="container-fluid mt-4 mb-16 md:mb-24">
                <div className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm px-6 py-16 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden">

                    <h1 className="font-serif italic tracking-tighter leading-[0.85] text-[clamp(42px,7vw,110px)] mb-6 md:mb-10 relative z-10 max-w-5xl mx-auto text-white">
                        From Architecture to Solution<br />
                        <span className="text-silver-gradient bg-clip-text text-transparent italic">Execution</span>
                    </h1>

                    <div className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.5em] text-white/50 flex flex-col md:flex-row gap-4 md:gap-12 relative z-10">
                        <span>IoT Solutions</span>
                        <span className="hidden md:inline">///</span>
                        <span>Device-Edge-Cloud Continuum</span>
                        <span className="hidden md:inline">///</span>
                        <span>Embedded Engineer</span>
                        <span className="hidden md:inline">///</span>
                        <span>Product Owner</span>
                    </div>

                    {/* Subtle glow behind hero text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
                </div>
            </section>

            {/* Executive Summary */}
            <section className="container-fluid mb-32 flex flex-col items-center">
                <div className="w-full max-w-6xl">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-12 flex items-center justify-center gap-4">
                        <span className="w-12 h-px bg-white/20"></span>
                        Executive Summary
                        <span className="w-12 h-px bg-white/20"></span>
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                        {/* Image - Left */}
                        <div className="w-full max-w-[280px] lg:max-w-[320px] shrink-0">
                            <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden glass-panel border border-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                                <img
                                    src="./img/JB.jpeg"
                                    alt="JB System Architect"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal"
                                />
                            </div>
                        </div>

                        {/* Text - Right */}
                        <div className="max-w-2xl text-justify">
                            <p className="font-sans text-lg md:text-2xl font-light text-white/80 leading-relaxed mb-8">
                                I specialize in bridging the gap between high-level enterprise strategy and deep technical execution (The Buz-Tech Limbo sweetspot). Operating at the intersection of Systems Architecture, Product Ownership, and SW Engineering, I design, scale, and deliver complex distributed systems for IoT solutions that work in the device-edge-cloud continuum.
                            </p>
                            <p className="font-sans text-base md:text-xl font-light text-white/60 leading-relaxed">
                                My approach strips away theoretical overhead, focusing entirely on structuring complex engineering challenges into modular architectures and efficient solutions, strict product requirements, and actionable agile roadmaps. From ensuring strict Service Quality guarantees to enabling EU-mandated ESG compliance through software-defined carbon tracking, and designing HW & embedded SW for dense Wireless Sensor Networks, I build enterprise-grade IoT systems that solve real-world bottlenecks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Architecture-to-Execution Bridge */}
            <section className="container-fluid mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="glass-panel p-8 rounded-2xl border border-white/10 lg:col-span-1">
                        <h3 className="font-mono text-sm tracking-widest text-white mb-6">01 / DESIGN</h3>
                        <p className="font-sans text-white/70 font-light leading-relaxed">
                            <strong className="text-white font-medium block mb-2">Structured System Design</strong>
                            Utilizing industry-standard modeling to define system boundaries, API contracts, and strict JSON schemas. Implementing SW modules for agile testing and functionality validation.
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl border border-white/10 lg:col-span-1">
                        <h3 className="font-mono text-sm tracking-widest text-white mb-6">02 / LEADERSHIP</h3>
                        <p className="font-sans text-white/70 font-light leading-relaxed">
                            <strong className="text-white font-medium block mb-2">Cross-Functional Leadership</strong>
                            Guiding engineering teams through complex distributed deployments, observability, and energy-efficient solutions.
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl border border-white/10 lg:col-span-1">
                        <h3 className="font-mono text-sm tracking-widest text-white mb-6">03 / CROSS-LAYER KNOWLEDGE</h3>
                        <p className="font-sans text-white/70 font-light leading-relaxed">
                            <strong className="text-white font-medium block mb-2">Bottom to Top Systems</strong>
                            Knowledge of the layers that compose an IoT solution, from bottom (embedded devices) to top (cloud-edge). Designing high-performance, efficient, scalable, and secure IoT systems.
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl border border-white/10 lg:col-span-1">
                        <h3 className="font-mono text-sm tracking-widest text-white mb-6">04 / PRODUCT</h3>
                        <p className="font-sans text-white/70 font-light leading-relaxed">
                            <strong className="text-white font-medium block mb-2">Agile Product Ownership</strong>
                            Translating architectural requirements into prioritized Epics, actionable User Stories, and phased Proof-of-Concept roadmaps.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Architectural Pillars */}
            <section className="container-fluid mb-20 md:mb-40">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="font-serif italic text-4xl md:text-6xl tracking-tighter text-white mb-6">Core Architectural &amp; Product Pillars</h2>
                        <p className="font-mono text-sm text-white/50 uppercase tracking-widest">My portfolio of delivered systems</p>
                    </div>
                </div>

                <div className="w-[100vw] relative left-1/2 -translate-x-1/2">
                    <div className="container-fluid">
                        <BentoFeatureGrid items={bentoItems} />
                    </div>
                </div>
            </section>

            {/* Tech Portfolio Link Section */}
            <section className="container-fluid mb-16 md:mb-20">
                <Link to="/tech-portfolio" className="block w-full">
                    <div className="glass-panel p-8 md:p-16 rounded-[2rem] border border-white/10 group relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div>
                            <h2 className="font-serif italic text-4xl md:text-5xl tracking-tighter text-white mb-4 group-hover:text-silver-gradient transition-colors">Hands-on Engineering</h2>
                            <p className="font-sans text-white/70 font-light text-lg max-w-2xl leading-relaxed">
                                Beyond architectural design, I maintain deep technical proficiency. View my curated repository collection demonstrating my problem-solving approach in C++, Python, and Embedded Systems.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                Explore Tech Portfolio <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">-&gt;</span>
                            </span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Innovations Link Section */}
            <section className="container-fluid mb-32">
                <Link to="/innovations" className="block w-full">
                    <div className="glass-panel p-8 md:p-16 rounded-[2rem] border border-white/10 group relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div>
                            <h2 className="font-serif italic text-4xl md:text-5xl tracking-tighter text-white mb-4 group-hover:text-silver-gradient transition-colors">Innovations &amp; Papers</h2>
                            <p className="font-sans text-white/70 font-light text-lg max-w-2xl leading-relaxed">
                                A curated collection of my industry-oriente research papers, detailing novel solutions and architectural breakthroughs.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                View Publications <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">-&gt;</span>
                            </span>
                        </div>
                    </div>
                </Link>
            </section>
        </div>
    );
}
