import { Component, inject, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { FunctionPointService } from '../../../../core/services/functionPoint.service';
import { UfpResponse } from '../../../../core/models/UfpResponse';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-ufpcard',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatButtonModule,
    MatAnchor,
    MatDivider,
  ],
  templateUrl: './ufpcard.html',
  styleUrl: './ufpcard.css',
})
export class Ufpcard {
  private readonly formBuilder = inject(FormBuilder);
  private readonly functionPointService = inject(FunctionPointService);

  ufpResponse?: UfpResponse;
  ufpCalculated = false;

  ufpForm: FormGroup = this.formBuilder.group({
    externalInputs: this.formBuilder.group({
      simple: 0,
      average: 0,
      complex: 0,
    }),
    externalOutputs: this.formBuilder.group({
      simple: 0,
      average: 0,
      complex: 0,
    }),
    externalInquiries: this.formBuilder.group({
      simple: 0,
      average: 0,
      complex: 0,
    }),
    internalLogicalFiles: this.formBuilder.group({
      simple: 0,
      average: 0,
      complex: 0,
    }),
    externalInterfaceFiles: this.formBuilder.group({
      simple: 0,
      average: 0,
      complex: 0,
    }),
  });

  calculateUFP(): void {
    this.functionPointService.calculateUFP(this.ufpForm.value).subscribe({
      next: (res) => {
        this.ufpResponse = res;
        this.ufpCalculated = true;
        this.functionPointService.ufpResult$.next(res.totalUfp);
      },
    });
  }
}
