'use strict';

const Homey = require('homey');
const Log = require('homey-log').Log;

class DresdenZigBeeApp extends Homey.App {
	onInit() {
		this.log('init DresdenZigBeeApp');
	}
}

module.exports = DresdenZigBeeApp;
