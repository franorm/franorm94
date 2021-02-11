import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { Global } from '../../service/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
	public projects: Project[];
	public url: string;

  constructor(
  	private _projectService: ProjectService
  	) {
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	this.getProjects();
  }

	getProjects(){
  		this._projectService.getProjects().subscribe(
  		response => {
			this.projects = response.project;
  		},
  		error => {
  			console.log(<any>error);
  		}
  		);
  	}

}
