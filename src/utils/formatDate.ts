export const formatDate = (date: Date | undefined): string => {
  if (!date) return 'Fecha no disponible';
  return date.toLocaleDateString(); // Puedes personalizar el formato según tus necesidades
};
