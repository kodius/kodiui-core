import Link from "next/link"
import { categories } from "@/features/sidebar/data/categories"

import { routes } from "@/config/site"
import { Card } from "@/components/ui/card"
import { Grid } from "@/components/localUI/grid"
import { Box } from "@/components/primitives/box/box"
import { Center } from "@/components/primitives/center"
import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

export default function PrimitivesList() {
  return (
    <Box id="quickView">
      <Center direction="center">
        <Stack gap="5xl">
          {categories.map((category) => {
            return (
              <Stack>
                <Heading level="3">{category.name}</Heading>
                <Grid columns={{ xs: 1, sm: 2, lg: 3 }} gap="sm">
                  {category.elements?.map((element) => {
                    const href =
                      `${routes.docs}/${category.name}/${element.name}`.toLowerCase()
                    return (
                      <Link href={href}>
                        <Card key={category.name}>
                          <Stack gap="xs">
                            <Heading level="4">{element.name}</Heading>
                            <Text size="sm" color="muted">
                              {element.description}
                            </Text>
                          </Stack>
                        </Card>
                      </Link>
                    )
                  })}
                </Grid>
              </Stack>
            )
          })}
          <Stack>
            <Heading level="3">Components</Heading>
            <Grid columns={{ xs: 1, sm: 2, lg: 3 }} gap="sm">
              <Link href={"https://ui.shadcn.com/docs/components"}>
                <Card key={"Components"}>
                  <Stack gap="xs">
                    <Heading level="4">Components</Heading>
                    <Text size="sm" color="muted">
                      Explore our versatile UI elements for enhanced interfaces.
                      Click for more on other components.
                    </Text>
                  </Stack>
                </Card>
              </Link>
            </Grid>
          </Stack>
        </Stack>
      </Center>
    </Box>
  )
}
