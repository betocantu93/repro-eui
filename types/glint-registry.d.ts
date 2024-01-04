import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';

import Modifier from 'ember-modifier';

import type EmberEuiCodeRegistry from '@ember-eui/core/template-registry';
import type SvgJar from 'ember-svg-jar/types';

declare class RenderModifier<
  Args extends unknown[] = unknown[],
> extends Modifier<{
  Element: HTMLElement;
  Args: { Positional: [(element: Element, args: Args) => void, ...Args] };
}> {}

declare module '@glint/environment-ember-loose/registry' {
  //eslint-disable-next-line
  export default interface Registry
    extends EmberEuiCodeRegistry /* other addon registries */ {
    'did-insert': typeof RenderModifier;
    'will-destroy': typeof RenderModifier;
    'svg-jar': typeof SvgJar;
  }
}
