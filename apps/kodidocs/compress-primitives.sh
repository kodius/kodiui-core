#!/bin/bash

initial_dir=$(pwd)  # Store the initial working directory
echo $initial_dir

# Zip the components/primitives folder
cd "$initial_dir/components/primitives"
zip -r "$initial_dir/components/primitives.zip" .
zip_exit_code=$?  # Capture the exit code of the zip command

if [ $zip_exit_code -eq 0 ]; then
  echo -e "\033[32mComponents/Primitives folder zipped successfully."
else
  echo -e "\033[31mError: Failed to zip Components/Primitives folder."
  exit 1
fi

# Zip the styles/tokens folder
cd "$initial_dir/styles/tokens"
zip -r "$initial_dir/styles/tokens.zip" .
zip_exit_code=$?  # Capture the exit code of the zip command

if [ $zip_exit_code -eq 0 ]; then
  echo -e "\033[32mStyles/tokens folder zipped successfully."
else
  echo -e "\033[31mError: Failed to zip Styles/tokens folder."
  exit 1
fi

# Move the zip folders two levels up (replace "x_location" with the actual destination)
mv "$initial_dir/components/primitives.zip" "$initial_dir/../../packages/cli/primitives"
move_exit_code=$?  # Capture the exit code of the mv command

if [ $move_exit_code -eq 0 ]; then
  echo -e "\033[32mComponents/Primitives zip file moved successfully."
else
  echo -e "\033[31mError: Failed to move Components/Primitives zip file."
  exit 1
fi

mv "$initial_dir/styles/tokens.zip" "$initial_dir/../../packages/cli/primitives"
move_exit_code=$?  # Capture the exit code of the mv command

if [ $move_exit_code -eq 0 ]; then
  echo -e "\033[32mStyles/tokens zip file moved successfully."
else
  echo -e "\033[31mError: Failed to move Styles/tokens zip file."
  exit 1
fi
