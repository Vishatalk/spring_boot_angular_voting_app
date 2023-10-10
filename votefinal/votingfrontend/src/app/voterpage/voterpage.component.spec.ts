import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterpageComponent } from './voterpage.component';

describe('VoterpageComponent', () => {
  let component: VoterpageComponent;
  let fixture: ComponentFixture<VoterpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterpageComponent]
    });
    fixture = TestBed.createComponent(VoterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
