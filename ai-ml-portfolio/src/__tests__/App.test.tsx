// FILE: src/__tests__/App.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import AppWrapper from '../App';

test('renders without crashing', () => {
  render(<AppWrapper />);
});