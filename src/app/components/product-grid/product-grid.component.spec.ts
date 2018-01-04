import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductGridComponent } from './product-grid.component';
import { Http } from '@angular/http';


fdescribe('ProductGridComponent', () => {
  let component: ProductGridComponent;
  let fixture: ComponentFixture<ProductGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGridComponent],
      providers: [{ provide: Http, useValue: }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get the Product Details', () => {
  //   expect(component.getDetails).toBe(true);
  // });

});
