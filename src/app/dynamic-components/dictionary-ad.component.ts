import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: `
    <div>
        <h4> {{ headline }} </h4>
            {{ body}}
    </div>
    `
})
export class DictionaryAdComponent{
    @Input() headline!: string;
    @Input() body!: string;
}