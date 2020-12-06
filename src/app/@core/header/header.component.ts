import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isHandset: boolean;
  pathTitle: string;

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        this.pathTitle = this.route.root.firstChild.snapshot.data.title;
    });

    this.breakpointObserver
          .observe(Breakpoints.Handset)
          .pipe( map(result => result.matches) )
          .subscribe( (result) => this.isHandset = result);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
