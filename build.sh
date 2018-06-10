#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="development"
ENCRYPTION_LABEL="d00b57d7e51f"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    doCompile
    exit 0
fi

# Save some useful information
REPO="https://github.com/SudharakaP/ServiceLinkNode.git"
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

# Clone the existing ServiceLinkNode server backend
# Create a new empty branch if it doesn't exist yet (should only happen on first deploy)
cd .. && git clone $REPO && cd Service-Link-Angular
cp -rf dist/* ../ServiceLinkNode/public/

cd ../ServiceLinkNode
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH

# Now let's go have some fun with the cloned repo
git config user.name "Travis CI"
git config user.email "sudharaka@service-link.us"

# Commit the "changes", i.e. the new version.
git add -fA .
git commit -m "TravisCI Auto Deploy: $TRAVIS_COMMIT"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../Service-Link-Angular/deploy_key.enc -out ../Service-Link-Angular/deploy_key -d
chmod 600 ../Service-Link-Angular/deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH >/dev/null 2>&1