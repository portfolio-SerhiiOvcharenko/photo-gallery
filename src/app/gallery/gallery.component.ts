import { Component, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image-details/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  public title = 'Recent Photos';
  @Input() public filterBy? = 'all';
  public visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  public ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
