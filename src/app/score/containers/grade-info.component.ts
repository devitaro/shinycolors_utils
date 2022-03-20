import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-info',
  templateUrl: './grade-info.component.html',
  styleUrls: ['./grade-info.component.scss']
})
export class GradeInfoComponent implements OnInit {
  @Input() gradeinfo : number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
