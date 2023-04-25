source .env

dirs=(
'input/Text:Text'
'input/Heading:Heading'
'input/Input:Input'
'input/Button:Button'
'input/ButtonLink:ButtonLink'
'input/TextLink:TextLink'
'input/TextDropdown:TextDropdown'
'input/Badge:Badge'
'input/Switch:Switch'
'ui/Drawer:Drawer'
'ui/Divider:Divider'
'tabs:Tabs'
)

shift
for dir in "${dirs[@]}"; do
    path="${dir%%:*}" 
    name="${dir#*:}"
    echo -e "\033[33m Compressing $name \033[0m"
    cd "$KODIUI_DOCS_PATH/src/components/$path" && zip -r "$name.zip" . && mv "$name.zip" "$KODIUI_PATH/kodiui-core/packages/cli/components/"
    echo -e "\033[32m $name was successfully compressed\033[0m"
done


