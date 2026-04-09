import { Component, inject, NgZone, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { Subscription } from 'rxjs';
import { FunctionPointService } from '../../../../core/services/functionPoint.service';
import { FpResponse } from '../../../../core/models/FpResponse';

@Component({
  selector: 'app-fpcard',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButtonModule,
    MatDivider,
  ],
  templateUrl: './fpcard.html',
  styleUrl: './fpcard.css',
})
export class Fpcard implements OnInit, OnDestroy {
  private readonly functionPointService = inject(FunctionPointService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly ngZone = inject(NgZone);
  private readonly subs = new Subscription();

  fpResult?: FpResponse;
  fpCalculated = false;

  fpForm: FormGroup = this.formBuilder.group({
    ufp: 0,
    tcf: 0,
  });

  ngOnInit(): void {
    this.subs.add(
      this.functionPointService.ufpResult$.subscribe((ufp) =>
        this.fpForm.patchValue({ ufp })
      )
    );
    this.subs.add(
      this.functionPointService.tcfResult$.subscribe((tcf) =>
        this.fpForm.patchValue({ tcf })
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  calculateFP(): void {
    this.functionPointService.calculateFP(this.fpForm.value).subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.fpResult = res;
          this.fpCalculated = true;
          this.functionPointService.fpResult$.next(res.fp);
        });
      },
    });
  }
}
