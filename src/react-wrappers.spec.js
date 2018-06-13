import { expect } from 'chai';
import { fromImmutable } from './react-wrappers';

describe('react-wrappers', function() {
  it('exposes named export "fromImmutable"', function() {
    expect(typeof fromImmutable).to.equal('function');
  });
});
