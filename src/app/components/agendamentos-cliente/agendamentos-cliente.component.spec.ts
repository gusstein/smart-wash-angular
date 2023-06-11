import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosClienteComponent } from './agendamentos-cliente.component';

describe('AgendamentosClienteComponent', () => {
  let component: AgendamentosClienteComponent;
  let fixture: ComponentFixture<AgendamentosClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentosClienteComponent]
    });
    fixture = TestBed.createComponent(AgendamentosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
