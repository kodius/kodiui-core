#!/bin/bash

dirs=(
    'typography:typography'
)

shift
initial_dir=$(pwd)  # Store the initial working directory

for dir in "${dirs[@]}"; do
    path="${dir%%:*}"
    name="${dir#*:}"
    echo -e "\033[33m Compressing $name \033[0m"
    
    cd "$initial_dir/components/$path"  # Change back to the initial working directory
    
    if [ $? -eq 0 ]; then  # Check if the directory change was successful
        zip -r "$name.zip" . && mv "$name.zip" "$initial_dir/../../packages/cli/components"
        echo -e "\033[32m $name was successfully compressed\033[0m"
    else
        echo -e "\033[31m Failed to change directory to components/$path\033[0m"
    fi
done
