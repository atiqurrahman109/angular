import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionList } from './section-list';

describe('SectionList', () => {
  let component: SectionList;
  let fixture: ComponentFixture<SectionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
