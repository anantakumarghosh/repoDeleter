# Batch Repository deleter

## Steps
Run the below commands to setup Batch Repo Deleter.   

```terminal
git clone https://github.com/anantakumarghosh/repoDeleter.git
cd repoDeleter
npm i
gh repo list <your-user-name> --json name --limit 100 > allrepolist.json
```

allrepolist.json containing all repos will get generated.

```JSON
[
    {
        "name": "repo1-delete"
    },
    {
        "name": "repo2-delete"
    },
    {},
    {}
]
```

Remove repositories from allrepolist.json that you don't wish to delete   

Finally run the below command to delete all repositories listed in allrepolist.json  

```npm run delete```


