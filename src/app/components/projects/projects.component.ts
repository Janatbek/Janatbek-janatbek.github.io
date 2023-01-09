import { Component } from '@angular/core';
import { Project } from 'src/app/models/project-model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
loadProjectDetails(arg0: number) {
throw new Error('Method not implemented.');
}
  projects: Project[] = [
    { name: 'Five Star Moving', id: 1 },
    { name: 'Elite Auto Body Shop', id: 2 },
    { name: 'US Info', id: 3 },
  ];
}
