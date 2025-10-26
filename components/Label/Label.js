import { Control } from '../Control/Control.js';

export class Label extends Control {
    constructor(options) {
        super({
            text: '',
            options
        });

        Label.init.call(this);
    }

    static async init() {
        this.bind('text', this.node, 'innerHTML');
    }
}