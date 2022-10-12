import { FaceShareListComponent } from './face-share-list/face-share-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';

const routes : Routes = [
    {path: 'faceshare', component: FaceShareListComponent},
    {path: '', component: LandingPageComponentComponent}
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports :[
        RouterModule
    ] 
    }
)
export class appRoutingModule{

}