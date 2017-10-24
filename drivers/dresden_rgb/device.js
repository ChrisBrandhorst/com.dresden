'use strict';

const Homey = require('homey');
const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class DresdenRGB extends ZigBeeLightDevice {
	onMeshInit() {

		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();

	}

}

module.exports = DresdenRGB;
