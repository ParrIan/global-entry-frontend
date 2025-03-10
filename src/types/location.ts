export interface LocationMonitor {
      id: number;
      userId: number;
      locationId: string;
      locationName: string;
      beforeDate: string;
      notifyByEmail: boolean;
      notifyBySMS: boolean;
      isActive: boolean;
      lastChecked: string;
    }

    export interface AppointmentFound {
      id: number;
      locationMonitorId: number;
      startTimestamp: string;
      endTimestamp: string;
      notifiedAt: string;
      wasBooked: boolean;
    }