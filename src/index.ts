import { format, formatDistance, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export function useFormatter() {
  function convertTimeToDuration(time: string) {
    if (!time) return 0

    const [hours, minutes] = time.split(':').map(Number)

    const durationISO = `PT${hours}H${minutes}M`

    return durationISO
  }

  function humanizeDate(date: any, character?: string, invert?: boolean) {
    if (!date) return ''

    const formattedDate = parseISO(date)

    const template = invert ? 'yyyy/MM/dd' : 'dd/MM/yyyy'

    return format(formattedDate, `${template} ${character ?? '-'} HH:mm`, {
      locale: pt,
    })
  }

  function humanizeDistanceDate(date: any, isUpper = false) {
    if (!date) return date

    const now = new Date()
    const string = formatDistance(parseISO(date), now, {
      locale: pt,
      addSuffix: true,
    })

    if (isUpper) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return string
  }

  function onlyDate(date: any, invert = false) {
    if (!date) return null

    const formattedDate = parseISO(date)

    const template = invert ? 'yyyy/MM/dd' : 'dd/MM/yyyy'

    return format(formattedDate, template, {
      locale: pt,
    })
  }

  function onlyTime(date: any) {
    if (!date) return null

    return format(parseISO(date), 'HH:mm', {
      locale: pt,
    })
  }

  function formatPrice(value: number, fractionDigits = 0) {
    const newValue = Number(value).toFixed(fractionDigits).split('.')
    newValue[0] = newValue[0].split(/(?=(?:...)*$)/).join('.')

    return newValue.join(',')
  }

  function parsePercentage(value: number) {
    if (!value) return 0

    return parseFloat(value.toFixed(1))
  }

  function formatEllipsis(value: string | undefined, length: number) {
    if (!value) return ''

    if (value.length >= length) {
      return `${value.substring(0, length)}...`
    }
    return value
  }

  function formatTextWithLineBreaks(text: string | undefined) {
    if (!text) return ''
    return text.replace(/\. ?/g, '.\n')
  }

  function formatAbbreviateNumber(number: number | null) {
    if (!number) return 0

    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    } else {
      return number.toString()
    }
  }

  return {
    humanizeDate,
    humanizeDistanceDate,
    onlyDate,
    onlyTime,
    formatPrice,
    parsePercentage,
    formatEllipsis,
    formatTextWithLineBreaks,
    formatAbbreviateNumber,
    convertTimeToDuration,
  }
}
