
# Install Raspberry Pi OS

Use the raspberry pi imager to flash the device with Raspberry Pi Lite 64 bit

Remember to set the network name and enable ssh (and set ssh password)

When the Raspberry Pi has booted:

Find the IP-address by using `ping <network name>.local`, eg. `ping rpi0.local`

Somehow generate an ssh key if you do not already have one

Copy the ssh key to the device with `ssh-copy-id <username>@<network name>`, eg. `ssh-copy-id pi@rpi0`

Enable container features by adding `cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory` to `/boot/cmdline.txt`

# Installing k3s

## Master node
`k3sup install --ip $SERVER_IP --user pi`

## Worker node(s)
`k3sup join --ip $IP --server-ip $SERVER_IP --user pi`


# Longhorn

`helm install longhorn longhorn/longhorn --namespace longhorn-system --create-namespace`


# Guides used

* https://github.com/alexellis/k3sup
* https://michael-tissen.medium.com/installing-longhorn-on-a-on-raspberry-pi-kubernetes-cluster-5933c85c7d1e