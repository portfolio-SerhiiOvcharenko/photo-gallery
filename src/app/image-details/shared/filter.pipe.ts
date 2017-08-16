import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageFilter'})

export class ImageFilterPipe implements PipeTransform {
  public transform(items: any[], criteria): any {
    if (criteria === 'all') { return items; }
    return items.filter((item) => {
      return item.category === criteria;
    });
  }
}
