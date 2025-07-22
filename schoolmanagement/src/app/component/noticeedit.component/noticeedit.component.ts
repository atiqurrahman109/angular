import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../../service/notice.service';

@Component({
  selector: 'app-noticeedit.component',
  standalone: false,
  templateUrl: './noticeedit.component.html',
  styleUrl: './noticeedit.component.css'
})
export class NoticeeditComponent {
form!: FormGroup;
  id!: string;
  imagePreview: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: NoticeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.form = this.fb.group({
        ntitel: [data.ntitel],
        nShortDiscription: [data.nShortDiscription],
        nlongDiscription: [data.nlongDiscription],
        nImage: [data.nImage]
      });
      this.imagePreview = data.nImage;
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

  onUpdate() {
    this.service.update(this.id, this.form.value).subscribe(() => {
      alert('Notice Updated!');
      this.router.navigate(['/notice-list']);
    });
  }
}
