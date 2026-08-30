
// + increases temperature
// - decreases temperature
// Reset to 20°C
// Show "Cold", "Normal", or "Hot"

const START_TEMP = 20;

function TemperaturePractice() {

  const temperature = START_TEMP

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-amber-100 to-orange-200 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-gray-800">Temperature Practice</h1>

        <div className="mt-6 text-center">
          <p className="text-5xl font-extrabold text-orange-700">{temperature}°C</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="rounded-lg bg-sky-600 px-5 py-2 text-xl font-bold text-white transition hover:bg-sky-700"
          >
            -
          </button>

          <button
            className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
          >
            Reset to 20°C
          </button>

          <button
            className="rounded-lg bg-rose-600 px-5 py-2 text-xl font-bold text-white transition hover:bg-rose-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemperaturePractice;