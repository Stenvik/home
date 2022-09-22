
# Install Raspberry Pi OS

Use the raspberry pi imager to flash the device with Raspberry Pi Lite 64 bit

Remember to set the network name and enable ssh (and set ssh password)

When the Raspberry Pi has booted:

Find the IP-address by using `ping <network name>.local`, eg. `ping rpi0.local`

Somehow generate an ssh key if you do not already have one

Copy the ssh key to the device with `ssh-copy-id <username>@<network name>`, eg. `ssh-copy-id pi@rpi0`

Enable container features by adding `cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory` to `/boot/cmdline.txt`

Set fixed IP in `/etc/dhcpcd.conf`

Switch to legacy iptables on all nodes

```
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```


# Installing k3s

## Master node
`k3sup install --ip $SERVER_IP --user pi`

### Without built in load balancer (neccesary if we want to use metallb)
`k3sup install --ip $SERVER_IP --user pi --k3s-extra-args '--disable servicelb'`

## Worker node(s)
`k3sup join --ip $IP --server-ip $SERVER_IP --user pi`

## Metallb

Install with

`helm install metallb metallb/metallb --namespace metallb-system --version 0.12.1 -f metallb/values.yaml`

## Pihole



# Longhorn

## Prerequisites 

`sudo apt-get install -y open-iscsi`

## Helm install

`helm install longhorn longhorn/longhorn --namespace longhorn-system --create-namespace`


# Guides used

* https://github.com/alexellis/k3sup
* https://michael-tissen.medium.com/installing-longhorn-on-a-on-raspberry-pi-kubernetes-cluster-5933c85c7d1e