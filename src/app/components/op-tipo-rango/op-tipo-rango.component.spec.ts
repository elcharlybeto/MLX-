import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpTipoRangoComponent } from './op-tipo-rango.component';

describe('OpTipoRangoComponent', () => {
  let component: OpTipoRangoComponent;
  let fixture: ComponentFixture<OpTipoRangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpTipoRangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpTipoRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
