#!/usr/bin/env ts-node

// tslint:disable:no-shadowed-variable
import test  from 'blue-tape'

import { PuppetPadchat } from './puppet-padchat'

// class PuppetPadchatTest extends PuppetPadchat {
// }

test('PuppetPadchat() throw exception when instanciate the second instance without options.token', async t => {
  t.doesNotThrow(
    () => new PuppetPadchat(),
    'should instance the 1st puppet without problem',
  )

  t.throws(
    () => new PuppetPadchat(),
    'should throw when instance the 2nd instance without the token option',
  )

  t.doesNotThrow(
    () => new PuppetPadchat({
      token: 'mock-token',
    }),
    'should instance the 3rd puppet with token option',
  )
})
