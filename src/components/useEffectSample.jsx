import { useEffect, useRef, useState } from "react";

export function Profile() {
    const [username, setUsername] = useState("John");
    const [age, setAge] = useState(25);
    const [country, setCountry] = useState("USA");

    // Unrelated states
    const [theme, setTheme] = useState("light");
    const [showNotifications, setShowNotifications] = useState(true);
    const [language, setLanguage] = useState("English");

    const count = useRef(0)

    const InputEl = useRef(null)



    useEffect(() => {
        console.log({
            username,
            age,
            country,
            count
        });

        return () => {
            console.log("cleanup code ....")
        }
    }, [username, age, country])

    console.log("this is running")

    function setCounter() {
        count.current++;
        console.log(InputEl.current.focus())
        
    }

    return (
        <main className="min-h-screen bg-stone-100 px-4 py-10 text-stone-900 sm:px-6">
            <button onClick={setCounter}>Counter</button>
            <section className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Account
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight">Profile settings</h1>
                    <p className="mt-2 text-sm text-stone-500">Manage your personal details and preferences.</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                        <h2 className="text-base font-semibold">Personal details</h2>
                        <p className="mt-1 text-sm text-stone-500">Keep your profile information up to date.</p>

                        <div className="mt-6 space-y-4">
                            <label className="block text-sm font-medium" htmlFor="username">
                                Username
                                <input
                                   ref={InputEl}
                                    id="username"
                                    className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5 font-normal outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>

                            <label className="block text-sm font-medium" htmlFor="age">
                                Age
                                <input
                                    id="age"
                                    className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5 font-normal outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                                    type="number"
                                    min="0"
                                    value={age}
                                    onChange={(e) => setAge(Number(e.target.value))}
                                />
                            </label>

                            <label className="block text-sm font-medium" htmlFor="country">
                                Country
                                <select
                                    id="country"
                                    className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option>USA</option>
                                    <option>India</option>
                                    <option>Germany</option>
                                </select>
                            </label>
                        </div>
                    </section>

                    <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                        <h2 className="text-base font-semibold">Preferences</h2>
                        <p className="mt-1 text-sm text-stone-500">Choose how the app should feel and communicate.</p>

                        <div className="mt-6 divide-y divide-stone-100">
                            <button
                                className="flex w-full items-center justify-between py-4 text-left text-sm font-medium transition hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            >
                                <span>Theme</span>
                                <span className="text-stone-500">{theme}</span>
                            </button>

                            <button
                                className="flex w-full items-center justify-between py-4 text-left text-sm font-medium transition hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                                onClick={() => setShowNotifications(!showNotifications)}
                            >
                                <span>Notifications</span>
                                <span className="text-stone-500">{showNotifications ? "On" : "Off"}</span>
                            </button>

                            <label className="flex items-center justify-between py-4 text-sm font-medium" htmlFor="language">
                                Language
                                <select
                                    id="language"
                                    className="rounded-lg border border-stone-300 bg-white px-3 py-2 font-normal outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option>English</option>
                                    <option>German</option>
                                    <option>Hindi</option>
                                </select>
                            </label>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}