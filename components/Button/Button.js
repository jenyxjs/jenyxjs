import { ActiveControl } from '../ActiveControl/ActiveControl.js';

export class Button extends ActiveControl {
    constructor (options) {
        super({
            style: [
                'display: flex',
                'flex-direction: column',
                'align-items: center',
                'justify-content: center',
                'text-align: center',
                'box-sizing: border-box',
                'text-decoration: none',
                'cursor: pointer',
                'padding: 0.5rem 3rem',
                'border-radius: 10rem',
                'background: var(--jenyx-button)',
                'border: 1px solid var(--jenyx-border)',
                'color: var(--jenyx-text)',
                'fill: var(--jenyx-text)',
            ],
            styleSet: {
                hovered: [
                    `background: color-mix(in lab, 
                        var(--jenyx-button) 75%,
                        var(--jenyx-bg)
                    )`
                ],
                selected: [
                    `background: color-mix(in lab, 
                        var(--jenyx-button) 75%,
                        var(--jenyx-bg)
                    )`
                ],
                focused: [
                    `background: color-mix(in lab, 
                        var(--jenyx-button) 75%,
                        var(--jenyx-bg)
                    )`
                ],
            },
            options
        });
    }
}