import Link from "next/link"
import { categories } from "@/features/sidebar/data/categories"

import { routes } from "@/config/site"
import { Card } from "@/components/ui/card"
import { Box } from "@/components/primitives/box/box"
import { Center } from "@/components/primitives/center"
import { FlexBox } from "@/components/primitives/flex-box"
import { Stack } from "@/components/primitives/stack"
import { Switcher } from "@/components/primitives/switcher"
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
                <FlexBox>
                  {category.elements?.map((element) => {
                    let href = ""
                    category.name === "Components"
                      ? (href = "https://ui.shadcn.com/docs/components")
                      : (href =
                          `${routes.docs}/${category.name}/${element.name}`.toLowerCase())
                    return (
                      <Link href={href} className="md:w-[49%]">
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
                </FlexBox>
              </Stack>
            )
          })}
        </Stack>
      </Center>
    </Box>
  )
}
