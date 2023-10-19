#!/bin/bash

# Define the destination directory
DEST_DIR="../../../cli/out-components/"

# Navigate to the ui/components/primitives directory
cd ../ui/components/typography || exit

# Zip all components and save as primitives.zip in the current directory
zip -r typography.zip * || exit

# Check if the destination directory exists, create it if it doesn't
[ -d "$DEST_DIR" ] || mkdir -p "$DEST_DIR"

# Move primitives.zip to the destination directory
mv typography.zip "$DEST_DIR" || exit

# Navigate back to the original directory
cd - || exit
