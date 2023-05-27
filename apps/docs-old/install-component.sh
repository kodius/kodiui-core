#!/bin/bash

source .env

if [[ -z "$KODIUI_DOCS_PATH" || -z "$MY_PROJECT_PATH" ]]; then
echo -e "\033[31mError: Setup .env variables MY_PROJECT_PATH and KODIUI_DOCS_PATH\033[0m"
  exit 1
fi

# Define options and default selection
options=("Button" "Heading" "Text" "Input")
selected=0

# Print options with the default selection
for i in "${!options[@]}"; do
    if [[ $i -eq $selected ]]; then
        printf "\t[*] %s\n" "${options[$i]}"
    else
        printf "\t[ ] %s\n" "${options[$i]}"
    fi
done

# Listen for arrow key and space bar input to update selection
while read -r -n1 key; do
    if [[ $key == "" ]]; then
        break
    elif [[ $key == $'\x1b' ]]; then
        read -r -n2 -s arrow # read next two bytes of the escape sequence
        if [[ $arrow == "[A" ]] && [[ $selected -gt 0 ]]; then
            ((selected--))
        elif [[ $arrow == "[B" ]] && [[ $selected -lt $(( ${#options[@]} - 1 )) ]]; then
            ((selected++))
        fi
        # Print updated options with new selection
        printf "\033[${#options[@]}A" # move cursor up to the first option
        for i in "${!options[@]}"; do
            if [[ $i -eq $selected ]]; then
                printf "\t[*] %s\n" "${options[$i]}"
            else
                printf "\t[ ] %s\n" "${options[$i]}"
            fi
        done
    fi
done

# Execute installation command based on final selection
case $selected in
    0)
        selected_component="Button"
        ;;
    1)
        selected_component="Header"
        ;;
    2)
        selected_component="Text"
        ;;
    3)
        selected_component="Input"
        ;;
    *)
        echo "Invalid selection"
        ;;
esac


read -p "Where would you like to install $selected_component component? $KODIUI_MY_PROJECT_PATH" subdirectory

my_project_with_subdirectory="$KODIUI_MY_PROJECT_PATH$subdirectory"

echo $my_project_with_subdirectory

cd $my_project_with_subdirectory
mkdir $selected_component

zip_component_path="$KODIUI_DOCS_PATH/public/compress/$selected_component.zip"

cp "$zip_component_path" "$my_project_with_subdirectory/$selected_component"
cd $selected_component
unzip "$selected_component.zip"
rm "$selected_component.zip"

echo -e "\033[32m $selected_component was succesfully installed\033[0m"
