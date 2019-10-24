export const DATA_NORMALIZED = 'DATA_NORMALIZED';

export const dataNormalized = (feature: string) => ({
  type: `${feature} ${DATA_NORMALIZED}`
});
