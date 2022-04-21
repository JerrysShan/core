import { ApplicationExtension, ApplicationHook } from '../../../../../src/decorator';

@ApplicationExtension()
export default class Hook {
  @ApplicationHook()
  async willReady() {
    console.log('Redis Plugin will ready');
  }
}
