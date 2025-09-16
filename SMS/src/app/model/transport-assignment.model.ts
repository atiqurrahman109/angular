export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  // Add more if needed
}

export interface Bus {
  id: number;
  vehicleNumber: string;
  driverName: string;
  route: string;
}

export interface TransportAssignment {
  id?: number;
  student: Student;
  bus: Bus;
  pickupPoint: string;
  dropPoint: string;
}
