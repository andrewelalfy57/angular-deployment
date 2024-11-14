import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Assuming you have a separate file for routes
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Use HashLocationStrategy
  ]
})
export class AppRoutingModule {}
