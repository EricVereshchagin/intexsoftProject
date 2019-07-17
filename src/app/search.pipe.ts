import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform{
    transform(cazino_cards, value){
        
        return cazino_cards.filter(card =>{         
            return card.name.includes(value)
        })

    }
}
