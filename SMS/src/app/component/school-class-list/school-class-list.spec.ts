import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassList } from './school-class-list';

describe('SchoolClassList', () => {
  let component: SchoolClassList;
  let fixture: ComponentFixture<SchoolClassList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolClassList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolClassList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
