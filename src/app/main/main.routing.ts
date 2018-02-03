
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogsComponent } from './single-blogs/single-blogs.component'
import {SlackComponent} from './slack/slack.component'
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const mainRoutes: Routes = [
    {
        path:'',
        component:WelcomeComponent,
        children:[
            {
                path:'',
                component:BlogsComponent

            },{
                path:'blog/:id',
                component:SingleBlogsComponent
            },
            {
                path:'slack',
                component:SlackComponent

            },{
                path:'contact',
                component: ContactComponent 
            },{
                path:'about',
                component:AboutComponent
            }
        ]
      
    }
  
];

export const mainRouting: ModuleWithProviders = RouterModule.forChild(mainRoutes);