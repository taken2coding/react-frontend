#!/bin/bash

# Exit on any error
set -e

# Define project paths
PROJECT_ROOT=$(pwd)
FRONTEND_DIR="$PROJECT_ROOT"
#FRONTEND_STATIC_DIR="$PROJECT_ROOT/build"
STATIC_ROOT="$PROJECT_ROOT/build/"

# Step 1: Clean up previous static files to avoid conflicts
#echo "Cleaning up previous static files..."
# rm -rf "$FRONTEND_STATIC_DIR"/* "$STATIC_ROOT"/*

# Step 2: Build the frontend
echo "Building frontend..."
cd "$FRONTEND_DIR"
npm install  # Ensure dependencies are installed
npm run build
echo "frontend build successful..."
# Step 3: Move frontend build output to staticfiles/frontend/
#echo "Moving frontend build to $FRONTEND_STATIC_DIR..."
# Adjust this based on your frontend framework's output directory
# For React (Create React App), the default output is 'build/'
#mv build/* "$FRONTEND_STATIC_DIR" || {
#    echo "Error: Failed to move frontend build output"
#    exit 1
#}

# Clean up the temporary build directory
#rm -rf build