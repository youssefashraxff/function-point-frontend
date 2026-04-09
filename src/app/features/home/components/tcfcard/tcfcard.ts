import { Component, inject, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { FunctionPointService, TcfResponse } from '../../../../core/services/functionPoint.service';

import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  NgModel,
} from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { TcfAttributesRequest } from '../../../../core/models/TcfAttributesRequest';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-tcfcard',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatInput,
    MatTabGroup,
    MatTab,
    MatHint,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDivider,
  ],
  templateUrl: './tcfcard.html',
  styleUrl: './tcfcard.css',
})
export class Tcfcard implements OnInit {
  private readonly functionPointService = inject(FunctionPointService);
  private readonly formBuilder = inject(FormBuilder);
  tcfResult?: TcfResponse;
  tcfCalculated: boolean = false;

  tcfForm: FormGroup = this.formBuilder.group({
    di: 0,
  });

  gscAttributes!: string[];
  attributesValues: TcfAttributesRequest = {
    attributes: [],
  };

  ngOnInit(): void {
    this.functionPointService.getGSCAttributes().subscribe({
      next: (res) => {
        this.gscAttributes = res;
        this.attributesValues.attributes = new Array(res.length).fill(0);
        console.log(this.gscAttributes);
      },
    });
  }
  calculateTFC_Attributes(): void {
    this.functionPointService.calculateTCF_Attributes(this.attributesValues).subscribe({
      next: (res) => {
        this.tcfCalculated = true;
        this.tcfResult = res;
        this.functionPointService.tcfResult$.next(res.tcf);
      },
    });
  }

  calculateTfcDi(): void {
    this.functionPointService.calculateTCF_Di(this.tcfForm.value).subscribe({
      next: (res) => {
        this.tcfCalculated = true;
        this.tcfResult = res;
        this.functionPointService.tcfResult$.next(res.tcf);
      },
    });
  }
}
