import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    const solutionLinks = [
        { label: 'Platform Engine [SeQaM]', path: '/seqam' },
        { label: 'Sensor Network [WSN]', path: '/wsn' },
        { label: 'Green IT [GreenShift]', path: '/greenshift' },
        { label: 'Edge AI [MAPE-K]', path: '/mape-k' },
        { label: 'Load Emulator [CEA]', path: '/cea' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsSolutionsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    // Close menus on route change
    useEffect(() => {
        setIsOpen(false);
        setIsSolutionsOpen(false);
    }, [location.pathname]);

    const isSolutionsActive = solutionLinks.some(link => location.pathname === link.path);
    const isTechActive = location.pathname === '/tech-portfolio';
    const isInnovationsActive = location.pathname === '/innovations';

    return (
        <header className="w-full pt-8 pb-4 z-40 relative">
            <div className="container-fluid flex items-center justify-between">
                {/* Monospace Brand Logo */}
                <Link to="/" className="font-mono text-sm tracking-widest uppercase hover:text-white/80 transition-colors">
                    jb.solutions_arch //
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center bg-white/5 border border-white/10 rounded-full py-1 backdrop-blur-3xl relative">

                        {/* Solutions Dropdown */}
                        <div className="relative px-2 border-r border-white/10" ref={dropdownRef}>
                            <button
                                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                                className={`flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-widest uppercase rounded-full transition-all ${isSolutionsActive || isSolutionsOpen ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Solutions
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isSolutionsOpen && (
                                <div className="absolute top-full left-2 mt-4 w-[280px] bg-[#0c0c0c]/95 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] shadow-2xl py-3 animate-in fade-in slide-in-from-top-4 duration-300">
                                    {solutionLinks.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            to={link.path}
                                            className={`block px-6 py-3.5 font-mono text-xs tracking-widest uppercase transition-colors hover:bg-white/5 ${location.pathname === link.path ? 'text-white bg-white/5' : 'text-white/60 hover:text-white'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="px-6 pt-3 pb-1 mt-2 border-t border-white/5">
                                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Select Case Study</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tech Portfolio link */}
                        <div className="px-2">
                            <Link
                                to="/tech-portfolio"
                                className={`block px-4 py-2 font-mono text-xs tracking-widest uppercase rounded-full transition-all ${isTechActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Tech Portfolio
                            </Link>
                        </div>

                        {/* Innovations link */}
                        <div className="px-2 border-l border-white/10">
                            <Link
                                to="/innovations"
                                className={`block px-4 py-2 font-mono text-xs tracking-widest uppercase rounded-full transition-all ${isInnovationsActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Innovations
                            </Link>
                        </div>

                    </nav>

                    <a href="https://www.linkedin.com/in/jaime-burbano-villavicencio-8139b8163/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition-colors">
                        Contact
                    </a>
                </div>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden text-white/80 hover:text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <span className="font-mono text-xs uppercase tracking-widest">Menu</span>}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#080808]/95 backdrop-blur-2xl border-b border-white/10 py-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col gap-6 container-fluid">

                        {/* Solutions Section */}
                        <div>
                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] px-4 mb-3 block">Solutions</span>
                            <div className="flex flex-col">
                                {solutionLinks.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        to={link.path}
                                        className={`block px-4 py-3 font-mono text-xs tracking-widest uppercase transition-colors ${location.pathname === link.path ? 'text-white bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-white/5 mx-4"></div>

                        <Link
                            to="/tech-portfolio"
                            className={`block px-4 py-3 font-mono text-xs tracking-widest uppercase transition-colors ${isTechActive ? 'text-white bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            Tech Portfolio
                        </Link>

                        <div className="h-px bg-white/5 mx-4"></div>

                        <Link
                            to="/innovations"
                            className={`block px-4 py-3 font-mono text-xs tracking-widest uppercase transition-colors ${isInnovationsActive ? 'text-white bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            Innovations
                        </Link>

                        <a href="https://www.linkedin.com/in/jaime-burbano-villavicencio-8139b8163/?locale=de_DE" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-white text-black px-4 py-4 text-center rounded-xl font-mono text-xs font-bold tracking-widest uppercase mt-4 mb-2 hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
