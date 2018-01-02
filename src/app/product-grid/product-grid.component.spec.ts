import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridComponent } from './product-grid.component';
import { HttpModule, Http, ConnectionBackend, RequestOptions } from '@angular/http';


fdescribe('ProductGridComponent', () => {
  let component: ProductGridComponent;
  let fixture: ComponentFixture<ProductGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGridComponent ],
       providers: [ HttpModule, Http , ConnectionBackend , RequestOptions ]
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
