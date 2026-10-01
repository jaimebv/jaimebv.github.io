import { useEffect } from 'react';

export default function CaseStudy({ data }) {
    if (!data) return null;

    return (
        <article className="animate-in fade-in duration-1000 pb-32">
            {/* Hero Section */}
            <header className="container-fluid mt-12 mb-24 md:mt-20 md:mb-32">
                <div className="max-w-5xl">
                    <h1 className="font-serif italic tracking-tighter leading-[0.85] text-[clamp(40px,7vw,110px)] mb-8 text-white">
                        {data.title}
                    </h1>
                    <h2 className="font-sans font-medium text-xl md:text-3xl text-white/80 max-w-4xl leading-tight">
                        {data.subtitle}
                    </h2>
                </div>

                {/* Metadata Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">Role</h3>
                        <p className="font-mono text-xs text-white uppercase tracking-wider">{data.role}</p>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">Core Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.techStack?.map((tech, idx) => (
                                <span key={idx} className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/80 uppercase tracking-widest">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Metrics (optional) */}
                {data.metrics && (
                    <div className={`mt-16 grid grid-cols-2 border-t border-l border-white/10 ${data.metrics.length === 4 ? 'xl:grid-cols-4' : 'md:grid-cols-3 xl:grid-cols-6'}`}>
                        {data.metrics.map((metric, idx) => (
                            <div key={idx} className="border-r border-b border-white/10 p-6 flex flex-col gap-3">
                                <span className="font-serif italic tracking-tighter leading-none text-3xl md:text-4xl text-silver">
                                    {metric.value}
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white">
                                    {metric.label}
                                </span>
                                <span className="font-sans font-light text-xs text-white/50 leading-relaxed">
                                    {metric.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </header>

            {/* Capability Map (optional) */}
            {data.capabilities && (
                <section className="container-fluid mb-24 md:mb-32">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-10 flex items-center gap-4">
                        <span className="w-8 h-px bg-white/20"></span>
                        Capability Map
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-l border-white/10">
                        {data.capabilities.map((cap, idx) => (
                            <div key={idx} className="glass-panel border-0 border-r border-b border-white/10 p-8 flex flex-col">
                                <div className="font-mono text-[10px] text-white/50 mb-6 uppercase tracking-widest">
                                    {String(idx + 1).padStart(2, '0')} / {cap.area}
                                </div>
                                <h4 className="font-serif italic tracking-tighter leading-tight text-2xl text-white">
                                    {cap.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Main Content */}
            <div className="container-fluid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* Left Column (Overview & Role) */}
                <div className="lg:col-span-4 flex flex-col gap-12">
                    {data.overview && (
                        <section className="glass-panel p-8 rounded-[2rem] border border-white/10">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-white/20"></span>
                                The Overview
                            </h3>
                            <p className="font-sans font-light text-white/80 leading-relaxed">
                                {data.overview}
                            </p>
                        </section>
                    )}

                    {data.roleDescription && (
                        <section>
                            <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-white/20"></span>
                                My Role & Ownership
                            </h3>
                            <p className="font-sans font-light text-white/70 leading-relaxed text-sm">
                                {data.roleDescription}
                            </p>
                        </section>
                    )}
                </div>

                {/* Right Column (Detailed Sections) */}
                <div className="lg:col-span-8 flex flex-col gap-24">
                    {data.sections?.map((section, idx) => (
                        <section key={idx}>
                            <h2 className="font-serif italic text-3xl md:text-4xl text-white tracking-tighter mb-8">
                                {section.title}
                            </h2>
                            {section.content && (
                                <p className="font-sans text-lg font-light text-white/80 leading-relaxed mb-8">
                                    {section.content}
                                </p>
                            )}

                            {section.steps && (
                                <ol className="flex flex-col border-t border-white/10">
                                    {section.steps.map((step, stepIdx) => (
                                        <li key={stepIdx} className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_14rem_1fr] gap-x-4 gap-y-1 py-5 border-b border-white/10">
                                            <span className="font-mono text-xs text-white/40 tracking-widest md:row-span-1 row-span-2">
                                                {String(stepIdx + 1).padStart(2, '0')}
                                            </span>
                                            <strong className="font-mono text-xs uppercase tracking-widest text-white font-normal">
                                                {step.name}
                                            </strong>
                                            <p className="font-sans font-light text-white/70 leading-relaxed text-sm">
                                                {step.text}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            )}

                            {section.list && (
                                <ul className="flex flex-col gap-8">
                                    {section.list.map((item, itemIdx) => (
                                        <li key={itemIdx} className="border-l border-white/20 pl-6 relative">
                                            <div className="absolute w-2 h-2 rounded-full bg-white/40 -left-[4.5px] top-2"></div>
                                            <strong className="block font-sans font-medium text-white mb-2 text-lg">
                                                {item.strong}
                                            </strong>
                                            <p className="font-sans font-light text-white/70 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}

                </div>
            </div>
        </article>
    );
}
