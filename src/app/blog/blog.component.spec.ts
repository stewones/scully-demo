import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogComponent } from "./Blog.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ComponentsModule } from "@scullyio/ng-lib";
import { HttpClientModule } from "@angular/common/http";

describe("BlogComponent", () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent],
      imports: [RouterTestingModule, ComponentsModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
