import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichasMedicasHomeComponent } from './home.component';

describe('FichasMedicasHomeComponent', () => {
  let component: FichasMedicasHomeComponent;
  let fixture: ComponentFixture<FichasMedicasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichasMedicasHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FichasMedicasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
