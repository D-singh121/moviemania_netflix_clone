# namespace create
kubectl create namespace <namespace-name>
kubectl create namespace moviemania


# update namespace context
kubectl config set-context --current --namespace <namespace-name>

# enable DNS resolution on k8s cluster
kubectl get pods -n kube-system -o wide | grep -i core

output:=
ubuntu@ip-172-31-58-75:~$ kubectl get pods -n kube-system -o wide | grep -i core
coredns-76f75df574-7h54m                   1/1     Running   0          49m   10.85.0.3       ip-172-31-58-75    <none>           <none>
coredns-76f75df574-s5gbv                   1/1     Running   0          49m   10.85.0.4       ip-172-31-58-75    <none>           <none>

this is not including the worker nod for that we have to edit the kube-system file and make replica to 4 

# edit the coredns deploy in worker node 
kubectl edit deploy coredns -n kube-system -o yaml
// make replica count from 2 to 4 


## setup for mongo Atlas Oprator for k8s cluster.
## Atlas oprator installation on k8s cluster ;
Organization ID = 64678938bfaf6231d82d78ef 

## this will get from Organization Access manager tab;
Public Api Key = vnxmdrwu
Private Api Key = df7b0222-5ef2-4509-86a4-79694cea620c

## Export the keys
export ORG_ID=64678938bfaf6231d82d78ef
export ATLAS_PUBLIC_KEY=vnxmdrwu
export ATLAS_PRIVATE_KEY=df7b0222-5ef2-4509-86a4-79694cea620c

## apply on master 
kubectl create secret generic mongodb-atlas-operator-api-key \
    --from-literal="orgId=$ORG_ID" \
    --from-literal="publicApiKey=$ATLAS_PUBLIC_KEY" \
    --from-literal="privateApiKey=$ATLAS_PRIVATE_KEY" \
    -n mongodb-atlas-system

## label this secret, which helps the Atlas operator in finding the credentials.
kubectl label secret mongodb-atlas-operator-api-key atlas.mongodb.com/type=credentials -n mongodb-atlas-system

## label the secret
kubectl create secret generic atlaspassword --from-literal="password=mernk8s"
kubectl label secret atlaspassword atlas.mongodb.com/type=credentials
