import React from 'react';
export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular,
  buttonText
}) {

  const variable = "hello" + "world"

  return (
    <div className={`rounded-4xl p-8 md:p-10 flex flex-col h-full   ${isPopular ? 'bg-blue-800 text-white shadow-sm border border-slate-700' : 'bg-slate-800 text-white shadow-sm border border-slate-700' } relative
      `}>
      {isPopular && (
        <div className=" absolute top-6 right-8 text-[10px] font-bold tracking-widest uppercase bg-white/20 text-white py-1.5 px-3 rounded-full">
          Most Popular
        </div>
      )}

      <div className="flex items-baseline gap-1.5 mb-2 mt-2">
        <span className="text-4xl md:text-5xl font-bold tracking-tight">${price}</span>
        <span className={`text-sm font-medium ${isPopular ? 'text-indigo-200' : 'text-slate-400'}`}>/month</span>
      </div>

      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className={`text-sm mb-8 leading-relaxed ${isPopular ? 'text-indigo-100' : 'text-slate-400'}`}>
        {description}
      </p>

      <ul className="flex-1 space-y-4 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3.5">
            <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isPopular ? 'bg-white/20 text-white' : 'bg-indigo-500/20 text-indigo-400'
              }`}>
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className={`text-[15px] font-medium ${isPopular ? 'text-indigo-50' : 'text-slate-300'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-full font-semibold transition-colors mt-auto ${isPopular
          ? 'bg-white text-indigo-600 hover:bg-slate-50'
          : 'bg-slate-700 text-white hover:bg-slate-600'
        }`}>
        {buttonText}
      </button>
    </div>
  );
}
