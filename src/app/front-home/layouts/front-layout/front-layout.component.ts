import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbarComponent } from "../../components/front-navbar/front-navbar.component";

@Component({
  selector: 'front-layout',
  imports: [RouterOutlet, FrontNavbarComponent],
  templateUrl: './front-layout.component.html',
  styles: ``
})
export class FrontLayoutComponent {

}
