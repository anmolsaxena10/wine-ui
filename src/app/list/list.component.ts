import { Component, OnInit } from '@angular/core';
import {WineService} from '../wine.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public wineList;

  constructor(private wineService: WineService) {

  }

  ngOnInit() {
    const that = this;
    this.wineService.getWineList({'format': 'json', 'page': '1'}).subscribe(function(wines){
      that.wineList = wines;
      console.log(that.wineList);
    });
  }

}
