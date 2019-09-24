import { Routes } from '@angular/router';
import { OrganisationComponent } from './organisation/organisation.component';

export const EnterpriseRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'organisation',
      component: OrganisationComponent,
      data: { title: 'Organisation', breadcrumb: 'ORGANISATION' }
    }]
  }
];