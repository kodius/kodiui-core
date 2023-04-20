source .env

dirs=('input/Text:Text' 'input/Heading:Heading' 'input/Input:Input' 'input/Button:Button' 'input/TextLink:TextLink' 'ui/Drawer:Drawer')

shift
for dir in "${dirs[@]}"; do
    path="${dir%%:*}" 
    name="${dir#*:}"
    echo -e "\033[33m Compressing $name \033[0m"
    cd "$KODIUI_DOCS_PATH/src/components/$path" && zip -r "$name.zip" . && mv "$name.zip" "$KODIUI_PATH/kodiui-core/packages/cli/components/"
    echo -e "\033[32m $name was successfully compressed\033[0m"
done


