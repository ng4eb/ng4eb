import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	SidebarComponent
} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {
	ThemeSwitchComponent
} from './theme-switch/theme-switch.component';
import {
	OptionsWidgetComponent
} from './options-widget/options-widget.component';
import {LayoutComponent} from './layout/layout.component';
import {
	FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {
	AdvancedSearchOverlayComponent
} from './advanced-search-overlay/advanced-search-overlay.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
	declarations: [
		SidebarComponent,
		FooterComponent,
		NavbarComponent,
		ThemeSwitchComponent,
		OptionsWidgetComponent,
		LayoutComponent,
		AdvancedSearchOverlayComponent
	],
	exports: [
		LayoutComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		RouterModule,
		SharedModule
	]
})
export class LayoutModule {
}
