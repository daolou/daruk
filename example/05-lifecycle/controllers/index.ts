import { controller, DarukContext, get, injectable, Next } from '../../../src';

@controller()
class Index {
  @get('/')
  public index(ctx: DarukContext, next: Next) {
    ctx.body = `hello world`;
  }
}
