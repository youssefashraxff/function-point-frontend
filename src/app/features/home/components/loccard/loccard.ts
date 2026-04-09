import { Component, inject, NgZone, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { FunctionPointService, Language } from '../../../../core/services/functionPoint.service';
import { LocResponse } from '../../../../core/models/LocResponse';

@Component({
  selector: 'app-loccard',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatButtonModule,
    MatDivider,
  ],
  templateUrl: './loccard.html',
  styleUrl: './loccard.css',
})
export class Loccard implements OnInit, OnDestroy {
  private readonly functionPointService = inject(FunctionPointService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly ngZone = inject(NgZone);
  private readonly subs = new Subscription();

  locResult?: LocResponse;
  locCalculated = false;
  languages: Language[] = [];
  selectedAvc: number | null = null;

  locForm: FormGroup = this.formBuilder.group({
    fp: 0,
    language: '',
  });

  ngOnInit(): void {
    this.functionPointService.getLanguages().subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.languages = Object.entries(res).map(([name, avc]) => ({ name, avc }));
        });
      },
    });

    this.subs.add(
      this.functionPointService.fpResult$.subscribe((fp) =>
        this.locForm.patchValue({ fp })
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onLanguageChange(langName: string): void {
    const found = this.languages.find((l) => l.name === langName);
    this.selectedAvc = found ? found.avc : null;
  }

  calculateLOC(): void {
    this.functionPointService.calculateLOC(this.locForm.value).subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.locResult = res;
          this.locCalculated = true;
        });
      },
    });
  }
}
