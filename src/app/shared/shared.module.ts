import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
  declarations: [ScoreComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ScoreComponent
  ]
})
export class SharedModule { }
