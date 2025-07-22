import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeelistComponent } from './studentfeelist.component';

describe('StudentfeelistComponent', () => {
  let component: StudentfeelistComponent;
  let fixture: ComponentFixture<StudentfeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentfeelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentfeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
