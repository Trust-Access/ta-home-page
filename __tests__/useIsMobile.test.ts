import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useIsMobile } from '@/hooks/use-mobile';

function setScreenWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  window.matchMedia = vi.fn().mockImplementation(query => ({
    matches: width < 768,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe('useIsMobile', () => {
  it('returns true when width is less than 768', async () => {
    setScreenWidth(500);
    const { result } = renderHook(() => useIsMobile());
    await waitFor(() => expect(result.current).toBe(true));
  });

  it('returns false when width is at least 768', async () => {
    setScreenWidth(1024);
    const { result } = renderHook(() => useIsMobile());
    await waitFor(() => expect(result.current).toBe(false));
  });
});
