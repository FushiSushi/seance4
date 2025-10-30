// Service utilities for products — pure functions (no side-effects)
export const getAll = (list) => [...list];

export const getById = (list, id) => list.find((p) => p.id === id) ?? null;

export const add = (list, newP) => {
  const id = list.length ? Math.max(...list.map((p) => p.id)) + 1 : 1;
  return [...list, { id, ...newP }];
};

export const update = (list, id, patch) =>
  list.map((p) => (p.id === id ? { ...p, ...patch, id } : p));

export const remove = (list, id) => list.filter((p) => p.id !== id);

export const filterByTag = (list, tag) =>
  list.filter((p) => Array.isArray(p.tags) && p.tags.includes(tag));

export const sortByPrice = (list, asc = true) =>
  [...list].sort((a, b) => (asc ? a.price - b.price : b.price - a.price));
