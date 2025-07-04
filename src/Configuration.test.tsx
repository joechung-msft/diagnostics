import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Configuration from './Configuration';

const mockConfig = {
  apiUrl: 'https://api.example.com',
  retries: '3',
};

describe('Configuration', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Configuration config={mockConfig} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
