import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import {rivalRateCalc} from '../calculator'

@Component({
  selector: 'app-container',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {


  gradeinfo : number[] = [8,5,0];
  rivalinfo : number[] = [14000,14000,14000,14000,14000];

  rankinfo : number[] = [30000];
  appealinfo : number[] = [0,0,0,3,0,1,1];
  starinfo : number[] = [72,3,3,3,0];
  caseinfo : boolean[] = [false,false,true,true,true];






  worker!: Worker;
  isLoading = false;
  progress = 0;


  constructor(
    private snackbar: MatSnackBar,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'Shinycolors Utils - 그페 점수 계산'
    );
  }


  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('../score.worker', import.meta.url)
      );
    } else {
      this.snackbar.open(
        'Web Worker가 지원되지 않는 브라우저입니다. 최신 브라우저를 사용해주세요.',
        '닫기'
      );
    }
    
  }


  appealrate : number[] = [-200,10,50,150,100,500,250];
  starrate : number[] = [100,500,200,450,200];
  caserate : number[] = [1000,-20000,3000,4000,6000];


  calculateScore()
  {

    //score info
    var score = 0;

    score += this.rankinfo[0];

    for(var i = 0; i<this.appealrate.length ; i++)
    {
      score += this.appealinfo[i]*this.appealrate[i];
    }
    for(var i = 0; i<this.starrate.length ; i++)
    {
      score += this.starinfo[i]*this.starrate[i];
    }
    for(var i = 0; i<this.caserate.length ; i++)
    {
      if(this.caseinfo[i])
      {
        score += this.caserate[i];
      }

    }

    return score;

  }

  calculateRate()
  {
    //grade rate info
    var grade_rate = this.gradeinfo[0]/4;
    var diff_rate = this.gradeinfo[1]/4;

    //rival info

    var rival_rate = rivalRateCalc(this.rivalinfo);

    var final_rate = Math.floor(grade_rate * diff_rate * rival_rate*1000)/1000;

    return final_rate;

  }

  
  calculateResult()
  {
    //grade rate info

    var user_rate = this.gradeinfo[2];



    var final_score = Math.floor(this.calculateScore() * this.calculateRate()) + user_rate;


    return final_score;
  }

  reset()
  {
    this.gradeinfo = [8,5,0];
    this.rivalinfo = [14000,14000,14000,14000,14000];
  
    this.rankinfo = [30000];
    this.appealinfo = [0,0,0,3,0,1,1];
    this.starinfo = [72,3,3,3,0];
    this.caseinfo = [false,false,true,true,true];
  



  }

  
}
