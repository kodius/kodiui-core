## Compressing components

### create a enviroment varabile using $KODIUI_PATH to kodiui-core

#### Exmaples:

#### .bashrc or .zshrc

```bash
export KODIUI_PATH=~/kodius
```

#### .fish

```fish
set -x KODIUI_PATH ~/kodius
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
    "compress": "bash compress.sh $KODIUI_PATH"
```
