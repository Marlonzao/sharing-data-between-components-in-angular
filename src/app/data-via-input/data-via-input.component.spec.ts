import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViaInputComponent } from './data-via-input.component';

describe('DataViaInputComponent', () => {
  let component: DataViaInputComponent;
  let fixture: ComponentFixture<DataViaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataViaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
