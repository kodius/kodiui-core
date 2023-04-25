import { Text } from '@/components'
import React from 'react'

export const SizesAndWeights = () => {
  return (
    <>
      <Text size="large">Text large size, regular weight</Text>
      <Text size="large" weight="medium">
        Text large size, medium weight
      </Text>
      <Text size="large" weight="strong">
        Text large size, strong weight
      </Text>
      <br />
      <Text>Text regular size, regular weight</Text>
      <Text weight="medium">Text regular size, medium weight</Text>
      <Text weight="strong">Text regular size, strong weight</Text>
      <br />
      <Text size="small">Text small size, regular weight</Text>
      <Text size="small" weight="medium">
        Text small size, medium weight
      </Text>
      <Text size="small" weight="strong">
        Text small size, strong weight
      </Text>
      <br />
      <Text size="xsmall">Text xsmall size, regular weight</Text>
      <Text size="xsmall" weight="medium">
        Text xsmall size, medium weight
      </Text>
      <Text size="xsmall" weight="strong">
        Text xsmall size, strong weight
      </Text>
    </>
  )
}
