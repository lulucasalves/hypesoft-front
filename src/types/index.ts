export interface ICard {
  icon: JSX.Element
  title1: string
  title2: string
}

export interface IWorkCard {
  image: string
  title: string
  redirect: () => void
}

export interface ISectionTitle {
  title: string
}

export interface ICompanyCard {
  image?: string
  last?: boolean
  width?: number
  height?: number
}

export interface ITestimonialCard {
  image: string
  title: string
  description: string
  company: string
  onClick: () => void
}

export interface IFeedback {
  text: string
  position: number
}
