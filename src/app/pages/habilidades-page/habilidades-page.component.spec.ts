import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesPageComponent } from './habilidades-page.component';

describe('HabilidadesPageComponent', () => {
  let component: HabilidadesPageComponent;
  let fixture: ComponentFixture<HabilidadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilidadesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
