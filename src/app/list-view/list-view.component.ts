import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  fetchedData: any = []
  current: number = 1
  total: number = 0
  name = ""
  searchData: any = []

  @Input() taskviewFlagChild: boolean = false
  constructor(private api: ApiService) {
    this.api.fetchData().subscribe(
      (response: any) => {

        this.fetchedData = response

      }
    )
  }
  searchclick = () => {
    this.api.searchedData(this.name).subscribe(
      (response: any) => {
        if (this.name != "") {
          this.searchData = response
        }


      }
    )
  }
  pageChangeEvent(event: number) {
    this.current = event
  }
  s=""

}
