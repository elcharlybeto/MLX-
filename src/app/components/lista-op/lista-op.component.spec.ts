import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOpComponent } from './lista-op.component';

describe('ListaOpComponent', () => {
  let component: ListaOpComponent;
  let fixture: ComponentFixture<ListaOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
