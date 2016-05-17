import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from 'app/models/hero';
import { HeroService } from 'app/services/hero.service';


@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/components/common/hero-detail/hero-detail.component.html',
	styleUrls: ['app/components/common/hero-detail/hero-detail.component.css']
	
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;

	ngOnInit(){
		let id = +this.routeParams.get('id');
		this.heroService.getHero(id)
			.then(hero => this.hero = hero);
	}
	constructor( private heroService: HeroService, private routeParams: RouteParams) {
			// code...
	}
	goBack(){
		window.history.back();
	}

}