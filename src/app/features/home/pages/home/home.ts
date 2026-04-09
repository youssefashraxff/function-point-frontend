import { Component } from '@angular/core';
import { Ufpcard } from '../../components/ufpcard/ufpcard';
import { Tcfcard } from '../../components/tcfcard/tcfcard';
import { Fpcard } from '../../components/fpcard/fpcard';
import { Loccard } from '../../components/loccard/loccard';

@Component({
  selector: 'app-home',
  imports: [Ufpcard, Tcfcard, Fpcard, Loccard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
