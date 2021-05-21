import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-template-skill-card',
  templateUrl: './template-skill-card.component.html',
  styleUrls: ['./template-skill-card.component.css']
})
export class TemplateSkillCardComponent implements OnInit {
  @Input() skill!: Skill;
  constructor() { }

  ngOnInit(): void {
  }

}
