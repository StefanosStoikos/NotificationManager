jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"Avelon/manualnotification/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Avelon/manualnotification/test/integration/pages/App",
	"Avelon/manualnotification/test/integration/pages/Browser",
	"Avelon/manualnotification/test/integration/pages/Master",
	"Avelon/manualnotification/test/integration/pages/Detail",
	"Avelon/manualnotification/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Avelon.manualnotification.view."
	});

	sap.ui.require([
		"Avelon/manualnotification/test/integration/NavigationJourneyPhone",
		"Avelon/manualnotification/test/integration/NotFoundJourneyPhone",
		"Avelon/manualnotification/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});