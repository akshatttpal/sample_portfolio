declare module "gsap-trial/SplitText" {
  import { Plugin } from "gsap";
  export class SplitText extends Plugin {
    constructor(targets: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  import { Plugin } from "gsap";
  export class ScrollSmoother extends Plugin {
    static create(vars?: any): ScrollSmoother;
    constructor(vars?: any);
    paused(value: boolean): void;
    scrollTop(value: number): void;
    media(query: string, vars: any): void;
  }
}
