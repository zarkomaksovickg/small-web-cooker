import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCookerPaginatorComponent } from './web-cooker-paginator.component';

describe('WebCookerPaginatorComponent', () => {
  let component: WebCookerPaginatorComponent;
  let fixture: ComponentFixture<WebCookerPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCookerPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCookerPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
