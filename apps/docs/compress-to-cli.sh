source .env

dirs=(
'inputs/Text:Text'
'inputs/Heading:Heading'
'inputs/Input:Input'
'inputs/Button:Button'
'inputs/ButtonLink:ButtonLink'
'inputs/TextLink:TextLink'
'inputs/TextDropdown:TextDropdown'
'inputs/Badge:Badge'
'inputs/Switch:Switch'
'inputs/Checkbox:Checkbox'
'ui/Drawer:Drawer'
'ui/Divider:Divider'
'tabs:Tabs'
'Accordion:Accordion'
'Slider:Slider'
'Tooltip:Tooltip'
)

shift
for dir in "${dirs[@]}"; do
    path="${dir%%:*}" 
    name="${dir#*:}"
    echo -e "\033[33m Compressing $name \033[0m"
    cd "$KODIUI_DOCS_PATH/src/components/$path" && zip -r "$name.zip" . && mv "$name.zip" "$KODIUI_PATH/kodiui-core/packages/cli/components/"
    echo -e "\033[32m $name was successfully compressed\033[0m"
done


