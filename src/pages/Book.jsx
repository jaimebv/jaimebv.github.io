import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { bookData } from '../data/book';

export default function Book() {
    const [openChapters, setOpenChapters] = useState(() => new Set([0]));
    const allOpen = openChapters.size === bookData.toc.length;

    const toggleChapter = (idx) => {
        setOpenChapters((prev) => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            return next;
        });
    };

    const toggleAll = () => {
        setOpenChapters(allOpen ? new Set() : new Set(bookData.toc.map((_, idx) => idx)));
    };

    // HashRouter owns the URL hash, so jump to chapters by scrolling instead of #anchors
    const jumpToChapter = (idx) => {
        setOpenChapters((prev) => new Set(prev).add(idx));
        document.getElementById(`chapter-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const sectionCount = bookData.toc.reduce((sum, ch) => sum + ch.sections.length, 0);

    return (
        <article className="animate-in fade-in duration-1000 pb-32">
            {/* Hero Section */}
            <header className="container-fluid mt-12 mb-24 md:mt-20 md:mb-32">
                <Link to="/innovations" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={12} />
                    Innovations & Publications
                </Link>

                <div className="max-w-5xl">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-8">
                        Book / {bookData.year}
                    </div>
                    <h1 className="font-serif italic tracking-tighter leading-[0.85] text-[clamp(40px,6.5vw,100px)] mb-8 text-white">
                        {bookData.title}
                    </h1>
                    <h2 className="font-sans font-medium text-xl md:text-3xl text-white/80 max-w-4xl leading-tight">
                        {bookData.subtitle}
                    </h2>
                </div>

                {/* Metadata Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <MetaItem label="Author" value={bookData.author} />
                    <MetaItem label="Length" value={`${bookData.pages} pages`} />
                    <MetaItem label="Structure" value={`${bookData.toc.length - 1} chapters + appendix`} />
                    <MetaItem label="Edition" value={`${bookData.edition} · ${bookData.format}`} />
                </div>
            </header>

            <div className="container-fluid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Left Column */}
                <aside className="lg:col-span-4 flex flex-col gap-12 lg:sticky lg:top-8 lg:self-start">
                    <section className="glass-panel p-8 rounded-[2rem] border border-white/10">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-white/20"></span>
                            About the Book
                        </h3>
                        <p className="font-serif italic text-2xl tracking-tighter leading-tight text-white mb-6">
                            “{bookData.quote}”
                        </p>
                        <p className="font-sans font-light text-white/80 leading-relaxed">
                            {bookData.summary}
                        </p>
                    </section>

                    <section>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-white/20"></span>
                            Written For
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {bookData.audience.map((item, idx) => (
                                <li key={idx} className="font-sans font-light text-sm text-white/70 leading-relaxed pl-4 relative">
                                    <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-white/40"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <nav className="hidden lg:block">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-white/20"></span>
                            Jump To
                        </h3>
                        <ol className="flex flex-col">
                            {bookData.toc.map((chapter, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => jumpToChapter(idx)}
                                        className="w-full text-left py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/50 hover:text-white transition-colors flex gap-3"
                                    >
                                        <span className="text-white/30 w-8 shrink-0">{chapterIndex(chapter)}</span>
                                        <span className="truncate">{chapter.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </aside>

                {/* Right Column: Table of Contents */}
                <section className="lg:col-span-8">
                    <div className="flex items-end justify-between gap-6 mb-8">
                        <div>
                            <h2 className="font-serif italic text-3xl md:text-4xl text-white tracking-tighter mb-3">
                                Table of Contents
                            </h2>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                                {bookData.toc.length} parts · {sectionCount} sections
                            </p>
                        </div>
                        <button
                            onClick={toggleAll}
                            className="shrink-0 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                        >
                            {allOpen ? 'Collapse all' : 'Expand all'}
                        </button>
                    </div>

                    <ol className="border-t border-white/10">
                        {bookData.toc.map((chapter, idx) => {
                            const isOpen = openChapters.has(idx);
                            return (
                                <li key={idx} id={`chapter-${idx}`} className="border-b border-white/10 scroll-mt-8">
                                    <button
                                        onClick={() => toggleChapter(idx)}
                                        aria-expanded={isOpen}
                                        className="w-full grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_auto] items-center gap-4 py-6 text-left group"
                                    >
                                        <span className="font-mono text-xs text-white/40 tracking-widest">
                                            {chapterIndex(chapter)}
                                        </span>
                                        <span>
                                            <span className="block font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">
                                                {chapter.label}
                                            </span>
                                            <span className="block font-serif italic text-xl md:text-2xl tracking-tighter text-white/90 group-hover:text-white transition-colors">
                                                {chapter.title}
                                            </span>
                                        </span>
                                        <span className="flex items-center gap-4">
                                            <span className="hidden sm:inline font-mono text-[10px] text-white/30 tracking-widest">p. {chapter.page}</span>
                                            <ChevronDown size={16} className={`text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <ol className="pb-8 pl-[3rem] md:pl-[4rem] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                            {chapter.sections.map((section, sIdx) => (
                                                <li key={sIdx}>
                                                    <TocRow num={section.num} title={section.title} page={section.page} strong />
                                                    {section.subsections.length > 0 && (
                                                        <ol className="mt-2 pl-6 border-l border-white/10 flex flex-col gap-1.5">
                                                            {section.subsections.map((sub, subIdx) => (
                                                                <li key={subIdx}>
                                                                    <TocRow num={sub.num} title={sub.title} page={sub.page} />
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    )}
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </section>
            </div>
        </article>
    );
}

function chapterIndex(chapter) {
    const num = chapter.label.match(/\d+/);
    return num ? num[0].padStart(2, '0') : 'A';
}

function MetaItem({ label, value }) {
    return (
        <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">{label}</h3>
            <p className="font-mono text-xs text-white uppercase tracking-wider">{value}</p>
        </div>
    );
}

function TocRow({ num, title, page, strong = false }) {
    return (
        <div className="flex items-baseline gap-3">
            {num && (
                <span className={`font-mono text-[10px] tracking-wider shrink-0 ${strong ? 'text-white/40 w-6' : 'text-white/30 w-8'}`}>
                    {num}
                </span>
            )}
            <span className={`font-sans leading-snug ${strong ? 'text-white/85 font-normal' : 'text-white/55 font-light text-sm'}`}>
                {title}
            </span>
            <span className="flex-1 border-b border-dotted border-white/10 translate-y-[-3px] min-w-4"></span>
            <span className="font-mono text-[10px] text-white/30 tracking-wider shrink-0">{page}</span>
        </div>
    );
}
