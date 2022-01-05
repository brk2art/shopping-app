import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2021/12/13/dining/MC-Classic-Potato-Latkes/merlin_199179672_13ff5d80-3b33-46de-9904-0ccaabe97917-articleLarge.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
