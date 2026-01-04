import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from 'country-state-city';

@Component({
  selector: 'app-country-drop-down',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-drop-down.html',
  styleUrl: './country-drop-down.scss',
})
export class CountryDropDown implements OnInit {

  countries: any[] = [];
  filteredCountries: any[] = [];

  country ='';
  countrySelected = false;

  openList = false;

  ngOnInit() {
    this.countries = Country.getAllCountries();
    this.filteredCountries = this.countries;
  }

 searchTerm = '';
selectedCountry: any = null;

selectCountry(country: any) {
  this.selectedCountry = country;
  this.searchTerm = country.name; // 👈 puts text into input
  this.closeDropdown();
}

openDropdown(){
  this.openList = true;
}

closeDropdown(){
  this.openList= false;
}

  filterCountries() {
    const term = this.searchTerm.toLowerCase();

    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().startsWith(term)
    );
  }
}
