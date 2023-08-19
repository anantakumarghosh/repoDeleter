# Batch Repository deleter

## Steps
run the below commands   
run ```npm i```  
```git clone <repository-url>```  
cd project-directory  
run the below command in project root directory  
```gh repo list <your-user-name> --json name --limit 100 > allrepolist.json```  

Remove repositories from json that you don't wish to delete   

run the below command   

```npm run delete```


