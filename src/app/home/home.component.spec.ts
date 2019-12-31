import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should contain the correct title`, () => {
    const fixture2 = TestBed.createComponent(HomeComponent);
    const app = fixture2.componentInstance;
    expect(app.title).toEqual('Scully Demo');
  });

  it('should render title', () => {
    const fixture2 = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture2.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'Scully Demo app is running!'
    );
  });
});
