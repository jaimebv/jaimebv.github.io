import { Link } from 'react-router-dom';

export default function BentoFeatureGrid({ items }) {
    // Determine dynamic column spans for up to 6 columns
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-white/10">
            {items.map((item, idx) => {
                let colSpan = "lg:col-span-2"; // Desktop: default to 3 items per row
                let borderClass = "lg:border-r";

                if (items.length === 5) {
                    if (idx < 3) colSpan = "lg:col-span-2"; // 3 cards top row
                    else colSpan = "lg:col-span-3"; // 2 cards bottom row

                    // Remove right border for the last item in a row on desktop
                    if (idx === 2 || idx === 4) borderClass = "lg:border-r-0";
                } else {
                    // Fallback for general case
                    if ((idx + 1) % 3 === 0) borderClass = "lg:border-r-0";
                }

                // Add missing md fallback for border, if 2 cols then every even index removes border 
                const mdBorderClass = ((idx + 1) % 2 === 0) || (idx === items.length - 1) ? "md:border-r-0" : "md:border-r";

                return <BentoCard key={idx} item={item} index={idx} colSpan={colSpan} borderClass={`${borderClass} ${mdBorderClass} border-r-0`} />;
            })}
        </div>
    );
}

function BentoCard({ item, index, colSpan, borderClass }) {
    const isLink = !!item.link;

    const content = (
        <div className={`h-full glass-panel border-0 border-b ${borderClass} border-white/10 rounded-none p-8 flex flex-col justify-between group cursor-default transition-all duration-300`}>
            <div>
                <div className="font-mono text-[10px] text-white/50 mb-6 uppercase tracking-widest">
                    {String(index + 1).padStart(2, '0')} / {item.category}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl italic tracking-tighter leading-none mb-6 group-hover:text-silver-gradient transition-all text-white">
                    {item.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-white/70">
                    {item.description}
                </p>
            </div>

            {isLink && (
                <div className="mt-12 font-mono text-xs tracking-widest uppercase text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                </div>
            )}
        </div>
    );

    if (isLink) {
        return (
            <Link to={item.link} className={`block group ${colSpan} md:col-span-1`}>
                {content}
            </Link>
        );
    }

    return <div className={`block group ${colSpan} md:col-span-1`}>{content}</div>;
}
