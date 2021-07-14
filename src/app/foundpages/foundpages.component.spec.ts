import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundpagesComponent } from './foundpages.component';

describe('FoundpagesComponent', () => {
  let component: FoundpagesComponent;
  let fixture: ComponentFixture<FoundpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
