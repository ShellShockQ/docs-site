# Installing Zowe runtime Docker Image

Docker is a way to a pre-packaged set of software and configuration called an "Image" on a variety of platforms but in isolation from the other software running on that plaform by instead running inside of a "Container". Docker containers are the runtime environment, and Images are what they are crated from.

The majority of the Zowe server runtime is available in the form of a Docker Image, among other options.
To use this image, first you must have set up the Zowe server runtime on z/OS in order to have the z/OS portions of Zowe, z/OSMF, or both installed on the z/OS host of your choice. If you have not yet done so, please first follow the steps in [Docker Installation Roadmap](install-docker.md).

This guide assumes you are using Linux and have already downloaded Docker itself. If you have not yet done so, please review [System Requirements](systemrequirements.md).

## Installing via Docker Hub

Zowe's Docker Image is hosted on [Docker Hub](https://hub.docker.com), which is the default place from which you can use the Docker command line utility to download and update Docker Images. On Docker Hub, the Zowe server runtime image is named [ompzowe/zowe-v1-lts](https://hub.docker.com/r/ompzowe/zowe-v1-lts).

You can download a Docker Image by using the Docker command line utility `docker pull imagename`

Where _imagename_ is one of the following:

- The latest version for the platform you are running on, such as `ompzowe/zowe-v1-lts:amd64` for Linux
- A specific version by using it's version number, such as `ompzowe/zowe-v1.15.0:amd64` for Linux
- A specific version by referencing the verion's digest, such as `ompzowe/zowe-vt-lts@sha256:bdbc0617b02e16a452f6d4de50b8b13e56592e309b4c68f9ea52c82303ad57ec`

The latest digest can be seen on the [image's tags page](https://hub.docker.com/r/ompzowe/zowe-v1-lts/tags) but Zowe.org's download page will also show digest values for previous versions.

## Installing via other means

You can install a Docker Image that has been downloaded as a `.tar` archive from anywhere, such as Zowe.org. To install a Docker Image in this way, download it to the destination host and then run `docker image load -i path_to_tar`

## Confirming the installation

The `docker image` command lists the images a system currently has, which make them available for creating containers from.

Here is an example:

```
# docker image ls
REPOSITORY                         TAG                 IMAGE ID            CREATED             SIZE
ompzowe/zowe-v1-lts                amd64               1e52fadc2918        2 weeks ago         3.03GB
```

## Upgrading

Once installed, it is possible to upgrade an image by using `docker pull` with the same _imagename_ as before, or by using `docker image load` to load another image of the same type.
From newer Images newer Containers can be created. In Zowe, configuration can be persisted between containers. This and more is covered in [Configuring Docker Container](configuring-docker.md) documentation.

When upgrading, it is possible that the previous image may persist.
You may see the old image tagged as "<none>", as seen in the following example.

```
# docker image ls
REPOSITORY                         TAG                 IMAGE ID            CREATED             SIZE
rsqa/zowe-v1-lts                   amd64               fb6efc12adb1        13 seconds ago      2.43GB
<none>                             <none>              1e52fadc2918        2 weeks ago         3.03GB
```

If you see this and want to clean up the older images to preserve storage space, you can run the command `docker image rm IMAGE_ID` to remove an image, where IMAGE_ID is the code seen from the `ls` command.
