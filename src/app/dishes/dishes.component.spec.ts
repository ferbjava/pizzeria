import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DishesComponent} from './dishes.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {By} from '@angular/platform-browser';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let componentDe;
  let componentNe;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesComponent ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
    componentNe = componentDe.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run "DishesComponent.getDish" method', () => {
    // arrange
    const clickedButton = componentDe.query(By.css('button01'));
    console.log(clickedButton);
    const getDishesByTypesSpy = spyOn(component, 'getDishesByType');

    // act
    clickedButton.triggerEventHandler('click');

    // assert
    expect(getDishesByTypesSpy).toHaveBeenCalled();
  });
});
