import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionDetailsComponent } from './champion-details.component';

describe('ChampionDetailsComponent', () => {
  let component: ChampionDetailsComponent;
  let fixture: ComponentFixture<ChampionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionDetailsComponent]
    });
    fixture = TestBed.createComponent(ChampionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
