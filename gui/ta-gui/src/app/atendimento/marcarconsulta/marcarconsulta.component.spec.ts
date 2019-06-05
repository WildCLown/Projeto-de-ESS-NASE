import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarconsultaComponent } from './marcarconsulta.component';

describe('MarcarconsultaComponent', () => {
  let component: MarcarconsultaComponent;
  let fixture: ComponentFixture<MarcarconsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarconsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
