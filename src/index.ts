import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sidebar, SIDEBAR_POSITION } from './sidebar.component';
import { CloseSidebar } from './close.directive';

import { AsgSidebar } from './asg-sidebar.component';

export { SIDEBAR_POSITION };

@NgModule({
  declarations: [Sidebar, CloseSidebar, AsgSidebar],
  imports: [CommonModule],
  exports: [Sidebar, CloseSidebar, AsgSidebar]
})
export class SidebarModule {}
