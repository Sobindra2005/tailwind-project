import React, { useState } from 'react';
import { PricingCard } from './PricingCard';

export function Pricing() {
  const features = [
    "All limited links",
    "Own analytics platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users"
  ];
    const Profeatures = [
    "All limited links",
    "Own analytics platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users"
  ];
    const EnterPrisefeatures = [
    "All limited links",
    "Own analytics platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
      <h1 className="text-[32px] md:text-[44px] font-bold text-white mb-4 text-center tracking-tight">
        Simple, transparent pricing
      </h1>
      <p className="text-lg text-slate-400 mb-10 text-center font-medium">
        No contracts. No surprise fees.
      </p>

      {/* Toggle */}
      <div className="bg-slate-800 p-1.5 rounded-full inline-flex mb-16 shadow-sm border border-slate-700">
        <button className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wider text-white bg-indigo-500 shadow-sm">
          MONTHLY
        </button>
        <button className="px-8 py-2.5 rounded-full text-xs font-bold tracking-wider text-slate-400 hover:text-white transition-colors">
          YEARLY
        </button>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1050px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          <PricingCard
            title="Base"
            price="80"
            description="For most businesses that want to optimize web queries"
            features={features}
            buttonText="Downgrade"
          />
          <PricingCard
            title="Pro"
            price="120"
            description="For most businesses that want to optimize web queries"
            features={Profeatures}
            isPopular={true}
            buttonText="Upgrade"
          />
          <PricingCard
            title="Enterprise"
            price="260"
            description="For most businesses that want to optimize web queries"
            features={EnterPrisefeatures}
            buttonText="Upgrade"
          />
        </div>
      </div>
    </div>
  );
}
