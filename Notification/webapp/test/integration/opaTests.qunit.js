/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AvelonNamespace/AvelonNotification/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});