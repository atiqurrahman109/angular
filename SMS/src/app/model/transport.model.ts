export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  // Add other properties if needed
}

export interface Transport {
  id?: number;
  vehicleNumber: string;
  driverName: string;
  route: string;
  student?: Student; // Optional
}
