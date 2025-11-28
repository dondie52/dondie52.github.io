#!/bin/bash
# Script to test SSH and push to GitHub Pages
# Run this AFTER adding your SSH key to GitHub

set -e

echo "=== Testing SSH Connection ==="
if ssh -T git@github.com 2>&1 | grep -q "Hi dondie52!"; then
    echo "✓ SSH connection successful!"
else
    echo "✗ SSH connection failed. Please add your SSH key to GitHub first."
    echo "  Your public key:"
    cat ~/.ssh/id_ed25519_dondie52.pub
    echo ""
    echo "  Add it at: https://github.com/settings/keys"
    exit 1
fi

echo ""
echo "=== Adding files to git ==="
# For GitHub Pages, files need to be in root, but we'll also track dist folder
git add dist/ index.html 2>/dev/null || git add dist/

echo ""
echo "=== Checking git status ==="
git status

echo ""
echo "=== Committing changes ==="
git commit -m "Deploy dist folder to GitHub Pages" || echo "No changes to commit"

echo ""
echo "=== Pushing to GitHub ==="
git push -u --force origin main

echo ""
echo "✓ Successfully pushed to GitHub!"
echo "  Your site should be available at: https://dondie52.github.io"

