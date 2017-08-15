import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {'id': 1, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_01.jpg'},
  {'id': 2, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_02.jpg'},
  {'id': 3, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_03.jpg'},
  {'id': 4, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_04.jpg'},
  {'id': 5, 'category': 'camping', 'caption': 'View from a boat', 'url': 'assets/img/camping_01.jpg'},
  {'id': 6, 'category': 'camping', 'caption': 'View from a camping', 'url': 'assets/img/camping_02.jpg'},
  {'id': 7, 'category': 'camping', 'caption': 'View from a camping', 'url': 'assets/img/camping_03.jpg'},
  {'id': 8, 'category': 'library', 'caption': 'View from a boat', 'url': 'assets/img/library_01.jpg'},
  {'id': 9, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_02.jpg'},
  {'id': 10, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_03.jpg'}
];
