import { use } from "react";
import { useState } from "react";

export function Login() {
    const [email, setEmail] = useState('email@gmail.com')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        if (password.length < 8) {
            console.log("weak password")
            return;
        }

        console.log("form is submitted")
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-stone-100 px-6 py-12 text-stone-900">
            <section className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-semibold tracking-tight mb-5 ">Sign in</h1>

                <div>
                    <h1 className="text-[32px] md:text-[44px] font-bold text-black mb-4 text-center tracking-tight">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-lg text-slate-400 mb-10 text-center font-medium">
                        No contracts. No surprise fees.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="block text-sm font-medium" htmlFor="password">
                                Password
                            </label>
                        </div>
                        <input
                            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>

                    <button
                        className="w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                        type="submit"
                    >
                        Sign in
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Login;