import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVeiculoComponent } from './cadastrar-veiculo.component';

describe('CadastrarVeiculoComponent', () => {
  let component: CadastrarVeiculoComponent;
  let fixture: ComponentFixture<CadastrarVeiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarVeiculoComponent]
    });
    fixture = TestBed.createComponent(CadastrarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
