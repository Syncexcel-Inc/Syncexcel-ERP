import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EnterpriseRoutes } from './enterprise.routing';
import { OrganisationComponent } from './organisation/organisation.component';

@NgModule({
  declarations: [OrganisationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EnterpriseRoutes)
  ]
})
export class EnterpriseModule { }
