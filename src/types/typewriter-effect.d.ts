declare module 'typewriter-effect/dist/core' {
    import { Options } from 'typewriter-effect';
  
    class Typewriter {
      constructor(selector: string | Element, options?: Partial<Options>);
      pauseFor(duration: number): Typewriter;
      start(): Typewriter;
      // Add other methods as needed
    }
  
    export default Typewriter;
  }
  