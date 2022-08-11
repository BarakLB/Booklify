import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsBooksComponent } from './ms-books.component';

describe('MsBooksComponent', () => {
  let component: MsBooksComponent;
  let fixture: ComponentFixture<MsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
