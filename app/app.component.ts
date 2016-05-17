import {Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroService } from './services/hero.service';

@Component({
    selector: 'my-app',
    directives: [HeroDetailComponent],
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
    	<li *ngFor="let hero of heroes" 
    	(click)="onSelect(hero)" 
    	[class.selected]="hero === selectedHero">
			<span class="badge">{{hero.id}}</span> {{hero.name}} 
    	</li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styleUrls: ['app/app.component.css'],
    providers: [HeroService]

})
export class AppComponent implements OnInit{
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;
	ngOnInit(){
		this.getHeroes();
	}
	constructor(private heroService: HeroService) {
	}
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		// this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
}
