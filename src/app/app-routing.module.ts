import { FaceShareListComponent } from './page/face-share-list/face-share-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponentComponent } from './page/landing-page-component/landing-page-component.component';
import { SingleShareComponent } from './page/single-share/single-share.component';
import { AmiComponent } from './components/ami/ami.component';

const routes : Routes = [
    {path: 'faceshare/:id', component: SingleShareComponent},
    {path: 'faceshare', component: FaceShareListComponent},
    {path: '', component: LandingPageComponentComponent},
    {path: 'amis', component: AmiComponent}
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