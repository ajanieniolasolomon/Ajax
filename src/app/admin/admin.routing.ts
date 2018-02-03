
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthsGuard } from './services/auth.guard';
const adminRoutes: Routes = [
    {
        path:'',
        component:LoginComponent
    }
    ,{
        path:'welcome',
        component: WelcomeComponent,
         //canActivate:[AuthsGuard],
        children:[
            {
                path:'',
                component: BlogComponent

            },
            {
                path:'single/:id',
                component:SingleBlogComponent
            },
            {
                path:'edit/:id',
                component: EditComponent 
            },
            {
                path:'add',
                component:AddComponent
            }
        ]
    }
  
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);