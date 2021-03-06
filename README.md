# sonos-display

Display your Sonos' currently playing info on your TV, or any other device with a web browser.

## Prerequisites
* NodeJS
* A Sonos speaker

## Installation
Run the following commands:
```
$ npm install
$ npm build
```

Then locate your Sonos' IP-address (auto discovery feature is on the wishlist), and start the server using:
```
$ SONOS_HOST=[sonos-ip-address] node server/index.js
```

Go to http://your-ip:8000/ to view.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Credits

- [Richard Tuin](https://github.com/rtuin)

This project was generated using the [Yeoman Angular generator](https://github.com/yeoman/generator-angular) v0.11.1.

## License

The MIT License (MIT). Please see the [license file](LICENSE) for more information.
