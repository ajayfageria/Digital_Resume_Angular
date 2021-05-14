import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-lists',
  templateUrl: './skill-lists.component.html',
  styleUrls: ['./skill-lists.component.css']
})
export class SkillListsComponent implements OnInit {
  @Input() skillList!: Skill[];
  @Input() resumeId!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
