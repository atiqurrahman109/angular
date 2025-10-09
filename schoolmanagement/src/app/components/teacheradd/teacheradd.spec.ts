import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teacheradd } from './teacheradd';

describe('Teacheradd', () => {
  let component: Teacheradd;
  let fixture: ComponentFixture<Teacheradd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teacheradd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teacheradd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
