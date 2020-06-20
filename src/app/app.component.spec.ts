import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Theme } from './shared/enums/theme.enum';

describe('Application Component', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('Should create the application', () => {
    expect(component)
      .toBeTruthy();
  });

  it('Should have an undefined mode$ property before initialization', () => {
    expect(component.mode$)
      .toBeUndefined();
  });

  it('Should initialize mode$ property after initialization', () => {
    component.ngOnInit();

    expect(component.mode$)
      .toBeDefined();

    component
      .mode$
      .subscribe(
        (theme: Theme): void => {
          expect(theme).toEqual('dark');
        });
  });

});
