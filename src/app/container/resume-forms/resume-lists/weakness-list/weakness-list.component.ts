import { Component, Input, OnInit } from '@angular/core';
import { Weakness } from 'src/app/models/weakness';

@Component({
  selector: 'app-weakness-list',
  templateUrl: './weakness-list.component.html',
  styleUrls: ['./weakness-list.component.css']
})
export class WeaknessListComponent implements OnInit {
  @Input() weaknessList!: Weakness[];
  constructor() { }

  ngOnInit(): void {
  }

}
