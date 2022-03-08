import {
	ChangeDetectionStrategy,
	Component, Inject,
	OnInit, PLATFORM_ID
} from '@angular/core';
import {LayoutService} from './service/layout.service';
import {NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs';
import {RoutingService} from './service/routing.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

	constructor(
		private _layoutService: LayoutService,
		private _routingService: RoutingService,
		private _router: Router,
		@Inject(PLATFORM_ID) private platformId: any
	) {
	}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this._layoutService.getIsDarkTheme$().subscribe((bool) => {
				document.body.setAttribute('data-theme', bool ? 'dark' : 'light');
			});

			this._router.events.pipe(
				filter(events => events instanceof NavigationStart),
				map(events => events as NavigationStart),
				map(events => events.url)
			).subscribe({
				next: (url) => {
					this._routingService.updatePath(url);
				},
				error: (err) => {
					console.log(err);
				}
			})
		}
	}
}
