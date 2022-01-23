### [HelloEx Docs](https://docs.hollaex.com/)
1. Followed [install](https://docs.hollaex.com/get-started/installation) and [setup](https://docs.hollaex.com/get-started/setup) steps for local run. Install results in two db, 3 server, 1 web, and 1 nginx related containers. HolloEx cli only requires a few commands to get to this point. Under the hood is leveraging docker-compose for local setup.
![Local Containers](./localcontainers.png)
2. Used aws eks to set our clusters kubeconfig locally. 
```
aws eks update-kubeconfig  --region us-west-2 --name pisces-eksCluster-86e6080
```
3.  Ran setup command for kubernetes. HollaEx wants an install specific image pushed to repo. The CLI takes docker credentials and creates a secret, but initial install results in auth issues in pulling the images in cluster.
```
hollaex server --setup --kube
```
4. 