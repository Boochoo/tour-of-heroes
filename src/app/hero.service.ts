import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import 'rxjs/add/observable/of';

@Injectable()

export class HeroService{
    
    getHero(){
        return Observable.of(HEROES);
    }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Grime King" },
  { "id": 12, "name": "Laura" },
  { "id": 13, "name": "Point Five" },
  { "id": 14, "name": "City Bhai-ke" },
  { "id": 15, "name": "Bomb Marley" },
  { "id": 16, "name": "Aino" },
  { "id": 17, "name": "Eero Laaksonen" },
  { "id": 18, "name": "Ermi" },
  { "id": 19, "name": "Tero Parvianen" },
  { "id": 20, "name": "Lauri" }
];