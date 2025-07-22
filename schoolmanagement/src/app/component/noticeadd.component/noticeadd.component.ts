import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoticeService } from '../../service/notice.service';

@Component({
  selector: 'app-noticeadd.component',
  standalone: false,
  templateUrl: './noticeadd.component.html',
  styleUrl: './noticeadd.component.css'
})
export class NoticeaddComponent {
form: FormGroup;
  imagePreview: string = '';

  constructor(private fb: FormBuilder, private service: NoticeService) {
    this.form = this.fb.group({
      ntitel: [''],
      nShortDiscription: [''],
      nlongDiscription: [''],
      nImage: ['']
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.patchValue({ nImage: reader.result as string });
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe(() => {
      alert('Notice Added!');
      this.form.reset();
      this.imagePreview = '';
    });
  }
}
