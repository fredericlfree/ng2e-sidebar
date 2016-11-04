import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sidebar, SIDEBAR_POSITION } from './sidebar.component';

import { CloseSidebar } from './close.directive';
import { Product } from './product';
import { SidebarMenuItem } from './sidebar-menu-item';
import { SidebarMenu } from './sidebar-menu';
import { SidebarService } from './sidebar.service';
import { AsgSidebar } from './asg-sidebar.component';

// import { AsgSidebar } from './asg-sidebar.component';

export { SIDEBAR_POSITION };


@NgModule({
  declarations: [Sidebar, CloseSidebar, AsgSidebar],
  // declarations: [Sidebar, CloseSidebar, AsgSidebar],
  imports: [CommonModule],
  // exports: [Sidebar, CloseSidebar, AsgSidebar]
  exports: [Sidebar, CloseSidebar, AsgSidebar]
})
export class SidebarModule {
  i : Product;
  j : SidebarMenuItem;
  k : SidebarMenu;
  l : SidebarService;
  m : AsgSidebar;
}
