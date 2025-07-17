import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { StudentService } from '../../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentFee } from '../../model/fee.model';
import { FeeService } from '../../service/fee.service';

@Component({
  selector: 'app-fee.component',
  standalone: false,
  templateUrl: './fee.component.html',
  styleUrl: './fee.component.css'
})
export class FeeComponent implements OnInit {

  formValue!: FormGroup;
  fee: StudentFee = new StudentFee();
  feeData: any[] = [];

  studentId: number | undefined;
  searchkeyword: string = '';


  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(
    private feeservice: FeeService,
    private studentservice: StudentService,
    private formBuilder: FormBuilder


  ) { }

  ngOnInit(): void {


    throw new Error('Method not implemented.');
  }

  private loadFee() {
    this.feeservice.getAllFee().subscribe(

      data => this.feeData = data,
      error => console.error('error fetching fee', error)
    );

  }

  private loadStudent() {

    this.studentservice.getAllStudent().subscribe(

      data => this.feeData = data,
      error => console.error('error fetching', error)
    );
  }

  setFeeModelFrom(): void {
    this.fee.feeCatagory = this.formValue.value.feeCatagory;
    this.fee.feeMonth = this.formValue.value.feeMonth;
    this.fee.feeamount = this.formValue.value.feeamount;
    this.fee.Student = {
      id: this.formValue.value.student
    };
  }

  saveFee() {
    this.setFeeModelFrom();
    this.feeservice.saveFee(this.fee).subscribe((res) => {
      this.formValue.reset();
      alert("fee saved");
      this.getAll();

    },
      (err) => {
        console.error("error saving fee", err);

        alert("fee not saved");
      }

    );

  }

  getAll(): void {
    this.feeservice.getAllFee().subscribe(res=>{
      console.log(res)
    });


  }
  loadFeeData():void{
    if(this.studentId !== undefined){
      this.feeservice.getFeeByStudentId(this.studentId)
      .subscribe((
        data:StudentFee[])=>{

          this.feeData=data;
          console.log('fees:',this.feeData);
        },

        (error)=>{
          console.error('error',error)

        }
      );
    }

  }
getFeesByStudentId(): void {
    const studentId = parseInt(this.searchkeyword, 10); 
    if (!isNaN(studentId)) { 
      this.studentId = studentId;
      this.loadFeeData();
    } else {
      console.error('Invalid student ID:', this.searchkeyword);
    }
  }

  printLastPaymentReceipt(){

this.feeservice.createFeeReceipt().subscribe(
(pdfBlob:Blob)=>{

const blobUrl=window.URL.createObjectURL(pdfBlob);
window.open(blobUrl);
},
error=>{
console.error('error generating paymenty receipt:',error);

}

);


  }

}
