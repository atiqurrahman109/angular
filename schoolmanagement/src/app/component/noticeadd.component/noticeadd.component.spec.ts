import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeaddComponent } from './noticeadd.component';

describe('NoticeaddComponent', () => {
  let component: NoticeaddComponent;
  let fixture: ComponentFixture<NoticeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
