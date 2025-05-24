import { useState } from "react";
import { Plus, Check } from "lucide-react";

// Sample data
const destinations = [
  { id: 1, name: "San Francisco International Airport", code: "SFO", isSelected: true },
  { id: 2, name: "Los Angeles International Airport", code: "LAX", isSelected: true },
  { id: 3, name: "John F. Kennedy International Airport", code: "JFK", isSelected: false },
  { id: 4, name: "O'Hare International Airport", code: "ORD", isSelected: false },
  { id: 5, name: "Miami International Airport", code: "MIA", isSelected: true },
];

const DestinationsList = () => {
  const [selected, setSelected] = useState<number[]>(
    destinations.filter(d => d.isSelected).map(d => d.id)
  );

  const toggleDestination = (id: number) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Destinations List</h3>
        <p className="text-sm text-gray-500 mb-6">Select the locations where you'd like to be notified about available appointments.</p>

        <div className="space-y-3 mb-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                selected.includes(destination.id)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => toggleDestination(destination.id)}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  selected.includes(destination.id)
                    ? "bg-blue-600"
                    : "bg-gray-200"
                }`}>
                  {selected.includes(destination.id) && (
                    <Check className="text-white" size={12} />
                  )}
                </div>
                <div>
                  <div className="font-medium text-sm">{destination.name}</div>
                  <div className="text-xs text-gray-500">{destination.code}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 transition-colors">
          <Plus size={16} />
          <span>Add New Location</span>
        </button>
      </div>
    </div>
  );
};

export default DestinationsList;