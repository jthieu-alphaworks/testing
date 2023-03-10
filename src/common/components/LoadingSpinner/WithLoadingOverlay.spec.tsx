import { render, screen } from '@testing-library/react';
import { WithLoadingOverlay } from '.';

describe('WithLoadingOverlay', () => {
  describe('when isLoading prop is true', () => {
    beforeEach(() => {
      render(
        <WithLoadingOverlay isLoading>
          <div data-testid='children' />
        </WithLoadingOverlay>,
      );
    });

    it('should render a loading spinner', () => {
      const spinner = screen.queryByRole('status');
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('when isLoading prop is false', () => {
    beforeEach(() => {
      render(
        <WithLoadingOverlay isLoading={false}>
          <div data-testid='children' />
        </WithLoadingOverlay>,
      );
    });

    it('should not render a loading spinner after a quarter of a second', () => {
      setTimeout(() => {
        const spinner = screen.queryByRole('status');
        expect(spinner).not.toBeInTheDocument();
      }, 250);
    });
  });
});
