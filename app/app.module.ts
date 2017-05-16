import { TweetService } from './tweet.service';
import { AuthorsService } from './authors.service';
import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AutoGrowDirective } from './directives/auto-grow.directive';
import { StarbindingComponent } from './starbinding/starbinding.component';
import { LikeComponent } from './like/like.component';
import { VoteComponent } from './vote/vote.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetsComponent } from './tweets/tweets.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    StarbindingComponent,
    LikeComponent,
    VoteComponent,
    TweetComponent,
    TweetsComponent,
    AccordionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseService, AuthorsService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
