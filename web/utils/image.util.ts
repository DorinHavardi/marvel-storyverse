export function isValidImageSource(source: any): boolean {
  return !!(
    source &&
    typeof source === 'object' &&
    source.asset &&
    typeof source.asset === 'object' &&
    ('_ref' in source.asset || '_id' in source.asset) &&
    !String(source.asset._ref || source.asset._id).includes('placeholder')
  );
}
