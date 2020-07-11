import { animateChild, AnimationTriggerMetadata, query, stagger, transition, trigger } from '@angular/animations';

/**
 * Animation that staggers child elements
 * @param timing - timing in ms
 */
export function staggerAnimation(timing: number): AnimationTriggerMetadata {
  return trigger('stagger', [
    transition('* => *', [
      query(':enter', stagger(timing, animateChild()), {optional: true}),
    ])
  ]);
}

export const stagger80ms = staggerAnimation(80);
export const stagger60ms = staggerAnimation(60);
export const stagger40ms = staggerAnimation(40);
export const stagger20ms = staggerAnimation(20);
