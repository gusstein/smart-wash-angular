import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarServicosComponent } from './cadastrar-servicos.component';

describe('CadastrarServicosComponent', () => {
  let component: CadastrarServicosComponent;
  let fixture: ComponentFixture<CadastrarServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarServicosComponent]
    });
    fixture = TestBed.createComponent(CadastrarServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
