import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService } from './services/hero.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/common/hero-detail/hero-detail.component';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>		
			<a [routerLink]= "['Dashboard']">Dashboard</a>
			<a [routerLink]= "['Heroes']">Heroes</a>
		</nav>		
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, HeroService]
})
@RouteConfig([
		{
			path: '/heroes',
			name: 'Heroes',
			component: HeroesComponent
		},	
		{
			path: '/detail/:id',
			name: 'HeroDetail',
			component: HeroDetailComponent
		},	
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: DashboardComponent,
			useAsDefault: true
		}	
])
export class AppComponent {
	title = 'Tour of Heroes';
}