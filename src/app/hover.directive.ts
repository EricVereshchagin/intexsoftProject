import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector:'[appHover]'
})

export class HoverDirective{
    
    @HostBinding('class.hovered') isHovred = false;
    
    @HostListener('mouseenter') onMouseEnter(){
        this.isHovred = true;
    }       

    @HostListener('mouseleave') onMouseLeave(){
        this.isHovred = false;
    }
}
