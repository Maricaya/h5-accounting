#!/bin/sh
git config user.name "Maricaya"
git config user.email "915270549@qq.com"


git filter-branch --env-filter '
OLD_EMAIL="chuxulu@lezhixing.com.cn"
CORRECT_NAME="Maricaya"
CORRECT_EMAIL="915270549@qq.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
