import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarconsultaComponent } from './buscarconsulta.component';

describe('BuscarconsultaComponent', () => {
  let component: BuscarconsultaComponent;
  let fixture: ComponentFixture<BuscarconsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarconsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
