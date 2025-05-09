import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ApplicantsService } from '../../../applicants/services/applicants.service';
import { VisorWebComponent } from "../../../applicants/components/visor-web/visor-web.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styles: ``,
  imports: [VisorWebComponent, CommonModule]
})
export class HomePageComponent {
  applicantService = inject(ApplicantsService);

  applicantsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.applicantService.getApplicants({ limit: 10, offset: 0 });
    },
  });

  ngOnInit() {
    setTimeout(() => {
      console.log(':', this.applicantsResource.value());
      console.log(JSON.stringify(this.applicantsResource.value(), null, 2))
    }, 500); // Esperas un momento para que se cargue (no ideal, solo para depurar)
  }


}
