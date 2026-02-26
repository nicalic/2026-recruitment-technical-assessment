# Docker & Kubernetes Assessment Report

> [!TIP]
> Use this document to explain your design choices, optimisations and any challenges you faced.

## Dockerfile

- Multi-stage build (cleaner, separates responsibilities)
- Base image is lean and secure
- Combine multiple commands to reduce layers
- Use the non-root user `node` for security
- Reduce build time by utilising bind mounts and cache mounts

Challenges face:

- Change permissions of working directory `/usr/src/app` so the non-root user can have access.
- Change default host config in server implementation. Server was only listening on loopback (127.0.0.1), so outside traffic cannot reach it.

## Kubernetes

Standard deployment on port 4533, with LoadBalancer service. No persistent volumes implemented.

A challenge I faced was when using the default service ClusterIP, I couldn't access the service from localhost as the IP address only belonged to the cluster. 

To fix this issue, I switched the service type to LoadBalancer, which allowed my to use `minikube tunnel` to create a tunnel that allows outside traffic to reach the cluster.