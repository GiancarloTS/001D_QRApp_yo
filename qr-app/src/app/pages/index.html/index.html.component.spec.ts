import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndexHtmlComponent } from './index.html.component';

describe('IndexHtmlComponent', () => {
  let component: IndexHtmlComponent;
  let fixture: ComponentFixture<IndexHtmlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IndexHtmlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
