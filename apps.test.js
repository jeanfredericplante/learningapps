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

  test('should contain "Match the Meaning" in root portfolio', () => {
    const matchTheMeaning = rootApps.find(app => app.name === 'Match the Meaning');
    expect(matchTheMeaning).toBeDefined();
    expect(matchTheMeaning.category).toBe('Language & Literacy');
    expect(matchTheMeaning.image).toBe('match_the_meaning.png');
    expect(matchTheMeaning.link).toBe('https://gemini.google.com/share/3fdd5d5f14f2?skid=2eedd434-b010-4e01-8b69-6ffff14f4c9b');
    expect(matchTheMeaning.description.toLowerCase()).toContain('match');
  });

  test('should contain "What Do You Feel Like Doing?" in root portfolio', () => {
    const feelLikeDoing = rootApps.find(app => app.name === 'What Do You Feel Like Doing?');
    expect(feelLikeDoing).toBeDefined();
    expect(feelLikeDoing.category).toBe('Language & Literacy');
    expect(feelLikeDoing.image).toBe('what_do_you_feel_like_doing.png');
    expect(feelLikeDoing.link).toBe('https://gemini.google.com/share/65507ed2f3a5?skid=df4528c1-59dc-46f9-8e48-0f9d669e00d0');
    expect(feelLikeDoing.description.toLowerCase()).toContain('feel like');
  });

  test('should have updated link for "Interactive Image Describer" in root portfolio', () => {
    const describer = rootApps.find(app => app.name === 'Interactive Image Describer');
    expect(describer).toBeDefined();
    expect(describer.link).toBe('https://gemini.google.com/share/6fabcf377050?skid=504000b5-1069-452c-ba8d-13860b916a92');
  });

  test('should not contain "Describe The Picture" in root portfolio', () => {
    const describePic = rootApps.find(app => app.name === 'Describe The Picture');
    expect(describePic).toBeUndefined();
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

  test('should contain "Match the Meaning" in Silvia sub-portfolio', () => {
    const matchTheMeaning = silviaApps.find(app => app.name === 'Match the Meaning');
    expect(matchTheMeaning).toBeDefined();
    expect(matchTheMeaning.icon).toBe('🪧');
    expect(matchTheMeaning.link).toBe('https://gemini.google.com/share/3fdd5d5f14f2?skid=2eedd434-b010-4e01-8b69-6ffff14f4c9b');
    expect(matchTheMeaning.description.toLowerCase()).toContain('match');
  });

  test('should contain "What Do You Feel Like Doing?" in Silvia sub-portfolio', () => {
    const feelLikeDoing = silviaApps.find(app => app.name === 'What Do You Feel Like Doing?');
    expect(feelLikeDoing).toBeDefined();
    expect(feelLikeDoing.icon).toBe('💭');
    expect(feelLikeDoing.link).toBe('https://gemini.google.com/share/65507ed2f3a5?skid=df4528c1-59dc-46f9-8e48-0f9d669e00d0');
    expect(feelLikeDoing.description.toLowerCase()).toContain('feel like');
  });

  test('should have updated link for "Interactive Image Describer" in Silvia sub-portfolio', () => {
    const describer = silviaApps.find(app => app.name === 'Interactive Image Describer');
    expect(describer).toBeDefined();
    expect(describer.link).toBe('https://gemini.google.com/share/6fabcf377050?skid=504000b5-1069-452c-ba8d-13860b916a92');
  });

  test('should not contain "Describe The Picture" in Silvia sub-portfolio', () => {
    const describePic = silviaApps.find(app => app.name === 'Describe The Picture');
    expect(describePic).toBeUndefined();
  });
});
