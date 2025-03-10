export interface SubscriptionTier {
      id: number;
      name: string;
      price: number;
      durationDays: number;
      maxLocations: number;
      checkFrequencyMins: number;
      includesSMS: boolean;
    }

    export interface Subscription {
      id: number;
      userId: number;
      subscriptionTierId: number;
      subscriptionTier?: SubscriptionTier;
      startDate: string;
      endDate: string;
      isActive: boolean;
      paymentReference: string;
    }