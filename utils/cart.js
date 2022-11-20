// need to fix: shows '0' but counts below

import { useState } from 'react';

export function positiveCartValues(count1) {
  if (count1 >= 0) {
    return [count1];
  } else {
    return '0';
  }
}
