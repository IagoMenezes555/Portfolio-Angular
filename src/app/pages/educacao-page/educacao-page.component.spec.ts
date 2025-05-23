import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaoPageComponent } from './educacao-page.component';

describe('EducacaoPageComponent', () => {
  let component: EducacaoPageComponent;
  let fixture: ComponentFixture<EducacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducacaoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
