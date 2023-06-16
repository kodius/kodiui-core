import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane } from "@/features/docs/DocPane"
import { CodeSnippet } from "@/features/docs/components/CodeSnippet"
import { DocTemplate } from "@/templates"

import { Grid } from "@/components/primitives/grid"
import { Text } from "@/components/typography/text"

export const Component = () => {
  return (
    <DocTemplate>
      <Text size="sm" color="muted">
        * somewhere you should resize your screen to see changes...
      </Text>
      <DocBlock
        canPlay
        title="Grid - minimum"
        description="The minimum value for the min() function. Example: minimum='250px' will generate 'grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));')"
        exampleWithCode={
          <Grid minimum="250px">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
          </Grid>
        }
      />

      <DocBlock
        title="Grid - columns"
        description="Grid columns property allows you to create a responsive grid layout. i.e. columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6}}"
        exampleWithCode={
          <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, "2xl": 6 }}>
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
            <DocPane>Element 6</DocPane>
            <DocPane>Element 7</DocPane>
            <DocPane>Element 8</DocPane>
            <DocPane>Element 9</DocPane>
            <DocPane>Element 10</DocPane>
          </Grid>
        }
      />

      <DocBlock
        title="Grid - gap"
        description="Define space(grid-gap) between the grid children/cells."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} gap="xs">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
            <DocPane>Element 6</DocPane>
          </Grid>
        }
      />

      <DocBlock
        title="Grid - gapX & gapY"
        description="Combine horizontal and vertical space between grid children/cells."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} gapX="xxs" gapY="2xl">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
            <DocPane>Element 6</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - normal"
        description="Use `normal` to pack content items in their default position as if no justifyContent value was set."
        exampleWithCode={
          <Grid
            className="grid-cols-[200px_200px_200px]"
            justifyContent="normal"
          >
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - start"
        description="Use `start` to justify items against the start of the container's main axis."
        exampleWithCode={
          <Grid
            className="grid-cols-[200px_200px_200px]"
            justifyContent="start"
          >
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - end"
        description="Use `end` to justify items against the end of the container's main axis."
        exampleWithCode={
          <Grid className="grid-cols-[200px_200px_200px]" justifyContent="end">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - center"
        description="Use `center` to justify items along the center of the container's main axis."
        exampleWithCode={
          <Grid
            className="grid-cols-[200px_200px_200px]"
            justifyContent="center"
          >
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - between"
        description="Use `between` to justify items along the container's main axis such that there is an equal amount of space between each item."
        exampleWithCode={
          <Grid
            className="grid-cols-[200px_200px_200px]"
            justifyContent="between"
          >
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - around"
        description="Use `around` to justify items along the container's main axis such that there is an equal amount of space on each side of each item."
        exampleWithCode={
          <Grid
            className="grid-cols-[200px_200px_200px]"
            justifyContent="around"
          >
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - evenly"
        description="Use `evenly` to justify items along the container's main axis such that there is an equal amount of space around each item."
        exampleWithCode={
          <Grid
            className="grid-cols-[200px_200px_200px]"
            justifyContent="evenly"
          >
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Justify content - stretch"
        description="Use `stretch` to allow content items to fill the available space along the container's main axis."
        exampleWithCode={
          <Grid className="grid-cols-[auto_auto_auto]" justifyContent="stretch">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />

      <DocBlock
        title="Align content - normal"
        description="Use `normal` to pack content items in their default position as if no alignContent value was set."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-32" alignContent="normal">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />

      <DocBlock
        title="Align content - center"
        description="Use `center` to pack rows in a container in the center of the cross axis."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-32" alignContent="center">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />

      <DocBlock
        title="Align content - start"
        description="Use `start` to pack rows in a container against the start of the cross axis."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-32" alignContent="start">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />

      <DocBlock
        title="Align content - end"
        description="Use `end` to pack rows in a container against the end of the cross axis."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-32" alignContent="end">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Align content - between"
        description="Use `between` to distribute rows in a container such that there is an equal amount of space between each line."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-48" alignContent="between">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
            <DocPane>Element 6</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Align content - around"
        description="Use `around` to distribute rows in a container such that there is an equal amount of space around each line."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-48" alignContent="around">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
            <DocPane>Element 6</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Align content - evenly"
        description="Use `evenly` to distribute rows in a container such that there is an equal amount of space around each item."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-48" alignContent="evenly">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
            <DocPane>Element 6</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Align content - stretch"
        description="Use `stretch` to allow content items to fill the available space along the container's cross axis."
        exampleWithCode={
          <Grid columns={{ xs: 3 }} className="h-48" alignContent="stretch">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
            <DocPane>Element 4</DocPane>
            <DocPane>Element 5</DocPane>
            <DocPane>Element 6</DocPane>
          </Grid>
        }
      />
      <DocBlock
        title="Setup"
        description="Be sure you have following lines in your tailwind.config.js"
      >
        <CodeSnippet
          initialOpen
          codeSnippet={
            "module.exports = {\n\t...\n\ttheme: {\n\t\t...\n\t\textend: {\n\t\t\t...\n\t\t\tgridTemplateColumns: {\n\t\t\t\t'autofit': 'repeat(auto-fit, minmax(min(var(--percentage), 100%), 1fr))',\n\t\t\t},\n\t\t},\n\t},\n}"
          }
        />
      </DocBlock>
    </DocTemplate>
  )
}
