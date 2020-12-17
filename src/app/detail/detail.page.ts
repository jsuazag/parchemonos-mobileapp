import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperiencesService } from '../api/experiences.service';
import { IExperience } from '../shared/models/IExperience';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public experience: IExperience;

  constructor(
    private route: ActivatedRoute, 
    private experienceService: ExperiencesService
  ) { }

  ngOnInit() {
    this.getParams();
  }

  private getParams(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.experienceService.getFindByIdRemote(id).subscribe(response => {
        this.experience = response.experience;
      });
    });
  }

}
