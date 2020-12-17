import { Component, OnInit } from '@angular/core';
import { IExperience } from '../shared/models/IExperience';
import { ExperiencesService } from '../api/experiences.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public experiences: Array<IExperience> = [];

  constructor(private experienceService: ExperiencesService) { }

  ngOnInit() {
    // this.loadExperienceDataLocal();
    this.loadExperienceDataRemote();
  }

  private loadExperienceDataLocal(): void {
    this.experiences = this.experienceService.getAllLocal();
  }

  private loadExperienceDataRemote(): void {
    this.experienceService.getAllRemote().subscribe(response => {
      console.log('response', response);
      this.experiences = response.list;
    });
  }

}
