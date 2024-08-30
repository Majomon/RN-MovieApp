export const formatDate = (date: Date | undefined): string => {
  if (!date) return 'Fecha no disponible';
  return new Date(date).toLocaleDateString();
};
