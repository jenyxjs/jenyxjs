import { BaseIconButton } from './BaseIconButton.js';

export class IconButton extends BaseIconButton {
    constructor(options) {
        super({
            style: [
                'color: var(--jenyx-text)',
                'fill: var(--jenyx-text)',
                'background: var(--jenyx-button)',
            ],
            styleSet: {
                hovered: [
                    `background: color-mix(in lab, 
                        var(--jenyx-button) 95%,
                        var(--jenyx-text)
                    )`
                ],
                selected: [
                    `background: color-mix(in lab, 
                        var(--jenyx-button) 95%,
                        var(--jenyx-text)
                    )`
                ],
            },
            options
        });
    }
}