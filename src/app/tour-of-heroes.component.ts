import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroDetailsComponent} from './hero-details.component';
import {HeroService} from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'tour-of-heroes-app',
  templateUrl: 'tour-of-heroes.component.html',
  styleUrls: ['tour-of-heroes.component.css'],
  directives : [HeroDetailsComponent],
  providers : [HeroService]
})
export class TourOfHeroesAppComponent implements OnInit{
  title = 'Tour of Heroes!';
  selectedHero : Hero;
  heroes : Hero[];
  
  constructor(private heroService : HeroService){
  }
  
  ngOnInit(){
    this.heroService.getHero().subscribe(heroes =>{
      this.heroes = heroes
    });
  }
  
  onSelect( hero : Hero){
    this.selectedHero = hero; 
  }
}

