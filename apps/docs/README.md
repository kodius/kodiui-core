## Compressing components

### create a enviroment varabile

#### Exmaples:

```
KODIUI_DOCS_PATH=~/kodius/kodiui-core/apps/docs
```

#### run

```
pnpm compress
```

## Add new compoent for compress

#### Inside compress.sh scirpt add the component 2 arguments: path and name. The paths starts from src/components/<YOUR COMPONENT>

Example, a new component "Example1" inside ui folder

```
dirs=('typography/Text: Text' 'typography/Heading: Heading', 'ui/Example1': Example1)
```

#### run

```
pnpm compress
```

## Installing component

### create a enviroment varabile

#### Exmaples:

```
MY_PROJECT_PATH=~/projects/bmb-elixir/bmb-fe
```

```
#### run script
```

pnpm install-component

```

```
