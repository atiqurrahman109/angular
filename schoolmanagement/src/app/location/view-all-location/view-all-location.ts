import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';

@Component({
  selector: 'app-view-all-location',
  standalone: false,
  templateUrl: './view-all-location.html',
  styleUrl: './view-all-location.css'
})
export class ViewAllLocation implements OnInit {
location:any;

constructor(
  private locationService:LocationService,
  private router:Router,
  private cdr:ChangeDetectorRef
  

){}
  ngOnInit(): void {
    
  }

  loadLocation():void{
    this.location=this.locationService.getAllLocation();

  }
  
  deleteLocation(id:string):void{
    this.locationService.deleteLocation(id).subscribe({
      next:()=>{

console.log('student delete');
this.loadLocation();
this.cdr.reattach();

      },
      error:(err) => {
        console.log(err);

      }


    });


  }
  getLocationById(id:string):void{
    this.locationService.getLocationById(id).subscribe({

      next:(res)=>{
        console.log(res)
        console.log('data get successfully');
        this.router.navigate(['/updatelocation',id])


      }



    });

  }

}
