import { PauseIcon, PlayIcon, ReactIcon } from '@/assets'
import { Button, Text } from '@/components'
import { Doc } from '@/features/documentation'
import { Animation, Split, Stack, Switcher } from '@kodiui/ui'
import React, { FC, useState } from 'react'

const animationsArray = [
  'fadeIn',
  'bounce',
  'fadeOutBloom',
  'fadeInBloom',
  'fadeOut',
  'scaleUp',
  'scaleDown',
  'slideOutUp',
  'slideOutDown',
  'slideOutRight',
  'slideOutLeft',
  'slideInUp',
  'slideInDown',
  'slideInRight',
  'slideInLeft',
  'shakeX',
  'shakeY',
  'spin',
  'ping',
  'blink',
  'float',
  'pulse',
] as const

type AniKeys = (typeof animationsArray)[number]

const AnimationsPage = () => {
  return (
    <Doc>
      <Doc.Title>Animations</Doc.Title>
      <Doc.Block
        subTitle="Defaults"
        exampleWithCode={
          <Stack>
            {animationsArray.map((aniKey) => {
              return <AnimateItem key={aniKey} animation={aniKey} />
            })}
          </Stack>
        }
      />
      <Doc.Block
        subTitle="Combine Animations"
        exampleWithCode={
          <Switcher>
            <Animation
              animation="scaleDown"
              width="fit"
              animationFillMode="both"
              animationDirection="alternate"
              animationIterationCount="infinite"
            >
              <Animation
                animation="fadeOut"
                width="fit"
                animationFillMode="both"
                animationDirection="alternate"
                animationIterationCount="infinite"
              >
                <Text tone="brand" size="large" icon={<ReactIcon />}>
                  scaleDown + fadeout
                </Text>
              </Animation>
            </Animation>
            <Animation
              animation="shakeY"
              width="fit"
              animationFillMode="both"
              animationDirection="alternate"
              animationIterationCount="infinite"
            >
              <Animation
                animation="pulse"
                width="fit"
                animationFillMode="both"
                animationDirection="alternate"
                animationIterationCount="infinite"
              >
                <Text tone="success" size="large" icon={<ReactIcon />}>
                  shakeY + pulse
                </Text>
              </Animation>
            </Animation>
            <Animation
              animation="ping"
              width="fit"
              animationFillMode="both"
              animationDirection="alternate"
              animationIterationCount="infinite"
            >
              <Animation
                animation="bounce"
                width="fit"
                animationFillMode="both"
                animationDirection="alternate"
                animationIterationCount="infinite"
              >
                <Text tone="success" size="large" icon={<ReactIcon />}>
                  ping + bounce
                </Text>
              </Animation>
            </Animation>
          </Switcher>
        }
      />
    </Doc>
  )
}

export default AnimationsPage

interface AnimateItem {
  animation: AniKeys
}

const AnimateItem: FC<AnimateItem> = (props) => {
  const [animation, setAnimation] = useState<AniKeys | undefined>(undefined)
  const toggle = () => setAnimation(animation === undefined ? props.animation : undefined)
  const isAnimating = animation !== undefined
  return (
    <Split>
      <Animation
        width="fit"
        animation={animation}
        animationFillMode="both"
        animationDirection="alternate"
        animationPlayState="both"
        animationIterationCount="infinite"
      >
        {props.animation}
      </Animation>
      <Button onClick={toggle} icon={isAnimating ? <PauseIcon /> : <PlayIcon />} size="sm" />
    </Split>
  )
}
