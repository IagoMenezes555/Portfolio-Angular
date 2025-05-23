import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPageComponent } from './inicio.component';

describe('InicioPageComponent', () => {
  let component: InicioPageComponent;
  let fixture: ComponentFixture<InicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
