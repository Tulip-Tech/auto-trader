interface Feature {
  description: string;
  category: string;
  __typename: string;
}
export interface TechData {
  co2Emissions: string;
  fuelConsumptionCombined: string;
  fuelConsumptionExtraUrban: string;
  fuelConsumptionUrban: string;
  insuranceGroup: string;
  minimumKerbWeight: string;
  zeroToSixtyMph: string | null;
  zeroToSixtyTwoMph: string;
  cylinders: string;
  valves: string;
  enginePower: string;
  topSpeed: string;
  engineTorque: string;
  vehicleHeight: string;
  vehicleLength: string;
  vehicleWidth: string;
  wheelbase: string;
  fuelTankCapacity: string;
  grossVehicleWeight: string | null;
  luggageCapacitySeatsDown: string;
  bootspaceSeatsUp: string;
  vehicleWidthInclMirrors: string | null;
  maxLoadingWeight: string | null;
  standardFeatures: Feature[];
  chargingData: any | null;
  __typename: string;
}
