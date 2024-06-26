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
