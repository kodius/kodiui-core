## Add new compoent for compress

#### Inside compress-to-cli.sh scirpt add the component 2 arguments: path and name. The paths starts from src/components/<YOUR COMPONENT>

Example, a new component "Example1" inside ui folder

```
dirs=('typography/Text: Text' 'typography/Heading: Heading', 'ui/Example1': Example1)
```

#### run

```
pnpm compress-to-cli
```

## Installing component

```
npx @kodiui/cli@latest
```
