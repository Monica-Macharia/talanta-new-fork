import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaImageContainerComponent],
  exports: [ElewaImageContainerComponent]
})
export class ImagesModule {}
