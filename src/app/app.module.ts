import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
import {UrlSerializer} from '@angular/router';
import {CustomUrlSerializer} from './custom-url-serializer';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LayoutModule,
		SharedModule
	],
	providers: [
		{
			provide: UrlSerializer,
			useClass: CustomUrlSerializer
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}