import { createI18n } from 'vue-i18n'
import enUS from '@/plugins/lang/en-US.json'
import jaJP from '@/plugins/lang/ja-JP.json'
import viVN from '@/plugins/lang/vi-VN.json'

type MessageSchema = typeof enUS

export const i18n = createI18n<[MessageSchema], 'en-US' | 'ja-JP' | 'vi-VN'>({
    legacy: false,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': enUS,
        'ja-JP': jaJP,
        'vi-VN': viVN
    },
    datetimeFormats: {
        'ja-JP': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            },
            long: {
                year: 'numeric', month: 'short', day: 'numeric',
                weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
            }
        },
        'en-US': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            },
            long: {
                year: 'numeric', month: 'short', day: 'numeric',
                weekday: 'short', hour: 'numeric', minute: 'numeric'
            }
        },
        'vi-VN': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            },
            long: {
                year: 'numeric', month: 'short', day: 'numeric',
                weekday: 'short', hour: 'numeric', minute: 'numeric'
            }
        },
    },
    numberFormats: {
        'en-US': {
            currency: {
                style: 'currency', currency: 'USD', notation: 'standard'
            },
            decimal: {
                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
            },
            percent: {
                style: 'percent', useGrouping: false
            }
        },
        'ja-JP': {
            currency: {
                style: 'currency', currency: 'JPY', useGrouping: true, currencyDisplay: 'symbol'
            },
            decimal: {
                style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
            },
            percent: {
                style: 'percent', useGrouping: false
            }
        },
        'vi-VN': {
            currency: {
                style: 'currency', currency: 'USD', notation: 'standard'
            },
            decimal: {
                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
            },
            percent: {
                style: 'percent', useGrouping: false
            }
        },
    }
});
