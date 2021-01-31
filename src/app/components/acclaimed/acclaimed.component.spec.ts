import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclaimedComponent } from './acclaimed.component';

describe('AcclaimedComponent', () => {
  let component: AcclaimedComponent;
  let fixture: ComponentFixture<AcclaimedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcclaimedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcclaimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
