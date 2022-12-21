import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardsToDeckComponent } from './list-cards.component';

describe('ListCardsComponent', () => {
  let component: AddCardsToDeckComponent;
  let fixture: ComponentFixture<AddCardsToDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardsToDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardsToDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
