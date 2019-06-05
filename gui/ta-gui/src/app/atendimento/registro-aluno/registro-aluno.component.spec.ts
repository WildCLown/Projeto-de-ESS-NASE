import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAlunoComponent } from './registro-aluno.component';

describe('RegistroAlunoComponent', () => {
  let component: RegistroAlunoComponent;
  let fixture: ComponentFixture<RegistroAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
