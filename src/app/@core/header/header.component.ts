import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  pathTitle: string;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        this.pathTitle = this.route.root.firstChild.snapshot.data.title;
    });


  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
