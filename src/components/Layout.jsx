import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="relative min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
            <Navigation />

            <main className="flex-1 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both" style={{ animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <Outlet />
            </main>

            <BottomNav />

            <footer className="container-fluid border-t border-white/10 py-12 mt-32 text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    © {new Date().getFullYear()} JB.SOLUTIONS_ARCH // ALL SYSTEMS NOMINAL
                </p>
            </footer>
        </div>
    );
}
