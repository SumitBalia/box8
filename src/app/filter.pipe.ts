import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(songs: any[], filter: Object): any {
        if (!songs || !filter) {
            return songs;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        console.log(filter);
        return songs.filter(item => item.title.label.toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1);
    }

}
