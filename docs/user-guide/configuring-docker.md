# Configuring Zowe runtime Docker Image

Configuring the Zowe runtime Docker Image has similarities to [configuring runtime instance on z/OS](configure-instance-directory.md), except in a few key ways:

- Ports are managed between Docker and the host rather than in instance.env
- Plugins can be added from the host by using a Docker mount
- External certificates can be used from a Docker mount

## Working with Docker mounts

Docker has a feature called a mount by which you can share a folder from the host system into one or more containers.
Zowe can use this in order to share important settings and content such as certificates and plugins between multiple instances of Zowe, and mounts also keep these objects intact between Zowe versions during an upgrade.

## Quick start for the Zowe runtime in Docker

You can start a Docker container from the Linux command line by using the `ompzowe/zowe-v1-lts:amd64` image and some common settings:

```
export DISCOVERY_PORT=7553
export GATEWAY_PORT=7554
export APP_SERVER_PORT=8544

#add non-default settings with --env, using same properties as seen in instance.env
#   --env ZOWE_ZLUX_TELNET_PORT=23
docker run -it \
    -h your_hostname \
    --env ZOWE_IP_ADDRESS=your.external.ip \
    --env LAUNCH_COMPONENT_GROUPS=DESKTOP,GATEWAY \
    --env ZOSMF_HOST=your.zosmainframe.com \
    --env ZWED_agent_host=your.zosmainframe.com \
    --env ZOSMF_PORT=11443 \
    --env ZWED_agent_http_port=8542 \
    --expose ${DISCOVERY_PORT} \
    --expose ${GATEWAY_PORT} \
    --expose ${APP_SERVER_PORT} \
    -p ${DISCOVERY_PORT}:${DISCOVERY_PORT} \
    -p ${GATEWAY_PORT}:${GATEWAY_PORT} \
    -p ${APP_SERVER_PORT}:${APP_SERVER_PORT} \
    --env GATEWAY_PORT=${GATEWAY_PORT} \
    --env DISCOVERY_PORT=${DISCOVERY_PORT} \
    --env ZOWE_ZLUX_SERVER_HTTPS_PORT=${APP_SERVER_PORT} \
    --mount type=bind,source=/myuser/mycerts,target=/root/zowe/certs \
    ompzowe/zowe-v1-lts:amd64
```

Where,

- The `export` ports are the ports you can access Zowe
- _your_hostname_ is the identify of the Linux host
- `ZOWE_IP_ADDRESS` is the external IP address of the Linux host
- `ZOSMF_HOST` and `ZWED_agent_host` are the address of the z/OS host which runs z/OSMF and/or ZSS
- `LAUNCH_COMPONENT_GROUPS` controls which components of Zowe will run, identical in behavior to the z/OS runtime
- `mount` commands are used to mount content such as certificates and plugins

After startup, you can verify that Zowe is running via opening the browser to:
 - API Mediation Layer: https://your_hostname:7554
 - App Framework: https://your_hostname:8544



## Zowe container arguments
There are various ways to configure a Zowe docker container aside from the example above.

- `-h <hostname>` - hostname of docker host (hostname of your laptop eg: myhost.acme.net)
- `ZOWE_IP_ADDRESS=<ip>` - The IP which the servers should bind to. Should not be a loopback address.
- `ZOSMF_HOST=<zosmf_hostname>` - z/OSMF hostname (eg mf.acme.net)
- `ZOSMF_PORT=<zosmf_port>` - z/OSMF port eg (1443)
- `ZWED_agent_host=<zss_hostname>` - ZSS host (eg mf.acme.net)
- `ZWED_agent_http_port=<zss_port>` - ZSS port z/OSMF port eg (60012)
- `source=<folder with certs>,target=<target dir within image>` - local folder containing external certs, and their target dir in the image (optional)
- `EXTERNAL_CERTIFICATE=<keystore.p12>` - location of p12 keystore. (optional)
- `EXTERNAL_CERTIFICATE_ALIAS=<alias>` - valid alias within keystore. (optional)
- `EXTERNAL_CERTIFICATE_AUTHORITIES=<CA.cer>` - location of x509 Certificate Authority (optional)
- `LAUNCH_COMPONENT_GROUPS=<DESKTOP or GATEWAY>` - what do you want to start
  - DESKTOP - only desktop
  - GATEWAY - only GATEWAY + explorers
  - GATEWAY,DESKTOP - both 


**Note: External certificates are optional and should not be included in the start command if undesired.**

## Using Zowe's Docker with Zowe products & plugins
To use Zowe-based software with the docker container, you must make that software visible to the Zowe that is within Docker by mapping a folder on your host machine to a folder visible within the docker container.
This concept is known as Docker volumes. After sharing a volume, standard Zowe utilities for installing & using plugins will apply.

To share a host directory *HOST_DIR* into the docker container destination directory *CONTAINER_DIR* with read-write access, simply add this line to your docker run command: `-v [HOST_DIR]:[CONTAINER_DIR]:rw`
You can have multiple such volumes, but for Zowe Application Framework plugins, the value of *CONTAINER_DIR* should be `/root/zowe/apps`

An example is to add Apps to the Zowe Docker by sharing the host directory `~/apps`, which full of Application Framework plugins.

```
export DISCOVERY_PORT=7553
export GATEWAY_PORT=7554
export APP_SERVER_PORT=8544

docker run -it \
    -h your_hostname \
    --env ZOWE_IP_ADDRESS=your.external.ip \
    --env LAUNCH_COMPONENT_GROUPS=DESKTOP,GATEWAY \
    --env ZOSMF_HOST=your.zosmainframe.com \
    --env ZWED_agent_host=your.zosmainframe.com \
    --env ZOSMF_PORT=11443 \
    --env ZWED_agent_http_port=8542 \
    --expose ${DISCOVERY_PORT} \
    --expose ${GATEWAY_PORT} \
    --expose ${APP_SERVER_PORT} \
    -p ${DISCOVERY_PORT}:${DISCOVERY_PORT} \
    -p ${GATEWAY_PORT}:${GATEWAY_PORT} \
    -p ${APP_SERVER_PORT}:${APP_SERVER_PORT} \
    --env GATEWAY_PORT=${GATEWAY_PORT} \
    --env DISCOVERY_PORT=${DISCOVERY_PORT} \
    --env ZOWE_ZLUX_SERVER_HTTPS_PORT=${APP_SERVER_PORT} \
    -v ~/apps:/root/zowe/apps:rw \
    ompzowe/zowe-v1-lts:amd64 $@
```

By default, external plugins in the ```/root/zowe/apps``` folder will be installed at start up.

To install other plugins to the app server simply ssh into the docker container to run the install-app.sh script, like so:
```docker exec -it [CONTAINER_ID] /root/zowe/instance/bin/install-app.sh [APPLICATION_DIR]```
If the script returns with rc=0, then the plugin install succeded and the plugin can be used by refreshing the app server via either clicking "Refresh Applications" in the launchbar menu of the Zowe Desktop, or by doing an HTTP GET call to /plugins?refresh=true to the app server.


## Using an external instance of Zowe
If you have an instance of Zowe on your host machine that you want to use you can mount a shared volume and set the location of the shared volume as an environmental variable called EXTERNAL_INSTANCE. This can by done by adding these two flags to your docker start script.

```
-v ~/my_instance:/root/zowe/external_instance:rw \
--env EXTERNAL_INSTANCE=/root/zowe/external_instance \

## Zowe's docker mount locations

When attempting to share certificates, plugins, or instance configuration to a Zowe container, the mount desination is fixed and therefore the following must be used:

- Certificates: The Zowe keystore destination must be `/root/zowe/certs`
- App framework plugins: The folder that contains all plugins must be `/root/zowe/apps`
- Instance configuration: The folder that contains the contents of a Zowe `$INSTANCE_DIR` must be `/root/zowe/external_instance`