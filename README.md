# Image gallery

## Description

This repository is for a simple responsive image gallery design developed using HTML / SCSS / Javascript with the following features.

- clipped image thumbnails with relevant portions of the image visible ( blue sky, green grass and rising sun)
- overlay effect on thumbnails to instruct the user that the thumbnail is clickable.
- Modal containing the whole image. The modal can be closed by clicking on the close icon on top right of the modal or clicking on the backdrop.
- simple client side routing. The page checks for the search query in the url and open the image modal as required. This is to support browser functionality such as refresh, back and forward navigation.

- [Demo](#Demo)
- [Deployed app URL](#Deployed-app-URL)
- [build process](#build-process)
- [Installation Guide](#Installation-Guide)
- [Browser compatibility](#Browser-compatibility)

## Demo

<img src="demo.gif" style="width:70%"/>

## Deployed app URL

https://mohamedzakigithub.github.io/image-gallery

## build process

- The app is being served from a dist folder containing optimised code and was build with the help of webpack to achieve the following.

- Minified production ready JavaScript.
- Optimise images for faster loading.
- Compiling and loading scss/css files.
- HTML template building and injecting bundled script.

## Installation Guide

- Clone the repository.
- run npm i to install dev dependencies.

## Browser compatibility

- The app is Browser compatible with Chrome, Firefox and Edge browsers

- The version below uses SVG graphics and JavaScript syntax supported by IE11

  - Github repo: https://github.com/mohamedzakigithub/image-gallery-IE11

  - Deployed app URL: https://mohamedzakigithub.github.io/image-gallery-IE11/
