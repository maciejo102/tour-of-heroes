import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  hero: Hero;
  id: number;

  GetHero(id): void {
    this.heroService.GetHero(id)
      .subscribe(hero => this.hero = hero);
  }

  GoBack(): void {
    this.location.back();
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.id =  +this.route.snapshot.paramMap.get('id');
    this.GetHero(this.id);
  }

}
