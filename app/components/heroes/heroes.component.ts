import {Component, OnInit } from '@angular/core';
import { Hero } from 'app/models/hero';
import { HeroDetailComponent } from 'app/components/common/hero-detail/hero-detail.component';
import { HeroService } from 'app/services/hero.service';
import { Router } from '@angular/router-deprecated';


@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['app/components/heroes/heroes.component.css'],

})
export class HeroesComponent implements OnInit{
	heroes: Hero[];
	selectedHero: Hero;
	ngOnInit(){
		this.getHeroes();
	}
	constructor(private heroService: HeroService, private router: Router) {

	}
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		// this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
	gotoDetail(){
		this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}
