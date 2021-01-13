import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

/**
 * Guard to determine if the sidenav can load, based on whether the section exists in documentation
 * items.
 */
@Injectable({providedIn: 'root'})
export class CanActivateComponentViewer implements CanActivate {
  ROUTES: string[] = ["components", "cdk"]
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Searches if the section defined in the base UrlSegment is a valid section from the
    // documentation items. If found, returns true to allow activation, otherwise blocks activation
    // and navigates to '/'.
    let parentRoute = route.parent?.params?.section?.toLowerCase()
    if (this.ROUTES.indexOf(parentRoute) != -1) { return true; }
    this.router.navigateByUrl('/');
    return false;
  }
}
