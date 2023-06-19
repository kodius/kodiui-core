#!/bin/bash

initial_dir=$(pwd)  # Store the initial working directory
echo $initial_dir

# Zip each file in the components/localUI folder
cd "$initial_dir/components/localUI"
for file in *; do
  zip -r "$initial_dir/components/$file.zip" "$file"
  zip_exit_code=$?  # Capture the exit code of the zip command

  if [ $zip_exit_code -eq 0 ]; then
    echo -e "\033[32m$file zipped successfully."
  else
    echo -e "\033[31mError: Failed to zip $file."
    exit 1
  fi
done

# Move the zip files to the destination folder (replace "x_location" with the actual destination)
mv "$initial_dir/components/"*.zip "$initial_dir/../../packages/cli/localUI"
move_exit_code=$?  # Capture the exit code of the mv command

if [ $move_exit_code -eq 0 ]; then
  echo -e "\033[32mUI files moved successfully."
else
  echo -e "\033[31mError: Failed to move zip files."
  exit 1
fi
