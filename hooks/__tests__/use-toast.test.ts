import { renderHook, act } from '@testing-library/react';
import { useToast } from '@/hooks/use-toast';
import { vi } from 'vitest';

describe('useToast', () => {
  it('adds, updates, and dismisses toasts', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useToast());
    let controller: { id: string; dismiss: () => void; update: (props: { id: string; title?: string }) => void };
    act(() => {
      controller = result.current.toast({ title: 'Hello' });
    });
    expect(result.current.toasts).toHaveLength(1);
    act(() => {
      controller.update({ id: controller.id, title: 'Updated' });
    });
    expect(result.current.toasts[0].title).toBe('Updated');
    act(() => {
      controller.dismiss();
    });
    expect(result.current.toasts[0].open).toBe(false);
    vi.runAllTimers();
    expect(result.current.toasts).toHaveLength(0);
    vi.useRealTimers();
  });
});
