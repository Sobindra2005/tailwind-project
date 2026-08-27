import { useState } from "react";

function Signup() {


    return (
        <main className="flex min-h-screen items-center justify-center bg-stone-100 px-6 py-12 text-stone-900">
            <section className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="mb-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Get started
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight">Create account</h1>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                        Fill in your details to create an account.
                    </p>
                </div>

                <form className="space-y-5" >
                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                            id="name"
                            name="name"
                            placeholder="Alex Morgan"
                            required
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="signup-email">
                            Email
                        </label>
                        <input
                            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                            id="signup-email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            type="email"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="signup-password">
                            Password
                        </label>
                        <input
                            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                            id="signup-password"
                            name="password"
                            placeholder="Create a password"
                            required
                            type="password"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="confirm-password">
                            Confirm password
                        </label>
                        <input
                            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                            id="confirm-password"
                            name="confirmPassword"
                            placeholder="Repeat your password"
                            required
                            type="password"
                        />
                    </div>

                    <button
                        className="w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                        type="submit"
                    >
                        Create account
                    </button>
                </form>

                <p className="mt-5 rounded-lg bg-emerald-50 px-3 py-2 text-center text-sm text-emerald-800">
                    Account created for "here name".
                </p>

            </section>
        </main>
    );
}

export default Signup;