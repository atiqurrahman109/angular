import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeeditComponent } from './noticeedit.component';

describe('NoticeeditComponent', () => {
  let component: NoticeeditComponent;
  let fixture: ComponentFixture<NoticeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
