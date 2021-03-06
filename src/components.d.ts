/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface XModal {
      'title': string;
      'visible': boolean;
    }
  }

  interface HTMLXModalElement extends StencilComponents.XModal, HTMLStencilElement {}

  var HTMLXModalElement: {
    prototype: HTMLXModalElement;
    new (): HTMLXModalElement;
  };
  interface HTMLElementTagNameMap {
    'x-modal': HTMLXModalElement;
  }
  interface ElementTagNameMap {
    'x-modal': HTMLXModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'x-modal': JSXElements.XModalAttributes;
    }
  }
  namespace JSXElements {
    export interface XModalAttributes extends HTMLAttributes {
      'onCancel'?: (event: CustomEvent) => void;
      'onOk'?: (event: CustomEvent) => void;
      'title'?: string;
      'visible'?: boolean;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;