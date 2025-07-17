'use client';

import { useState, useEffect } from 'react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(100);
  const [hrHours, setHrHours] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(50);

  const [savings, setSavings] = useState({
    time: 0,
    money: 0,
    annual: 0
  });

  useEffect(() => {
    // Calculate savings based on input values
    const timeSavingPercentage = 0.4; // 40% time savings
    const timeSaved = hrHours * timeSavingPercentage;
    const monthlySavings = timeSaved * hourlyRate * 4; // 4 weeks per month
    const annualSavings = monthlySavings * 12;

    setSavings({
      time: Math.round(timeSaved * 10) / 10,
      money: Math.round(monthlySavings),
      annual: Math.round(annualSavings)
    });
  }, [employees, hrHours, hourlyRate]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Calculate Your ROI</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-1">{employees} employees</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly HR Hours
              </label>
              <input
                type="range"
                min="10"
                max="160"
                value={hrHours}
                onChange={(e) => setHrHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-1">{hrHours} hours/month</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Hourly Rate
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-1">${hourlyRate}/hour</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-6">Your Potential Savings</h4>
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Time Saved per Month</div>
              <div className="text-3xl font-bold text-primary">{savings.time} hours</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-1">Monthly Cost Savings</div>
              <div className="text-3xl font-bold text-primary">${savings.money}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-1">Annual Cost Savings</div>
              <div className="text-3xl font-bold text-primary">${savings.annual}</div>
            </div>

            <div className="pt-4">
              <a
                href="/contact"
                className="block w-full bg-primary text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 