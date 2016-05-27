#!/usr/bin/env bash
set -e # halt script on error

# If this is the deploy branch, push it up to gh-pages
if [ $TRAVIS_PULL_REQUEST = "false" ] && [ $TRAVIS_BRANCH = ${DEPLOY_BRANCH} ]; then
  echo "Get ready, we're zipping and pushing!"

  REPO=`git config remote.origin.url`
  SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
  SHA=`git rev-parse --verify HEAD`

  cd deploy
  git init
  git config user.name "Travis-CI"
  git config user.email "travis@somewhere.com"
  git add .
  git commit -m "Deploy to GitHub Pages: ${SHA}"

  # Now that we're all set up, we can push.
  git push --force --quiet $SSH_REPO master:gh-pages
else
  echo "Not a publishable branch so we're all done here"
fi
