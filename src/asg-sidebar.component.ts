import { Component, OnInit, Input } from '@angular/core';

import { SidebarService } from './sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarMenu } from './sidebar-menu';

@Component({
    selector: 'asg-sidebar',
    templateUrl: './asg-sidebar.component.html',
    providers: [SidebarService],
    styleUrls: ['./asg-sidebar.component.css']
})


export class AsgSidebar implements OnInit {

    @Input() top: number;
    
    errorMessage: string;
    model: SidebarMenu;
    //structure: string;    
    sub: any;

    constructor(
        private sidebarService: SidebarService,
        private router: Router,
        private route: ActivatedRoute
        ) {        
    }

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
            error => this.errorMessage = <any>error);
    }
}

