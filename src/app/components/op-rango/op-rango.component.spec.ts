import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpRangoComponent } from './op-rango.component';

describe('OpRangoComponent', () => {
  let component: OpRangoComponent;
  let fixture: ComponentFixture<OpRangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpRangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
