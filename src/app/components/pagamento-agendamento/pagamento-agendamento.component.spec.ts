import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoAgendamentoComponent } from './pagamento-agendamento.component';

describe('PagamentoAgendamentoComponent', () => {
  let component: PagamentoAgendamentoComponent;
  let fixture: ComponentFixture<PagamentoAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoAgendamentoComponent]
    });
    fixture = TestBed.createComponent(PagamentoAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
