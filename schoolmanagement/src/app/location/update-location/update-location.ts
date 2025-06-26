import { ChangeDetectorRef, Component } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-location',
  standalone: false,
  templateUrl: './update-location.html',
  styleUrl: './update-location.css'
})
export class UpdateLocation {

id: string='';
l:Location=new Location();

constructor(
private locationService:LocationService,
private router:Router,
private route:ActivatedRoute,
private cdr: ChangeDetectorRef

){}

ngOnInIt():void{

  this.loadLocationById();
}


loadLocationById(){
this.id=this.route.snapshot.params['id'];
this.locationService.getLocationById(this.id).subscribe({

  next:(res)=>{

this.l=res;
this.cdr.markForCheck();

  },
  error:(err)=>{
    console.error('error fatching student',err);

  }

});


}
updateLocation():void{

this.locationService.updateLocation(this.id,this.l).subscribe({
next:()=> this.router.navigate(['/allloc']),
error:err=> console.error('update failed',err)


});

}


}
