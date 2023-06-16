#!/bin/bash

initial_dir=$(pwd)  # Store the initial working directory
echo $initial_dir

# Zip the components/primitives folder
cd "$initial_dir/components/localUI"
zip -r "$initial_dir/components/ui.zip" .
zip_exit_code=$?  # Capture the exit code of the zip command

if [ $zip_exit_code -eq 0 ]; then
  echo -e "\033[32mUI folder zipped successfully."
else
  echo -e "\033[31mError: Failed to zip folder."
  exit 1
fi

# Move the zip folders two levels up (replace "x_location" with the actual destination)
mv "$initial_dir/components/ui.zip" "$initial_dir/../../packages/cli/localUI"
move_exit_code=$?  # Capture the exit code of the mv command

if [ $move_exit_code -eq 0 ]; then
  echo -e "\033[32mUI zip file moved successfully."
else
  echo -e "\033[31mError: Failed to move zip file."
  exit 1
fi

~``