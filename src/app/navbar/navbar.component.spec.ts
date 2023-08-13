import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent,AppComponent,ListViewComponent],
      imports:[HttpClientTestingModule,FormsModule]
      

    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set flagvalue to true', () => {
     expect(component.taskviewflagparent).toBe(false);
      component.myTask(); expect(component.taskviewflagparent).toBe(true);
})

 

})
