import { describe, test, expect } from 'vitest';
import { apps as rootApps } from './main.js';
import { apps as silviaApps } from './silvia-apps/src/main.js';

describe('Root Portfolio Integrity', () => {
  test('rootApps should be a valid array', () => {
    expect(Array.isArray(rootApps)).toBe(true);
    expect(rootApps.length).toBeGreaterThan(0);
  });

  test('all root apps should have required fields', () => {
    rootApps.forEach(app => {
      expect(app.name).toBeDefined();
      expect(typeof app.name).toBe('string');
      expect(app.name.trim().length).toBeGreaterThan(0);

      expect(app.description).toBeDefined();
      expect(typeof app.description).toBe('string');
      expect(app.description.trim().length).toBeGreaterThan(0);

      expect(app.link).toBeDefined();
      expect(typeof app.link).toBe('string');
      expect(app.link.startsWith('http://') || app.link.startsWith('https://')).toBe(true);

      expect(app.category).toBeDefined();
      expect(app.category).toMatch(/^(Language & Literacy|Math & Logic)$/);

      expect(app.image).toBeDefined();
      expect(typeof app.image).toBe('string');
      expect(app.image.endsWith('.png') || app.image.endsWith('.svg') || app.image.endsWith('.jpg')).toBe(true);

      expect(app.visualIdea).toBeDefined();
      expect(typeof app.visualIdea).toBe('string');
      expect(app.visualIdea.trim().length).toBeGreaterThan(0);
    });
  });

  test('should contain the new "Where Are They?" app in root portfolio', () => {
    const whereAreThey = rootApps.find(app => app.name === 'Where Are They?');
    expect(whereAreThey).toBeDefined();
    expect(whereAreThey.category).toBe('Math & Logic');
    expect(whereAreThey.image).toBe('where_are_they.png');
    expect(whereAreThey.link).toBe('https://gemini.google.com/share/7a956c4fa3e7');
    expect(whereAreThey.description).toContain('hidden-object search game');
  });
});

describe('Silvia Sub-Portfolio Integrity', () => {
  test('silviaApps should be a valid array', () => {
    expect(Array.isArray(silviaApps)).toBe(true);
    expect(silviaApps.length).toBeGreaterThan(0);
  });

  test('all silvia-apps should have required fields', () => {
    silviaApps.forEach(app => {
      expect(app.name).toBeDefined();
      expect(typeof app.name).toBe('string');
      expect(app.name.trim().length).toBeGreaterThan(0);

      expect(app.description).toBeDefined();
      expect(typeof app.description).toBe('string');
      expect(app.description.trim().length).toBeGreaterThan(0);

      expect(app.link).toBeDefined();
      expect(typeof app.link).toBe('string');
      expect(app.link.startsWith('http://') || app.link.startsWith('https://')).toBe(true);

      expect(app.icon).toBeDefined();
      expect(typeof app.icon).toBe('string');
      expect(app.icon.trim().length).toBeGreaterThan(0);
    });
  });

  test('should contain the new "Where Are They?" app in Silvia sub-portfolio', () => {
    const whereAreThey = silviaApps.find(app => app.name === 'Where Are They?');
    expect(whereAreThey).toBeDefined();
    expect(whereAreThey.icon).toBe('👀');
    expect(whereAreThey.link).toBe('https://gemini.google.com/share/7a956c4fa3e7');
    expect(whereAreThey.description).toContain('search-and-find game');
  });
});
