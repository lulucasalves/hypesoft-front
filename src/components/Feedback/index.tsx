import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { IFeedback } from '../../types'
import { Trans } from '../Trans'
import {
  ArrowLeft,
  Ballon,
  FeedbackDiv,
  ImageDiv,
  TextFeedback
} from './styles'

export function Feedback({ position, text }: IFeedback) {
  function setArrowPosition() {
    if (position === 2) {
      return '140px'
    }

    if (position === 3) {
      return '245px'
    }

    if (position === 4) {
      return '350px'
    }

    return '35px'
  }

  return (
    <Ballon>
      <ImageDiv>
        <Image src="/vectors/quote.svg" width={95.58} height={75.1} />
      </ImageDiv>
      <ArrowLeft top={setArrowPosition()} />
      <FeedbackDiv>
        <AiFillStar />
        <p>
          <Trans text="stars" />
        </p>
      </FeedbackDiv>
      <TextFeedback>
        “<Trans text={text} />”
      </TextFeedback>
    </Ballon>
  )
}
