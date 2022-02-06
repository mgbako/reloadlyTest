import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { CountryModel } from 'src/app/country/country.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  selectedCountries$: Observable<{countries:{countries:CountryModel[]; visitedCountries:string[]}}>;
  constructor(private breakpointObserver: BreakpointObserver, private store:Store<{countries}>) {}
  
  ngOnInit(): void {
    this.selectedCountries$ = this.store.select('countries')
  }
  onDarkModeSwitched({checked}: MatSlideToggleChange){
    this.darkModeSwitched.emit(checked);
  }
}
