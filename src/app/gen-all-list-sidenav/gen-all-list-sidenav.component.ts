import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-gen-all-list-sidenav',
  templateUrl: './gen-all-list-sidenav.component.html',
  styleUrls: ['./gen-all-list-sidenav.component.css']
})
export class GenAllListSidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  /** Opens a dialog */
  onClickOpenModal(){

  }

}
