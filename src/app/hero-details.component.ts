import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
    selector : 'hero-details',
    template : `
        <div *ngIf="hero">
            <h2>
                {{hero.name}} details
            </h2>
            
            <div><label>Id : </label>
                {{hero.id}}
            </div>

            <div>
                <label>name : </label>
                <input [(ngModel)]="hero.name"/>
            </div> 
        </div>
    `
})
export class HeroDetailsComponent{
    @Input() hero : Hero;
}