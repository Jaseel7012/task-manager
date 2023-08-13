import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListViewComponent } from './list-view.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from '../navbar/navbar.component';


describe('ListViewComponent', () => {

  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  let apiService: ApiService



  let mockName: string
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, NgxPaginationModule],
      declarations: [ListViewComponent, NavbarComponent],
      providers: [ApiService]

    })

      .compileComponents();


  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;

    apiService = TestBed.inject(ApiService)

    fixture.detectChanges();

  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should  call searchData  with  name', () => {

    component.searchclick()
    expect(component.searchData).toHaveBeenCalledWith(mockName)
  })

  it('should update current page number to new event', () => {
    component.pageChangeEvent(4)
    expect(component.current).toEqual(4);
  })










});
