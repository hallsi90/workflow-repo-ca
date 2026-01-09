import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername } from './storage.js';

beforeEach(() => {
  localStorage.clear();
});

describe('getUsername', () => {
  it('returns the name of the stored user', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'user' }));
    expect(getUsername()).toBe('user');
  });

  it('returns null when no user is stored', () => {
    expect(getUsername()).toBeNull();
  });
});
