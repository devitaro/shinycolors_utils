import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rival-info',
  templateUrl: './rival-info.component.html',
  styleUrls: ['./rival-info.component.scss']
})
export class RivalInfoComponent implements OnInit {

  @Input() rivalinfo : number[] = [];



  constructor() { }

  ngOnInit(): void {
  }


  calculateTotalRival() {
    var total = 0;

    for(var i = 0; i<this.rivalinfo.length;i++)
    {
      total +=this.rivalinfo[i]
    }

    return total;
  }


}
