import React from 'react';
import AppointmentStats from './AppointmentStats';
import AppointmentTable from './AppointmentTable';
import { Clock, Bell, Settings as SettingsIcon } from 'lucide-react';

const Dashboard = () => {
  // Sample data for destination list
  const destinations = [
    { id: 1, name: "San Francisco International Airport" },
    { id: 2, name: "Los Angeles International Airport" },
    { id: 3, name: "Miami International Airport" },
    { id: 4, name: "New York JFK Airport" },
    { id: 5, name: "Chicago O'Hare Airport" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
        {/* Top row cards */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Destination List</h3>
            <div className="space-y-2">
              {destinations.map(destination => (
                <div key={destination.id} className="py-2 border-b border-gray-200 flex justify-between items-center">
                  <span className="text-gray-800">{destination.name}</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <SettingsIcon size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center">
              <span className="mr-1">+</span> Add Location
            </button>
          </div>
        </div>

        {/* Use the AppointmentStats component */}
        <div className="col-span-2">
          <AppointmentStats />
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Notifications</h4>

              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                <div className="flex items-center">
                  <Bell size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-800">Email alerts</span>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Bell size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-800">SMS alerts</span>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Check Frequency</h4>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Clock size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-800">Check interval</span>
                </div>
                <select className="p-1.5 border border-gray-300 rounded-md text-sm text-gray-800 bg-white">
                  <option>Every 1 minute</option>
                  <option>Every 3 minutes</option>
                  <option>Every 5 minutes</option>
                </select>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
                <div className="font-medium text-blue-700 mb-1 text-sm">Premium Plan</div>
                <div className="text-xs text-blue-600">
                  Your subscription expires in 24 days
                </div>
              </div>
              <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
                Manage Subscription
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row - Use the AppointmentTable component */}
        <div className="col-span-3">
          <AppointmentTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;