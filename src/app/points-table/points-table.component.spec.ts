import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PointsTableComponent } from "./points-table.component";

describe("UserComponent", () => {
  let component: PointsTableComponent;
  let fixture: ComponentFixture<PointsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PointsTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
