import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BuildInfo from './BuildInfo';

describe('BuildInfo', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<BuildInfo buildVersion="1.2.3" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
