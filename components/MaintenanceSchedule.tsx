import React from 'react';
import { Calendar, CheckCircle, AlertTriangle, Wrench } from 'lucide-react';

const SCHEDULE = [
  {
    period: "Monthly",
    icon: <CheckCircle className="text-green-500" size={24} />,
    title: "DIY Safety Check",
    tasks: [
      "Test the auto-reverse safety function (place an object on the floor).",
      "Visually inspect cables for fraying (do NOT touch them).",
      "Check the manual release cord is accessible.",
      "Listen for any new grinding or squeaking noises."
    ]
  },
  {
    period: "Every 3-6 Months",
    icon: <Wrench className="text-blue-500" size={24} />,
    title: "DIY Care & Cleaning",
    tasks: [
      "Wash the door curtain/panels with water and a soft sponge.",
      "Lubricate steel rollers and hinges with a silicone-based spray.",
      "Clean internal tracks with a damp cloth (no grease!).",
      "Clear tracks of any debris, stones, or leaves."
    ]
  },
  {
    period: "Every 12 Months",
    icon: <AlertTriangle className="text-amber-500" size={24} />,
    title: "Professional Service",
    tasks: [
      "Check and tension springs (high danger task).",
      "Align and balance the door.",
      "Inspect and tighten all heavy-duty fixings.",
      "Reset motor limits and force margins.",
      "Full safety certification."
    ]
  }
];

const MaintenanceSchedule: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-medium text-[#ED1C24] mb-8">Recommended Maintenance Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SCHEDULE.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-50 p-3 rounded-full">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Frequency</span>
                <h3 className="text-lg font-bold text-pt-dark-grey-1">{item.period}</h3>
              </div>
            </div>

            <h4 className="font-bold text-[#293a8c] mb-4 border-b border-gray-100 pb-2">{item.title}</h4>
            
            <ul className="space-y-3">
              {item.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                  <span className="text-pt-red mt-1">•</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3">
        <AlertTriangle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
        <p className="text-sm text-blue-800">
          <strong>Warning:</strong> Garage door springs and cables are under extreme tension. Never attempt to loosen, untie, or repair these components yourself. Serious injury can occur.
        </p>
      </div>
    </div>
  );
};

export default MaintenanceSchedule;
