import { Component, OnInit, Input } from '@angular/core';

import { SidebarService } from './sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarMenu } from './sidebar-menu';

@Component({
    selector: 'asg-sidebar',
    template: `<aside id="sidebar" *ngIf="model" [ngStyle]="{'top':(top-2)+'px'}">
    <div class="side-menu">
        <div class="menu-body">            
            <ul class="menu-items" style="padding-top: 10px;">        
                <li *ngFor="let menuItem of model.menuItems;let i = index">                    
                    <a href="{{menuItem.externalLink}}" >
                        <i class="material-icons">{{menuItem.iconName}}</i>                        
                    </a>
                    <ul *ngIf="menuItem.children" class="menu-subitems">
                        <li class="menu-header">{{menuItem.title}}</li>
                        <li *ngFor="let submenu of menuItem.children;let j = index">
                            <a href="{{submenu.externalLink}}" routerLinkActive="active">{{submenu.title}}</a>
                        </li>                  
                    </ul>
                </li>                
            </ul>
        </div>
    </div>
</aside>`,
    providers: [SidebarService],
    styles: [`
aside {
    display: block
}

#sidebar {
    width: 45px;
    position: fixed;
    z-index: 900;    
    left: 0;
    bottom: 0;
    color: #f8f8f8;  
    top: 41px;  
}
#sidebar a {
    cursor: pointer
}

#sidebar div.side-menu {
    width: 45px;
    background: #888;
    position: absolute;
    top: 0;
    bottom: 0;    
    float: left;
}

#sidebar div.side-menu .menu-body {
    width: 45px;   
}
#sidebar div.side-menu .menu-body ul.menu-items {
    list-style-type: none;
    padding: 0;
    margin-top: 5px;
}
#sidebar div.side-menu .menu-body ul.menu-items > li {
    height: 44px;
}
#sidebar div.side-menu .menu-body ul.menu-items li > a {
    color: #eee;
    border-radius: 0;
    padding: 18px 14px 11px 13px;
}
#sidebar div.side-menu .menu-body ul.menu-items li a > i {
    font-size: 18px;
}

#sidebar div.side-menu .menu-body ul.menu-items li a:active,
#sidebar div.side-menu .menu-body ul.menu-items li a:focus,
#sidebar div.side-menu .menu-body ul.menu-items li a:hover {
    background: #666;
    color: #fff;
}
#sidebar div.side-menu .menu-body ul.menu-items li .router-link-active {
    background: #484848;
}
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems {
    display: none;
    list-style: none;
    position: relative;
    top: -38px;
    left: 45px;
    background: #666;
    color: #f8f8f8;
    padding-left: 0;
    width: 190px;
    min-height: 40px;
    margin-top: 2px;
}
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems li {
    min-height: 24px;
    color: #888
}
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems li a {
    color: #f8f8f8;
    display: block;
    padding: 12px;
    height: auto;
    font-size: 14px
}
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems li a:active,
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems li a:focus,
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems li a:hover {
    color: #fff;
    background: #555;
    text-decoration: none;
    padding-bottom: 12px;
}
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems li.menu-header {
    text-transform: uppercase;
    min-height: 45px;
    padding-top: 12px;
    padding-left: 12px;
    border-bottom: 1px solid #555;
    font-size: 12px;
    font-weight: 700;
    line-height: 21px;
    color: #eee
}
#sidebar div.side-menu .menu-body ul.menu-items li ul.menu-subitems li.menu-header a {
    color: #f8f8f8
}
#sidebar div.side-menu .menu-body ul.menu-items li:hover ul.menu-subitems {
    display: block;
}`]
})


export class AsgSidebar implements OnInit {

    @Input() top: number;
    errorMessage: string;
    model: SidebarMenu;
    // structure: string;    
    sub: any;

    constructor(
        private sidebarService: SidebarService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        if (!this.model) {
            this.loadSidebar();
        }
    }

    loadSidebar() {
        this.sub = this.route.params.subscribe(params => {
            let id = 1;
            this.getSidebarMenu(Number(id));
        });
    }

    getSidebarMenu(id: number) {
        this.sidebarService.getSidebarMenu(id)
            .subscribe(
            model => {
                this.model = model[0];
            },
            error => this.errorMessage = error as any);
    }
}
