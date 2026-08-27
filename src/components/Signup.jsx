import { useState } from "react";

export function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const variable = 'sobhindra@!12'
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/


    function handleSubmit(e) {
        e.preventDefault()
        if (formData.password.length < 8) {
            console.log("password length must be greater than 8")
            return;
        }
        else if (!pattern.test(formData.password)) {
            console.log("pattern not match!!!")
            return;
        } else if (formData.password !== formData.confirmPassword) {
            console.log("password and confirm Password should have same value")
            return;
        }

        setIsSubmitted(true)
    }


    return (
        <main className="flex min-h-screen items-center justify-center bg-stone-100 px-6 py-12 text-stone-900">
            <section className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">

                <form className="space-y-5" onSubmit={handleSubmit}>
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
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
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
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
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
                            value={formData.password}
                            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
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
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                        />
                    </div>

                    <button
                        className="w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                        type="submit"
                    >
                        Create account
                    </button>
                </form>
                {isSubmitted &&
                    <p className="mt-5 rounded-lg bg-emerald-50 px-3 py-2 text-center text-sm text-emerald-800">
                        Account created for {formData.name}.
                    </p>}

            </section>
        </main>
    );
}

