import Link from "next/link"
import { categories } from "@/features/sidebar/data/categories"

import { routes } from "@/config/site"
import { Card } from "@/components/ui/card"
import { Center } from "@/components/primitives/center"
import { Stack } from "@/components/primitives/stack"
import { Switcher } from "@/components/primitives/switcher"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

export default function PrimitivesList() {
  return (
    <Center direction="center" className="h-screen container">
      <Stack gap="5xl">
        {categories.map((category) => {
          return (
            <Stack>
              <Heading level="3">{category.name}</Heading>
              <Switcher>
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
              </Switcher>
            </Stack>
          )
        })}
      </Stack>
    </Center>
  )
}
