interface VehicleType {
  name: string;
  maxPassengers: number;
}

export interface Listing {
  name: string;
  pricePerPassenger: number;
  vehicleType: VehicleType;
}

export interface TravelData {
  from: string;
  to: string;
  listings: Listing[];
}
