import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosRecebidosClientesComponent } from './agendamentos-recebidos-clientes.component';

describe('AgendamentosRecebidosClientesComponent', () => {
  let component: AgendamentosRecebidosClientesComponent;
  let fixture: ComponentFixture<AgendamentosRecebidosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentosRecebidosClientesComponent]
    });
    fixture = TestBed.createComponent(AgendamentosRecebidosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
