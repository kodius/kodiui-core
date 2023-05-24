source .env

dirs=(
'Accordion:Accordion'
)

shift
for dir in "${dirs[@]}"; do
    path="${dir%%:*}" 
    name="${dir#*:}"
    echo -e "\033[33m Compressing $name \033[0m"
    cd "src/cli-components/$path" && zip -r "$name.zip" . && mv "$name.zip" "../../../../../packages/cli/components"
    echo -e "\033[32m $name was successfully compressed\033[0m"
done

