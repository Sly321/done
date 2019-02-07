export function dateToLocaleString(date: Date) {
    return date.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

/**
 * Returns a Date, that represents tomorrow.
 *
 * @export
 * @returns {Date}
 */
export function getTomorrow(): Date {
    return new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
}

export function formatDateToGql(d: Date): string {
    const day = d.getDate()
    const mon = d.getMonth() + 1
    return `${d.getFullYear()}-${mon < 10 ? '0' : ''}${mon}-${day < 10 ? '0' : ''}${day}`
}
