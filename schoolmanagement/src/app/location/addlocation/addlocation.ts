import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlocation',
  standalone: false,
  templateUrl: './addlocation.html',
  styleUrl: './addlocation.css'
})
export class Addlocation implements  OnInit{

formgroup!:FormGroup;

constructor(

private locationService:LocationService,
private formBuilder:FormBuilder,
private router:Router,
){}
  ngOnInit(): void {

  this.formgroup=this.formBuilder.group({

name:[''],
photo:['']

  })


}


addLocation():void{

const loc:Location ={...this.formgroup.value};
this.locationService.saveLocation(loc).subscribe({

next:(res)=> {

console.log('location saved',res);
this.formgroup.reset();
this.router.navigate(['/allloc']);


}


})

}


}
