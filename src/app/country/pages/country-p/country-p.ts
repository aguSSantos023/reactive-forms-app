import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryS } from '../../services/country-s';
import { Country } from '../../interfaces/country-i';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-p',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-p.html',
  styleUrl: './country-p.css'
})
export class CountryP {

  fb = inject(FormBuilder);
  countryService = inject(CountryS)


  regions = signal(this.countryService.regions)

  countriesByRegion = signal<Country[]>([])
  borders = signal<Country[]>([])


  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  })


  onFormChanged = effect((onCleanup) => {

    const formRegionChanged = this.onRegionChanged()
    const countrySubcription = this.onCountryChanged()


    onCleanup(() => {
      formRegionChanged.unsubscribe()
      countrySubcription.unsubscribe()
      console.log('limpiado');

    })

  })



  onRegionChanged() {
    return this.myForm.get('region')!.valueChanges
      .pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.myForm.get('border')!.setValue('')),
        tap(() => {
          this.borders.set([])
          this.countriesByRegion.set([])
        }),
        switchMap(region => this.countryService.getCountriesByRegions(region!))

      )
      .subscribe(countries => {
        console.log(countries);
        this.countriesByRegion.set(countries)

      })
  }


  onCountryChanged() {
    return this.myForm.get('country')!.valueChanges
      .pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter( value => value!.length > 0),
        switchMap(alphaCode => this.countryService.getCountryByAlphaCode(alphaCode!)),
        switchMap(country => this.countryService.getCountryNamesByCodeArray(country.borders))

      )
      .subscribe(borders => {
        this.borders.set(borders)
      })
  }




}
