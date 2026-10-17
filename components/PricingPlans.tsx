import type { PricingData } from '@/data';

interface PricingPlansProps {
  pricing: PricingData;
}

/**
 * SaaS subscription pricing section for project detail pages.
 *
 * Driven by the optional per-project `pricing` entry in the data file:
 * plan cards, add-on pricing, the shared feature list, the one-time setup
 * fee, and first-month payment examples (setup fee + 1 month).
 */
export default function PricingPlans({ pricing }: PricingPlansProps) {
  return (
    <section className="mb-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Subscription Plans
        </h2>
        <p className="text-gray-600">
          Simple Plans · Transparent Pricing · Real Business Value
        </p>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
          >
            <div
              className="px-6 py-4 text-center"
              style={{ backgroundColor: plan.color }}
            >
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            </div>
            <div className="p-6 text-center flex flex-col flex-1">
              <span className="self-center inline-block px-4 py-1 rounded-full text-sm font-semibold text-gray-800 bg-gray-100 mb-5">
                {plan.usersIncluded}
              </span>
              <div className="mb-4">
                <div className="text-4xl font-bold" style={{ color: plan.color }}>
                  {plan.price}
                </div>
                <div className="text-gray-500 mt-1">{plan.period}</div>
              </div>
              <p className="text-gray-600 text-sm mt-auto">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      {pricing.addOns.length > 0 && (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-4 mb-6 text-center space-y-1">
          {pricing.addOns.map((addOn) => (
            <p key={addOn} className="text-gray-700 font-medium">
              {addOn}
            </p>
          ))}
        </div>
      )}

      {/* Shared features */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          All Plans Include the Same Features
        </h3>
        <p className="text-gray-600 mb-5">
          Powerful and complete features — no matter which plan you choose.
        </p>
        <div className="flex flex-wrap gap-3">
          {pricing.allPlansInclude.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Setup fee and first-month examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            One-Time Setup Fee
          </h3>
          <div className="text-3xl font-bold text-gray-900 mb-3">
            {pricing.setupFee.amount}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {pricing.setupFee.description}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            First Month Payment Examples
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            Includes setup fee + 1 month subscription
          </p>
          <div className="grid grid-cols-3 gap-4">
            {pricing.firstMonthExamples.map((example) => (
              <div
                key={example.label}
                className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-4 text-center"
              >
                <div className="text-sm font-medium text-gray-600 mb-1">
                  {example.label}
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-900">
                  {example.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
