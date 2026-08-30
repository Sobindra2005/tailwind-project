import { useState } from 'react';

// Question:
// Build a Mini Traffic Light component using a `light` state.
// Add three buttons: Red, Yellow, and Green.
// When a button is clicked, update `light` and show its value with matching text and background color.

  const colorMap = {
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    green: 'bg-green-100 text-green-700',
  };

function MiniTrafficLight() {
 const light = 'red'

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-6">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Mini Traffic Light</h1>

        <p
          className={`mt-6 rounded-lg p-4 text-center text-2xl font-bold capitalize ${colorMap[light]}`}
        >
          {light}
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white"
          >
            Red
          </button>
          <button
            className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-zinc-900"
          >
            Yellow
          </button>
          <button
            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-bold text-white"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniTrafficLight;