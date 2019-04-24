import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-navigation-info',
  templateUrl: './navigation-info.component.html'
})
export class NavigationInfoComponent {

  items = [];
  currentPage;

  constructor(private location: Location, private router: Router) {
    this.router.events
      .pipe(
        filter((val) => val instanceof ActivationEnd && val.snapshot.data && val.snapshot.data.title),
        map((val: ActivationEnd) => val.snapshot.data.title))
      .subscribe(title => this.assignRoute(title));
  }

  public goTo(item) {
    this.router.navigate([item.url]);
  }

  private assignRoute(title) {
    const index = this.items.lastIndexOf(item => item.url === this.location.path());
    if (index !== (this.items.length - 1)) {
      this.currentPage = this.items[index];
      this.items = index - 1 < 0 ? [] : this.items.slice(index - 1);
    }
    if (index === -1 && !!this.currentPage) {
      this.items.push(this.currentPage);
      this.currentPage = {title, url: this.location.path()};
    }
    if (index === -1 && !this.currentPage) {
      this.currentPage = {title, url: this.location.path()};
    }
  }
}
