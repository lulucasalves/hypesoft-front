import { ReactElement, useContext } from 'react'
import { IntlProvider } from 'react-intl'

import * as enMessages from '../translate/en.json'
import * as ptMessages from '../translate/pt.json'
import * as esMessages from '../translate/es.json'

import { IMyContext, MyContext } from './Config'
import { ILangProvider } from '../types'

const messages: Record<any, any> = {
  pt: ptMessages,
  en: enMessages,
}

export function LangProvider({ children }: ILangProvider) {
  const { lang } = useContext<IMyContext>(MyContext)

  return (
    <IntlProvider
      locale={lang || 'en'}
      messages={
        lang !== undefined ? messages[lang as keyof typeof messages] : {}
      }
    >
      {children}
    </IntlProvider>
  )
}
