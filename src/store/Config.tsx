import { createContext, ReactNode, useEffect, useState } from 'react'

export const MyContext = createContext({})

interface IContext {
  children?: ReactNode
}

export interface IMyContext {
  lang?: string
  changeLang?: (language: string) => void
}

export function Provider({ children }: IContext) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const getLang = localStorage.getItem('lang')

    if (getLang) {
      setLang(getLang)
    }
  }, [])

  function changeLang(type: string) {
    localStorage.setItem('lang', type)
    setLang(type)
  }

  return (
    <MyContext.Provider value={{ lang, changeLang }}>
      {children}
    </MyContext.Provider>
  )
}
