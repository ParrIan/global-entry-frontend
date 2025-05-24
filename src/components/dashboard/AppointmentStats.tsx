import React from "react";
import { ArrowUp, Clock } from "lucide-react";

const AppointmentStats = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Appointment Statistics</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-500">Available Now</div>
              <div className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700 border border-green-200">
                Live
              </div>
            </div>
            <div className="text-2xl font-bold">3</div>
            <div className="mt-2 flex items-center text-xs text-green-600">
              <ArrowUp size={12} className="mr-1" />
              <span>+2 from yesterday</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-500">Last Found</div>
              <div className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                <Clock size={10} className="mr-1" />
                <span>Recent</span>
              </div>
            </div>
            <div className="text-lg font-medium">12 min ago</div>
            <div className="mt-2 text-xs text-gray-500">
              SFO - Sept 24, 10:30 AM
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-50">
            <div className="text-sm text-gray-500 mb-2">30-Day Total</div>
            <div className="text-2xl font-bold">127</div>
            <div className="mt-2 text-xs text-gray-500">
              Across all locations
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-50">
            <div className="text-sm text-gray-500 mb-2">Success Rate</div>
            <div className="text-2xl font-bold">92%</div>
            <div className="mt-2 text-xs text-gray-500">
              Users who booked
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentStats;