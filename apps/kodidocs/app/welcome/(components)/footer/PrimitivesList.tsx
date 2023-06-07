import { Center } from "@/components/primitives/center"
import { Stack } from "@/components/primitives/stack"
import { Switcher } from "@/components/primitives/switcher"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

export default function PrimitivesList() {
  return (
    <section>
      <Center direction="center" className="h-screen container">
        <Switcher
          className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          gap="md"
        >
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Stack</Heading>
            <Text size="sm" color="gray-500">
              Stack is a container component for arranging elements vertically.
            </Text>
          </Stack>
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Center</Heading>
            <Text size="sm" color="gray-500">
              Layout component that centers its child within itself.
            </Text>
          </Stack>
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Cluster</Heading>
            <Text size="sm" color="gray-500">
              The Cluster component is a versatile UI element that intelligently
              organizes and presents a group of related items within a user
              interface. It inherits all props from the Box component, allowing
              for seamless customization and integration with existing design
              systems.
            </Text>
          </Stack>
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Split</Heading>
            <Text size="sm" color="gray-500">
              The Split component is a flexible UI element that effectively
              separates and displays content into two distinct sections within a
              user interface. It inherits all props from the Box component,
              enabling easy customization and seamless integration with your
              design system.
            </Text>
          </Stack>
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Sidebar</Heading>
            <Text size="sm" color="gray-500">
              The Sidebar layout allows for a responsive design where two
              adjacent elements can appear side-by-side or stacked vertically,
              with the sidebar element maintaining a fixed width and the other
              element taking up the remaining space. It provides a seamless and
              flexible layout for various content arrangements within a parent
              container.
            </Text>
          </Stack>
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Switcher</Heading>
            <Text size="sm" color="gray-500">
              The Switcher element adapts its layout to a vertical configuration
              when the parent elements width is insufficient, ensuring optimal
              usability and visual presentation across different screen sizes.
            </Text>
          </Stack>
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Flexbox</Heading>
            <Text size="sm" color="gray-500">
              Flex is Box with display set to flex and comes with helpful style
              shorthand. It renders a `div` element.
            </Text>
          </Stack>
          <Stack className="border hover:border-white rounded-xl p-4 transition ease-in-out duration-300">
            <Heading level="4">Box</Heading>
            <Text size="sm" color="gray-500">
              Box is the most abstract component on top of which all other
              components are built. By default, it renders a `div` element.
            </Text>
          </Stack>
        </Switcher>
      </Center>
    </section>
  )
}
