import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogsComponent } from './single-blogs.component';

describe('SingleBlogsComponent', () => {
  let component: SingleBlogsComponent;
  let fixture: ComponentFixture<SingleBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
