import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-info',
  templateUrl: './score-info.component.html',
  styleUrls: ['./score-info.component.scss']
})
export class ScoreInfoComponent implements OnInit {

  @Input() rankinfo : number[] = [];
  @Input() appealinfo : number[] = [];
  @Input() starinfo : number[] = [];
  @Input()  caseinfo : boolean[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
