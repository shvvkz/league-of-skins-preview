import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsComponent } from './champions.component';

describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionsComponent]
    });
    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
