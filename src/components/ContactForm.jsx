export default function ContactForm() {
    return (
        <div className="w-full max-w-2xl mx-auto my-32 px-4" id="contact">
            <div className="glass-panel p-2 rounded-2xl flex flex-col sm:flex-row items-center gap-2 relative z-10">
                <div className="flex-1 w-full px-4 py-2">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="ENTER_EMAIL_FOR_CONTACT_REQUEST"
                        className="w-full bg-transparent border-0 font-mono text-sm uppercase tracking-widest text-white placeholder:text-white/30 focus:outline-none focus:ring-0"
                    />
                </div>
                <button
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-silver-gradient text-black font-mono font-bold uppercase tracking-widest text-xs transition-all hover:-translate-y-[1px]"
                    style={{ boxShadow: '0 0 20px rgba(255,255,255,0.15)' }}
                >
                    Initiate
                </button>
            </div>
            <p className="text-center font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] mt-6">

            </p>
        </div>
    );
}
