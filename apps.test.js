import { describe, test, expect } from 'vitest';
import { apps } from './main.js';

describe('Silvia\'s App Portfolio Integrity', () => {
  test('apps should be an array', () => {
    expect(Array.isArray(apps)).toBe(true);
    expect(apps.length).toBeGreaterThan(0);
  });

  test('all apps should have required fields', () => {
    apps.forEach(app => {
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

  test('should contain the new "Where Are They?" app with correct details', () => {
    const whereAreThey = apps.find(app => app.name === 'Where Are They?');
    expect(whereAreThey).toBeDefined();
    expect(whereAreThey.category).toBe('Math & Logic');
    expect(whereAreThey.image).toBe('where_are_they.png');
    expect(whereAreThey.link).toBe('https://gemini.google.com/share/7a956c4fa3e7');
    expect(whereAreThey.description).toContain('hidden-object search game');
  });
});
