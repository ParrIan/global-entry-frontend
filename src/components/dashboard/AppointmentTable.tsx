import React from "react";
import { Check, Calendar, ExternalLink } from "lucide-react";

// Sample data
const appointments = [
  {
    id: 1,
    location: "San Francisco International Airport",
    date: "Sep 24, 2023",
    time: "10:30 AM",
    status: "available",
    timeAgo: "12m ago"
  },
  {
    id: 2,
    location: "Los Angeles International Airport",
    date: "Sep 26, 2023",
    time: "2:15 PM",
    status: "available",
    timeAgo: "43m ago"
  },
  {
    id: 3,
    location: "Miami International Airport",
    date: "Sep 28, 2023",
    time: "11:00 AM",
    status: "available",
    timeAgo: "1h ago"
  },
  {
    id: 4,
    location: "San Francisco International Airport",
    date: "Sep 30, 2023",
    time: "9:45 AM",
    status: "booked",
    timeAgo: "3h ago"
  },
  {
    id: 5,
    location: "Los Angeles International Airport",
    date: "Oct 2, 2023",
    time: "3:30 PM",
    status: "expired",
    timeAgo: "1d ago"
  },
];

const AppointmentTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>

        <div className="rounded-lg border overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Found
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {appointment.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-gray-500" />
                      <span>{appointment.date}, {appointment.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.status === "available" && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-700 border border-green-200">
                        Available
                      </span>
                    )}
                    {appointment.status === "booked" && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        <Check size={12} className="mr-1" />
                        <span>Booked</span>
                      </span>
                    )}
                    {appointment.status === "expired" && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-50 text-gray-500 border border-gray-200">
                        Expired
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
                    {appointment.timeAgo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {appointment.status === "available" && (
                      <button
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded bg-black text-white hover:bg-gray-800 focus:outline-none"
                      >
                        <span>Book</span>
                        <ExternalLink size={12} className="ml-1" />
                      </button>
                    )}
                    {appointment.status === "booked" && (
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded bg-white text-gray-700 hover:bg-gray-50 focus:outline-none">
                        View
                      </button>
                    )}
                    {appointment.status === "expired" && (
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-gray-500">
                        -
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;