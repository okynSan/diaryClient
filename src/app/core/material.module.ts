
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';


// Implemeted to have less code in main app module
@NgModule({
    imports: [CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule],
    exports: [CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule],
})
export class CustomMaterialModule {
}

