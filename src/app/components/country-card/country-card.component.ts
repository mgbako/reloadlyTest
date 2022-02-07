import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() name: string;
  @Input() population: string;
  @Input() region: string;
  @Input() capital: string;
  @Input() flag: string;
  constructor() { }

  ngOnInit(): void {
  }

}
