import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageNewComponent } from './package-new.component';

describe('PackageNewComponent', () => {
  let component: PackageNewComponent;
  let fixture: ComponentFixture<PackageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
