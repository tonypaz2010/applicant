import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SlicePipe } from '@angular/common';
import {  Applicant } from '../../interfaces/applicant.interface';


@Component({
  selector: 'visor-web',
  imports: [RouterLink, SlicePipe],
  templateUrl: './visor-web.component.html',
})
export class VisorWebComponent {
 applicant = input.required<Applicant>();

}
