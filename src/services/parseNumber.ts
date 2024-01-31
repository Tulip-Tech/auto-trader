export function parseNumber(value: string, locales: string[]) {
    const example = Intl.NumberFormat(locales as string[]).format(Number('1.1'));
    const cleanPattern = new RegExp(`[^-+0-9${ example.charAt( 1 ) }]`, 'g');
    const cleaned = value.replace(cleanPattern, '');
    const normalized = cleaned.replace(example.charAt(1), '.');
    return parseFloat(normalized);
}
