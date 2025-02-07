import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsmanComponent } from './craftsman.component';

describe('CraftsmanComponent', () => {
  let component: CraftsmanComponent;
  let fixture: ComponentFixture<CraftsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftsmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
