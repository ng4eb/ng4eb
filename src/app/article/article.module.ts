import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
	ArticleRoutingModule
} from './article-routing.module';
import {ArticleComponent} from './article.component';
import {MarkdownModule} from 'ngx-markdown';
import {SharedModule} from '../shared/shared.module';
import {
	FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import { Ch1P1Component } from './ch1-p1/ch1-p1.component';
import { Ch1P2Component } from './ch1-p2/ch1-p2.component';
import { Ch2P1Component } from './ch2-p1/ch2-p1.component';
import { Ch2P2Component } from './ch2-p2/ch2-p2.component';
import { Ch2P3Component } from './ch2-p3/ch2-p3.component';
import { Ch3P1Component } from './ch3-p1/ch3-p1.component';


@NgModule({
	declarations: [
		ArticleComponent,
        Ch1P1Component,
        Ch1P2Component,
        Ch2P1Component,
        Ch2P2Component,
        Ch2P3Component,
        Ch3P1Component
	],
	imports: [
		CommonModule,
		ArticleRoutingModule,
		SharedModule,
		MarkdownModule.forChild(),
		FontAwesomeModule,
	]
})
export class ArticleModule {
}
