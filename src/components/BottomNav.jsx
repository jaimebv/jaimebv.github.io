import { Home, Server, Leaf, Cpu, Code2, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BottomNav() {
    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-32 fade-in duration-700 md:hidden">
            <nav className="flex items-center gap-1 sm:gap-2 bg-obsidian-900/85 backdrop-blur-2xl border border-white/10 rounded-full p-2 shadow-2xl">
                <NavItem to="/" icon={<Home size={18} />} label="HOME" active={location.pathname === '/'} />
                <NavItem to="/seqam" icon={<Server size={18} />} label="SYS" active={location.pathname === '/seqam'} />
                <NavItem to="/tech-portfolio" icon={<Code2 size={18} />} label="CODE" active={location.pathname === '/tech-portfolio'} />

                <a href="https://www.linkedin.com/in/jaime-burbano-villavicencio-8139b8163/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="bg-white text-black flex items-center justify-center p-3 rounded-full mx-1 shrink-0">
                    <span className="sr-only">Contact</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </a>

                <NavItem to="/greenshift" icon={<Leaf size={18} />} label="ECO" active={location.pathname === '/greenshift'} />
                <NavItem to="/mape-k" icon={<Cpu size={18} />} label="AI" active={location.pathname === '/mape-k'} />
                <NavItem to="/innovations" icon={<FileText size={18} />} label="PUB" active={location.pathname === '/innovations'} />
            </nav>
        </div>
    );
}

function NavItem({ to, icon, label, active }) {
    return (
        <Link to={to} className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-colors ${active ? 'text-white bg-white/10' : 'text-white/50 hover:text-white'}`}>
            {icon}
            <span className="text-[8px] font-mono mt-0.5 tracking-wider">{label}</span>
        </Link>
    );
}
