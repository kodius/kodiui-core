KODIUI_PATH=$1

dirs=('typography/Text: Text' 'typography/Heading: Heading')

shift
for dir in "${dirs[@]}"; do
    path="${dir%%:*}" 
    name="${dir#*:}"
    cd "$KODIUI_PATH/kodiui-core/apps/docs/src/components/$path" && zip -r "$name.zip" . && mv "$name.zip" "$KODIUI_PATH/kodiui-core/apps/docs/public/compress/"
done
