import { Component, OnInit } from '@angular/core';
import { Transport } from '../../model/transport.model';
import { TransportService } from '../../service/transport.service';

@Component({
  selector: 'app-transport-component',
  standalone: false,
  templateUrl: './transport-component.html',
  styleUrl: './transport-component.css'
})
export class TransportComponent implements OnInit{
 transports: Transport[] = [];

  newTransport: Transport = {
    vehicleNumber: '',
    driverName: '',
    route: ''
  };

  editMode: boolean = false;
  editId: number | null = null;

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.loadTransports();
  }

  loadTransports(): void {
    this.transportService.getAll().subscribe(data => {
      this.transports = data;
    });
  }

  saveTransport(): void {
    if (this.editMode && this.editId !== null) {
      this.transportService.update(this.editId, this.newTransport).subscribe(() => {
        this.resetForm();
        this.loadTransports();
      });
    } else {
      this.transportService.add(this.newTransport).subscribe(() => {
        this.resetForm();
        this.loadTransports();
      });
    }
  }

  editTransport(transport: Transport): void {
    this.newTransport = { ...transport };
    this.editMode = true;
    this.editId = transport.id!;
  }

  deleteTransport(id: number): void {
    if (confirm('Are you sure you want to delete this transport?')) {
      this.transportService.delete(id).subscribe(() => {
        this.loadTransports();
      });
    }
  }

  resetForm(): void {
    this.newTransport = {
      vehicleNumber: '',
      driverName: '',
      route: ''
    };
    this.editMode = false;
    this.editId = null;
  }
}
