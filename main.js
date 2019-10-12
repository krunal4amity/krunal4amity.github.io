(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/img/cloudkast-logo.jpg\"  height=\"50\" width=\"250\" alt=\"logo\">\n\n<h4 mat-line>\n  Authoring AWS CloudFormation templates is a dreadful task (and so is writing any long piece of complex\n  json or yaml for that matter).   Parsing JSON-formatted text files to see the resources that are in your template and their relationships can be difficult.\n  When you author template resources in a text editor, you must manually edit JSON or YAML, which can be tedious and error-prone.\nThis has led to emergence of many enterprise and community driven tools in the market over the last few years. These tools can be broadly\ndivided into the following categories:\n<mat-list role=\"list\">\n    <li>IDE plugins e.g. Jetbrains plugin for CloudFormation etc.</li>\n    <li>GUI based tools e.g. AWS CloudFormation designer</li>\n    <li>DSLs e.g. GoFormation, cfndsl, SparkleFormation, Troposphere etc.</li>\n  </mat-list>\n  All these existing tools, however useful, end up pushing up the entry barrier even higher and thus \n  fall short in one criterion: <i>Quick Adaptability.</i>\n</h4>\n\n<h4 mat-line >\n  Ever wished if you could generate AWS CloudFormation templates just the way you generate\n      AWS IAM policies using AWS policy generator? Well, now you can with CloudKast. CloudKast is an online AWS cloudformation template generator.  \n      CloudKast is well suited for busy developers, junior administrators and cloud architects alike.\n   The following are the features\n  provided by CloudKast:\n  <mat-list role=\"list\">\n    <li>An intuitive form-based UI interface to generate CloudFormation templates online.</li>\n    <li>Tooltips next to each field providing short description along with valid values it can hold wherever applicable.</li>\n    <li>Resource section provides colored info icons next to each property indicating whether the property/attribute is required, conditional or optional.</li>\n    <li>Form validation for each section to ensure that 'required' fields are filled in.</li>\n    <li>An 'intrinsic function' widget to generate functions.</li>\n    <li>Autopopulating certain function fields with valid values e.g. Fn::GetAtt and Ref get auto-populated with respective parameters, resources or resources' attributes.</li>\n    <li>A 'Property Dealer' widget next to each custom property of a resource i.e. properties that do not hold primitive values. </li>\n    <li>Import functionality to import existing templates for further modification. </li>\n    <li>A copy button next to each section, to be mainly used while modifying an imported template.</li>\n    <li>'Download' option to download the template to local comupter.</li>\n    <li>Upload option to upload the template securely to an AWS s3 bucket.</li>\n    <li>Validate the template securely by providing AWS credentials of your AWS account. </li>\n    <li>A sleek, simple and easy-to-use UI interface</li>\n    <li>Provides 'How-To' videos to further reduce the little learning curve required. </li>\n    <li>Runs fully within the browser memory with no backend. </li>\n    </mat-list>\n</h4>\n\n<h4 mat-line>\n    CloudKast is still in <u>development preview</u>  and periodically updated with more AWS resources. If you come across any issues/bugs or want to request\n    an enhancement, we would love to hear from you. Send it to email ID provided in the upper right corner. \n</h4>\n\n<h4 mat-line>\n  The following features are <b>in progress</b>:\n  <mat-list role=\"list\" >\n    <li>Serveless Application Model templates</li>\n    <li>Yaml support (currently under testing) </li>\n    <li>Remaining AWS Resources</li>\n    <li>Metadata section</li>\n    <li>Transform section. Currently supported at template level and snippet level. Snippet level support is limited to resource properties only.  </li>\n    <li>comprehensive tutorial videos</li>\n  </mat-list>\n</h4>\n\n\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" >\n  <mat-toolbar-row>\n    <span>CloudKast</span>\n    <span class=\"example-spacer\"></span>\n    <a style=\"color:white\"  href=\"mailto:cloudkasting@gmail.com\"> <mat-icon>email</mat-icon> </a>  \n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-tab-group color=\"primary\" animationDuration=\"0ms\">\n  <mat-tab label=\"Create\"> \n      <mat-tab-group color=\"accent\" animationDuration=\"0ms\" >\n          <mat-tab label=\"Version & Desc\"> \n            <app-metadata></app-metadata>\n          </mat-tab>\n          <mat-tab label=\"Parameters\">\n            <app-parameters-tab></app-parameters-tab>\n          </mat-tab>\n          <mat-tab label=\"Mappings\"> \n            <app-mappings-tab></app-mappings-tab>\n          </mat-tab>\n          <mat-tab label=\"Conditions\"> \n            <app-conditions-tab></app-conditions-tab>\n          </mat-tab>\n          <mat-tab label=\"Transform & Metadata\"> \n            <mat-tab-group color=\"primary\" animationDuration=\"0ms\" >  \n              <mat-tab label=\"Transform\">\n                <app-transform></app-transform>\n              </mat-tab>\n              <mat-tab label=\"Metadata\">\n                <app-ec2-init></app-ec2-init>\n              </mat-tab>\n            </mat-tab-group>\n          </mat-tab>\n          <mat-tab label=\"Resources\"> \n              <app-resource-view></app-resource-view>\n          </mat-tab>\n          <mat-tab label=\"Outputs\"> \n              <app-outputs-tab></app-outputs-tab>\n          </mat-tab>\n          <!-- <mat-tab label=\"AWS::Cloudformation::Init\" >\n            <app-ec2-init></app-ec2-init>\n          </mat-tab> -->\n      </mat-tab-group>\n  </mat-tab>\n  <!-- <mat-tab label=\"Property Dealer\">\n    <app-object-help></app-object-help>\n  </mat-tab> -->\n  <mat-tab label=\"Result\"> \n    <app-result></app-result>\n  </mat-tab>\n  <mat-tab label=\"Import\">\n    <app-import-template></app-import-template>\n  </mat-tab>\n  <mat-tab label=\"About\">\n    <app-about-page></app-about-page>\n  </mat-tab>\n  <mat-tab label=\"How to\">\n    <app-how-to></app-how-to>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CloudKast';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _resource_view_resource_view_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./resource-view/resource-view.component */ "./src/app/resource-view/resource-view.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./metadata/metadata.component */ "./src/app/metadata/metadata.component.ts");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _parameters_parameters_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./parameters/parameters.component */ "./src/app/parameters/parameters.component.ts");
/* harmony import */ var _parameters_tab_parameters_tab_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./parameters-tab/parameters-tab.component */ "./src/app/parameters-tab/parameters-tab.component.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./useful-utils.service */ "./src/app/useful-utils.service.ts");
/* harmony import */ var _intrinsic_functions_intrinsic_functions_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./intrinsic-functions/intrinsic-functions.component */ "./src/app/intrinsic-functions/intrinsic-functions.component.ts");
/* harmony import */ var _keys_pipe_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./keys-pipe.pipe */ "./src/app/keys-pipe.pipe.ts");
/* harmony import */ var _object_help_object_help_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./object-help/object-help.component */ "./src/app/object-help/object-help.component.ts");
/* harmony import */ var _resource_data_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./resource-data.service */ "./src/app/resource-data.service.ts");
/* harmony import */ var _mappings_mappings_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./mappings/mappings.component */ "./src/app/mappings/mappings.component.ts");
/* harmony import */ var _conditions_conditions_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./conditions/conditions.component */ "./src/app/conditions/conditions.component.ts");
/* harmony import */ var _outputs_outputs_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./outputs/outputs.component */ "./src/app/outputs/outputs.component.ts");
/* harmony import */ var _transform_transform_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./transform/transform.component */ "./src/app/transform/transform.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _outputs_tab_outputs_tab_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./outputs-tab/outputs-tab.component */ "./src/app/outputs-tab/outputs-tab.component.ts");
/* harmony import */ var _conditions_tab_conditions_tab_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./conditions-tab/conditions-tab.component */ "./src/app/conditions-tab/conditions-tab.component.ts");
/* harmony import */ var _mappings_tab_mappings_tab_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./mappings-tab/mappings-tab.component */ "./src/app/mappings-tab/mappings-tab.component.ts");
/* harmony import */ var _common_resource_common_resource_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./common-resource/common-resource.component */ "./src/app/common-resource/common-resource.component.ts");
/* harmony import */ var _property_dialog_tab_property_dialog_tab_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./property-dialog-tab/property-dialog-tab.component */ "./src/app/property-dialog-tab/property-dialog-tab.component.ts");
/* harmony import */ var _property_dialog_property_dialog_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./property-dialog/property-dialog.component */ "./src/app/property-dialog/property-dialog.component.ts");
/* harmony import */ var _functions_tab_functions_tab_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./functions-tab/functions-tab.component */ "./src/app/functions-tab/functions-tab.component.ts");
/* harmony import */ var _ec2_init_ec2_init_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./ec2-init/ec2-init.component */ "./src/app/ec2-init/ec2-init.component.ts");
/* harmony import */ var _ec2_init_config_tab_ec2_init_config_tab_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./ec2-init-config-tab/ec2-init-config-tab.component */ "./src/app/ec2-init-config-tab/ec2-init-config-tab.component.ts");
/* harmony import */ var _import_template_import_template_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./import-template/import-template.component */ "./src/app/import-template/import-template.component.ts");
/* harmony import */ var _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./how-to/how-to.component */ "./src/app/how-to/how-to.component.ts");







//Angular Material Components
































//Material import end
//import { EbsVolumeComponent } from './ec2/ebs-volume/ebs-volume.component';
//import { SectionViewComponent } from './section-view/section-view.component';









//import { EC2EIPComponent } from './ec2/ec2-eip/ec2-eip.component';
//import { EC2InstanceComponent } from './ec2/ec2-instance/ec2-instance.component';


//import { EC2SecurityGroupComponent } from './ec2/ec2-security-group/ec2-security-group.component';








//import { Ec2CustomerGatewayComponent } from './ec2/ec2-customer-gateway/ec2-customer-gateway.component';
//import { Ec2DHCPOptionsComponent } from './ec2/ec2-dhcpoptions/ec2-dhcpoptions.component';
//import { Ec2EgressOnlyInternetGatewayComponent } from './ec2/ec2-egress-only-internet-gateway/ec2-egress-only-internet-gateway.component';
//import { Ec2EIPAssociationComponent } from './ec2/ec2-eipassociation/ec2-eipassociation.component';
//import { Ec2FlowLogComponent } from './ec2/ec2-flow-log/ec2-flow-log.component';
//import { Ec2HostComponent } from './ec2/ec2-host/ec2-host.component';
//import { Ec2InternetGatewayComponent } from './ec2/ec2-internet-gateway/ec2-internet-gateway.component';
//import { Ec2NatGatewayComponent } from './ec2/ec2-nat-gateway/ec2-nat-gateway.component';
//import { Ec2NetworkAclComponent } from './ec2/ec2-network-acl/ec2-network-acl.component';
//import { Ec2NetworkInterfaceAttachmentComponent } from './ec2/ec2-network-interface-attachment/ec2-network-interface-attachment.component';
//import { Ec2NetworkInterfacePermissionComponent } from './ec2/ec2-network-interface-permission/ec2-network-interface-permission.component';
//import { Ec2PlacementGroupComponent } from './ec2/ec2-placement-group/ec2-placement-group.component';
//import { Ec2RouteComponent } from './ec2/ec2-route/ec2-route.component';
//import { Ec2RouteTableComponent } from './ec2/ec2-route-table/ec2-route-table.component';
//import { Ec2SecurityGroupEgressComponent } from './ec2/ec2-security-group-egress/ec2-security-group-egress.component';
//import { Ec2SecurityGroupIngressComponent } from './ec2/ec2-security-group-ingress/ec2-security-group-ingress.component';
//import { Ec2SubnetComponent } from './ec2/ec2-subnet/ec2-subnet.component';
//import { Ec2SubnetCidrBlockComponent } from './ec2/ec2-subnet-cidr-block/ec2-subnet-cidr-block.component';
//import { Ec2SubnetNetworkAclAssociationComponent } from './ec2/ec2-subnet-network-acl-association/ec2-subnet-network-acl-association.component';
//import { Ec2SubnetRouteTableAssociationComponent } from './ec2/ec2-subnet-route-table-association/ec2-subnet-route-table-association.component';
//import { Ec2TransitGatewayComponent } from './ec2/ec2-transit-gateway/ec2-transit-gateway.component';
//import { Ec2TransitGatewayAttachmentComponent } from './ec2/ec2-transit-gateway-attachment/ec2-transit-gateway-attachment.component';
//import { Ec2TransitGatewayRouteComponent } from './ec2/ec2-transit-gateway-route/ec2-transit-gateway-route.component';
//import { Ec2TransitGatewayRouteTableComponent } from './ec2/ec2-transit-gateway-route-table/ec2-transit-gateway-route-table.component';
//import { Ec2TransitGatewayRouteTableAssociationComponent } from './ec2/ec2-transit-gateway-route-table-association/ec2-transit-gateway-route-table-association.component';
//import { Ec2TransitGatewayRouteTablePropagationComponent } from './ec2/ec2-transit-gateway-route-table-propagation/ec2-transit-gateway-route-table-propagation.component';
//import { Ec2VolumeAttachmentComponent } from './ec2/ec2-volume-attachment/ec2-volume-attachment.component';
//import { Ec2VPCComponent } from './ec2/ec2-vpc/ec2-vpc.component';
//import { Ec2VPCCidrBlockComponent } from './ec2/ec2-vpccidr-block/ec2-vpccidr-block.component';
//import { Ec2VPCDHCPOptionsAssociationComponent } from './ec2/ec2-vpcdhcpoptions-association/ec2-vpcdhcpoptions-association.component';
//import { Ec2VPCEndpointComponent } from './ec2/ec2-vpcendpoint/ec2-vpcendpoint.component';
//import { Ec2VPCEndpointConnectionNotificationComponent } from './ec2/ec2-vpcendpoint-connection-notification/ec2-vpcendpoint-connection-notification.component';
//import { Ec2VPCEndpointServiceComponent } from './ec2/ec2-vpcendpoint-service/ec2-vpcendpoint-service.component';
//import { Ec2VPCEndpointServicePermissionsComponent } from './ec2/ec2-vpcendpoint-service-permissions/ec2-vpcendpoint-service-permissions.component';
//import { Ec2VPCGatewayAttachmentComponent } from './ec2/ec2-vpcgateway-attachment/ec2-vpcgateway-attachment.component';
//import { Ec2VPCPeeringConnectionComponent } from './ec2/ec2-vpcpeering-connection/ec2-vpcpeering-connection.component';
//import { Ec2VPNConnectionRouteComponent } from './ec2/ec2-vpnconnection-route/ec2-vpnconnection-route.component';
//import { Ec2VPNGatewayComponent } from './ec2/ec2-vpngateway/ec2-vpngateway.component';
//import { Ec2VPNGatewayRoutePropagationComponent } from './ec2/ec2-vpngateway-route-propagation/ec2-vpngateway-route-propagation.component';
//import { Ec2FleetComponent } from './ec2/ec2-fleet/ec2-fleet.component';
//import { Ec2LaunchTemplateComponent } from './ec2/ec2-launch-template/ec2-launch-template.component';
//import { Ec2NetworkAclEntryComponent } from './ec2/ec2-network-acl-entry/ec2-network-acl-entry.component';
//import { Ec2NetworkInterfaceComponent } from './ec2/ec2-network-interface/ec2-network-interface.component';
//import { Ec2SpotFleetComponent } from './ec2/ec2-spot-fleet/ec2-spot-fleet.component';
//import { Ec2VpnConnectionComponent } from './ec2/ec2-vpn-connection/ec2-vpn-connection.component';





//import { Ec2initconfigComponent } from './ec2initconfig/ec2initconfig.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                //EbsVolumeComponent,
                //SectionViewComponent,
                _resource_view_resource_view_component__WEBPACK_IMPORTED_MODULE_38__["ResourceViewComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_39__["ResultComponent"],
                _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_40__["MetadataComponent"],
                _parameters_parameters_component__WEBPACK_IMPORTED_MODULE_42__["ParametersComponent"],
                _parameters_tab_parameters_tab_component__WEBPACK_IMPORTED_MODULE_43__["ParametersTabComponent"],
                _intrinsic_functions_intrinsic_functions_component__WEBPACK_IMPORTED_MODULE_45__["IntrinsicFunctionsComponent"],
                _keys_pipe_pipe__WEBPACK_IMPORTED_MODULE_46__["KeysPipePipe"],
                //EC2EIPComponent,
                //EC2InstanceComponent,
                _object_help_object_help_component__WEBPACK_IMPORTED_MODULE_47__["ObjectHelpComponent"],
                //EC2SecurityGroupComponent,
                _mappings_mappings_component__WEBPACK_IMPORTED_MODULE_49__["MappingsComponent"],
                _conditions_conditions_component__WEBPACK_IMPORTED_MODULE_50__["ConditionsComponent"],
                _outputs_outputs_component__WEBPACK_IMPORTED_MODULE_51__["OutputsComponent"],
                _transform_transform_component__WEBPACK_IMPORTED_MODULE_52__["TransformComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_53__["AboutPageComponent"],
                _outputs_tab_outputs_tab_component__WEBPACK_IMPORTED_MODULE_54__["OutputsTabComponent"],
                _conditions_tab_conditions_tab_component__WEBPACK_IMPORTED_MODULE_55__["ConditionsTabComponent"],
                _mappings_tab_mappings_tab_component__WEBPACK_IMPORTED_MODULE_56__["MappingsTabComponent"],
                //Ec2CustomerGatewayComponent,
                //Ec2DHCPOptionsComponent,
                //Ec2EgressOnlyInternetGatewayComponent,
                //Ec2EIPAssociationComponent,
                //Ec2FlowLogComponent,
                //Ec2HostComponent,
                //Ec2InternetGatewayComponent,
                //Ec2NatGatewayComponent,
                //Ec2NetworkAclComponent,
                //Ec2NetworkInterfaceAttachmentComponent,
                //Ec2NetworkInterfacePermissionComponent,
                //Ec2PlacementGroupComponent,
                //Ec2RouteComponent,
                //Ec2RouteTableComponent,
                //Ec2SecurityGroupEgressComponent,
                //Ec2SecurityGroupIngressComponent,
                //Ec2SubnetComponent,
                //Ec2SubnetCidrBlockComponent,
                //Ec2SubnetNetworkAclAssociationComponent,
                //Ec2SubnetRouteTableAssociationComponent,
                //Ec2TransitGatewayComponent,
                //Ec2TransitGatewayAttachmentComponent,
                //Ec2TransitGatewayRouteComponent,
                //Ec2TransitGatewayRouteTableComponent,
                //Ec2TransitGatewayRouteTableAssociationComponent,
                //Ec2TransitGatewayRouteTablePropagationComponent,
                //Ec2VolumeAttachmentComponent,
                //Ec2VPCComponent,
                //Ec2VPCCidrBlockComponent,
                //Ec2VPCDHCPOptionsAssociationComponent,
                //Ec2VPCEndpointComponent,
                //Ec2VPCEndpointConnectionNotificationComponent,
                //Ec2VPCEndpointServiceComponent,
                //Ec2VPCEndpointServicePermissionsComponent,
                //Ec2VPCGatewayAttachmentComponent,
                //Ec2VPCPeeringConnectionComponent,
                //Ec2VPNConnectionRouteComponent,
                //Ec2VPNGatewayComponent,
                //Ec2VPNGatewayRoutePropagationComponent,
                //Ec2FleetComponent,
                //Ec2LaunchTemplateComponent,
                //Ec2NetworkAclEntryComponent,
                //Ec2NetworkInterfaceComponent,
                //Ec2SpotFleetComponent,
                //Ec2VpnConnectionComponent,
                _common_resource_common_resource_component__WEBPACK_IMPORTED_MODULE_57__["CommonResourceComponent"],
                _property_dialog_tab_property_dialog_tab_component__WEBPACK_IMPORTED_MODULE_58__["PropertyDialogTabComponent"],
                _property_dialog_property_dialog_component__WEBPACK_IMPORTED_MODULE_59__["PropertyDialogComponent"],
                _functions_tab_functions_tab_component__WEBPACK_IMPORTED_MODULE_60__["FunctionsTabComponent"],
                _ec2_init_ec2_init_component__WEBPACK_IMPORTED_MODULE_61__["EC2InitComponent"],
                //Ec2initconfigComponent,
                _ec2_init_config_tab_ec2_init_config_tab_component__WEBPACK_IMPORTED_MODULE_62__["Ec2InitConfigTabComponent"],
                _import_template_import_template_component__WEBPACK_IMPORTED_MODULE_63__["ImportTemplateComponent"],
                _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_64__["HowToComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                //Material start
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__["MatPaginatorModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_37__["MatBadgeModule"]
                //Material End
            ],
            providers: [_json_result_service__WEBPACK_IMPORTED_MODULE_41__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_44__["UsefulUtilsService"], _resource_data_service__WEBPACK_IMPORTED_MODULE_48__["ResourceDataService"],
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MAT_DIALOG_DATA"], useValue: "AWS::EC2::Instance" }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_property_dialog_tab_property_dialog_tab_component__WEBPACK_IMPORTED_MODULE_58__["PropertyDialogTabComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/aws-resources.service.ts":
/*!******************************************!*\
  !*** ./src/app/aws-resources.service.ts ***!
  \******************************************/
/*! exports provided: AwsResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsResourcesService", function() { return AwsResourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AwsResourcesService = /** @class */ (function () {
    function AwsResourcesService() {
        this.ec2_volume = {
            "Type": "AWS::EC2::Volume",
            "Properties": {
                "AutoEnableIO": "Boolean. Indicates whether the volume is auto-enabled for I/O operations. By default, Amazon EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O.",
                "AvailabilityZone": "*String,Required: Yes",
                "Encrypted": "**Boolean,Required: Conditional. If you specify the KmsKeyId property, you must enable encryption. Indicates whether the volume is encrypted. You can attach encrypted Amazon EBS volumes only to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You can't create an encrypted volume from an unencrypted snapshot, or vice versa. If your AMI uses encrypted volumes, you can launch the AMI only on supported instance types.",
                "Iops": "**Number,Required: Conditional. Required when the volume type is io1; not used with other volume types. The number of I/O operations per second (IOPS) that the volume supports. For Provisioned IOPS SSD volumes, this represents the number of IOPS that are provisioned for the volume. For General Purpose SSD volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting. ",
                "KmsKeyId": "String,The Amazon Resource Name (ARN) of the AWS Key Management Service master key",
                "Size": "**Integer,Required: Conditional. If you don't specify a value for the SnapshotId property, you must specify this property. If you specify the SnapshotId property, specify a size that is equal to or greater than the size of the snapshot. If you don't specify a size, EC2 uses the size of the snapshot as the volume size.",
                "SnapshotId": "String",
                "VolumeType": "String,Valid Values: standard | io1 | gp2 | sc1 | st1,Required: No"
            }
        };
        this.ec2_eip = {
            "Type": "AWS::EC2::EIP",
            "Properties": {
                "Domain": "**Set to vpc to allocate the address to your Virtual Private Cloud (VPC). No other values are supported. Required when allocating an address to a VPC. Allowed Values: standard | vpc",
                "InstanceId": "The Instance ID of the Amazon EC2 instance that you want to associate with this Elastic IP address.",
                "PublicIpv4Pool": "Specifies the ID of an address pool that you own to let Amazon EC2 select an address from the address pool."
            }
        };
        this.ec2_instance = {
            "Type": "AWS::EC2::Instance",
            "Properties": {
                //"Metadata":{"info":"This is not a property but rather an attribute. Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key."},
                "Affinity": "String. Indicates whether Amazon Elastic Compute Cloud (Amazon EC2) always associates the instance with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify 'host'. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify 'default'.",
                "AvailabilityZone": "String. If not specified, an Availability Zone will be automatically chosen for you based on the load balancing criteria for the region.",
                "BlockDeviceMappings": ["A list of Amazon EC2 BlockDeviceMapping.##"],
                "CreditSpecification": { "info": " Type: CreditSpecification. Amazon EC2 Instance CreditSpecification.##" },
                "DisableApiTermination": "Boolean. Specifies whether the instance can be terminated through the API.",
                "EbsOptimized": "Boolean. Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.",
                "ElasticGpuSpecifications": ["Type: List of ElasticGpuSpecification. Specifies the Elastic GPUs. An Elastic GPU is a GPU resource that you can attach to your instance to accelerate the graphics performance of your applications.##"],
                "ElasticInferenceAccelerators": ["Type: List of ElasticInferenceAccelerator. Specify a list of elastic inference accelerators for an instance. ##"],
                "HostId": "String. The ID of a dedicated host that the instance is associated with",
                "IamInstanceProfile": "String. The IAM instance profile",
                "ImageId": "String. The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.",
                "InstanceInitiatedShutdownBehavior": "String. Indicates whether an instance stops or terminates when you shut down the instance from the instance's operating system shutdown command. Allowed Values: stop | terminate",
                "InstanceType": "String. Default: m1.small. Allowed Values: a1.2xlarge | a1.4xlarge | a1.large | a1.medium | a1.xlarge | c1.medium | c1.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c3.large | c3.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c4.large | c4.xlarge | c5.18xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.large | c5.xlarge | c5d.18xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.large | c5d.xlarge | c5n.18xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.large | c5n.xlarge | cc1.4xlarge | cc2.8xlarge | cg1.4xlarge | cr1.8xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d2.xlarge | f1.16xlarge | f1.2xlarge | f1.4xlarge | g2.2xlarge | g2.8xlarge | g3.16xlarge | g3.4xlarge | g3.8xlarge | g3s.xlarge | h1.16xlarge | h1.2xlarge | h1.4xlarge | h1.8xlarge | hi1.4xlarge | hs1.8xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i2.xlarge | i3.16xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.large | i3.metal | i3.xlarge | m1.large | m1.medium | m1.small | m1.xlarge | m2.2xlarge | m2.4xlarge | m2.xlarge | m3.2xlarge | m3.large | m3.medium | m3.xlarge | m4.10xlarge | m4.16xlarge | m4.2xlarge | m4.4xlarge | m4.large | m4.xlarge | m5.12xlarge | m5.24xlarge | m5.2xlarge | m5.4xlarge | m5.large | m5.metal | m5.xlarge | m5a.12xlarge | m5a.24xlarge | m5a.2xlarge | m5a.4xlarge | m5a.large | m5a.xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.large | m5ad.xlarge | m5d.12xlarge | m5d.24xlarge | m5d.2xlarge | m5d.4xlarge | m5d.large | m5d.metal | m5d.xlarge | p2.16xlarge | p2.8xlarge | p2.xlarge | p3.16xlarge | p3.2xlarge | p3.8xlarge | p3dn.24xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r3.large | r3.xlarge | r4.16xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.large | r4.xlarge | r5.12xlarge | r5.24xlarge | r5.2xlarge | r5.4xlarge | r5.large | r5.metal | r5.xlarge | r5a.12xlarge | r5a.24xlarge | r5a.2xlarge | r5a.4xlarge | r5a.large | r5a.xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.large | r5ad.xlarge | r5d.12xlarge | r5d.24xlarge | r5d.2xlarge | r5d.4xlarge | r5d.large | r5d.metal | r5d.xlarge | t1.micro | t2.2xlarge | t2.large | t2.medium | t2.micro | t2.nano | t2.small | t2.xlarge | t3.2xlarge | t3.large | t3.medium | t3.micro | t3.nano | t3.small | t3.xlarge | t3a.2xlarge | t3a.large | t3a.medium | t3a.micro | t3a.nano | t3a.small | t3a.xlarge | u-12tb1.metal | u-6tb1.metal | u-9tb1.metal | x1.16xlarge | x1.32xlarge | x1e.16xlarge | x1e.2xlarge | x1e.32xlarge | x1e.4xlarge | x1e.8xlarge | x1e.xlarge | z1d.12xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.large | z1d.metal | z1d.xlarge",
                "Ipv6AddressCount": "Integer. The number of IPv6 addresses to associate with the instance's primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch. ",
                "Ipv6Addresses": ["Type: List of InstanceIpv6Address##"],
                "KernelId": "String. The ID of the kernel. We recommend that you use PV-GRUB instead of kernels and RAM disks.",
                "KeyName": "String. If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.",
                "LaunchTemplate": { "info": " Type: LaunchTemplateSpecification. The launch template to use to launch the instances. Any parameters that you specify in the AWS CloudFormation template override the same parameters in the launch template. You can specify either the name or ID of a launch template, but not both. ##" },
                "LicenseSpecifications": ["Type: List of LicenseSpecification.  ##"],
                "Monitoring": "Boolean. Specifies whether detailed monitoring is enabled for the instance.",
                "NetworkInterfaces": ["Type: List of NetworkInterface. The network interfaces to associate with the instance. If you use this property to point to a network interface, you must terminate the original interface before attaching a new one to allow the update of the instance to succeed. If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the DependsOn Attribute to declare a dependency on the VPC-gateway attachment.  ##"],
                "PlacementGroupName": "String. The name of an existing placement group that you want to launch the instance into (for cluster instances).",
                "PrivateIpAddress": "**String. The private IP address for this instance. By default, Amazon VPC selects an IP address from the subnet for the instance. You cannot specify this option and the network interfaces option in the same request. Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request. If you make an update to an instance that requires replacement, you must assign a new private IP address. During a replacement, AWS CloudFormation creates a new instance but doesn't delete the old instance until the stack has successfully updated. If the stack update fails, AWS CloudFormation uses the old instance in order to roll back the stack to the previous working state. The old and new instances cannot have the same private IP address.",
                "RamdiskId": "String. The ID of the RAM disk to select. Some kernels require additional drivers at launch. ",
                "SecurityGroupIds": ["** List of String. A list that contains the security group IDs for VPC security groups to assign to the Amazon EC2 instance. If you specify a network interface, you must specify any security groups as part of the network interface. "],
                "SecurityGroups": ["List of string. Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security groups to assign to the Amazon EC2 instance."],
                "SourceDestCheck": "Boolean. Controls whether source/destination checking is enabled on the instance. Also determines if an instance in a VPC will perform network address translation (NAT).For the instance to perform NAT, the value must be false",
                "SsmAssociations": ["Type: List of SsmAssociation. The SSM document and parameter values in AWS Systems Manager to associate with this instance. To use this property, you must specify an IAM instance profile role for the instance. ##"],
                "SubnetId": "** String. You cannot specify this option and the network interfaces option in the same request.",
                "Tenancy": "String. Allowed Values: dedicated | default | host. The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.",
                "UserData": "String. The user data to make available to the instance. For more information, see Running Commands on Your Linux Instance at Launch (Linux) and Adding User Data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.",
                "Volumes": ["A list of EC2 MountPoints.##"],
                "AdditionalInfo": "",
                "CreationPolicy": { "info": "Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured.##" }
            }
        };
        this.ec2_securitygroup = {
            "Type": "AWS::EC2::SecurityGroup",
            "Properties": {
                "GroupName": "If you don't specify a GroupName, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.",
                "GroupDescription": "*description",
                "SecurityGroupEgress": ["A list of Amazon EC2 security group egress rules.##"],
                "SecurityGroupIngress": ["A list of Amazon EC2 security group ingress rules.##"],
                "VpcId": "*The physical ID of the VPC. You can obtain the physical ID by using a reference function"
            }
        };
        this.ec2_customergateway = {
            "Type": "AWS::EC2::CustomerGateway",
            "Properties": {
                "BgpAsn": "*The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).",
                "IpAddress": "*The internet-routable IP address for the customer gateway's outside interface. The address must be static.",
                "Type": "*The type of VPN connection that this customer gateway supports. e.g. ipsec.1"
            }
        };
        this.ec2_dhcpoptions = {
            "Type": "AWS::EC2::DHCPOptions",
            "Properties": {
                "DomainName": "** A domain name of your choice e.g. example.com",
                "DomainNameServers": ["**The IP (IPv4) address of a domain name server. You can specify up to four addresses. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."],
                "NetbiosNameServers": ["**The IP address (IPv4) of a NetBIOS name server. You can specify up to four addresses. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."],
                "NetbiosNodeType": "**An integer value indicating the NetBIOS node type: 1: Broadcast. 2: Point-to-point. 4: Mixed mode. 8: Hybrid.  Required if NetBiosNameServers is specified; optional otherwise. ",
                "NtpServers": ["**The IP address (IPv4) of a Network Time Protocol (NTP) server. You can specify up to four addresses. List of String values. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."]
            }
        };
        this.ec2_ec2fleet = {
            "Type": "AWS::EC2::EC2Fleet",
            "Properties": {
                "ExcessCapacityTerminationPolicy": "Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.",
                "LaunchTemplateConfigs": ["*List of FleetLaunchTemplateConfigRequest property types##"],
                "OnDemandOptions": { "info": "Type: OnDemandOptionsRequest. The allocation strategy of On-Demand Instances in an EC2 Fleet.## " },
                "ReplaceUnhealthyInstances": "Boolean. Indicates whether EC2 Fleet should replace unhealthy instances.",
                "SpotOptions": { "info": "Type: SpotOptionsRequest. Describes the configuration of Spot Instances in an EC2 Fleet.##" },
                "TagSpecifications": ["List of TagSpecification property types.The key-value pair for tagging the EC2 Fleet request on creation. The value for ResourceType must be fleet, otherwise the fleet request fails.##"],
                "TargetCapacitySpecification": { "info": "*TargetCapacitySpecificationRequest Type. The TotalTargetCapacity, OnDemandTargetCapacity, SpotTargetCapacity, and DefaultCapacityType structure.##" },
                "TerminateInstancesWithExpiration": "Boolean. Indicates whether running instances should be terminated when the EC2 Fleet expires.",
                "Type": "The type of the request. By default, the EC2 Fleet places an asynchronous request for your desired capacity, and maintains it by replenishing interrupted Spot Instances (maintain). A value of instant places a synchronous one-time request, and returns errors for any instances that could not be launched. A value of request places an asynchronous one-time request without maintaining capacity or submitting requests in alternative capacity pools if capacity is unavailable.",
                "ValidFrom": "The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.",
                "ValidUntil": "The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. The default end date is 7 days from the current date."
            }
        };
        this.ec2_egressonlyinternetgateway = {
            "Type": "AWS::EC2::EgressOnlyInternetGateway",
            "Properties": {
                "VpcId": "* the id of the vpc."
            }
        };
        this.ec2_eipassociation = {
            "Type": "AWS::EC2::EIPAssociation",
            "Properties": {
                "AllocationId": "**[EC2-VPC] Allocation ID for the VPC Elastic IP address you want to associate with an Amazon EC2 instance in your VPC.Conditional. Required for EC2-VPC.",
                "EIP": "**Elastic IP address that you want to associate with the Amazon EC2 instance specified by the InstanceId property. Required for EC2-Classic.",
                "InstanceId": "**Instance ID of the Amazon EC2 instance that you want to associate with the Elastic IP address specified by the EIP property. If the instance has more than one network interface, you must specify a network interface ID. Conditional. If you specify the EIP property, you must specify this property. If you specify the AllocationId property, you must specify this property or the NetworkInterfaceId property.",
                "NetworkInterfaceId": "**The ID of the network interface to associate with the Elastic IP address. If the instance has more than one network interface, you must specify a network interface ID.If you specify the AllocationId property, you must specify this property or the InstanceId property.",
                "PrivateIpAddress": "The private IP address that you want to associate with the Elastic IP address. The private IP address is restricted to the primary and secondary private IP addresses that are associated with the network interface."
            }
        };
        this.ec2_flowlog = {
            "Type": "AWS::EC2::FlowLog",
            "Properties": {
                "DeliverLogsPermissionArn": "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.",
                "LogDestination": "If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.",
                "LogDestinationType": "Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify 'cloud-watch-logs'. To publish flow log data to Amazon S3, specify 's3'.",
                "LogGroupName": "The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.",
                "ResourceId": "*The ID of the subnet, network interface, or VPC for which you want to create a flow log.",
                "ResourceType": "*The type of resource that you specified in the ResourceId property. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.",
                "TrafficType": "*The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. Valid Values: ACCEPT | REJECT | ALL"
            }
        };
        this.ec2_host = {
            "Type": "AWS::EC2::Host",
            "Properties": {
                "AutoPlacement": "Indicates if the host accepts EC2 instances with only matching configurations or if instances must also specify the host ID. Instances that don't specify a host ID can't launch onto a host with AutoPlacement set to off.",
                "AvailabilityZone": "*The Availability Zone (AZ) in which to launch the dedicated host.",
                "InstanceType": "*The instance type that the dedicated host accepts."
            }
        };
        this.ec2_internetgateway = {
            "Type": "AWS::EC2::InternetGateway",
            "Properties": {}
        };
        this.ec2_launchtemplate = {
            "Type": "AWS::EC2::LaunchTemplate",
            "Properties": {
                "LaunchTemplateName": "Minimum length of 3. Maximum length of 128.",
                "LaunchTemplateData": { "info": "Type: LaunchTemplateData##" }
            }
        };
        this.ec2_natgateway = {
            "Type": "AWS::EC2::NatGateway",
            "Properties": {
                "AllocationId": "*The allocation ID of an Elastic IP address to associate with the NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.",
                "SubnetId": "*The public subnet in which to create the NAT gateway."
            }
        };
        this.ec2_networkacl = {
            "Type": "AWS::EC2::NetworkAcl",
            "Properties": {
                "VpcId": "*The ID of the VPC where the network ACL will be created."
            }
        };
        this.ec2_networkaclentry = {
            "Type": "AWS::EC2::NetworkAclEntry",
            "Properties": {
                "CidrBlock": "**You must specify the CidrBlock or Ipv6CidrBlock property.",
                "Egress": "Boolean. Whether this rule applies to egress traffic from the subnet (true) or ingress traffic to the subnet (false). By default, AWS CloudFormation specifies false.",
                "Icmp": { "info": "**Type: EC2 NetworkAclEntry Icmp. required if specifying 1 (ICMP) for the protocol parameter.##" },
                "Ipv6CidrBlock": "**You must specify the CidrBlock or Ipv6CidrBlock property.",
                "NetworkAclId": "*ID of the ACL where the entry will be created.",
                "PortRange": { "info": "**Type: EC2 NetworkAclEntry PortRange. Required if specifying 6 (TCP) or 17 (UDP) for the protocol parameter.## " },
                "Protocol": "*The IP protocol that the rule applies to. You must specify -1 or a protocol number. If you specify -1, all ports are opened and the PortRange property is ignored.",
                "RuleAction": "*Whether to allow or deny traffic that matches the rule; valid values are 'allow' or 'deny'.",
                "RuleNumber": "*Rule number to assign to the entry, such as 100. ACL entries are processed in ascending order by rule number. Entries can't use the same rule number unless one is an egress rule and the other is an ingress rule."
            }
        };
        this.ec2_networkinterface = {
            "Type": "AWS::EC2::NetworkInterface",
            "Properties": {
                "Description": "String",
                "GroupSet": ["Type: List of strings. A list of security group IDs associated with this network interface."],
                "Ipv6AddressCount": "Integer. The number of IPv6 addresses to associate with the network interface. EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.",
                "Ipv6Addresses": ["One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.##"],
                "PrivateIpAddress": "Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.",
                "PrivateIpAddresses": ["Type: list of PrivateIpAddressSpecification. Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.##"],
                "SecondaryPrivateIpAddressCount": "Integer. The number of secondary private IP addresses that EC2 automatically assigns to the network interface. EC2 uses the value of the PrivateIpAddress property as the primary private IP address. If you don't specify that property, EC2 automatically assigns both the primary and secondary private IP addresses.",
                "SourceDestCheck": "Boolean. Flag indicating whether traffic to or from the instance is validated.",
                "SubnetId": "String"
            }
        };
        this.ec2_networkinterfaceattachment = {
            "Type": "AWS::EC2::NetworkInterfaceAttachment",
            "Properties": {
                "DeleteOnTermination": "Whether to delete the network interface when the instance terminates. By default, this value is set to True.",
                "DeviceIndex": "*The network interface's position in the attachment order. For example, the first attached network interface has a DeviceIndex of 0.",
                "InstanceId": "*The ID of the instance to which you will attach the ENI.",
                "NetworkInterfaceId": "*The ID of the ENI that you want to attach."
            }
        };
        this.ec2_networkinterfacepermission = {
            "Type": "AWS::EC2::NetworkInterfacePermission",
            "Properties": {
                "AwsAccountId": "*Aws account id",
                "NetworkInterfaceId": "*The ID of the network interface.",
                "Permission": "*The type of permission to grant: INSTANCE-ATTACH or EIP-ASSOCIATE."
            }
        };
        this.ec2_placementgroup = {
            "Type": "AWS::EC2::PlacementGroup",
            "Properties": {
                "Strategy": "The placement strategy, which relates to the instance types that can be added to the placement group. For example, for the cluster strategy, you can cluster C4 instance types but not T2 instance types. Valid Values: cluster | spread | partition"
            }
        };
        this.ec2_route = {
            "Type": "AWS::EC2::Route",
            "Properties": {
                "DestinationCidrBlock": "**The IPv4 CIDR address block used for the destination match. For example, 0.0.0.0/0. Routing decisions are based on the most specific match. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.",
                "DestinationIpv6CidrBlock": "**The IPv6 CIDR address block used for the destination match. For example, ::/0. Routing decisions are based on the most specific match. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.",
                "EgressOnlyInternetGatewayId": "**The ID of an egress-only internet gateway that is attached to your VPC (over IPv6 only). Conditional. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
                "GatewayId": "**The ID of an internet gateway or virtual private gateway that is attached to your VPC. For example: igw-eaad4883. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
                "InstanceId": "**The ID of a NAT instance in your VPC. For example, i-1a2b3c4d. Conditional. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
                "NatGatewayId": "**The ID of a NAT gateway. For example, nat-0a12bc456789de0fg.You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
                "NetworkInterfaceId": "**Allows the routing of network interface IDs.You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
                "RouteTableId": "*The ID of the route table where the route will be added.",
                "VpcPeeringConnectionId": "**The ID of a VPC peering connection. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId."
            }
        };
        this.ec2_routetable = {
            "Type": "AWS::EC2::RouteTable",
            "Properties": {
                "VpcId": "*The ID of the VPC where the route table will be created."
            }
        };
        this.ec2_securitygroupegress = {
            "Type": "AWS::EC2::SecurityGroupEgress",
            "Properties": {
                "CidrIp": "**You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
                "CidrIpv6": "**You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
                "Description": "description",
                "DestinationPrefixListId": "**The AWS service prefix of an Amazon VPC endpoint.You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
                "DestinationSecurityGroupId": "**Specifies the group ID of the destination Amazon VPC security group. You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
                "FromPort": "*Start of port range for the TCP and UDP protocols, or an ICMP type number. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP type number).",
                "GroupId": "*ID of the Amazon VPC security group to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource that has a valid VpcId property or the ID of an existing Amazon VPC security group.",
                "IpProtocol": "*IP protocol name or number.se -1 to specify all protocols. If you specify -1, or a protocol number other than tcp, udp, icmp, or 58 (ICMPv6), traffic on all ports is allowed, regardless of any ports you specify. ",
                "ToPort": "*Integer. End of port range for the TCP and UDP protocols, or an ICMP code. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP code)."
            }
        };
        this.ec2_securitygroupingress = {
            "Type": "AWS::EC2::SecurityGroupIngress",
            "Properties": {
                "CidrIp": "**You must specify a source security group (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
                "CidrIpv6": "**You must specify a source security group (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
                "Description": "Description",
                "FromPort": "*Integer. Start of port range for the TCP and UDP protocols, or an ICMP type number. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP type number).",
                "GroupId": "**You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property. For example, EC2-VPC accounts must use the GroupId property.",
                "GroupName": "**Name of the Amazon EC2 security group (non-VPC security group) to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing Amazon EC2 security group. You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property. For example, EC2-VPC accounts must use the GroupId property.",
                "IpProtocol": "*IP protocol name or number.Use -1 to specify all protocols. If you specify -1, or a protocol number other than tcp, udp, icmp, or 58 (ICMPv6), traffic on all ports is allowed, regardless of any ports you specify. ",
                "SourcePrefixListId": "**The AWS service prefix of an Amazon VPC endpoint. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
                "SourceSecurityGroupName": "**Specifies the ID of the source security group or uses the Ref intrinsic function to refer to the logical ID of a security group defined in the same template. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
                "SourceSecurityGroupId": "**Specifies the name of the Amazon EC2 security group (non-VPC security group) to allow access or use the Ref intrinsic function to refer to the logical ID of a security group defined in the same template. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
                "SourceSecurityGroupOwnerId": "**Specifies the AWS Account ID of the owner of the Amazon EC2 security group specified in the SourceSecurityGroupName property. If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.",
                "ToPort": "*Integer. End of port range for the TCP and UDP protocols, or an ICMP code. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP code).Required: Yes, for ICMP and any protocol that uses ports."
            }
        };
        this.ec2_spotfleet = {
            "Type": "AWS::EC2::SpotFleet",
            "Properties": {
                "SpotFleetRequestConfigData": { "info": "*Type of SpotFleetRequestConfigData##" }
            }
        };
        this.ec2_subnet = {
            "Type": "AWS::EC2::Subnet",
            "Properties": {
                "AssignIpv6AddressOnCreation": "**Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is false. If you specify a true or false value for AssignIpv6AddressOnCreation, Ipv6CidrBlock must also be specified.",
                "AvailabilityZone": "The availability zone in which you want the subnet. Default: AWS selects a zone for you (recommended).",
                "CidrBlock": "*The CIDR block that you want the subnet to cover (for example, '10.0.0.0/24').",
                "Ipv6CidrBlock": "**The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length. If you specify a true or false value for AssignIpv6AddressOnCreation, Ipv6CidrBlock must be specified.",
                "MapPublicIpOnLaunch": "Indicates whether instances that are launched in this subnet receive a public IP address. By default, the value is false.",
                "VpcId": "*A Ref structure that contains the ID of the VPC on which you want to create the subnet. The VPC ID is provided as the value of the 'Ref' property"
            }
        };
        this.ec2_subnetcidrblock = {
            "Type": "AWS::EC2::SubnetCidrBlock",
            "Properties": {
                "Ipv6CidrBlock": "*The IPv6 CIDR block for the subnet. The CIDR block must have a prefix length of /64.",
                "SubnetId": "*The ID of the subnet to associate the IPv6 CIDR block with."
            }
        };
        this.ec2_subnetnetworkaclassociation = {
            "Type": "AWS::EC2::SubnetNetworkAclAssociation",
            "Properties": {
                "SubnetId": "*The ID representing the current association between the original network ACL and the subnet.",
                "NetworkAclId": "*The ID of the new ACL to associate with the subnet."
            }
        };
        this.ec2_subnetroutetableassociation = {
            "Type": "AWS::EC2::SubnetRouteTableAssociation",
            "Properties": {
                "RouteTableId": "*The ID of the route table. This is commonly written as a reference to a route table declared elsewhere in the template.",
                "SubnetId": "*The ID of the subnet."
            }
        };
        this.ec2_transitgateway = {
            "Type": "AWS::EC2::TransitGateway",
            "Properties": {
                "AmazonSideAsn": "Integer. A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.",
                "AutoAcceptSharedAttachments": "Indicates whether attachment requests are automatically accepted. The default is disable.",
                "DefaultRouteTableAssociation": "Enable or disable automatic association with the default association route table. The default is enable.",
                "DefaultRouteTablePropagation": "Enable or disable automatic propagation of routes to the default propagation route table. The default is enable.",
                "Description": "Description",
                "DnsSupport": "Enable or disable DNS support. The default is enable.",
                "VpnEcmpSupport": "Enable or disable Equal Cost Multipath Protocol. The default is enable."
            }
        };
        this.ec2_transitgatewayattachment = {
            "Type": "AWS::EC2::TransitGatewayAttachment",
            "Properties": {
                "SubnetIds": ["*List of String values.The IDs of one or more subnets. You can specify only one subnet per Availability Zone. You must specify at least one subnet, but we recommend that you specify two subnets for better availability. The transit gateway uses one IP address from each specified subnet."],
                "TransitGatewayId": "*The ID of the transit gateway.",
                "VpcId": "*The ID of the VPC."
            }
        };
        this.ec2_transitgatewayroute = {
            "Type": "AWS::EC2::TransitGatewayRoute",
            "Properties": {
                "Blackhole": "Indicates whether to drop traffic if the target isn't available.",
                "DestinationCidrBlock": "The CIDR range used for destination matches. Routing decisions are based on the most specific match.",
                "TransitGatewayAttachmentId": "The ID of the attachment.",
                "TransitGatewayRouteTableId": "*The ID of the transit gateway route table."
            }
        };
        this.ec2_transitgatewayroutetable = {
            "Type": "AWS::EC2::TransitGatewayRouteTable",
            "Properties": {
                "TransitGatewayId": "*The ID of the transit gateway."
            }
        };
        this.ec2_transitgatewayroutetableassociation = {
            "Type": "AWS::EC2::TransitGatewayRouteTableAssociation",
            "Properties": {
                "TransitGatewayAttachmentId": "*",
                "TransitGatewayRouteTableId": "*"
            }
        };
        this.ec2_transitgatewayroutetablepropagation = {
            "Type": "AWS::EC2::TransitGatewayRouteTablePropagation",
            "Properties": {
                "TransitGatewayAttachmentId": "*",
                "TransitGatewayRouteTableId": "*"
            }
        };
        this.ec2_volumeattachment = {
            "Type": "AWS::EC2::VolumeAttachment",
            "Properties": {
                "Device": "*How the device is exposed to the instance (e.g., /dev/sdh, or xvdh). Note: Before this resource can be deleted (and therefore the volume detached), you must first unmount the volume in the instance. Failure to do so results in the volume being stuck in the busy state while it is trying to detach, which could possibly damage the file system or the data it contains.",
                "InstanceId": "*The ID of the instance to which the volume attaches. This value can be a reference to an AWS::EC2::Instance resource, or it can be the physical ID of an existing EC2 instance.",
                "VolumeId": "*The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone."
            }
        };
        this.ec2_vpc = {
            "Type": "AWS::EC2::VPC",
            "Properties": {
                "CidrBlock": "*The CIDR block you want the VPC to cover. ",
                "EnableDnsSupport": "Boolean. Specifies whether DNS resolution is supported for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not. By default the value is set to true.",
                "EnableDnsHostnames": "Boolean. Specifies whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not. You can only set EnableDnsHostnames to true if you also set the EnableDnsSupport attribute to true. By default, the value is set to false.",
                "InstanceTenancy": "The allowed tenancy of instances launched into the VPC. Valid values: 'default' or 'dedicated'. "
            }
        };
        this.ec2_vpccidrblock = {
            "Type": "AWS::EC2::VPCCidrBlock",
            "Properties": {
                "AmazonProvidedIpv6CidrBlock": "Boolean. Whether to request an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You can't specify the range of IPv6 addresses or the size of the CIDR block.",
                "CidrBlock": "An IPv4 CIDR block to associate with the VPC.",
                "VpcId": "*vpc id"
            }
        };
        this.ec2_vpcdhcpoptionsassociation = {
            "Type": "AWS::EC2::VPCDHCPOptionsAssociation",
            "Properties": {
                "DhcpOptionsId": "*The ID of the DHCP options you want to associate with the VPC. Specify default if you want the VPC to use no DHCP options.",
                "VpcId": "*vpc id"
            }
        };
        this.ec2_vpcendpoint = {
            "Type": "AWS::EC2::VPCEndpoint",
            "Properties": {
                "VpcId": "*vpc id",
                "RouteTableIds": ["List of string values. [Gateway endpoint] One or more route table IDs that are used by the VPC to reach the endpoint."],
                "ServiceName": "*The name of the service.",
                "PolicyDocument": { "info": "[Gateway endpoint] A policy to attach to the endpoint that controls access to the service. The policy must be valid JSON. " },
                "VpcEndpointType": "The type of endpoint. Valid values are Interface and Gateway.",
                "PrivateDnsEnabled": "Boolean. [Interface endpoint] Indicates whether to associate a private hosted zone with the specified VPC.",
                "SubnetIds": ["[Interface endpoint] The ID of one or more subnets in which to create an endpoint network interface."],
                "SecurityGroupIds": ["list of string values. [Interface endpoint] The ID of one or more security groups to associate with the endpoint network interface."]
            }
        };
        this.ec2_vpcendpointconnectionnotification = {
            "Type": "AWS::EC2::VPCEndpointConnectionNotification",
            "Properties": {
                "ConnectionEvents": ["*List of string values. One or more endpoint events for which to receive notifications. Valid values are Accept, Connect, Delete, and Reject."],
                "VPCEndpointId": "The ID of the endpoint",
                "ServiceId": "The ID of the endpoint service.",
                "ConnectionNotificationArn": "*The ARN of the SNS topic for the notifications."
            }
        };
        this.ec2_vpcendpointservice = {
            "Type": "AWS::EC2::VPCEndpointService",
            "Properties": {
                "NetworkLoadBalancerArns": ["list of string values. The Amazon Resource Names (ARNs) of one or more Network Load Balancers for your service."],
                "AcceptanceRequired": "Boolean. Indicate whether requests from service consumers to create an endpoint to your service must be accepted"
            }
        };
        this.ec2_vpcendpointservicepermissions = {
            "Type": "AWS::EC2::VPCEndpointServicePermissions",
            "Properties": {
                "AllowedPrincipals": ["The Amazon Resource Names (ARN) of one or more principals (IAM users, IAM roles, and AWS accounts). Permissions are granted to the principals in this list. To grant permissions to all principals, specify an asterisk. Permissions are revoked for principals not in this list. If the list is empty, then all permissions are revoked."],
                "ServiceId": "*The ID of the VPC endpoint service."
            }
        };
        this.ec2_vpcgatewayattachment = {
            "Type": "AWS::EC2::VPCGatewayAttachment",
            "Properties": {
                "InternetGatewayId": "**Id of the internet gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.",
                "VpcId": "*The ID of the VPC to associate with this gateway.",
                "VpnGatewayId": "**The ID of the virtual private network (VPN) gateway to attach to the VPC. You must specify either InternetGatewayId or VpnGatewayId, but not both."
            }
        };
        this.ec2_vpcpeeringconnection = {
            "Type": "AWS::EC2::VPCPeeringConnection",
            "Properties": {
                "PeerVpcId": "*The ID of the VPC with which you are creating the peering connection.",
                "VpcId": "*The ID of the VPC that is requesting a peering connection.",
                "PeerOwnerId": "The AWS account ID of the owner of the VPC that you want to peer with.",
                "PeerRegion": "The region code for the accepter VPC, if the accepter VPC is located in a region other than the region in which you make the request. The default is the region in which you make the request.",
                "PeerRoleArn": "The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account."
            }
        };
        this.ec2_vpnconnection = {
            "Type": "AWS::EC2::VPNConnection",
            "Properties": {
                "Type": "*The type of VPN connection this virtual private gateway supports.e.g. ipsec.1",
                "CustomerGatewayId": "*The ID of the customer gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
                "StaticRoutesOnly": "**Boolean. Conditional. If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify true.",
                "VpnGatewayId": "*The ID of the virtual private gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
                "VpnTunnelOptionsSpecifications": ["Type: List of VpnTunnelOptionsSpecification. The tunnel options for the VPN connection. Duplicates not allowed.##"]
            }
        };
        this.ec2_vpnconnectionroute = {
            "Type": "AWS::EC2::VPNConnectionRoute",
            "Properties": {
                "DestinationCidrBlock": "*The CIDR block that is associated with the local subnet of the customer network.",
                "VpnConnectionId": "*"
            }
        };
        this.ec2_vpngateway = {
            "Type": "AWS::EC2::VPNGateway",
            "Properties": {
                "AmazonSideAsn": "Long. The private Autonomous System Number (ASN) for the Amazon side of a BGP session.",
                "Type": "*The type of VPN connection this virtual private gateway supports. The only valid value is 'ipsec.1'."
            }
        };
        this.ec2_vpngatewayroutepropagation = {
            "Type": "AWS::EC2::VPNGatewayRoutePropagation",
            "Properties": {
                "RouteTableIds": ["*List of string values of routetable ids. A list of routing table IDs that are associated with a VPC. The routing tables must be associated with the same VPC that the virtual private gateway is attached to."],
                "VpnGatewayId": "*The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with."
            }
        };
        //Ec2 ends...
        //Route53 starts...
        this.route53_healthcheck = {
            "Type": "AWS::Route53::HealthCheck",
            "Properties": {
                "HealthCheckConfig": { "info": "*Type: Route 53 HealthCheck HealthCheckConfig##" },
                "HealthCheckTags": ["Type: A list of Amazon Route 53 HealthCheck HealthCheckTags##"]
            }
        };
        this.route53_hostedzone = {
            "Type": "AWS::Route53::HostedZone",
            "Properties": {
                "HostedZoneConfig": { "info": "Type: Route 53 HostedZoneConfig Property##" },
                "HostedZoneTags": ["Type: List of Amazon Route 53 HostedZoneTags##"],
                "Name": "*The name of the domain. For resource record types that include a domain name, specify a fully qualified domain name.",
                "QueryLoggingConfig": { "info": "Type: Route 53 QueryLoggingConfig##" },
                "VPCs": ["Type: List of Route 53 HostedZoneVPCs. One or more VPCs that you want to associate with this hosted zone. When you specify this property, AWS CloudFormation creates a private hosted zone.##"]
            }
        };
        this.route53_recordset = {
            "Type": "AWS::Route53::RecordSet",
            "Properties": {
                "AliasTarget": { "info": "**Type: AliasTarget. Required if you are creating an alias resource record set. If you specify this property, do not specify the TTL property. The alias uses a TTL value from the alias target record.##" },
                "Comment": "Any comments that you want to include about the change batch. Important: If the record set is part of a record set group, this property isn't valid. Don't specify this property.",
                "Failover": "Designates the record set as a PRIMARY or SECONDARY failover record set. When you have more than one resource performing the same function, you can configure Route 53 to check the health of your resources and use only health resources to respond to DNS queries. You cannot create nonfailover resource record sets that have the same Name and Type property values as failover resource record sets. If you specify this property, you must specify the SetIdentifier property.",
                "GeoLocation": { "info": "Type: Route 53 Record Set GeoLocation Property. Describes how Route 53 responds to DNS queries based on the geographic origin of the query. This property is not compatible with the Region property.##" },
                "HealthCheckId": "The health check ID that you want to apply to this record set. Route 53 returns this resource record set in response to a DNS query only while record set is healthy.",
                "HostedZoneId": "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both. If this record set is part of a record set group, do not specify this property.",
                "HostedZoneName": "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both. If this record set is part of a record set group, do not specify this property. The name of the domain for the hosted zone where you want to add the record set. When you create a stack using an AWS::Route53::RecordSet that specifies HostedZoneName, AWS CloudFormation attempts to find a hosted zone whose name matches the HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack. If you have multiple hosted zones with the same domain name, you must explicitly specify the hosted zone using HostedZoneId.",
                "MultiValueAnswer": "Boolean. To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer. Note the following: If you associate a health check with a multivalue answer resource record set, Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy. If you don't associate a health check with a multivalue answer record, Route 53 always considers the record to be healthy. Amazon Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records. If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of healthy records. When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records. If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response.",
                "Name": "*The name of the domain. You must specify a fully qualified domain name that ends with a period as the last label indication. If you omit the final period, Route 53 adds it.",
                "Region": "Latency resource record sets only: The Amazon EC2 region where the resource that is specified in this resource record set resides. The resource typically is an AWS resource, for example, Amazon EC2 instance or an Elastic Load Balancing load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type. When Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 region. Route 53 then returns the value that is associated with the selected resource record set. The following restrictions must be followed: You can only specify one resource record per latency resource record set. You can only create one latency resource record set for each Amazon EC2 region. You are not required to create latency resource record sets for all Amazon EC2 regions. Route 53 will choose the region with the best latency from among the regions for which you create latency resource record sets. You cannot create both weighted and latency resource record sets that have the same values for the Name and Type elements. This property is not compatible with the GeoLocation property.",
                "ResourceRecords": ["**Type: List of String values. If you don't specify the AliasTarget property, you must specify this property. If you are creating an alias resource record set, do not specify this property."],
                "SetIdentifier": "**Required if you are creating a weighted, latency, failover, or geolocation resource record set. A unique identifier that differentiates among multiple resource record sets that have the same combination of DNS name and type.",
                "TTL": "**The resource record cache time to live (TTL), in seconds. If you don't specify the AliasTarget property, you must specify this property. If you are creating an alias resource record set, do not specify this property. If you specify this property, do not specify the AliasTarget property.",
                "Type": "* Valid values for basic resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT. Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT. Valid values for multivalue answer resource record sets: A | AAAA | MX | NAPTR | PTR | SPF | SRV | TXT",
                "Weight": "**Type: Number. Weight expects integer values. Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines what portion of traffic for the current resource record set is routed to the associated location."
            }
        };
        this.route53_recordsetgroup = {
            "Type": "AWS::Route53::RecordSetGroup",
            "Properties": {
                "Comment": "String",
                "HostedZoneId": "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both.",
                "HostedZoneName": "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both. When you create a stack using an AWS::Route53::RecordSet that specifies HostedZoneName, AWS CloudFormation attempts to find a hosted zone whose name matches the HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack.",
                "RecordSets": ["*Type:: List of AWS::Route53::RecordSet objects, The maximum number of records is 1,000."]
            }
        };
        this.r53_resolver_resolverendpoint = {
            "Type": "AWS::Route53Resolver::ResolverEndpoint",
            "Properties": {
                "Direction": "*Valid values:INBOUND | OUTBOUND. Indicates whether the resolver endpoint allows inbound or outbound DNS queries.",
                "IpAddresses": ["*Type: List of IpAddressRequest property types. The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs to your network (for outbound endpoints) or on the way from your network to your VPCs (for inbound resolver endpoints).##"],
                "Name": "A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.",
                "SecurityGroupIds": ["*Type: List of String values. The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound resolver endpoints) or outbound rules (for outbound resolver endpoints)."]
            }
        };
        this.r53_resolver_resolverrule = {
            "Type": "AWS::Route53Resolver::ResolverRule",
            "Properties": {
                "DomainName": "*DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. If a query matches multiple resolver rules (example.com and www.example.com), the query is routed using the resolver rule that contains the most specific domain name (www.example.com).",
                "Name": "A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.",
                "ResolverEndpointId": "The ID of the outbound endpoint that the rule is associated with.",
                "RuleType": "*When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, choose SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType.",
                "TargetIps": ["Type: List of TargetAddress property types. When a DNS query matches the name that you specify in DomainName, the outbound endpoint forwards the query to the IP addresses that you specify here, typically the IP addresses for DNS resolvers on your network. Specify IPv4 addresses.##"]
            }
        };
        this.r53_resolver_resolverruleassociation = {
            "Type": "AWS::Route53Resolver::ResolverRuleAssociation",
            "Properties": {
                "Name": "The name of an association between a resolver rule and a VPC.",
                "ResolverRuleId": "*The ID of the resolver rule that you associated with the VPC that is specified by VPCId.",
                "VPCId": "*The ID of the VPC that you associated the resolver rule with."
            }
        };
        //Route53 ends...
        //IAM starts...
        this.iam_accesskey = {
            "Type": "AWS::IAM::AccessKey",
            "Properties": {
                "Serial": "Integer. This value is specific to AWS CloudFormation and can only be incremented. Incrementing this value notifies AWS CloudFormation that you want to rotate your access key. When you update your stack, AWS CloudFormation will replace the existing access key with a new key.",
                "Status": "Valid values: Active or Inactive. The status of the access key. By default, AWS CloudFormation sets this property value to Active.",
                "UserName": "*The name of the user that the new key will belong to."
            }
        };
        this.iam_group = {
            "Type": "AWS::IAM::Group",
            "Properties": {
                "GroupName": "A name for the IAM group. For valid values, see the GroupName parameter for the CreateGroup action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the group name. Pattern: [\w+=,.@-]+ . Length Constraints: Minimum length of 1. Maximum length of 128.",
                "ManagedPolicyArns": ["Type: List of String values. One or more managed policy ARNs to attach to this group."],
                "Path": "String",
                "Policies": ["The policies to associate with this group. For information about policies, see Overview of IAM Policies in the IAM User Guide."]
            }
        };
        this.iam_instanceprofile = {
            "Type": "AWS::IAM::InstanceProfile",
            "Properties": {
                "Path": "By default, AWS CloudFormation specifies / for the path.",
                "Roles": ["Type: List of String values. The name of an existing IAM role to associate with this instance profile. Currently, you can assign a maximum of one role to an instance profile. "],
                "InstanceProfileName": "The name of the instance profile that you want to create. This parameter allows (per its regex pattern) a string consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: = , . @ -."
            }
        };
        this.iam_managedpolicy = {
            "Type": "AWS::IAM::ManagedPolicy",
            "Properties": {
                "Description": "String",
                "Groups": ["Type: List of String values"],
                "Path": "The path for the IAM policy. By default, the path is /",
                "PolicyDocument": { "info": "Policies that define the permissions for this managed policy. NOTE: this policy is not available in 'Property Dealer' utility. Please use aws policy generate to do the same" },
                "Roles": ["If a policy has a Ref to a role and if a resource (such as AWS::ECS::Service) also has a Ref to the same role, add a DependsOn attribute to the resource so that the resource depends on the policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an AWS::ECS::Service resource, the DependsOn attribute ensures that the AWS::ECS::Service resource can complete its deletion before its role's policy is deleted."],
                "Users": ["Type: List of String values"],
                "ManagedPolicyName": "A custom, friendly name for your IAM managed policy. For valid values, see the PolicyName parameter of the CreatePolicy action in the IAM API Reference."
            }
        };
        this.iam_policy = {
            "Type": "AWS::IAM::Policy",
            "Properties": {
                "Groups": ["**You must specify at least one of the following properties: Groups, Roles, or Users."],
                "PolicyDocument": { "info": "*A policy document that contains permissions to add to the specified users or groups. NOTE: this policy is not available in 'Property Dealer' utility. Please use aws policy generate to do the same" },
                "PolicyName": "*The name of the policy. If you specify multiple policies for an entity, specify unique names. For example, if you specify a list of policies for an IAM role, each policy must have a unique name.",
                "Roles": ["**Type: List of String values. If a policy has a Ref to a role and if a resource (such as AWS::ECS::Service) also has a Ref to the same role, add a DependsOn attribute to the resource so that the resource depends on the policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an AWS::ECS::Service resource, the DependsOn attribute ensures that the AWS::ECS::Service resource can complete its deletion before its role's policy is deleted."],
                "Users": ["**Type: List of String values. You must specify at least one of the following properties: Groups, Roles, or Users. "]
            }
        };
        this.iam_role = {
            "Type": "AWS::IAM::Role",
            "Properties": {
                "AssumeRolePolicyDocument": { "info": "*Type: A JSON policy document.The trust policy that is associated with this role. You can associate only one assume role policy with a role." },
                "ManagedPolicyArns": ["Type: List of String values. One or more managed policy ARNs to attach to this role."],
                "MaxSessionDuration": "The maximum session duration (in seconds) for the specified role. Anyone who uses the AWS CLI or API to assume the role can specify the duration using the optional DurationSeconds API parameter or duration-seconds CLI parameter. Minimum value of 3600. Maximum value of 43200.",
                "Path": "The path associated with this role. For information about IAM paths, see Friendly Names and Paths in IAM User Guide.",
                "PermissionsBoundary": "The ARN of the policy that is used to set the permissions boundary for the role. Minimum length of 20. Maximum length of 2048.",
                "Policies": ["Type: List of IAM Policies.## "],
                "RoleName": "A name for the IAM role. Warning: Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name"
            }
        };
        this.iam_servicelinkedrole = {
            "Type": "AWS::IAM::ServiceLinkedRole",
            "Properties": {
                "AWSServiceName": "*The service principal for the AWS service to which this role is attached. You use a string similar to a URL but without the http:// in front. For example: elasticbeanstalk.amazonaws.com.",
                "CustomSuffix": "A string that you provide, which is combined with the service-provided prefix to form the complete role name. If you make multiple requests for the same service, then you must supply a different CustomSuffix for each request. Otherwise the request fails with a duplicate role name error. For example, you could add -1 or -debug to the suffix.",
                "Description": "The description of the role."
            }
        };
        this.iam_user = {
            "Type": "AWS::IAM::User",
            "Properties": {
                "Groups": ["Type: List of String values"],
                "LoginProfile": { "info": "Type: IAM User LoginProfile##" },
                "ManagedPolicyArns": ["One or more managed policy ARNs to attach to this user."],
                "Path": "The path for the user name.",
                "PermissionsBoundary": "The ARN of the policy that is used to set the permissions boundary for the user. Minimum length of 20. Maximum length of 2048.",
                "Policies": ["Type: List of IAM Policies##"],
                "UserName": "String. Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name"
            }
        };
        this.iam_usertogroupaddition = {
            "Type": "AWS::IAM::UserToGroupAddition",
            "Properties": {
                "GroupName": "*The name of group to add users to.",
                "Users": ["*Type: List of users"]
            }
        };
        //ec2 autoscaling starts
        this.ag_agGroup = {
            "Type": "AWS::AutoScaling::AutoScalingGroup",
            "Properties": {
                "AutoScalingGroupName": "String",
                "AvailabilityZones": ["**list of string values. If you don't specify the VPCZoneIdentifier property, you must specify this property."],
                "Cooldown": "The number of seconds after a scaling activity is completed before any further scaling activities can start.",
                "DesiredCapacity": "If SpotPrice is not set in the AWS::AutoScaling::LaunchConfiguration for this Auto Scaling group, then Auto Scaling will begin to bring instances online based on DesiredCapacity. CloudFormation will not mark the Auto Scaling group as successful (by setting its status to CREATE_COMPLETE) until the desired capacity is reached. If SpotPrice is set, then DesiredCapacity will not be used as a criteria for success, since instances will only be started when the spot price has been matched. After the spot price has been matched, however, Amazon EC2 Auto Scaling uses DesiredCapacity as the target capacity for the group.",
                "HealthCheckGracePeriod": "The length of time in seconds after a new EC2 instance comes into service that Amazon EC2 Auto Scaling starts checking its health.",
                "HealthCheckType": "The service you want the health status from, Amazon EC2 or Elastic Load Balancer. Valid values are EC2 or ELB.",
                "InstanceId": "**You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy. The ID of the Amazon EC2 instance you want to use to create the Auto Scaling group. Use this property if you want to create an Auto Scaling group that uses an existing Amazon EC2 instance instead of a launch configuration. When you use an Amazon EC2 instance to create an Auto Scaling group, a new launch configuration is first created and then associated with the Auto Scaling group. The new launch configuration derives all its properties from the instance, with the exception of BlockDeviceMapping and AssociatePublicIpAddress.",
                "LaunchConfigurationName": "**You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy. If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the DependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information. When you update the LaunchConfigurationName, existing Amazon EC2 instances continue to run with the configuration that they were originally launched with. To update existing instances, specify an update policy attribute for this Auto Scaling group.  ",
                "LaunchTemplate": { "info": "**Type: LaunchTemplateSpecification. You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy.##" },
                "LifecycleHookSpecificationList": ["List of LifecycleHookSpecification. The lifecycle hooks for the group, which specify actions to perform when Amazon EC2 Auto Scaling launches or terminates instances. ##"],
                "LoadBalancerNames": ["list of string values. A list of Classic Load Balancers associated with this Auto Scaling group. To specify Application Load Balancers or Network Load Balancers, use TargetGroupARNs instead."],
                "MaxSize": "*The maximum size of the Auto Scaling group.",
                "MetricsCollection": ["A list of Amazon EC2 Auto Scaling AutoScalingGroup MetricsCollection##"],
                "MinSize": "*String",
                "MixedInstancesPolicy": { "info": "**Type: MixedInstancesPolicy. You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy." },
                "NotificationConfigurations": ["Type: List of Amazon EC2 Auto Scaling AutoScalingGroup NotificationConfiguration. An embedded property that configures an Auto Scaling group to send notifications when specified events take place.##"],
                "PlacementGroup": "String. The name of an existing cluster placement group into which you want to launch your instances. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group.",
                "ServiceLinkedRoleARN": "String. The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. By default, Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist.",
                "TargetGroupARNs": ["list of string values. A list of Amazon Resource Names (ARN) of target groups to associate with the Auto Scaling group."],
                "TerminationPolicies": ["list of string values. A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them."],
                "VPCZoneIdentifier": ["**If you don't specify the AvailabilityZones property, you must specify this property. A list of subnet identifiers of Amazon Virtual Private Cloud (Amazon VPCs)."],
                "Tags": ["Type: List of Amazon EC2 Auto Scaling AutoScalingGroup TagProperty##"],
                "CreationPolicy": { "info": "Associate the CreationPolicy attribute with a resource to prevent its status from reaching create complete until AWS CloudFormation receives a specified number of success signals or the timeout period is exceeded.Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured.##" },
                "UpdatePolicy": { "info": "For AWS::AutoScaling::AutoScalingGroup resources, AWS CloudFormation invokes one of three update policies depending on the type of change you make or whether a scheduled action is associated with the Auto Scaling group. The AutoScalingReplacingUpdate and AutoScalingRollingUpdate policies apply only when you do one or more of the following: 1. Change the Auto Scaling group's AWS::AutoScaling::LaunchConfiguration. 2. Change the Auto Scaling group's VPCZoneIdentifier property 3. Change the Auto Scaling group's LaunchTemplate property 4. Update an Auto Scaling group that contains instances that don't match the current LaunchConfiguration. If both the AutoScalingReplacingUpdate and AutoScalingRollingUpdate policies are specified, setting the WillReplace property to true gives AutoScalingReplacingUpdate precedence. The AutoScalingScheduledAction policy applies when you update a stack that includes an Auto Scaling group with an associated scheduled action. ##" }
            }
        };
        this.ag_launchConfiguration = {
            "Type": "AWS::AutoScaling::LaunchConfiguration",
            "Properties": {
                "AssociatePublicIpAddress": "Boolean. For Amazon EC2 instances in a VPC, indicates whether instances in the Auto Scaling group receive public IP addresses. If you specify true, each instance in the Auto Scaling group receives a unique public IP address.",
                "BlockDeviceMappings": ["Type: A list of BlockDeviceMapping.##"],
                "ClassicLinkVPCId": "String. The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. You can specify this property only for EC2-Classic instances. ",
                "ClassicLinkVPCSecurityGroups": ["**list of string values. If you specified the ClassicLinkVPCId property, you must specify this property."],
                "EbsOptimized": "Boolean. Specifies whether the launch configuration is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. By default false.",
                "IamInstanceProfile": "String. Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.",
                "ImageId": "*String. Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.",
                "InstanceId": "String. The ID of the Amazon EC2 instance you want to use to create the launch configuration. Use this property if you want the launch configuration to use settings from an existing Amazon EC2 instance.",
                "InstanceMonitoring": "Boolean. Indicates whether detailed instance monitoring is enabled for the Auto Scaling group. By default, this property is set to true (enabled).",
                "InstanceType": "*String. Specifies the instance type of the EC2 instance.",
                "KernelId": "Provides the ID of the kernel associated with the EC2 AMI.",
                "KeyName": "String. Provides the name of the EC2 key pair.",
                "LaunchConfigurationName": "String. The name of the launch configuration. This name must be unique within the scope of your AWS account.",
                "PlacementTenancy": "String. The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware and can only be launched in a VPC.",
                "RamDiskId": "The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.",
                "SecurityGroups": ["Type: A list of security groups. The list can contain the IDs of existing EC2 security groups or references to AWS::EC2::SecurityGroup resources created in the template."],
                "SpotPrice": "String. The spot price for this Auto Scaling group. If a spot price is set, then the Auto Scaling group will launch when the current spot price is less than the amount specified in the template. When you have specified a spot price for an Auto Scaling group, the group will only launch when the spot price has been met, regardless of the setting in the Auto Scaling group's DesiredCapacity.",
                "UserData": "The user data available to the launched EC2 instances."
            }
        };
        this.ag_lifecyclehook = {
            "Type": "AWS::AutoScaling::LifecycleHook",
            "Properties": {
                "AutoScalingGroupName": "*String",
                "DefaultResult": "The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. Valid values are CONTINUE and ABANDON (default).",
                "HeartbeatTimeout": "The amount of time (in seconds) that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.",
                "LifecycleHookName": "String",
                "LifecycleTransition": "*String. The state of the Amazon EC2 instance to which you want to attach the lifecycle hook. autoscaling:EC2_INSTANCE_LAUNCHING| autoscaling:EC2_INSTANCE_TERMINATING. This parameter is required for new lifecycle hooks, but optional when updating existing hooks. ",
                "NotificationMetadata": "String. Additional information that you want to include when Amazon EC2 Auto Scaling sends a message to the notification target.",
                "NotificationTargetARN": "String. The Amazon resource name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.",
                "RoleARN": "String. The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. The role requires permissions to Amazon SNS and Amazon SQS."
            }
        };
        this.ag_scalingpolicy = {
            "Type": "AWS::AutoScaling::ScalingPolicy",
            "Properties": {
                "AdjustmentType": "String. Specifies whether the ScalingAdjustment is an absolute number or a percentage of the current capacity. Valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.",
                "AutoScalingGroupName": "*String. The name or Amazon Resource Name (ARN) of the Auto Scaling group that you want to attach the policy to.",
                "Cooldown": "String. The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. Do not specify this property if you are using the StepScaling policy type.",
                "EstimatedInstanceWarmup": "Integer. The estimated time, in seconds, until a newly launched instance can send metrics to CloudWatch. By default, Amazon EC2 Auto Scaling uses the cooldown period, as specified in the Cooldown property. Do not specify this property if you are using the SimpleScaling policy type.",
                "MetricAggregationType": "String. The aggregation type for the CloudWatch metrics. You can specify Minimum, Maximum, or Average. By default, AWS CloudFormation specifies Average. Do not specify this property if you are using the SimpleScaling policy type.",
                "MinAdjustmentMagnitude": "Integer. For the PercentChangeInCapacity adjustment type, the minimum number of instances to scale. The scaling policy changes the desired capacity of the Auto Scaling group by a minimum of this many instances. This property replaces the MinAdjustmentStep property.",
                "PolicyType": "String. An Auto Scaling policy type. You can specify SimpleScaling, StepScaling, or TargetTrackingScaling. By default, AWS CloudFormation specifies SimpleScaling. ",
                "ScalingAdjustment": "**Integer. This property is required if the policy type is SimpleScaling. This property is not supported with any other policy type. The number of instances by which to scale. The AdjustmentType property determines if AWS CloudFormation interprets this number as an absolute number (when the ExactCapacity value is specified), increase or decrease capacity by a specified number (when the ChangeInCapacity value is specified), or increase or decrease capacity as a percentage of the existing Auto Scaling group size (when the PercentChangeInCapacity value is specified). A positive value adds to the current capacity and a negative value subtracts from the current capacity. For exact capacity, you must specify a positive value.",
                "StepAdjustments": ["**Type: List of Amazon EC2 Auto Scaling ScalingPolicy StepAdjustments. This property is required if the policy type is StepScaling. This property is not supported with any other policy type.##"],
                "TargetTrackingConfiguration": { "info": "**Type: Amazon EC2 Auto Scaling ScalingPolicy TargetTrackingConfiguration This property is required if the policy type is TargetTrackingScaling. This property is not supported with any other policy type. ##" }
            }
        };
        this.ag_scheduledAction = {
            "Type": "AWS::AutoScaling::ScheduledAction",
            "Properties": {
                "AutoScalingGroupName": "*String",
                "DesiredCapacity": "**Integer. The number of Amazon EC2 instances that should be running in the Auto Scaling group. At least one of MaxSize, MinSize, or DesiredCapacity must be specified.",
                "EndTime": "The time in UTC for this schedule to end. For example, 2010-06-01T00:00:00Z",
                "MaxSize": "**Integer. The maximum number of Amazon EC2 instances in the Auto Scaling group. At least one of MaxSize, MinSize, or DesiredCapacity must be specified.",
                "MinSize": "**Integer. The minimum number of Amazon EC2 instances in the Auto Scaling group. At least one of MaxSize, MinSize, or DesiredCapacity must be specified.",
                "Recurrence": "String. Specifying the StartTime and EndTime properties with Recurrence property forms the start and stop boundaries of the recurring action.",
                "StartTime": "The time in UTC for this schedule to start. For example, 2010-06-01T00:00:00Z."
            }
        };
        this.elbv2_listener = {
            "Type": "AWS::ElasticLoadBalancingV2::Listener",
            "Properties": {
                "Certificates": ["**Type: List of Elastic Load Balancing V2 Certificate##"],
                "DefaultActions": ["*Type: List of Elastic Load Balancing V2 Action##"],
                "LoadBalancerArn": "*String",
                "Port": "*Integer. Valid Range: Minimum value of 1. Maximum value of 65535.",
                "Protocol": "*String. Valid Values: HTTP | HTTPS | TCP | TLS",
                "SslPolicy": "String. [HTTPS and TLS listeners] The security policy that defines the ciphers and protocols that the listener supports. The default is the current predefined security policy."
            }
        };
        this.elbv2_listenercertificate = {
            "Type": "AWS::ElasticLoadBalancingV2::ListenerCertificate",
            "Properties": {
                "Certificates": ["* Type: List of Certificate##"],
                "ListenerArn": "*String. The Amazon Resource Name (ARN) of the listener."
            }
        };
        this.elbv2_listenerrule = {
            "Type": "AWS::ElasticLoadBalancingV2::ListenerRule",
            "Properties": {
                "Actions": ["*Type: List of Elastic Load Balancing V2 Actions##"],
                "Conditions": ["*Type: List of Elastic Load Balancing V2 Conditions##"],
                "ListenerArn": "*String. The Amazon Resource Name (ARN) of the listener.",
                "Priority": "*Integer. The priority for the rule. Elastic Load Balancing evaluates rules in priority order, from the lowest value to the highest value. If a request satisfies a rule, Elastic Load Balancing ignores all subsequent rules. Valid Range: Minimum value of 1. Maximum value of 50000."
            }
        };
        this.elbv2_loadbalancer = {
            "Type": "AWS::ElasticLoadBalancingV2::LoadBalancer",
            "Properties": {
                "IpAddressType": "String. [Application Load Balancers] The type of IP addresses that are used by the load balancer's subnets, such as ipv4 (for IPv4 addresses) or dualstack (for IPv4 and IPv6 addresses).The default value is ipv4. If Scheme is internal, then IpAddressType must be ipv4. Valid Values: ipv4 | dualstack ",
                "LoadBalancerAttributes": ["Type: A list of Elastic Load Balancing V2 LoadBalancerAttributes##."],
                "Name": "String. A name for the load balancer. This name must be unique within your AWS account and can have a maximum of 32 alphanumeric characters and hyphens. A name can't begin or end with a hyphen. ",
                "Scheme": "String. Specifies whether the load balancer is internal or Internet-facing. Valid values are internet-facing and internal. The default is internet-facing. The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer. ",
                "SecurityGroups": ["Type: List of String values. [Application Load Balancers] The IDs of the security groups to assign to the load balancer."],
                "SubnetMappings": ["Type: List of Elastic Load Balancing V2 SubnetMapping. The subnets to attach to the load balancer, specified as a list of SubnetMapping property types. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify your own Elastic IP addresses. [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet. ##"],
                "Subnets": ["Type: List of String values. The subnets to attach to the load balancer, specified as a list of subnet IDs. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones."],
                "Type": "String. The type of load balancer to create. Valid values are application and network. The default is application. "
            }
        };
        this.elbv2_targetgroup = {
            "Type": "AWS::ElasticLoadBalancingV2::TargetGroup",
            "Properties": {
                "HealthCheckIntervalSeconds": "Integer. The approximate number of seconds between health checks for an individual target. Valid Range: Minimum value of 5. Maximum value of 300.",
                "HealthCheckPath": "[HTTP/HTTPS health checks] The ping path destination where Elastic Load Balancing sends health check requests. The default is /. ",
                "HealthCheckPort": "String. The port that the load balancer uses when performing health checks on the targets. The default is traffic-port, which is the port on which each target receives traffic from the load balancer. ",
                "HealthCheckProtocol": "String. Valid Values: HTTP | HTTPS | TCP | TLS. The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers, the default is TCP. The TCP protocol is supported for health checks only if the protocol of the target group is TCP or TLS. The TLS protocol is not supported for health checks. ",
                "HealthCheckTimeoutSeconds": "Integer. The number of seconds to wait for a response before considering that a health check has failed. For Application Load Balancers, the range is 2–60 seconds and the default is 5 seconds. For Network Load Balancers, this value is 10 seconds for TCP and HTTPS health checks and 6 seconds for HTTP health checks. ",
                "HealthyThresholdCount": "Integer. The number of consecutive successful health checks that are required before an unhealthy target is considered healthy. ",
                "Matcher": { "info": " Type: Elastic Load Balancing V2 Matcher. [HTTP/HTTPS health checks] The HTTP codes that a healthy target uses when responding to a health check. ##" },
                "Name": "String. This name must be unique per account, per region.",
                "Port": "*Integer. The port on which the targets receive traffic.",
                "Protocol": "*String. The protocol to use for routing traffic to the targets.",
                "TargetGroupAttributes": ["Type: List of Elastic Load Balancing V2 TargetGroupAttributes ##"],
                "Targets": ["Type: List of Elastic Load Balancing V2 TargetDescription##"],
                "TargetType": "String. The type of targets that you must specify when registering targets with this target group. ",
                "UnhealthyThresholdCount": "Integer. The number of consecutive failed health checks that are required before a target is considered unhealthy.",
                "VpcId": "String"
            }
        };
        //certificate manager
        this.acm_certificate = {
            "Type": "AWS::CertificateManager::Certificate",
            "Properties": {
                "DomainName": "*String. Fully qualified domain name (FQDN), such as www.example.com, of the site that you want to secure with the ACM certificate. To protect several sites in the same domain, use an asterisk (*) to specify a wildcard. For example, *.example.com protects www.example.com, site.example.com, and images.example.com. ",
                "DomainValidationOptions": ["Type: List of AWS Certificate Manager Certificate DomainValidationOption.  ##"],
                "SubjectAlternativeNames": ["Type: List of String values. FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, you can add www.example.net to a certificate for the www.example.com domain name so that users can reach your site by using either name. "],
                "ValidationMethod": "String. The method you want to use if you are requesting a public certificate to validate that you own or control a domain. Valid values include EMAIL or DNS. We recommend that you use DNS validation. The default is EMAIL. ACM uses CNAME (Canonical Name) records to validate that you own or control a domain. When you choose DNS validation, ACM provides you one or more CNAME records to insert into your DNS database. During stack creation, CloudFormation emits a CREATE_IN_PROGRESS event which lists these CNAME records. They are displayed in the Status reason column on the Events page for the stack. "
            }
        };
        //dynamodb
        this.dynamodb_table = {
            "Type": "AWS::DynamoDB::Table",
            "Properties": {
                "AttributeDefinitions": ["*Type: List of AttributeDefinition.A list of attributes that describe the key schema for the table and indexes. Duplicates are allowed ##"],
                "BillingMode": "String. Specify how you are charged for read and write throughput and how you manage capacity. If not specified, the default is PROVISIONED. PROVISIONED: Sets the billing mode to PROVISIONED. We recommend using PROVISIONED for predictable workloads. PAY_PER_REQUEST: Sets the billing mode to PAY_PER_REQUEST. We recommend using PAY_PER_REQUEST for unpredictable workloads.",
                "GlobalSecondaryIndexes": ["Type: List of GlobalSecondaryIndex. Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes. If you update a table to include a new global secondary index, AWS CloudFormation initiates the index creation and then proceeds with the stack update. AWS CloudFormation doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is ACTIVE. You can track its status by using the DynamoDB DescribeTable command. If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index. Updates are not supported. The following are exceptions: 1. If you update only the provisioned throughput values of global secondary indexes, you can update the table without interruption. 2. You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails ##"],
                "KeySchema": ["*Type: List of KeySchema. Specifies the attributes that make up the primary key for the table. The attributes in the KeySchema property must also be defined in the AttributeDefinitions property. ##"],
                "LocalSecondaryIndexes": ["Type: List of LocalSecondaryIndex. Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes##"],
                "PointInTimeRecoverySpecification": { "info": "Type: PointInTimeRecoverySpecification. The settings used to enable point in time recovery.##" },
                "ProvisionedThroughput": { "info": "**Type: ProvisionedThroughput. Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits.Conditional. If you set BillingMode as PROVISIONED, you must specify this property. If you set BillingMode as PAY_PER_REQUEST, you cannot specify this property. ##" },
                "SSESpecification": { "info": "Type: DynamoDB Table SSESpecification##" },
                "StreamSpecification": { "info": "Type: StreamSpecification##" },
                "TableName": "String. A name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name. ",
                "TimeToLiveSpecification": { "info": "Type: TimeToLiveSpecification##" }
            }
        };
        //sqs
        this.sqs_queue = {
            "Type": "AWS::SQS::Queue",
            "Properties": {
                "ContentBasedDeduplication": "Boolean. For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, Amazon SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message.",
                "DelaySeconds": "Integer. The time in seconds that the delivery of all messages in the queue is delayed. You can specify an integer value of 0 to 900 (15 minutes). The default value is 0. ",
                "FifoQueue": "Boolean. If set to true, creates a FIFO queue. If you don't specify this property, Amazon SQS creates a standard queue. ",
                "KmsMasterKeyId": "String. The ID of an AWS managed customer master key (CMK) for Amazon SQS or a custom CMK. To use the AWS managed CMK for Amazon SQS, specify the alias alias/aws/sqs. ",
                "KmsDataKeyReusePeriodSeconds": "Integer. The length of time in seconds that Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes). ",
                "MaximumMessageSize": "Integer. The limit of how many bytes that a message can contain before Amazon SQS rejects it. You can specify an integer value from 1024 bytes (1 KiB) to 262144 bytes (256 KiB). The default value is 262144 (256 KiB). ",
                "MessageRetentionPeriod": "Integer. The number of seconds that Amazon SQS retains a message. You can specify an integer value from 60 seconds (1 minute) to 1209600 seconds (14 days). The default value is 345600 seconds (4 days). ",
                "QueueName": "String. A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the .fifo suffix. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
                "ReceiveMessageWaitTimeSeconds": "Integer. Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, as opposed to returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. ",
                "RedrivePolicy": { "info": "Specifies an existing dead letter queue to receive messages after the source queue (this queue) fails to process a message a specified number of times. ##" },
                "VisibilityTimeout": "Integer. The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue. "
            }
        };
        this.sqs_queuepolicy = {
            "Type": "AWS::SQS::QueuePolicy",
            "Properties": {
                "PolicyDocument": { "info": "*A policy document that contains the permissions for the specified Amazon SQS queues. Use AWS policy generator to create one." },
                "Queues": ["*Type: List of String values . The URLs of the queues to which you want to add the policy. "]
            }
        };
        //sns
        this.sns_subscription = {
            "Type": "AWS::SNS::Subscription",
            "Properties": {
                "DeliveryPolicy": { "info": "The JSON serialization of the subscription's delivery policy. Use AWS policy generator to create the policy." },
                "Endpoint": "String. The endpoint that receives notifications from the Amazon SNS topic. The endpoint value depends on the protocol that you specify. For the http protocol, the endpoint is an URL beginning with 'https://' For the https protocol, the endpoint is a URL beginning with 'https://' .For the email protocol, the endpoint is an email address. For the email-json protocol, the endpoint is an email address. For the sms protocol, the endpoint is a phone number of an SMS-enabled device. For the sqs protocol, the endpoint is the ARN of an Amazon SQS queue. For the application protocol, the endpoint is the EndpointArn of a mobile app and device. For the lambda protocol, the endpoint is the ARN of an AWS Lambda function.",
                "FilterPolicy": { "info": "The filter policy JSON that is assigned to the subscription. Use AWS policy generator to create the policy." },
                "Protocol": "*String. http – delivery of JSON-encoded message via HTTP POST. https – delivery of JSON-encoded message via HTTPS POST . email – delivery of message via SMTP. email-json – delivery of JSON-encoded message via SMTP. sms – delivery of message via SMS. sqs – delivery of JSON-encoded message to an Amazon SQS queue. application – delivery of JSON-encoded message to an EndpointArn for a mobile app and device.   lambda – delivery of JSON-encoded message to an AWS Lambda function.",
                "RawMessageDelivery": "Boolean. true if raw message delivery is enabled for the subscription. Raw messages are free of JSON formatting and can be sent to HTTP/S and Amazon SQS endpoints.",
                "Region": "String. For cross-region subscriptions, the region in which the topic resides. ",
                "TopicArn": "*String. The Amazon Resource Name (ARN) of the topic to subscribe to."
            }
        };
        this.sns_topic = {
            "Type": "AWS::SNS::Topic",
            "Properties": {
                "DisplayName": "A developer-defined string that can be used to identify this SNS topic.",
                "KmsMasterKeyId": "String. An AWS KMS key identifier. This can be a key ID, key ARN, or key alias.",
                "Subscription": ["Type: List of SNS Subscriptions##"],
                "TopicName": "A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name. "
            }
        };
        this.sns_topicpolicy = {
            "Type": "AWS::SNS::TopicPolicy",
            "Properties": {
                "PolicyDocument": { "info": "A JSON policy document. Please use aws policy generator to create the policy." },
                "Topics": ["Type: A list of Amazon SNS topics ARNs"]
            }
        };
        // serverless_function={
        //   "Type":"AWS::Serverless::Function",
        //   "Properties":{
        //     "Globals":{"info":"Note: Globals is NOT a property but a section. in your SAM template to define properties common to all your Serverless Function and APIs ##"},
        //     "Handler":"**String. Function within your code that is called to begin execution. It can be specified in Globals or overridden here.",
        //     "Runtime":"**String. The runtime environment. It can be specified in Globals or overridden here.",
        //     "CodeUri":"** string | S3 Location Object. Either CodeUri or InlineCode must be specified. S3 Uri or location to the function code. The S3 object this Uri references MUST be a Lambda deployment package.##. Either InlineCode or CodeUri must be specified. ",
        //     "InlineCode": "** string. Either CodeUri or InlineCode must be specified. The inline code for the lambda.",
        //     "FunctionName": "string. A name for the function. If you don't specify a name, a unique name will be generated for you.",
        //     "Description": "string",
        //     "MemorySize": "Number. Size of the memory allocated per invocation of the function in MB. Defaults to 128.",
        //     "Timeout": "**Number. Maximum time that the function can run before it is killed in seconds. Defaults to 3. It can be specified in Globals or overridden here.",
        //     "Role":"string. ARN of an IAM role to use as this function's execution role. If omitted, a default role is created for this function.",
        //     "Policies":["list of strings | list of iam policy document objects | list of SAM policy templates. Names of AWS managed IAM policies or IAM policy documents or SAM Policy Templates that this function needs, which should be appended to the default role for this function. If the Role property is set, this property has no meaning.##"],
        //     "PermissionsBoundary":"**string. ARN of a permissions boundary to use for this function's execution role.",
        //     "Environment":" ** Function environment object. Configuration for the runtime environment.##",
        //     "VpcConfig": "VPC config object. Configuration to enable this function to access private resources within your VPC.##",
        //   }
        // }
        //ecs
        this.ecs_cluster = {
            "Type": "AWS::ECS::Cluster",
            "Properties": {
                "ClusterName": "String. A user-generated string that you use to identify your cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name. Update requires: Replacement"
            }
        };
        this.ecs_service = {
            "Type": "AWS::ECS::Service",
            "Properties": {
                "Cluster": "String. The short name or full Amazon Resource Name (ARN) of the cluster on which to run your service. If you do not specify a cluster, the default cluster is assumed.",
                "DeploymentConfiguration": { "info": "Type: DeploymentConfiguration. Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.##" },
                "DesiredCount": "Integer. The number of instantiations of the specified task definition to place and keep running on your cluster.",
                "HealthCheckGracePeriodSeconds": "Integer. The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 2,147,483,647 seconds. During that time, the ECS service scheduler ignores health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.",
                "LaunchType": "String. Allowed Values: EC2 | FARGATE",
                "LoadBalancers": ["Type: List of LoadBalancer. A list of load balancer objects to associate with the cluster. If you specify the Role property, LoadBalancers must be specified as well.##"],
                "NetworkConfiguration": { "info": " Type: NetworkConfiguration. The network configuration for the service. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it is not supported for other network modes. ##" },
                "PlacementConstraints": ["Type: List of PlacementConstraint. An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at runtime).##"],
                "PlacementStrategies": ["Type: List of PlacementStrategy. The placement strategy objects to use for tasks in your service. You can specify a maximum of five strategy rules per service.##"],
                "PlatformVersion": "String. The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.",
                "Role": "String. The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition does not use the awsvpc network mode. If you specify the role parameter, you must also specify a load balancer object with the loadBalancers parameter. Important: If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here. The service-linked role is required if your task definition uses the awsvpc network mode, in which case you should not specify a role here. If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. ",
                "SchedulingStrategy": "String. Allowed Values: DAEMON | REPLICA . REPLICA-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service is using the CODE_DEPLOY or EXTERNAL deployment controller types. DAEMON-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. Tasks using the Fargate launch type or the CODE_DEPLOY or EXTERNAL deployment controller types don't support the DAEMON scheduling strategy.",
                "ServiceName": "String. The name of your service. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.",
                "ServiceRegistries": ["Type: List of ServiceRegistry. The details of the service discovery registries to assign to this service. Service discovery is supported for Fargate tasks if you are using platform version v1.1.0 or later.##"],
                "TaskDefinition": "*String. The family and revision (family:revision) or full ARN of the task definition to run in your service. If a revision is not specified, the latest ACTIVE revision is used. A task definition must be specified if the service is using the ECS deployment controller."
            }
        };
        this.ecs_taskdefinition = {
            "Type": "AWS::ECS::TaskDefinition",
            "Properties": {
                "ContainerDefinitions": ["Type: List of ContainerDefinition. A list of container definitions in JSON format that describe the different containers that make up your task.##"],
                "Cpu": "String. The number of cpu units used by the task. If you are using the EC2 launch type, this field is optional and any value can be used. If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the memory parameter: 256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB). 512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB). 1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB). 2048 (2 vCPU) - Available memory values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB). 4096 (4 vCPU) - Available memory values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB).",
                "ExecutionRoleArn": "String. The Amazon Resource Name (ARN) of the task execution role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.",
                "Family": "String. The name of a family that this task definition is registered to. A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add. To use revision numbers when you update a task definition, specify this property. If you don't specify a value, AWS CloudFormation generates a new task definition each time that you update it.",
                "Memory": "String. The amount (in MiB) of memory used by the task. If using the EC2 launch type, this field is optional and any value can be used. If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the cpu parameter: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU) | 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU) | 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU) | Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU) | Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)",
                "NetworkMode": "String. Allowed Values: awsvpc | bridge | host | none. The Docker networking mode to use for the containers in the task. The valid values are none, bridge, awsvpc, and host. The default Docker network mode is bridge. If you are using the Fargate launch type, the awsvpc network mode is required. If you are using the EC2 launch type, any network mode can be used. If the network mode is set to none, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The host and awsvpc network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the bridge mode. With the host and awsvpc network modes, exposed container ports are mapped directly to the corresponding host port (for the host network mode) or the attached elastic network interface port (for the awsvpc network mode), so you cannot take advantage of dynamic host port mappings. If the network mode is awsvpc, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration value when you create a service or run a task with the task definition. Currently, only Amazon ECS-optimized AMIs, other Amazon Linux variants with the ecs-init package, or AWS Fargate infrastructure support the awsvpc network mode. If the network mode is host, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used. Docker for Windows uses different network modes than Docker for Linux. When you register a task definition with Windows containers, you must not specify a network mode. If you use the console to register a task definition with Windows containers, you must choose the <default> network mode object.",
                "PlacementConstraints": ["Type: List of TaskDefinitionPlacementConstraint. An array of placement constraint objects to use for tasks. This field is not valid if you are using the Fargate launch type for your task. ##"],
                "RequiresCompatibilities": ["list of strings. The launch type the task requires. If no value is specified, it will default to EC2. Valid values include EC2 and FARGATE."],
                "TaskRoleArn": "String. IAM roles for tasks on Windows require that the -EnableTaskIAMRole option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code in order to take advantage of the feature.",
                "Volumes": ["Type: List of Volume. If your tasks are using the Fargate launch type, the host and sourcePath parameters are not supported. ##"]
            }
        };
        this.cloudtrail_trail = {
            "Type": "AWS::CloudTrail::Trail",
            "Properties": {
                "CloudWatchLogsLogGroupArn": "**String. Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.",
                "CloudWatchLogsRoleArn": "**String. Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.",
                "EnableLogFileValidation": "Boolean. Specifies whether log file validation is enabled. The default is false. When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.",
                "EventSelectors": ["Type: List of EventSelector. Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.  ##"],
                "IncludeGlobalServiceEvents": "Boolean. Specifies whether the trail is publishing events from global services such as IAM to the log files.",
                "IsLogging": "*Boolean. Whether the CloudTrail is currently logging AWS API calls.",
                "IsMultiRegionTrail": "Boolean. Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.",
                "KMSKeyId": "String. Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. ",
                "S3BucketName": "*String. Specifies the name of the Amazon S3 bucket designated for publishing log files.",
                "S3KeyPrefix": "String. Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. ",
                "SnsTopicName": "String. Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.",
                "TrailName": "String. Specifies the name of the trail or trail ARN. e.g. arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail"
            }
        };
        this.cw_alarm = {
            "Type": "AWS::CloudWatch::Alarm",
            "Properties": {
                "ActionsEnabled": "Boolean. Indicates whether actions should be executed during any changes to the alarm state.",
                "AlarmActions": ["Type: List of String. Maximum : 5. The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN). "],
                "AlarmDescription": "String. Description of the alarm.",
                "AlarmName": "String. The name of the alarm. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the alarm name. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
                "ComparisonOperator": "*String. Allowed Values: GreaterThanOrEqualToThreshold | GreaterThanThreshold | LessThanOrEqualToThreshold | LessThanThreshold. The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.",
                "DatapointsToAlarm": "Integer. The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an 'M out of N' alarm. In that case, this value is the M. ",
                "Dimensions": ["Type: List of Dimension. The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify Dimensions. Instead, you use Metrics.  ## "],
                "EvaluateLowSampleCountPercentile": "String. Used only for alarms based on percentiles. If ignore, the alarm state does not change during periods with too few data points to be statistically significant. If evaluate or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.",
                "EvaluationPeriods": "*Integer. The number of periods over which data is compared to the specified threshold.",
                "ExtendedStatistic": "String. The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100. Pattern: p(\\d{1,2}(\\.\\d{0,2})?|100)",
                "InsufficientDataActions": ["List of string. The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN)."],
                "MetricName": "String. The name of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you use Metrics instead and you can't specify MetricName.",
                "Metrics": ["Type: List of MetricDataQuery. An array that enables you to create an alarm based on the result of a metric math expression. Each item in the array either retrieves a metric or performs a math expression. If you specify the Metrics parameter, you cannot specify MetricName, Dimensions, Period, Namespace, Statistic, or ExtendedStatistic.  ##"],
                "Namespace": "String. The namespace of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify Namespace and you use Metrics instead.",
                "OKActions": ["List of string. The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN)."],
                "Period": "Integer. The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify Period, and instead you use the Metrics parameter.",
                "Statistic": "String. Allowed Values: Average | Maximum | Minimum | SampleCount | Sum. The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ExtendedStatistic.",
                "Threshold": "*Double. The value to compare with the specified statistic.",
                "TreatMissingData": "String. Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. If you omit this parameter, the default behavior of missing is used.",
                "Unit": "Allowed Values: Bits | Bits/Second | Bytes | Bytes/Second | Count | Count/Second | Gigabits | Gigabits/Second | Gigabytes | Gigabytes/Second | Kilobits | Kilobits/Second | Kilobytes | Kilobytes/Second | Megabits | Megabits/Second | Megabytes | Megabytes/Second | Microseconds | Milliseconds | None | Percent | Seconds | Terabits | Terabits/Second | Terabytes | Terabytes/Second"
            }
        };
        this.cw_dashboard = {
            "Type": "AWS::CloudWatch::Dashboard",
            "Properties": {
                "DashboardBody": "*String. The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.",
                "DashboardName": "String. The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically."
            }
        };
        this.cwlogs_destination = {
            "Type": "AWS::Logs::Destination",
            "Properties": {
                "DestinationName": "*String",
                "DestinationPolicy": { "info": "*An IAM policy document that governs which AWS accounts can create subscription filters against this destination. Please use IAM policy generator to generate the policy." },
                "RoleArn": "*String. The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource.",
                "TargetArn": "*String. The Amazon Resource Name (ARN) of the physical target to where the log events are delivered (for example, a Kinesis stream)."
            }
        };
        this.cwlogs_loggroup = {
            "Type": "AWS::Logs::LogGroup",
            "Properties": {
                "LogGroupName": "String. The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.",
                "RetentionInDays": "Integer. The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653."
            }
        };
        this.cwlogs_logstream = {
            "Type": "AWS::Logs::LogStream",
            "Properties": {
                "LogGroupName": "*String",
                "LogStreamName": "String"
            }
        };
        this.cwlogs_metricfilter = {
            "Type": "AWS::Logs::MetricFilter",
            "Properties": {
                "FilterPattern": "*String. A filter pattern for extracting metric data out of ingested log events.",
                "LogGroupName": "*String. The name of an existing log group that you want to associate with this metric filter. ",
                "MetricTransformations": ["Type: List of MetricTransformation##"]
            }
        };
        this.cwlogs_subscriptionfilter = {
            "Type": "AWS::Logs::SubscriptionFilter",
            "Properties": {
                "DestinationArn": "*String",
                "FilterPattern": "*String. The filtering expressions that restrict what gets delivered to the destination AWS resource. ",
                "LogGroupName": "*String. The log group to associate with the subscription filter. All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.",
                "RoleArn": "String. The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream."
            }
        };
        this.cwevents_eventbuspolicy = {
            "Type": "AWS::Events::EventBusPolicy",
            "Properties": {
                "Action": "*String. The action that you are enabling the other account to perform. Currently, this must be events:PutEvents.",
                "Condition": { "info": "Condition is a JSON string that you can use to limit the event bus permissions that you're granting only to accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. If you specify Condition with an AWS organization ID and specify '*' as the value for Principal, you grant permission to all the accounts in the named organization. ##" },
                "Principal": "*String. The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify '*' to permit any account to put events to your default event bus. If you specify '*'' without specifying Condition, avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an account field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.",
                "StatementId": "*String. An identifier string for the external account that you're granting permissions to. If you later want to revoke the permission for this external account, you must specify this StatementId."
            }
        };
        this.cwevents_rule = {
            "Type": "AWS::Events::Rule",
            "Properties": {
                "Description": "String",
                "EventPattern": { "info": "Describes which events CloudWatch Events routes to the specified target. For more information, see Event Patterns in CloudWatch Events in the Amazon CloudWatch Events User Guide. " },
                "Name": "String. The name of the rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
                "RoleArn": "String. The Amazon Resource Name (ARN) of the role that is used for target invocation.",
                "ScheduleExpression": "String. The scheduling expression that determines when and how often the rule runs.",
                "State": "String. Indicates whether the rule is enabled. Allowed Values: DISABLED | ENABLED",
                "Targets": ["Type: List of Target. The resources that CloudWatch Events routes events to and invokes when the rule is triggered.  If you're setting the event bus of another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a RoleArn with proper permissions in the Target structure. ##"]
            }
        };
        this.eks_cluster = {
            "Type": "AWS::EKS::Cluster",
            "Properties": {
                "Name": "String",
                "ResourcesVpcConfig": { "info": "*Type: ResourcesVpcConfig. The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane. ##" },
                "RoleArn": "*String. The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. ",
                "Version": "String. The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used."
            }
        };
        this.efs_filesystem = {
            "Type": "AWS::EFS::FileSystem",
            "Properties": {
                "Encrypted": "**Boolean. A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, /aws/elasticfilesystem, is used to protect the encrypted file system.",
                "FileSystemTags": ["Type: List of ElasticFileSystemTag. A value that specifies to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a 'Key':'Name','Value':'{value}' key-value pair. ##"],
                "KmsKeyId": "String. The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. If KmsKeyId is specified, the Encrypted parameter must be set to true.",
                "PerformanceMode": "String. The performance mode of the file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. Allowed Values: generalPurpose | maxIO",
                "ProvisionedThroughputInMibps": "**Double. The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if ThroughputMode is set to provisioned. The upper limit for throughput is 1024 MiB/s. You can get this limit increased by contacting AWS Support.",
                "ThroughputMode": "String. The throughput mode for the file system to be created. There are two throughput modes to choose from for your file system: bursting and provisioned. If you set ThroughputMode to provisioned, you must also set a value for ProvisionedThroughPutInMibps. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. Allowed Values: bursting | provisioned"
            }
        };
        this.efs_mounttarget = {
            "Type": "AWS::EFS::MountTarget",
            "Properties": {
                "FileSystemId": "*String. The ID of the file system for which to create the mount target.",
                "IpAddress": "String. Valid IPv4 address within the address range of the specified subnet.",
                "SecurityGroups": ["Type: List of String. Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for the same VPC as subnet specified."],
                "SubnetId": "*String"
            }
        };
        this.s3_bucket = {
            "Type": "AWS::S3::Bucket",
            "Properties": {
                "AccelerateConfiguration": { "info": "Type: AccelerateConfiguration. Configures the transfer acceleration state for an Amazon S3 bucket.##" },
                "AccessControl": "String. A canned access control list (ACL) that grants predefined permissions to the bucket. valid values : private | public-read | public-read-write | aws-exec-read | authenticated-read | bucket-owner-read | bucket-owner-full-control | log-delivery-write",
                "AnalyticsConfigurations": ["Type: List of AnalyticsConfiguration. Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket. ##"],
                "BucketEncryption": { "info": "Type: BucketEncryption. Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS) bucket. ##" },
                "BucketName": "String. A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name.",
                "CorsConfiguration": { "info": "Type: CorsConfiguration. Describes the cross-origin access configuration for objects in an Amazon S3 bucket. ##" },
                "InventoryConfigurations": ["Type: List of InventoryConfiguration. Specifies the inventory configuration for an Amazon S3 bucket.##"],
                "LifecycleConfiguration": { "info": "Type: LifecycleConfiguration. Specifies the lifecycle configuration for objects in an Amazon S3 bucket.##" },
                "LoggingConfiguration": { "info": "Type: LoggingConfiguration. Settings that define where logs are stored. ##" },
                "MetricsConfigurations": ["List of MetricsConfiguration,Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration.##"],
                "NotificationConfiguration": { "info": "Type: NotificationConfiguration. Configuration that defines how Amazon S3 handles bucket notifications.##" },
                "PublicAccessBlockConfiguration": { "info": "Type: PublicAccessBlockConfiguration. Configuration that defines how Amazon S3 handles public access.##" },
                "ReplicationConfiguration": { "info": "Type: ReplicationConfiguration. Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the VersioningConfiguration property. Amazon S3 can store replicated objects in only one destination bucket. The destination bucket must already exist and be in a different AWS Region than your source bucket.##" },
                "VersioningConfiguration": { "info": "Type: VersioningConfiguration. Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.##" },
                "WebsiteConfiguration": { "info": "Type: WebsiteConfiguration. Information used to configure the bucket as a static website. ##" }
            }
        };
        this.s3_bucketpolicy = {
            "Type": "AWS::S3::BucketPolicy",
            "Properties": {
                "Bucket": "*String. The name of the Amazon S3 bucket to which the policy applies.",
                "PolicyDocument": { "info": "*Type: Json. A policy document containing permissions to add to the specified bucket. Please use AWS Policy Generator to generate policies." }
            }
        };
        this.ecr_repository = {
            "Type": "AWS::ECR::Repository",
            "Properties": {
                "LifecyclePolicy": { "info": "Lifecycle Policy ##" },
                "RepositoryName": "String. The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name,",
                "RepositoryPolicyText": { "info": "Type : Json. Create a policy using AWS IAM policy generator" }
            }
        };
        this.cfn_customresource = {
            "Type": "AWS::CloudFormation::CustomResource",
            "Properties": {
                "ServiceToken": "*String, The service token that was given to the template developer by the service provider to access the service, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same region in which you are creating the stack."
            }
        };
        this.cfn_macro = {
            "Type": "AWS::CloudFormation::Macro",
            "Properties": {
                "Description": "String. A description of the macro.",
                "FunctionName": "*String. The Amazon Resource Name (ARN) of the underlying AWS Lambda function that you want AWS CloudFormation to invoke when the macro is run.",
                "LogGroupName": "String. The Amazon CloudWatch log group to which AWS CloudFormation sends error logging information when invoking the macro's underlying AWS Lambda function.",
                "LogRoleARN": "String. The ARN of the role AWS CloudFormation should assume when sending log entries to CloudWatch logs.",
                "Name": "*String. The name of the macro. The name of the macro must be unique across all macros in the account."
            }
        };
        this.cfn_stack = {
            "Type": "AWS::CloudFormation::Stack",
            "Properties": {
                "NotificationARNs": ["List of strings. The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the SNS console or your Command Line Interface (CLI). Maximum : 5"],
                "Parameters": { "info": "** Type: map of string. The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created. Each parameter has a name corresponding to a parameter defined in the embedded template and a value representing the value that you want to set for the parameter. Note: If you use the Ref function to pass a parameter value to a nested stack, comma-delimited list parameters must be of type String. In other words, you cannot pass values that are of type CommaDelimitedList to nested stacks. Whether an update causes interruptions depends on the resources that are being updated. An update never causes a nested stack to be replaced." },
                "TemplateURL": "*String, Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.",
                "TimeoutInMinutes": "Integer, The length of time, in minutes, that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. The default is no timeout. When CloudFormation detects that the nested stack has reached the CREATE_COMPLETE state, it marks the nested stack resource as CREATE_COMPLETE in the parent stack and resumes creating the parent stack. If the timeout period expires before the nested stack reaches CREATE_COMPLETE, CloudFormation marks the nested stack as failed and rolls back both the nested stack and parent stack."
            }
        };
        this.cfn_waitcondition = {
            "Type": "AWS::CloudFormation::WaitCondition",
            "Properties": {
                "Count": "Integer. The number of success signals that CloudFormation must receive before it continues the stack creation process. When the wait condition receives the requisite number of success signals, CloudFormation resumes the creation of the stack. If the wait condition does not receive the specified number of success signals before the Timeout period expires, CloudFormation assumes that the wait condition has failed and rolls the stack back.",
                "Handle": "String. A reference to the wait condition handle used to signal this wait condition. Use the Ref intrinsic function to specify an AWS::CloudFormation::WaitConditionHandle resource. Anytime you add a WaitCondition resource during a stack update, you must associate the wait condition with a new WaitConditionHandle resource. Do not reuse an old wait condition handle that has already been defined in the template. If you reuse a wait condition handle, the wait condition might evaluate old signals from a previous create or update stack command.",
                "Timeout": "String. The length of time (in seconds) to wait for the number of signals that the Count property specifies. Timeout is a minimum-bound property, meaning the timeout occurs no sooner than the time you specify, but can occur shortly thereafter. The maximum time that can be specified for this property is 12 hours (43200 seconds).",
                "CreationPolicy": { "info": "Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured. ## " }
            }
        };
        this.cfn_waitconditionhandle = {
            "Type": "AWS::CloudFormation::WaitConditionHandle",
            "Properties": {}
        };
        this.lambda_alias = {
            "Type": "AWS::Lambda::Alias",
            "Properties": {
                "Description": "String",
                "FunctionName": "*String. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.  ",
                "FunctionVersion": "*String. The function version that the alias invokes.",
                "Name": "*String. The name of the alias",
                "RoutingConfig": ["List of VersionWeight."]
            }
        };
        this.lambda_eventsourcemapping = {
            "Type": "AWS::Lambda::EventSourceMapping",
            "Properties": {
                "BatchSize": "Integer. The maximum number of items to retrieve in a single batch. Amazon Kinesis - Default 100. Max 10,000. Amazon DynamoDB Streams - Default 100. Max 1,000. Amazon Simple Queue Service - Default 10. Max 10.",
                "Enabled": "Boolean. Disables the event source mapping to pause polling and invocation.",
                "EventSourceArn": "*String. The Amazon Resource Name (ARN) of the event source. Amazon Kinesis - The ARN of the data stream or a stream consumer. Amazon DynamoDB Streams - The ARN of the stream. Amazon Simple Queue Service - The ARN of the queue.",
                "FunctionName": "*String. The name of the Lambda function. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. 4. Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.  The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.  ",
                "StartingPosition": "String. The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources. AT_TIMESTAMP is only supported for Amazon Kinesis streams. Allowed Values: AT_TIMESTAMP | LATEST | TRIM_HORIZON"
            }
        };
        this.lambda_function = {
            "Type": "AWS::Lambda::Function",
            "Properties": {
                "Code": { "info": "Type:Code ##" },
                "DeadLetterConfig": { "info": "Type : DeadLetterConfig.  A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. ##" },
                "Description": "String",
                "Environment": { "info": "Type: Environment. Environment variables that are accessible from function code during execution.##" },
                "FunctionName": "String. The name of the Lambda function, up to 64 characters in length. If you don't specify a name, AWS CloudFormation generates one. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
                "Handler": "*String. The name of the method within your code that Lambda calls to execute your function. The format includes the file name.",
                "KmsKeyArn": "String. The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.",
                "Layers": ["List of strings. A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version."],
                "MemorySize": "Integer. The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.",
                "ReservedConcurrentExecutions": "Integer. The number of simultaneous executions to reserve for the function.",
                "Role": "*String. The Amazon Resource Name (ARN) of the function's execution role.",
                "Runtime": "*String. Allowed Values: dotnetcore1.0 | dotnetcore2.1 | go1.x | java8 | nodejs10.x | nodejs8.10 | provided | python2.7 | python3.6 | python3.7 | ruby2.5",
                "Timeout": "Integer. The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.",
                "TracingConfig": { "info": "Type: TracingConfig. Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.##" },
                "VpcConfig": { "info": "Type: VpcConfig. For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can only access resources and the internet through that VPC. " }
            }
        };
        this.lambda_layerversion = {
            "Type": "AWS::Lambda::LayerVersion",
            "Properties": {
                "CompatibleRuntimes": ["List of strings. A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions."],
                "Content": { "info": "*Type: Content ##" },
                "Description": "String",
                "LayerName": "String. The name or Amazon Resource Name (ARN) of the layer.",
                "LicenseInfo": "String. The layer's software license. It can be any of the following: 1. An SPDX license identifier. For example, MIT. 2. The URL of a license hosted on the internet. For example, https://opensource.org/licenses/MIT. 3. The full text of the license. Maximum:512"
            }
        };
        this.lambda_layerversionpermission = {
            "Type": "AWS::Lambda::LayerVersionPermission",
            "Properties": {
                "Action": "*String. The API action that grants access to the layer. For example, lambda:GetLayerVersion.",
                "LayerVersionArn": "*String. The Amazon Resource Name (ARN) of the layer.",
                "OrganizationId": "String. With the principal set to *, grant permission to all accounts in the specified organization.",
                "Principal": "*String. An account ID, or * to grant permission to all AWS accounts."
            }
        };
        this.lambda_permission = {
            "Type": "AWS::Lambda::Permission",
            "Properties": {
                "Action": "*String. The action that the principal can use on the function. For example, lambda:InvokeFunction or lambda:GetFunction.",
                "EventSourceToken": "String. For Alexa Smart Home functions, a token that must be supplied by the invoker.",
                "FunctionName": "*String. The name of the Lambda function, version, or alias. The name of the Lambda function. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. 4. Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.  The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.  ",
                "Principal": "*String. The AWS service or account that invokes the function. If you specify a service, use SourceArn or SourceAccount to limit who can invoke the function through that service.",
                "SourceAccount": "String. For AWS services, the ID of the account that owns the resource. Use this instead of SourceArn to grant permission to resources that are owned by another account (for example, all of an account's Amazon S3 buckets). Or use it together with SourceArn to ensure that the resource is owned by the specified account. For example, an Amazon S3 bucket could be deleted by its owner and recreated by another account.",
                "SourceArn": "String. For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic."
            }
        };
        this.lambda_version = {
            "Type": "AWS::Lambda::Version",
            "Properties": {
                "CodeSha256": "String. Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it.",
                "Description": "String",
                "FunctionName": "String. The name of the Lambda function, version, or alias. The name of the Lambda function. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. 4. Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.  The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length."
            }
        };
        this.ram_resourceshare = {
            "Type": "AWS::RAM::ResourceShare",
            "Properties": {
                "AllowExternalPrincipals": "Boolean. Indicates whether principals outside your AWS organization can be associated with a resource share.",
                "Name": "String. The name of the resource share",
                "Principals": ["Type: List of String. The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations."],
                "ResourceArns": ["Type: List of String. The Amazon Resource Names (ARN) of the resources to associate with the resource share."]
            }
        };
        this.sm_resourcepolicy = {
            "Type": "AWS::SecretsManager::ResourcePolicy",
            "Properties": {
                "ResourcePolicy": { "info": "*Specifies a JSON object that's constructed according to the grammar and syntax for a resource-based policy. The policy identifies who can access or manage this secret and its versions. Please use aws policy generator to generate this policy." },
                "SecretId": "*String. Specifies the Amazon Resource Name (ARN) or the friendly name of the secret that you want to attach a resource-based permissions policy to. If you use this property to change the SecretId for an existing resource-based policy, it removes the policy from the original secret, and then attaches the policy to the secret with the specified SecretId. This results in changing the permissions for two secrets."
            }
        };
        this.sm_rotationschedule = {
            "Type": "AWS::SecretsManager::RotationSchedule",
            "Properties": {
                "RotationLambdaARN": "String. Specifies the ARN of the Lambda function that can rotate the secret. If you don't specify this parameter, then the secret must already have the ARN of a Lambda function configured.",
                "RotationRules": { "info": "Type: RotationRules. Specifies a structure that defines the rotation schedule for this secret.##" },
                "SecretId": "*String. Specifies the Amazon Resource Name (ARN) or the friendly name of the secret that you want to rotate."
            }
        };
        this.sm_secret = {
            "Type": "AWS::SecretsManager::Secret",
            "Properties": {
                "Description": "String",
                "GenerateSecretString": { "info": "Type: GenerateSecretString. You can return that string directly to use as the secret value, or you can specify both the SecretStringTemplate and the GenerateSecretKeyparameters. Secrets Manager uses the value in GenerateSecretKeyparameters. Secrets Manager uses the value in GenerateSecretKey as the key name and combines it with the randomly generated password to make a JSON key-value pair. It then inserts that pair into the JSON structure that's specified in the SecretStringTemplateparameter.##" },
                "KmsKeyId": "String. Specifies the ARN, Key ID, or alias of the AWS KMS customer master key (CMK) that's used to encrypt the SecretString or SecretBinary values for versions of this secret. If you don't specify this value, then Secrets Manager defaults to the AWS account's CMK (the one named aws/secretsmanager). If an AWS KMS CMK with that name doesn't yet exist, Secrets Manager creates it for you automatically the first time it needs to encrypt a version's SecretString or SecretBinary fields.",
                "Name": "String. The friendly name of the secret. You can use forward slashes in the name to represent a path hierarchy. For example, /prod/databases/dbserver1 could represent the secret for a server named dbserver1 in the folder databases in the folder prod.",
                "SecretString": "String. Specifies a literal string to use as the secret value for the secret. You can use any text you like, but remember that Lambda rotation functions require a specific JSON structure to be present in this field. Alternatively, instead of hardcoding the password in this string parameter, we recommend that you use the GenerateSecretString parameter instead."
            }
        };
        this.sm_secrettargetattachment = {
            "Type": "AWS::SecretsManager::SecretTargetAttachment",
            "Properties": {
                "SecretId": "*String. The Amazon Resource Name (ARN) or the friendly name of the secret that contains the credentials that you want to use with the specified service or database. To reference a secret that's also created in this template, use the see Ref function with the secret's logical ID.",
                "TargetId": "*String. The ARN of the service or database whose credentials are stored in the specified secret.",
                "TargetType": "*String. A string used by the Secrets Manager console to determine how to parse the structure of the secret text and place the values in the proper fields of the console user interface. If you created this secret using the Secrets Manager console then we recommend that you do not modify this value. If this is a custom secret, then this field is available for your use. As a best practice, do not store any sensitive information in this field. Instead, store sensitive information in the SecretString or SecretBinary fields to ensure that it is encrypted."
            }
        };
        this.cb_project = {
            "Type": "AWS::CodeBuild::Project",
            "Properties": {
                "Artifacts": { "info": "*Artifacts is a property of the AWS::CodeBuild::Project resource that specifies output settings for artifacts generated by an AWS CodeBuild build.##" },
                "BadgeEnabled": "**Boolean. Indicates whether AWS CodeBuild generates a publicly accessible URL for your project's build badge. Including build badges with your project is currently not supported if the source type is CodePipeline. If you specify CODEPIPELINE for the Source property, do not specify the BadgeEnabled property.",
                "Cache": { "info": "Type:ProjectCache. Settings that AWS CodeBuild uses to store and reuse build dependencies.##" },
                "Description": "String",
                "EncryptionKey": "String. The alias or Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) that CodeBuild uses to encrypt the build output. If you don't specify a value, CodeBuild uses the AWS-managed CMK for Amazon Simple Storage Service (Amazon S3).",
                "Environment": { "info": "*Type:Environment. The build environment settings for the project, such as the environment type or the environment variables to use for the build environment.##" },
                "LogsConfig": { "info": "Type:LogsConfig. Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs, an S3 bucket, or both.##" },
                "Name": "String. The name of the build project. The name must be unique across all of the projects in your AWS account.",
                "QueuedTimeoutInMinutes": "Integer. The number of minutes a build is allowed to be queued before it times out.",
                "SecondaryArtifacts": ["List of Artifacts. A list of Artifacts objects. Each artifacts object specifies output settings that the project generates during a build.##"],
                "SecondarySources": ["List of Source. ##"],
                "SecondarySourceVersions": ["Type: List of ProjectSourceVersion. An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build level, then they take over these secondarySourceVersions (at the project level).##"],
                "ServiceRole": "*String. The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.",
                "Source": { "info": "*The source code settings for the project, such as the source code's repository type and location.##" },
                "SourceVersion": "String. A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: 1. For AWS CodeCommit: the commit ID to use 2.For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used 3.For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used 4.For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.",
                "TimeoutInMinutes": "Integer. How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any related build that did not get marked as completed. The default is 60 minutes.",
                "Triggers": { "info": "Type: ProjectTriggers. For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, enables AWS CodeBuild to begin automatically rebuilding the source code every time a code change is pushed to the repository.##" },
                "VpcConfig": { "info": "VpcConfig specifies settings that enable AWS CodeBuild to access resources in an Amazon VPC. ##" }
            }
        };
        this.cb_sourcecredential = {
            "Type": "AWS::CodeBuild::SourceCredential",
            "Properties": {
                "AuthType": "*String. The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, or PERSONAL_ACCESS_TOKEN. Allowed Values: BASIC_AUTH | OAUTH | PERSONAL_ACCESS_TOKEN",
                "ServerType": "*String. Allowed Values: BITBUCKET | GITHUB | GITHUB_ENTERPRISE",
                "Token": "*String. For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is the app password.",
                "Username": "String. The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source providers or connections."
            }
        };
        this.msk_cluster = {
            "Type": "AWS::MSK::Cluster",
            "Properties": {
                "BrokerNodeGroupInfo": { "info": "*Type: BrokerNodeGroupInfo. The setup to be used for brokers in the cluster. ##" },
                "ClientAuthentication": { "info": "Type: ClientAuthentication. Includes information related to client authentication. ##" },
                "ClusterName": "*Type: String",
                "ConfigurationInfo": { "info": "Type: ConfigurationInfo ##" },
                "EncryptionInfo": { "info": "Type: EncryptionInfo ##" },
                "EnhancedMonitoring": "String. Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.",
                "KafkaVersion": "*String",
                "NumberOfBrokerNodes": "*Integer. The number of broker nodes you want in the Amazon MSK cluster."
            }
        };
    }
    AwsResourcesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AwsResourcesService);
    return AwsResourcesService;
}());



/***/ }),

/***/ "./src/app/common-resource/common-resource.component.css":
/*!***************************************************************!*\
  !*** ./src/app/common-resource/common-resource.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXJlc291cmNlL2NvbW1vbi1yZXNvdXJjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tcmVzb3VyY2UvY29tbW9uLXJlc291cmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common-resource/common-resource.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common-resource/common-resource.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isPresent\" >\n\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title> {{serviceSyntax}} </mat-panel-title>\n        <mat-panel-description> {{resname.value}} </mat-panel-description>\n      </mat-expansion-panel-header>\n\n\n      <form #myForm=\"ngForm\" (submit)=\"onDone(myForm.value)\" >\n        <mat-form-field>\n            <input matInput #resname name=\"resourceName\" placeholder=\"Resource Name\" value=\"SampleName\" ngModel required>\n        </mat-form-field>\n        <mat-icon [ngStyle]=\"{'color':reqColor}\" >info</mat-icon> <br>\n        <span> \n           <br> <u>Properties: </u> <button mat-icon-button type=\"button\" [matTooltip]=\"newPropTip\" (click)=\"isNewProp=true\" > \n             <mat-icon>add</mat-icon> </button> <br>  \n        </span>\n        <div *ngIf=\"isNewProp\" >\n            <mat-form-field  >\n                <input matInput type=\"text\" name=\"newProp\" #newProp  placeholder=\"New Property Name\">\n              </mat-form-field>\n              <button  mat-icon-button type=\"button\" (click)=\"addNewProperty(newProp.value);isNewProp=false\" > <mat-icon>add</mat-icon> </button>\n        </div>\n        <div *ngFor=\"let n of newProp\" >\n          <mat-form-field>\n            <input matInput ngModel [name]=\"n\" [placeholder]=\"n\" type=\"text\">\n          </mat-form-field>\n        </div>\n        <div *ngFor=\"let j of resPropkeys\" >\n           <span *ngIf=\"j=='CreationPolicy' || j=='UpdatePolicy'\" > <br> <u> Specific Attributes: </u> <br> </span>\n           <span *ngIf=\"j=='DeletionPolicy'\" > <br> <u>Common Attributes:</u> <br> </span> <br>\n          <mat-form-field *ngIf=\"getTypeOf(resObject.Properties[j])=='string'\" >\n              <input matInput ngModel type=\"text\" [name]=\"j\" [placeholder]=\"j\" [required]=\"isRequired(resObject.Properties[j])['required']\" >\n          </mat-form-field>\n          <mat-form-field *ngIf=\"isArray(resObject.Properties[j])\" >\n              <input matInput ngModel  type=\"text\"  [name]=\"j\" [placeholder]=\"j\" [required]=\"isRequired(resObject.Properties[j])['required']\" >\n              <mat-hint> {{arrayTip}} </mat-hint>\n          </mat-form-field>\n          <mat-form-field *ngIf=\"!isArray(resObject.Properties[j]) && getTypeOf(resObject.Properties[j])=='object'\" >\n              <input matInput ngModel  type=\"text\"  [name]=\"j\" [placeholder]=\"j\" [required]=\"isRequired(resObject.Properties[j])['required']\" >\n              <mat-hint>{{objectTip}} </mat-hint>\n          </mat-form-field>\n          <mat-icon  *ngIf=\"getTypeOf(resObject.Properties[j])=='string'\" \n          [matTooltip]=\"resObject.Properties[j]\" [ngStyle]=\"{'color':isRequired(resObject.Properties[j])['color']}\">info</mat-icon>\n          <mat-icon *ngIf=\"isArray(resObject.Properties[j])\" \n          [matTooltip]=\"resObject.Properties[j][0]\" [ngStyle]=\"{'color':isRequired(resObject.Properties[j])['color']}\" >info</mat-icon>\n          <mat-icon *ngIf=\"!isArray(resObject.Properties[j]) && getTypeOf(resObject.Properties[j])=='object'\" \n          [matTooltip]=\"resObject.Properties[j]['info']\" [ngStyle]=\"{'color':isRequired(resObject.Properties[j])['color']}\">info</mat-icon>\n          <button mat-icon-button type=\"button\"  *ngIf=\"isPropertyComplex(resObject.Properties[j])\" (click)=\"populateProperty(serviceSyntax)\" >\n            <mat-icon>create</mat-icon>\n          </button>\n\n        </div>\n          <div *ngIf=\"isTagged\" >\n            Tags:\n            <button type=\"button\" mat-raised-button (click)=\"addTag()\">\n              <mat-icon>add</mat-icon>\n            </button><br>\n            <div *ngFor=\"let i of tagArray\" >\n                <input name=\"tagKey{{i}}\" placeholder=\"Key\" ngModel>\n                <input name=\"tagValue{{i}}\" placeholder=\"Value\" ngModel>\n          </div>\n        </div>\n\n        <button mat-icon-button [disabled]=\"myForm.invalid\" type=\"submit\" \n         matTooltip=\"click Submit or press Enter\" color=\"primary\">\n          <mat-icon>done</mat-icon>\n        </button>\n        <button mat-icon-button type=\"button\" matTooltip=\"Remove from Template\"  (click)=\"onRemove(myForm.value)\">\n          <mat-icon>remove_circle</mat-icon>\n        </button>\n        <button [disabled]=\"!isCopyReady\" mat-icon-button \n        matTooltip=\"copy json\" (click)=\"copyToClipboard(myForm.value)\"> <mat-icon>file_copy</mat-icon> </button>\n        <button [disabled]=\"!isCopyReady\" mat-icon-button color=\"accent\"\n        matTooltip=\"copy yaml\" (click)=\"copyToYamlClipboard(myForm.value)\"> <mat-icon>file_copy</mat-icon> </button>\n      </form>\n    </mat-expansion-panel>\n  </mat-accordion>\n  </div>\n  <mat-divider></mat-divider>"

/***/ }),

/***/ "./src/app/common-resource/common-resource.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common-resource/common-resource.component.ts ***!
  \**************************************************************/
/*! exports provided: CommonResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonResourceComponent", function() { return CommonResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");
/* harmony import */ var _resource_view_resource_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resource-view/resource-list */ "./src/app/resource-view/resource-list.ts");
/* harmony import */ var _resource_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resource-data.service */ "./src/app/resource-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _property_dialog_tab_property_dialog_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../property-dialog-tab/property-dialog-tab.component */ "./src/app/property-dialog-tab/property-dialog-tab.component.ts");









var CommonResourceComponent = /** @class */ (function () {
    function CommonResourceComponent(result, utility, objProp, dialog, snackBar) {
        this.result = result;
        this.utility = utility;
        this.objProp = objProp;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.isNewProp = false;
        this.newProp = [];
        this.reqColor = "red";
        this.conColor = "darkorange";
        this.arrayTip = "semicolon (;) delimited items";
        this.objectTip = "Json Object e.g. {\"a\":\"b\"} ";
        this.newPropTip = "Add a new custom Property. Useful in conjunction with Transform section or for certain resources e.g. AWS::CloudFormation::CustomResource. Adding custom attributes is not supported. Note: Existing standard properties cannot be added except for 'Tags'.";
        this.tagCount = 0;
        this.tagArray = [];
        this.isPresent = true;
        this.isCopyReady = false;
    }
    CommonResourceComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, { duration: 2000 });
    };
    ;
    CommonResourceComponent.prototype.ngOnInit = function () {
        this.resObject = this.utility.addCommonProperties(this.resObject);
        this.serviceSyntax = this.resObject["Type"];
        this.currentService = this.resObject["Type"].split("::")[1];
        this.currentResource = this.resObject["Type"].split("::")[2];
        this.resPropkeys = Object.keys(this.resObject["Properties"]);
    };
    CommonResourceComponent.prototype.isPropertyComplex = function (value) {
        //return this.objProp.comProp.hasOwnProperty(value);
        if (this.getTypeOf(value) != 'string') {
            var tooltip = this.isArray(value) ? value[0] : value["info"];
            //console.log(tooltip);
            return tooltip.includes("##") ? true : false;
        }
        else {
            return false;
        }
    };
    CommonResourceComponent.prototype.addTag = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    CommonResourceComponent.prototype.getTagArray = function (value) {
        var _this = this;
        var tags = [];
        this.tagArray.forEach(function (i) {
            tags.push({
                "Key": value["tagKey" + i] ? _this.utility.getProperJson(value["tagKey" + i]) : undefined,
                "Value": value["tagValue" + i] ? _this.utility.getProperJson(value["tagValue" + i]) : undefined
            });
        });
        return tags.length == 0 ? undefined : tags;
    };
    CommonResourceComponent.prototype.isObjectEmpty = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object ? true : false;
    };
    CommonResourceComponent.prototype.getTypeOf = function (value) {
        return typeof (value);
    };
    CommonResourceComponent.prototype.isArray = function (value) {
        return Array.isArray(value);
    };
    CommonResourceComponent.prototype.isRequired = function (value) {
        if (this.getTypeOf(value) == 'object') {
            if (this.isArray(value)) {
                if (value[0].includes("*")) {
                    if (value[0].startsWith("**")) {
                        return { "color": this.conColor, "required": false };
                    }
                    else {
                        return { "color": this.reqColor, "required": true };
                    }
                }
            }
            else {
                if (value['info'].includes("*")) {
                    if (value['info'].startsWith("**")) {
                        return { "color": this.conColor, "required": false };
                    }
                    else {
                        return { "color": this.reqColor, "required": true };
                    }
                }
            }
        }
        else {
            if (value.includes("*")) {
                if (value.startsWith("**")) {
                    return { "color": this.conColor, "required": false };
                }
                else {
                    return { "color": this.reqColor, "required": true };
                }
            }
        }
        return { "color": "grey", "required": false };
    };
    CommonResourceComponent.prototype.populateProperty = function (res) {
        var dialogRef = this.dialog.open(_property_dialog_tab_property_dialog_tab_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDialogTabComponent"], {
            width: '750px',
            height: '500px',
            data: res
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
        console.log(res);
    };
    CommonResourceComponent.prototype.addNewProperty = function (value) {
        if (this.resObject.Properties.hasOwnProperty(value)) {
            alert("Property by name " + value + " already exists.");
            return;
        }
        if (value != '') {
            this.resObject.Properties[value] = undefined;
            this.newProp.push(value);
        }
    };
    CommonResourceComponent.prototype.copyToClipboard = function (value) {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.result.jsonresult.Resources[value.resourceName]);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    CommonResourceComponent.prototype.copyToYamlClipboard = function (value) {
        this.utility.copyToClipboardYaml(this.result.jsonresult.Resources[value.resourceName]);
    };
    CommonResourceComponent.prototype.onRemove = function (value) {
        this.isPresent = false;
        for (var i = 0; i < _resource_view_resource_list__WEBPACK_IMPORTED_MODULE_4__["RESOURCE_DATA"].length; i++) {
            if (_resource_view_resource_list__WEBPACK_IMPORTED_MODULE_4__["RESOURCE_DATA"][i].servicename == this.currentService) {
                var myresource = _resource_view_resource_list__WEBPACK_IMPORTED_MODULE_4__["RESOURCE_DATA"][i].subresource;
                for (var j = 0; j < myresource.length; j++) {
                    if (myresource[j].resourcename == this.currentResource) {
                        myresource[j].resourcecount = myresource[j].resourcecount - 1;
                    }
                }
            }
        }
        this.result.jsonresult.Resources[value.resourceName] = undefined;
        this.openSnackBar("\"" + value.resourceName + "\" has been removed. Check Result tab.", "Ok");
    };
    CommonResourceComponent.prototype.onDone = function (value) {
        var _this = this;
        //console.log(value);
        this.isCopyReady = true;
        this.result.jsonresult.Resources[value.resourceName] = {};
        this.result.jsonresult.Resources[value.resourceName]["Properties"] = {};
        this.result.jsonresult.Resources[value.resourceName].Type = this.resObject["Type"];
        Object.keys(this.resObject["Properties"]).forEach(function (prop) {
            if (typeof (_this.resObject["Properties"][prop]) == "object") {
                if (Array.isArray(_this.resObject["Properties"][prop])) {
                    if (prop == "DependsOn") {
                        _this.doCommonResAttributesArrayType(value.resourceName, prop, value[prop]);
                    }
                    else {
                        _this.result.jsonresult.Resources[value.resourceName]["Properties"][prop] = _this.utility.getSemicolonArray(value[prop]);
                    }
                }
                else {
                    if (prop == "UpdatePolicy" || prop == "CreationPolicy" || prop == "Metadata") {
                        _this.doCommonResAttributesObjectType(value.resourceName, prop, value[prop]);
                    }
                    else {
                        _this.result.jsonresult.Resources[value.resourceName]["Properties"][prop] = _this.utility.getProperJson(value[prop]);
                    }
                }
            }
            else {
                if (prop == "UpdateReplacePolicy" || prop == "DeletionPolicy" || prop == "Condition") {
                    _this.doCommonResAttributesObjectType(value.resourceName, prop, value[prop]);
                }
                else {
                    _this.result.jsonresult.Resources[value.resourceName]["Properties"][prop] = _this.utility.getProperJson(value[prop]);
                }
            }
        });
        if (this.tagArray.length == 0 && value["Tags"] != undefined) {
            this.result.jsonresult.Resources[value.resourceName]["Properties"]["Tags"] = this.utility.getProperJson(value["Tags"]);
        }
        else {
            this.result.jsonresult.Resources[value.resourceName]["Properties"]["Tags"] = this.getTagArray(value);
        }
        if (this.resObject["Type"] == "AWS::EC2::Instance") {
            this.result.jsonresult.Resources[value.resourceName]["Properties"]["Metadata"] = undefined;
            this.result.jsonresult.Resources[value.resourceName]["Metadata"] = this.utility.getProperJson(value["Metadata"]);
        }
        this.openSnackBar("\"" + value.resourceName + "\" has been added. Check Result tab.", "Ok");
    };
    CommonResourceComponent.prototype.doCommonResAttributesArrayType = function (resname, propname, propvalue) {
        if (propname != undefined) {
            //this.result.jsonresult.Resources[resname][propname]={};
            this.result.jsonresult.Resources[resname][propname] = this.utility.getSemicolonArray(propvalue);
        }
    };
    CommonResourceComponent.prototype.doCommonResAttributesObjectType = function (resname, propname, propvalue) {
        if (propname != undefined) {
            this.result.jsonresult.Resources[resname][propname] = {};
            this.result.jsonresult.Resources[resname][propname] = this.utility.getProperJson(propvalue);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isTagged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CommonResourceComponent.prototype, "isTagged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('myresource'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommonResourceComponent.prototype, "resObject", void 0);
    CommonResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-resource',
            template: __webpack_require__(/*! ./common-resource.component.html */ "./src/app/common-resource/common-resource.component.html"),
            styles: [__webpack_require__(/*! ./common-resource.component.css */ "./src/app/common-resource/common-resource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"],
            _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"],
            _resource_data_service__WEBPACK_IMPORTED_MODULE_5__["ResourceDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], CommonResourceComponent);
    return CommonResourceComponent;
}());



/***/ }),

/***/ "./src/app/conditions-tab/conditions-tab.component.css":
/*!*************************************************************!*\
  !*** ./src/app/conditions-tab/conditions-tab.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 500px;\r\n  }\r\n\r\n  .example-container {\r\n    width: 1200px;\r\n    height: 350px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  .example-sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .example-sidenav {\r\n    padding: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZGl0aW9ucy10YWIvY29uZGl0aW9ucy10YWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29uZGl0aW9ucy10YWIvY29uZGl0aW9ucy10YWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/conditions-tab/conditions-tab.component.html":
/*!**************************************************************!*\
  !*** ./src/app/conditions-tab/conditions-tab.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\"  autosize >\n  <button mat-raised-button color=\"primary\" (click)=\"addParam()\">Add Condition</button>\n  <button mat-button color=\"primary\" (click)=\"drawer.toggle()\" \n  matTooltip=\"Open intrinsic functions side panel\">Intrinsic Functions</button>\n  <div *ngFor=\"let i of tagArray\">\n    <app-conditions></app-conditions>\n  </div>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" position=\"end\">\n    <app-intrinsic-functions class=\"example-card\" ></app-intrinsic-functions>\n  </mat-drawer>\n\n</mat-drawer-container>\n\n<!-- <mat-accordion>\n  <mat-expansion-panel class=\"example-card\" >\n    <mat-expansion-panel-header>\n      <mat-panel-title>Intrinsic Functions</mat-panel-title>\n      <mat-panel-description>Use Function manager to generate a function for the conditions.</mat-panel-description>\n    </mat-expansion-panel-header>\n    <app-intrinsic-functions class=\"example-card\" ></app-intrinsic-functions>\n  </mat-expansion-panel>\n</mat-accordion> -->\n"

/***/ }),

/***/ "./src/app/conditions-tab/conditions-tab.component.ts":
/*!************************************************************!*\
  !*** ./src/app/conditions-tab/conditions-tab.component.ts ***!
  \************************************************************/
/*! exports provided: ConditionsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionsTabComponent", function() { return ConditionsTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConditionsTabComponent = /** @class */ (function () {
    function ConditionsTabComponent() {
        this.tagCount = 0;
        this.tagArray = [];
    }
    ConditionsTabComponent.prototype.ngOnInit = function () {
    };
    ConditionsTabComponent.prototype.addParam = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    ConditionsTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conditions-tab',
            template: __webpack_require__(/*! ./conditions-tab.component.html */ "./src/app/conditions-tab/conditions-tab.component.html"),
            styles: [__webpack_require__(/*! ./conditions-tab.component.css */ "./src/app/conditions-tab/conditions-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConditionsTabComponent);
    return ConditionsTabComponent;
}());



/***/ }),

/***/ "./src/app/conditions/conditions.component.css":
/*!*****************************************************!*\
  !*** ./src/app/conditions/conditions.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZGl0aW9ucy9jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb25kaXRpb25zL2NvbmRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/conditions/conditions.component.html":
/*!******************************************************!*\
  !*** ./src/app/conditions/conditions.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"isPresent\">\n    <mat-accordion>\n    <mat-expansion-panel>\n    <mat-expansion-panel-header>\n        <mat-panel-title>\n            Condition\n        </mat-panel-title>\n        <mat-panel-description>\n            {{conname.value}}\n        </mat-panel-description>\n    </mat-expansion-panel-header>\n        <mat-card class=\"example-card\">Condition\n            <form action=\"\" #conform=\"ngForm\" (submit)=\"onDone(conform.value)\">\n                <!-- <input type=\"hidden\" ngModel name=\"index\" [ngModel]=\"i\" ><br> -->\n                <input type=\"text\" #conname name=\"resourceName\" placeholder=\"Logical ID\" ngModel\n                matTooltip=\"Logical ID of the condition, a String value\" required > <br>\n                <input type=\"text\" name=\"func\" placeholder=\"Intrinsic Function\" ngModel\n                matTooltip=\"Use any of these functions = Fn::And, Fn::Equals, Fn::If, \n                Fn::Not, Fn::Or\" required ><br>\n                <button mat-icon-button type=\"submit\" [disabled]=\"conform.invalid\">\n                    <mat-icon>done</mat-icon>\n                </button>\n                <button mat-icon-button type=\"button\" (click)=\"onRemove(conform.value)\">\n                    <mat-icon>remove_circle</mat-icon>\n                </button>\n              </form>\n              <button [disabled]=\"!isCopyReady\" mat-icon-button \n                matTooltip=\"copy json\" \n                (click)=\"copyToClipboard(conform.value)\"> \n                <mat-icon>file_copy</mat-icon> \n              </button>\n              <button [disabled]=\"!isCopyReady\" mat-icon-button color=\"accent\"\n                matTooltip=\"copy yaml\" \n                (click)=\"copyToYamlClipboard(conform.value)\"> \n                <mat-icon>file_copy</mat-icon> \n              </button>\n        </mat-card>\n    </mat-expansion-panel>\n    </mat-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/conditions/conditions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/conditions/conditions.component.ts ***!
  \****************************************************/
/*! exports provided: ConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionsComponent", function() { return ConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




var ConditionsComponent = /** @class */ (function () {
    function ConditionsComponent(result, util) {
        this.result = result;
        this.util = util;
        this.tagCount = 0;
        this.tagArray = [];
        this.isPresent = true;
        this.isCopyReady = false;
    }
    ConditionsComponent.prototype.ngOnInit = function () {
    };
    ConditionsComponent.prototype.addCondition = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
        console.log(this.tagCount);
        console.log(this.tagArray);
    };
    ConditionsComponent.prototype.onRemove = function (value) {
        this.isPresent = false;
        if (value.resourceName)
            this.result.jsonresult.Conditions[value.resourceName] = undefined;
    };
    ConditionsComponent.prototype.onDone = function (value) {
        if (this.result.jsonresult.Conditions == undefined) {
            this.result.jsonresult.Conditions = {};
        }
        this.result.jsonresult.Conditions[value.resourceName] = this.util.getProperJson(value.func);
        this.isCopyReady = true;
    };
    ConditionsComponent.prototype.onReset = function () {
        this.isPresent = false;
        this.tagCount = 0;
        this.tagArray = [];
        this.result.jsonresult.Conditions = {};
    };
    ConditionsComponent.prototype.copyToClipboard = function (value) {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.result.jsonresult.Conditions[value.resourceName]);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    ConditionsComponent.prototype.copyToYamlClipboard = function (value) {
        this.util.copyToClipboardYaml(this.result.jsonresult.Conditions[value.resourceName]);
    };
    ConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conditions',
            template: __webpack_require__(/*! ./conditions.component.html */ "./src/app/conditions/conditions.component.html"),
            styles: [__webpack_require__(/*! ./conditions.component.css */ "./src/app/conditions/conditions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], ConditionsComponent);
    return ConditionsComponent;
}());



/***/ }),

/***/ "./src/app/ec2-init-config-tab/ec2-init-config-tab.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/ec2-init-config-tab/ec2-init-config-tab.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VjMi1pbml0LWNvbmZpZy10YWIvZWMyLWluaXQtY29uZmlnLXRhYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ec2-init-config-tab/ec2-init-config-tab.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ec2-init-config-tab/ec2-init-config-tab.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ec2-init-config-tab works!\n</p>\n"

/***/ }),

/***/ "./src/app/ec2-init-config-tab/ec2-init-config-tab.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ec2-init-config-tab/ec2-init-config-tab.component.ts ***!
  \**********************************************************************/
/*! exports provided: Ec2InitConfigTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ec2InitConfigTabComponent", function() { return Ec2InitConfigTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Ec2InitConfigTabComponent = /** @class */ (function () {
    function Ec2InitConfigTabComponent() {
    }
    Ec2InitConfigTabComponent.prototype.ngOnInit = function () {
    };
    Ec2InitConfigTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ec2-init-config-tab',
            template: __webpack_require__(/*! ./ec2-init-config-tab.component.html */ "./src/app/ec2-init-config-tab/ec2-init-config-tab.component.html"),
            styles: [__webpack_require__(/*! ./ec2-init-config-tab.component.css */ "./src/app/ec2-init-config-tab/ec2-init-config-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Ec2InitConfigTabComponent);
    return Ec2InitConfigTabComponent;
}());



/***/ }),

/***/ "./src/app/ec2-init/ec2-init.component.css":
/*!*************************************************!*\
  !*** ./src/app/ec2-init/ec2-init.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .example-container {\r\n    width: 1200px;\r\n    height: 350px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  .example-sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .example-sidenav {\r\n    padding: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWMyLWluaXQvZWMyLWluaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvZWMyLWluaXQvZWMyLWluaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/ec2-init/ec2-init.component.html":
/*!**************************************************!*\
  !*** ./src/app/ec2-init/ec2-init.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-drawer-container class=\"example-container\" autosize >\n  <button mat-button color=\"primary\" (click)=\"drawer.toggle()\">Intrinsic Functions </button>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" position=\"end\">\n    <app-intrinsic-functions class=\"example-card\" ></app-intrinsic-functions>\n  </mat-drawer>\n\n\n\n<!-- <mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Intrinsic Functions\n      </mat-panel-title>\n      <mat-panel-description>\n        Use various functions to generate the Metadata objects.\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <app-intrinsic-functions></app-intrinsic-functions>\n  </mat-expansion-panel>\n</mat-accordion>\n<br> -->\n\n\n<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Config\n      </mat-panel-title>\n      <mat-panel-description>\n        Generate AWS::CloudFormation::Init config Object. Configset currently is not supported.\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-chip color=\"primary\" >Sources</mat-chip><br>\n<mat-card class=\"example-card\" >\n  <button mat-stroked-button (click)=\"addSource()\" >Add sources </button><br>\n  <form #sourceform=\"ngForm\" (submit)=\"onSourcesDone(sourceform.value)\">\n  <div *ngFor=\"let i of sourceArray\" >\n      <input type=\"text\" name=\"sourcekey{{i}}\" ngModel placeholder=\"sourceKey{{i}}\"\n      matTooltip=\"Target directory to unpack. e.g. /etc/puppet\">\n      <input type=\"text\" name=\"sourcevalue{{i}}\" ngModel placeholder=\"sourceValue{{i}}\"\n      matTooltip=\"an archive file location e.g. https://github.com/user1/cfn-demo/tarball/master\">\n  </div>\n  <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n  </form>\n</mat-card>\n\n<mat-chip color=\"primary\" >Packages</mat-chip><br>\n\n<mat-card class=\"example-card\">\n  <button mat-stroked-button (click)=\"addAptPackage()\" >Apt Packages </button><br>\n  <form #aptform=\"ngForm\" (submit)=\"onAptDone(aptform.value)\">\n    <div *ngFor=\"let i of aptArray\" >\n      <input type=\"text\" name=\"key{{i}}\" ngModel placeholder=\"key{{i}}\" [matTooltip]=\"apt\" >\n      <input type=\"text\" name=\"value{{i}}\" ngModel placeholder=\"value{{i}} \"><br>\n    </div>\n    <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n  </form>\n</mat-card>\n<mat-card class=\"example-card\">\n  <button mat-stroked-button (click)=\"addRpmPackage()\" >RPM Packages </button><br>\n  <form #rpmform=\"ngForm\" (submit)=\"onRpmDone(rpmform.value)\">\n    <div *ngFor=\"let i of rpmArray\" >\n      <input type=\"text\" name=\"key{{i}}\" ngModel placeholder=\"key{{i}}\" [matTooltip]=\"rpm\" >\n      <input type=\"text\" name=\"value{{i}}\" ngModel placeholder=\"value{{i}} \"><br>\n    </div>\n    <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n  </form>\n</mat-card>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addMsiPackage()\" >MSI Packages </button><br>\n    <form #msiform=\"ngForm\" (submit)=\"onMsiDone(msiform.value)\">\n      <div *ngFor=\"let i of msiArray\" >\n        <input type=\"text\" name=\"key{{i}}\" ngModel placeholder=\"key{{i}}\" [matTooltip]=\"msi\" >\n        <input type=\"text\" name=\"value{{i}}\" ngModel placeholder=\"value{{i}} \"><br>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addPythonPackage()\" >Python Packages </button><br>\n    <form #pythonform=\"ngForm\" (submit)=\"onPythonDone(pythonform.value)\">\n      <div *ngFor=\"let i of pythonArray\" >\n        <input type=\"text\" name=\"key{{i}}\" ngModel placeholder=\"key{{i}}\" [matTooltip]=\"python\" >\n        <input type=\"text\" name=\"value{{i}}\" ngModel placeholder=\"value{{i}} \"><br>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addYumPackage()\" >YUM Packages </button><br>\n    <form #yumform=\"ngForm\" (submit)=\"onYumDone(yumform.value)\">\n      <div *ngFor=\"let i of yumArray\" >\n        <input type=\"text\" name=\"key{{i}}\" ngModel placeholder=\"key{{i}}\" [matTooltip]=\"yum\" >\n        <input type=\"text\" name=\"value{{i}}\" ngModel placeholder=\"value{{i}} \"><br>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addRubyGemsPackage()\" >Rubygems Packages </button><br>\n    <form #rubyform=\"ngForm\" (submit)=\"onRubyGemsDone(rubyform.value)\">\n      <div *ngFor=\"let i of rubygemsArray\" >\n        <input type=\"text\" name=\"key{{i}}\" ngModel placeholder=\"key{{i}}\" [matTooltip]=\"rubygems\" >\n        <input type=\"text\" name=\"value{{i}}\" ngModel placeholder=\"value{{i}} \"><br>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n\n<mat-chip>Users</mat-chip><br>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addUsers()\" >User</button><br>\n    <form #userform=\"ngForm\" (submit)=\"onUserDone(userform.value)\">\n      <div *ngFor=\"let i of usersArray\" >\n        <input type=\"text\" name=\"user{{i}}\" ngModel placeholder=\"user{{i}}\"> <br>\n        <input type=\"text\" name=\"homedir{{i}}\" ngModel placeholder=\"homedir{{i}}\" [matTooltip]=\"homedir\" > <br>\n        <input type=\"text\" name=\"uid{{i}}\" ngModel placeholder=\"uid{{i}}\" [matTooltip]=\"uid\" > <br>\n        <input type=\"text\" name=\"groups{{i}}\" ngModel placeholder=\"groups{{i}}\" [matTooltip]=\"groups\" >\n        <mat-divider></mat-divider>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n\n<mat-chip>Services</mat-chip>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addServices()\" >Services</button><br>\n    <form #serviceform=\"ngForm\" (submit)=\"onServiceDone(serviceform.value)\">\n      <div *ngFor=\"let i of servicesArray\" >\n        <input type=\"text\" name=\"type{{i}}\" ngModel placeholder=\"sysvinit | windows\"> <br>\n        <input type=\"text\" name=\"name{{i}}\" ngModel placeholder=\"Service Name\"> <br>\n        <input type=\"text\" name=\"ensureRunning{{i}}\" ngModel placeholder=\"ensureRunning\" [matTooltip]=\"ensureRunning\" > <br>\n        <input type=\"text\" name=\"enabled{{i}}\" ngModel placeholder=\"Enabled\" [matTooltip]=\"enabled\" > <br>\n        <input type=\"text\" name=\"files{{i}}\" ngModel placeholder=\"Files\" [matTooltip]=\"files\" > <br>\n        <input type=\"text\" name=\"sources{{i}}\" ngModel placeholder=\"Sources\" [matTooltip]=\"sources\" > <br>\n        <input type=\"text\" name=\"packages{{i}}\" ngModel placeholder=\"Packages\" [matTooltip]=\"packages\" > <br>\n        <input type=\"text\" name=\"commands{{i}}\" ngModel placeholder=\"Commands\" [matTooltip]=\"commands\" > <br>\n        <mat-divider></mat-divider>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n\n<mat-chip>Groups</mat-chip>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addGroups()\" >Group</button><br>\n    <form #grpform=\"ngForm\" (submit)=\"onGroupDone(grpform.value)\">\n      <div *ngFor=\"let i of groupsArray\" >\n        <input type=\"text\" name=\"key{{i}}\" ngModel placeholder=\"GroupName\">\n        <input type=\"text\" name=\"value{{i}}\" ngModel placeholder=\"Gid\" [matTooltip]=\"gid\" >\n        <mat-divider></mat-divider>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n\n<mat-chip>Files</mat-chip>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addFiles()\" >file</button><br>\n    <form #fileform=\"ngForm\" (submit)=\"onFilesDone(fileform.value)\">\n      <div *ngFor=\"let i of filesArray\" >\n        <input type=\"text\" name=\"filename{{i}}\" ngModel placeholder=\"filename\">\n        <input type=\"text\" name=\"content{{i}}\" ngModel placeholder=\"content\" [matTooltip]=\"content\" >\n        <input type=\"text\" name=\"source{{i}}\" ngModel placeholder=\"source\" [matTooltip]=\"source\" >\n        <input type=\"text\" name=\"encoding{{i}}\" ngModel placeholder=\"encoding\" [matTooltip]=\"encoding\" >\n        <input type=\"text\" name=\"group{{i}}\" ngModel placeholder=\"group\" [matTooltip]=\"group\" >\n        <input type=\"text\" name=\"owner{{i}}\" ngModel placeholder=\"owner\" [matTooltip]=\"owner\" >\n        <input type=\"text\" name=\"mode{{i}}\" ngModel placeholder=\"mode\" [matTooltip]=\"mode\" >\n        <input type=\"text\" name=\"authentication{{i}}\" ngModel placeholder=\"authentication\" [matTooltip]=\"authentication\" >\n        <input type=\"text\" name=\"context{{i}}\" ngModel placeholder=\"context\" [matTooltip]=\"context\" >\n        <mat-divider></mat-divider>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n\n<mat-chip>Commands</mat-chip>\n<mat-card class=\"example-card\">\n    <button mat-stroked-button (click)=\"addCommands()\" >commands</button><br>\n    <form #cmdform=\"ngForm\" (submit)=\"onCommandsDone(cmdform.value)\">\n      <div *ngFor=\"let i of commandsArray\" >\n        <input type=\"text\" name=\"commandname{{i}}\" ngModel placeholder=\"Command name\">\n        <input type=\"text\" name=\"command{{i}}\" ngModel placeholder=\"command\" [matTooltip]=\"command\" >\n        <input type=\"text\" name=\"env{{i}}\" ngModel placeholder=\"Env\" [matTooltip]=\"env\" >\n        <input type=\"text\" name=\"cwd{{i}}\" ngModel placeholder=\"cwd\" [matTooltip]=\"cwd\" >\n        <input type=\"text\" name=\"test{{i}}\" ngModel placeholder=\"test\" [matTooltip]=\"test\" >\n        <input type=\"text\" name=\"ignoreErrors{{i}}\" ngModel placeholder=\"ignoreErrors\" [matTooltip]=\"ignoreErrors\" >\n        <input type=\"text\" name=\"wait{{i}}\" ngModel placeholder=\"waitAfterCompletion\" [matTooltip]=\"waitAfterCompletion\" >\n        <mat-divider></mat-divider>\n      </div>\n      <button mat-icon-button type=\"submit\" > <mat-icon>done</mat-icon> </button>\n    </form>\n</mat-card>\n<button mat-raised-button color=\"primary\" type=\"button\" (click)=\"onReset()\" >Reset</button>\n\n  </mat-expansion-panel>\n</mat-accordion>\n\n<button mat-icon-button\n  matTooltip=\"copy json\" \n  (click)=\"copyToClipboard()\"> \n  <mat-icon>file_copy</mat-icon> \n</button>\n\n<button mat-icon-button color=\"accent\" \n  matTooltip=\"copy yaml\" \n  (click)=\"copyToYamlClipboard()\"> \n  <mat-icon>file_copy</mat-icon> \n</button>\n\n<pre> {{myobj|json}} </pre>\n\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/ec2-init/ec2-init.component.ts":
/*!************************************************!*\
  !*** ./src/app/ec2-init/ec2-init.component.ts ***!
  \************************************************/
/*! exports provided: EC2InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EC2InitComponent", function() { return EC2InitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");



var EC2InitComponent = /** @class */ (function () {
    function EC2InitComponent(util) {
        this.util = util;
        this.myobj = {
            "AWS::CloudFormation::Init": {
                "config": {}
            }
        };
        //sources
        this.sourceCount = 0;
        this.sourceArray = [];
        //packages
        this.aptCount = 0;
        this.aptArray = [];
        this.msiCount = 0;
        this.msiArray = [];
        this.pythonCount = 0;
        this.pythonArray = [];
        this.rpmCount = 0;
        this.rpmArray = [];
        this.rubygemsCount = 0;
        this.rubygemsArray = [];
        this.yumCount = 0;
        this.yumArray = [];
        this.groupsCount = 0;
        this.groupsArray = [];
        this.usersCount = 0;
        this.usersArray = [];
        this.filesCount = 0;
        this.filesArray = [];
        this.commandsCount = 0;
        this.commandsArray = [];
        this.servicesCount = 0;
        this.servicesArray = [];
        //packages
        this.apt = "apt packages as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL.";
        this.msi = "msi packages as a json object. On Windows systems, the packages key supports only the MSI installer.";
        this.python = "python packages.";
        this.rpm = "rpm packages as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL.";
        this.rubygems = "rubygems as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL.";
        this.yum = "yum packages as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL.";
        //users
        this.groups = "A list of group names. The user will be added to each group in the list.";
        this.uid = "A user ID. The creation process fails if the user name exists with a different user ID. If the user ID is already assigned to an existing user the operating system may reject the creation request.";
        this.homedir = "the user's home directory.";
        //services
        this.ensureRunning = "Set to true to ensure that the service is running after cfn-init finishes. Set to false to ensure that the service is not running after cfn-init finishes. Omit this key to make no changes to the service state.";
        this.enabled = "Set to true to ensure that the service will be started automatically upon boot. Set to false to ensure that the service will not be started automatically upon boot. ";
        this.files = "A list of files. If cfn-init changes one directly via the files block, this service will be restarted";
        this.sources = "A list of directories. If cfn-init expands an archive into one of these directories, this service will be restarted.";
        this.packages = "A map of package manager to list of package names. If cfn-init installs or updates one of these packages, this service will be restarted.";
        this.commands = "A list of command names. If cfn-init runs the specified command, this service will be restarted.";
        //groups
        this.gid = "If a group ID is specified, and the group already exists by name, the group creation will fail. If another group has the specified group ID, the OS may reject the group creation.";
        //commands
        this.command = "Required. Either an array or a string specifying the command to run. If you use an array, you do not need to escape space characters or enclose command parameters in quotes. Don't use the array to specify multiple commands.";
        this.env = "Optional. Sets environment variables for the command. This property overwrites, rather than appends, the existing environment.";
        this.cwd = "Optional. The working directory";
        this.test = "Optional. A test command that determines whether cfn-init runs commands that are specified in the command key. If the test passes, cfn-init runs the commands. The cfn-init script runs the test in a command interpreter, such as Bash or cmd.exe. Whether a test passes depends on the exit code that the interpreter returns. For Linux, the test command must return an exit code of 0 for the test to pass. For Windows, the test command must return an %ERRORLEVEL% of 0.";
        this.ignoreErrors = "Optional. A Boolean value that determines whether cfn-init continues to run if the command in contained in the command key fails (returns a non-zero value). Set to true if you want cfn-init to continue running even if the command fails. Set to false if you want cfn-init to stop running if the command fails. The default value is false.";
        this.waitAfterCompletion = "Optional. For Windows systems only. Specifies how long to wait (in seconds) after a command has finished in case the command causes a reboot. The default value is 60 seconds and a value of 'forever' directs cfn-init to exit and resume only after the reboot is complete. Set this value to 0 if you do not want to wait for every command.";
        //files
        this.content = "Either a string or a properly formatted JSON object. If you use a JSON object as your content, the JSON will be written to a file on disk. Any intrinsic functions such as Fn::GetAtt or Ref are evaluated before the JSON object is written to disk. When you create a symlink, specify the symlink target as the content.";
        this.file_source = "A URL to load the file from. This option cannot be specified with the content key.";
        this.source = "A URL to load the file from. This option cannot be specified with the content key.";
        this.encoding = "The encoding format. Only used if the content is a string. Encoding is not applied if you are using a source. Valid values: plain | base64";
        this.group = "The name of the owning group for this file. Not supported for Windows systems.";
        this.owner = "The name of the owning user for this file. Not supported for Windows systems.";
        this.mode = "A six-digit octal value representing the mode for this file. Not supported for Windows systems. Use the first three digits for symlinks and the last three digits for setting permissions. To create a symlink, specify 120xxx, where xxx defines the permissions of the target file. To specify permissions for a file, use the last three digits, such as 000644.";
        this.authentication = "The name of an authentication method to use. This overrides any default authentication. You can use this property to select an authentication method you define with the AWS::CloudFormation::Authentication resource.";
        this.context = "Specifies a context for files that are to be processed as Mustache templates. To use this key, you must have installed aws-cfn-bootstrap 1.3-11 or later as well as pystache.";
    }
    EC2InitComponent.prototype.ngOnInit = function () {
    };
    //Sources
    EC2InitComponent.prototype.addSource = function () {
        this.sourceCount += 1;
        this.sourceArray.push(this.sourceCount);
    };
    //packages
    EC2InitComponent.prototype.addAptPackage = function () {
        this.aptCount += 1;
        this.aptArray.push(this.aptCount);
    };
    EC2InitComponent.prototype.addMsiPackage = function () {
        this.msiCount += 1;
        this.msiArray.push(this.msiCount);
    };
    EC2InitComponent.prototype.addPythonPackage = function () {
        this.pythonCount += 1;
        this.pythonArray.push(this.pythonCount);
    };
    EC2InitComponent.prototype.addRpmPackage = function () {
        this.rpmCount += 1;
        this.rpmArray.push(this.rpmCount);
    };
    EC2InitComponent.prototype.addRubyGemsPackage = function () {
        this.rubygemsCount += 1;
        this.rubygemsArray.push(this.rubygemsCount);
    };
    EC2InitComponent.prototype.addYumPackage = function () {
        this.yumCount += 1;
        this.yumArray.push(this.yumCount);
    };
    //users
    EC2InitComponent.prototype.addUsers = function () {
        this.usersCount += 1;
        this.usersArray.push(this.usersCount);
    };
    //services
    EC2InitComponent.prototype.addServices = function () {
        this.servicesCount += 1;
        this.servicesArray.push(this.servicesCount);
    };
    //group
    EC2InitComponent.prototype.addGroups = function () {
        this.groupsCount += 1;
        this.groupsArray.push(this.groupsCount);
    };
    //files
    EC2InitComponent.prototype.addFiles = function () {
        this.filesCount += 1;
        this.filesArray.push(this.filesCount);
    };
    //commands
    EC2InitComponent.prototype.addCommands = function () {
        this.commandsCount += 1;
        this.commandsArray.push(this.commandsCount);
    };
    // getArray(val){
    //   try {
    //     if((val as String).includes("{")){
    //       //console.log("in array of objects...")
    //       return JSON.parse(val);
    //     }
    //      else{
    //        //console.log("in array of strings...")
    //        return val.length!=0?((val as String).split(",")):[];
    //      } 
    //   } catch (error) {
    //       alert("Oops! An error occurred. Please check the input field type");
    //   }
    // }
    EC2InitComponent.prototype.getArray = function (val) {
        try {
            if (val.includes("{")) {
                var kk = (val.split(";"));
                var mm = [];
                kk.forEach(function (i) {
                    if (i.includes("{")) {
                        mm.push(JSON.parse(i));
                    }
                    else {
                        mm.push(i);
                    }
                });
                return mm;
            }
            else {
                return val.length != 0 ? (val.split(";")) : undefined;
            }
        }
        catch (error) {
            alert("Oops! An Error occurred. Please check the input field type");
        }
    };
    EC2InitComponent.prototype.onSourcesDone = function (value) {
        var _this = this;
        this.myobj["AWS::CloudFormation::Init"]["config"]["sources"] = {};
        this.sourceArray.forEach(function (i) {
            _this.myobj["AWS::CloudFormation::Init"]["config"]["sources"][value["sourcekey" + i]] = _this.util.getProperJson(value["sourcevalue" + i]);
        });
    };
    EC2InitComponent.prototype.onAptDone = function (value) {
        if (this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] == undefined)
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] = {};
        this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["apt"] = {};
        for (var i = 1; i <= this.aptArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["apt"][value["key" + i]] = this.util.getProperJson(value["value" + i]);
        }
    };
    EC2InitComponent.prototype.onRpmDone = function (value) {
        if (this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] == undefined)
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] = {};
        this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rpm"] = {};
        for (var i = 1; i <= this.rpmArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rpm"][value["key" + i]] = this.util.getProperJson(value["value" + i]);
        }
    };
    EC2InitComponent.prototype.onMsiDone = function (value) {
        if (this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] == undefined)
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] = {};
        this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["msi"] = {};
        for (var i = 1; i <= this.msiArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["msi"][value["key" + i]] = this.util.getProperJson(value["value" + i]);
        }
    };
    EC2InitComponent.prototype.onYumDone = function (value) {
        if (this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] == undefined)
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] = {};
        this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["yum"] = {};
        for (var i = 1; i <= this.yumArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["yum"][value["key" + i]] = this.getArray(value["value" + i]);
        }
    };
    EC2InitComponent.prototype.onPythonDone = function (value) {
        if (this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] == undefined)
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] = {};
        this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["python"] = {};
        for (var i = 1; i <= this.pythonArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["python"][value["key" + i]] = this.getArray(value["value" + i]);
        }
    };
    EC2InitComponent.prototype.onRubyGemsDone = function (value) {
        if (this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] == undefined)
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"] = {};
        this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rubygems"] = {};
        for (var i = 1; i <= this.rubygemsArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rubygems"][value["key" + i]] = this.getArray(value["value" + i]);
        }
    };
    //Users
    EC2InitComponent.prototype.onUserDone = function (value) {
        //console.log(value);
        this.myobj["AWS::CloudFormation::Init"]["config"]["users"] = {};
        for (var i = 1; i <= this.usersArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value["user" + i]] = {};
            this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value["user" + i]]["groups"] = this.util.getArray(value["groups" + i]);
            this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value["user" + i]]["uid"] = this.util.getProperJson(value["uid" + i]);
            this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value["user" + i]]["homeDir"] = this.util.getProperJson(value["homedir" + i]);
        }
    };
    EC2InitComponent.prototype.onServiceDone = function (value) {
        this.myobj["AWS::CloudFormation::Init"]["config"]["services"] = {};
        for (var i = 1; i <= this.servicesArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]] = {};
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]][value["name" + i]] = {};
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]][value["name" + i]]["ensureRunning"] = this.util.getProperJson(value["ensureRunning" + i]);
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]][value["name" + i]]["enabled"] = this.util.getProperJson(value["enabled" + i]);
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]][value["name" + i]]["files"] = this.util.getArray(value["files" + i]);
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]][value["name" + i]]["sources"] = this.util.getArray(value["sources" + i]);
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]][value["name" + i]]["commands"] = this.util.getArray(value["commands" + i]);
            this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value["type" + i]][value["name" + i]]["packages"] = this.util.getProperJson(value["packages" + i]);
        }
    };
    EC2InitComponent.prototype.onGroupDone = function (value) {
        this.myobj["AWS::CloudFormation::Init"]["config"]["groups"] = {};
        for (var i = 1; i <= this.groupsArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["groups"][value["key" + i]] = {
                "gid": this.util.getProperJson(value["value" + i])
            };
        }
    };
    EC2InitComponent.prototype.onFilesDone = function (value) {
        this.myobj["AWS::CloudFormation::Init"]["config"]["files"] = {};
        for (var i = 1; i <= this.filesArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["files"][value["filename" + i]] = {
                "content": this.util.doUnescape(this.util.getProperJson(value["content" + i])),
                "source": this.util.getProperJson(value["source" + i]),
                "encoding": this.util.getProperJson(value["encoding" + i]),
                "group": this.util.getProperJson(value["group" + i]),
                "owner": this.util.getProperJson(value["owner" + i]),
                "mode": this.util.getProperJson(value["mode" + i]),
                "authentication": this.util.getProperJson(value["authentication" + i]),
                "context": this.util.getProperJson(value["context" + i])
            };
        }
    };
    EC2InitComponent.prototype.onCommandsDone = function (value) {
        this.myobj["AWS::CloudFormation::Init"]["config"]["commands"] = {};
        for (var i = 1; i <= this.commandsArray.length; i++) {
            this.myobj["AWS::CloudFormation::Init"]["config"]["commands"][value["commandname" + i]] = {
                "command": this.util.getProperJson(value["command" + i]),
                "env": this.util.getProperJson(value["env" + i]),
                "cwd": this.util.getProperJson(value["cwd" + i]),
                "test": this.util.getProperJson(value["test" + i]),
                "ignoreErrors": this.util.getProperJson(value["ignoreErrors" + i]),
                "waitAfterCompletion": this.util.getProperJson(value["wait" + i])
            };
        }
    };
    EC2InitComponent.prototype.onReset = function () {
        this.myobj["AWS::CloudFormation::Init"]["config"] = {};
    };
    EC2InitComponent.prototype.copyToClipboard = function () {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.myobj);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    EC2InitComponent.prototype.copyToYamlClipboard = function () {
        this.util.copyToClipboardYaml(this.myobj);
    };
    EC2InitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ec2-init',
            template: __webpack_require__(/*! ./ec2-init.component.html */ "./src/app/ec2-init/ec2-init.component.html"),
            styles: [__webpack_require__(/*! ./ec2-init.component.css */ "./src/app/ec2-init/ec2-init.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_useful_utils_service__WEBPACK_IMPORTED_MODULE_2__["UsefulUtilsService"]])
    ], EC2InitComponent);
    return EC2InitComponent;
}());



/***/ }),

/***/ "./src/app/functions-tab/functions-tab.component.css":
/*!***********************************************************!*\
  !*** ./src/app/functions-tab/functions-tab.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmN0aW9ucy10YWIvZnVuY3Rpb25zLXRhYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/functions-tab/functions-tab.component.html":
/*!************************************************************!*\
  !*** ./src/app/functions-tab/functions-tab.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"addParam()\"> <mat-icon>add</mat-icon> </button><br>\n<div *ngFor=\"let i of tagArray\">\n  <app-intrinsic-functions></app-intrinsic-functions>\n</div>"

/***/ }),

/***/ "./src/app/functions-tab/functions-tab.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/functions-tab/functions-tab.component.ts ***!
  \**********************************************************/
/*! exports provided: FunctionsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsTabComponent", function() { return FunctionsTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FunctionsTabComponent = /** @class */ (function () {
    function FunctionsTabComponent() {
        this.tagCount = 1;
        this.tagArray = [1];
    }
    FunctionsTabComponent.prototype.ngOnInit = function () {
    };
    FunctionsTabComponent.prototype.addParam = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    FunctionsTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-functions-tab',
            template: __webpack_require__(/*! ./functions-tab.component.html */ "./src/app/functions-tab/functions-tab.component.html"),
            styles: [__webpack_require__(/*! ./functions-tab.component.css */ "./src/app/functions-tab/functions-tab.component.css")]
        })
    ], FunctionsTabComponent);
    return FunctionsTabComponent;
}());



/***/ }),

/***/ "./src/app/how-to/how-to.component.css":
/*!*********************************************!*\
  !*** ./src/app/how-to/how-to.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    width: 320px;\r\n    height: 350px;\r\n    float: left;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .example-header-image {\r\n    background-size: cover;\r\n    background-image: none\r\n  }\r\n\r\n  .example-video{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LXRvL2hvdy10by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvdy10by9ob3ctdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lXHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS12aWRlb3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/how-to/how-to.component.html":
/*!**********************************************!*\
  !*** ./src/app/how-to/how-to.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n\n\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Parameters</mat-card-title>\n      <mat-card-subtitle>See how to create parameters</mat-card-subtitle>\n    </mat-card-header>\n    <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/jPqO_1u3dmI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <mat-card-content>\n      <p>\n        Also see how the regex pattern for 'AllowedPattern' doesn't need backslash characters escaped. Escape characters will be automatically added by CloudKast.\n      </p>\n    </mat-card-content>\n  </mat-card>  \n\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Parameters</mat-card-title>\n    <mat-card-subtitle>See how to create parameters</mat-card-subtitle>\n  </mat-card-header>\n  <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/jPqO_1u3dmI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <mat-card-content>\n    <p>\n      Also see how the regex pattern for 'AllowedPattern' doesn't need backslash characters escaped. Escape characters will be automatically added by CloudKast.\n    </p>\n  </mat-card-content>\n</mat-card>\n\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Mappings</mat-card-title>\n    <mat-card-subtitle>See how to create Mappings.</mat-card-subtitle>\n  </mat-card-header>\n  <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/6gvqy8gPc7A\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <mat-card-content>\n    <p>\n      Creating Mapping is a dreadful task, but with CloudKast it's not dreadful anymore.\n    </p>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Conditions</mat-card-title>\n      <mat-card-subtitle>See how to create Conditions.</mat-card-subtitle>\n    </mat-card-header>\n    <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/T2udV-Q5q3U\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <mat-card-content>\n      <p>\n        Also see how to make use of 'Intrinsic Functions' widget to create function values. Functions\n        e.g. Fn::GetAttrs, Ref get autopopulated with Parameters and Resources already defined.\n      </p>\n    </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Simple Resources</mat-card-title>\n      <mat-card-subtitle>resources with primitive properties.</mat-card-subtitle>\n    </mat-card-header>\n    <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/KbiyZ9irzeY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <mat-card-content>\n      <p>\n        Here's an example of how to create a simple AWS resource (one that doesn't have properties that are custom objects.). Make a note how required, optional and conditional properties are highlighted different using info icons.\n      </p>\n    </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Complex Resources</mat-card-title>\n      <mat-card-subtitle>resources with custom properties.</mat-card-subtitle>\n    </mat-card-header>\n    <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/vVnW9tkdPOU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <mat-card-content>\n      <p>\n        See how to make use of 'Property Dealer' widget to create properties that are custom objects. Make a note of how a property of type array delimits items using semicolon.\n      </p>\n    </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Validate</mat-card-title>\n      <mat-card-subtitle>Validate template</mat-card-subtitle>\n    </mat-card-header>\n    <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/cKJrx3k-TW4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <mat-card-content>\n      <p>\n        A secure way of validating your template using AWS account credentials. Template is uploaded \n        with authenticated-read access to a bucket enabled for CORS.\n      </p>\n    </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Import</mat-card-title>\n      <mat-card-subtitle>Import an existing template</mat-card-subtitle>\n    </mat-card-header>\n    <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/on5fWt3ALEM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <mat-card-content>\n      <p>\n        See how to import an existing template for editing (removal, addition, modification) of sections\n        and resources and how to save the updated template.\n      </p>\n    </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Functions</mat-card-title>\n      <mat-card-subtitle>How to create functions</mat-card-subtitle>\n    </mat-card-header>\n    <iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/eh-ntqUT1k0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    <mat-card-content>\n      <p>\n        See how to create intrinsic functions e.g. how to create UserData property of \n        an EC2 instance.\n      </p>\n    </mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/how-to/how-to.component.ts":
/*!********************************************!*\
  !*** ./src/app/how-to/how-to.component.ts ***!
  \********************************************/
/*! exports provided: HowToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToComponent", function() { return HowToComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowToComponent = /** @class */ (function () {
    function HowToComponent() {
    }
    HowToComponent.prototype.ngOnInit = function () {
    };
    HowToComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-to',
            template: __webpack_require__(/*! ./how-to.component.html */ "./src/app/how-to/how-to.component.html"),
            styles: [__webpack_require__(/*! ./how-to.component.css */ "./src/app/how-to/how-to.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowToComponent);
    return HowToComponent;
}());



/***/ }),

/***/ "./src/app/import-template/import-template.component.css":
/*!***************************************************************!*\
  !*** ./src/app/import-template/import-template.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydC10ZW1wbGF0ZS9pbXBvcnQtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/import-template/import-template.component.html":
/*!****************************************************************!*\
  !*** ./src/app/import-template/import-template.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" mat-raised-button color=\"primary\" (click)=\"jsonfile.click()\"\nmatTooltip=\"Please select the cloudformation template json file\" > Import JSON file </button> <br>\n<input hidden #jsonfile type=\"file\" (change)=\"onFileAdd($event.target.files)\"> <br>\n<mat-accordion>\n<mat-card>\n  <mat-expansion-panel *ngIf=\"fileImported\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>Add new</mat-panel-title>\n      <mat-panel-description>Add new Parameter/Condition/Mapping/Resource/Output</mat-panel-description>\n    </mat-expansion-panel-header>\n\n  <div *ngIf=\"fileImported\">\n    <input type=\"text\" #paramname placeholder=\"Add a new Parameter\" name=\"paramname\"  ngModel >\n    <button [disabled]=\"paramname.value==''\" mat-icon-button  (click)=\"addParam(paramname.value)\" > <mat-icon>add</mat-icon> </button>\n  </div>\n  <div *ngIf=\"fileImported\">\n    <input type=\"text\" #mapname placeholder=\"Add a new Mapping\" name=\"mapname\"  ngModel >\n    <button [disabled]=\"mapname.value==''\" mat-icon-button  (click)=\"addMapping(mapname.value)\" > <mat-icon>add</mat-icon> </button>\n  </div>\n  <div *ngIf=\"fileImported\">\n    <input type=\"text\" #conname placeholder=\"Add a new Condition\" name=\"conname\"  ngModel >\n    <button [disabled]=\"conname.value==''\" mat-icon-button  (click)=\"addCondition(conname.value)\" > <mat-icon>add</mat-icon> </button>\n  </div>  \n  <div *ngIf=\"fileImported\">\n    <input type=\"text\" #resname placeholder=\"Add a new Resource\" name=\"resname\"  ngModel >\n    <button [disabled]=\"resname.value==''\" mat-icon-button  (click)=\"addResource(resname.value)\" > <mat-icon>add</mat-icon> </button>\n  </div>\n  <div *ngIf=\"fileImported\">\n      <input type=\"text\" #outname placeholder=\"Add a new Output\" name=\"outname\"  ngModel >\n      <button [disabled]=\"outname.value==''\" mat-icon-button  (click)=\"addOutput(outname.value)\" > <mat-icon>add</mat-icon> </button>\n  </div>\n  </mat-expansion-panel>\n  <mat-divider></mat-divider>\n\n  <mat-expansion-panel *ngIf=\"fileImported\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>Parameters:</mat-panel-title>\n      <mat-panel-description> Number of Parameters : {{getSectionCount(selProp['Parameters'])}} </mat-panel-description>\n    </mat-expansion-panel-header>\n  <form *ngIf=\"fileImported\"  #paramform=\"ngForm\" (submit)=\"onParamSubmit(paramform.value)\">\n    <div *ngFor=\"let i of getKeys(selProp['Parameters'])\" >\n          <mat-form-field *ngIf=\"isParamRemoved(i)\" >\n              <input type=\"text\" [name]=\"i\" [placeholder]=\"i\" [value]=\"selProp['Parameters'][i] | json\" \n              [matTooltip]=\"selProp['Parameters'][i] | json\" matInput ngModel>\n          </mat-form-field>\n          <button *ngIf=\"isParamRemoved(i)\" mat-icon-button (click)=\"removeParam(i)\" matTooltip=\"remove this parameter.\" > \n            <mat-icon>remove</mat-icon> \n          </button>\n    </div>\n      <button mat-icon-button color=\"primary\" type=\"submit\"> \n        <mat-icon>done</mat-icon>\n      </button>\n  </form> \n  </mat-expansion-panel>\n  <mat-divider></mat-divider>\n\n  <mat-expansion-panel *ngIf=\"fileImported\">\n      <mat-expansion-panel-header>\n          <mat-panel-title>Mappings:</mat-panel-title>\n          <mat-panel-description> Number of Mappings : {{getSectionCount(selProp['Mappings'])}} </mat-panel-description>\n      </mat-expansion-panel-header>\n  <form *ngIf=\"fileImported\"  #mapform=\"ngForm\" (submit)=\"onMappingSubmit(mapform.value)\">\n    <div *ngFor=\"let i of getKeys(selProp['Mappings'])\" >\n          <mat-form-field *ngIf=\"isMappingRemoved(i)\" >\n              <input type=\"text\" [name]=\"i\" [placeholder]=\"i\" [value]=\"selProp['Mappings'][i] | json\" \n              [matTooltip]=\"selProp['Mappings'][i] | json\" matInput ngModel>\n          </mat-form-field>\n          <button *ngIf=\"isMappingRemoved(i)\" mat-icon-button (click)=\"removeMapping(i)\" matTooltip=\"remove this mapping.\" > \n            <mat-icon>remove</mat-icon> \n          </button>\n    </div>\n    <button mat-icon-button color=\"primary\" type=\"submit\"> \n        <mat-icon>done</mat-icon>\n    </button>\n  </form>\n  </mat-expansion-panel>\n  <mat-divider></mat-divider>\n\n  <mat-expansion-panel *ngIf=\"fileImported\">\n      <mat-expansion-panel-header>\n          <mat-panel-title>Conditions:</mat-panel-title>\n          <mat-panel-description> Number of Conditions : {{getSectionCount(selProp['Conditions'])}} </mat-panel-description>\n      </mat-expansion-panel-header>    \n  <form *ngIf=\"fileImported\"  #conform=\"ngForm\" (submit)=\"onConditionSubmit(conform.value)\">\n\n        <div *ngFor=\"let i of getKeys(selProp['Conditions'])\" >\n            <mat-form-field *ngIf=\"isConditionRemoved(i)\" >\n                <input type=\"text\" [name]=\"i\" [placeholder]=\"i\" [value]=\"selProp['Conditions'][i] | json\" \n                [matTooltip]=\"selProp['Conditions'][i] | json\" matInput ngModel>\n            </mat-form-field>\n            <button *ngIf=\"isConditionRemoved(i)\" mat-icon-button (click)=\"removeCondition(i)\" matTooltip=\"remove this condition.\" > \n              <mat-icon>remove</mat-icon> \n            </button>\n      </div>\n\n    <button mat-icon-button color=\"primary\" type=\"submit\"> \n        <mat-icon>done</mat-icon>\n    </button>\n  </form>\n  </mat-expansion-panel>\n  <mat-divider></mat-divider>\n\n  <mat-expansion-panel *ngIf=\"fileImported\">\n      <mat-expansion-panel-header>\n          <mat-panel-title>Resources:</mat-panel-title>\n          <mat-panel-description> Number of Resources : {{getSectionCount(selProp['Resources'])}} </mat-panel-description>\n      </mat-expansion-panel-header>    \n  <form *ngIf=\"fileImported\"  #resform=\"ngForm\" (submit)=\"onResourceSubmit(resform.value)\">\n    <div *ngFor=\"let i of getKeys(selProp['Resources'])\" >\n          <mat-form-field *ngIf=\"isResourceRemoved(i)\" >\n              <input type=\"text\" [name]=\"i\" [placeholder]=\"i\" [value]=\"selProp['Resources'][i] | json\" \n              [matTooltip]=\"selProp['Resources'][i] | json\" matInput ngModel>\n          </mat-form-field>\n          <button *ngIf=\"isResourceRemoved(i)\" mat-icon-button (click)=\"removeResource(i)\" \n          matTooltip=\"remove this resource.\"> \n            <mat-icon>remove</mat-icon> \n          </button>\n    </div>\n    <button mat-icon-button color=\"primary\" type=\"submit\"> \n        <mat-icon>done</mat-icon>\n    </button>\n  </form>\n</mat-expansion-panel>\n  <mat-divider></mat-divider>\n\n  <mat-expansion-panel *ngIf=\"fileImported\"> \n      <mat-expansion-panel-header>\n          <mat-panel-title>Outputs:</mat-panel-title>\n          <mat-panel-description> Number of Outputs : {{getSectionCount(selProp['Outputs'])}} </mat-panel-description>\n      </mat-expansion-panel-header>    \n  <form *ngIf=\"fileImported\"  #outform=\"ngForm\" (submit)=\"onOutputSubmit(outform.value)\">\n    Outputs:  <br>\n    <div *ngFor=\"let i of getKeys(selProp['Outputs'])\" >\n          <mat-form-field *ngIf=\"isOutputRemoved(i)\" >\n              <input type=\"text\" [name]=\"i\" [placeholder]=\"i\" [value]=\"selProp['Outputs'][i] | json\" \n              [matTooltip]=\"selProp['Outputs'][i] | json\" matInput ngModel>\n          </mat-form-field>\n          <button *ngIf=\"isOutputRemoved(i)\" mat-icon-button (click)=\"removeOutput(i)\" matTooltip=\"remove this outing.\" > \n            <mat-icon>remove</mat-icon> \n          </button>\n    </div>\n    <button mat-icon-button color=\"primary\" type=\"submit\"> \n        <mat-icon>done</mat-icon>\n    </button>\n  </form>\n</mat-expansion-panel>\n  <mat-divider></mat-divider>\n</mat-card>\n</mat-accordion> <br>\n<a *ngIf=\"fileImported\" mat-button href=\"#\" (click)=\"getDownloadHref()\" matTooltip=\"Download Template\" >\n    <mat-icon>save</mat-icon>\n</a> <br>\n\n\n<pre> {{ selProp | json}} </pre>"

/***/ }),

/***/ "./src/app/import-template/import-template.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/import-template/import-template.component.ts ***!
  \**************************************************************/
/*! exports provided: ImportTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTemplateComponent", function() { return ImportTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");




var ImportTemplateComponent = /** @class */ (function () {
    function ImportTemplateComponent(result, util) {
        this.result = result;
        this.util = util;
        this.selProp = {};
        this.selPropCopy = {};
        this.import_output = {};
        this.fileImported = false;
    }
    ImportTemplateComponent.prototype.ngOnInit = function () {
    };
    ImportTemplateComponent.prototype.onFileAdd = function (files) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = function () {
            _this.selProp = JSON.parse(JSON.parse(JSON.stringify(reader.result)));
            _this.selPropCopy = _this.selProp;
        };
        this.fileImported = true;
    };
    ImportTemplateComponent.prototype.getKeys = function (value) {
        if (value != undefined) {
            return (Object.keys(value)).length == 0 ? undefined : Object.keys(value);
        }
        else {
            return [];
        }
    };
    ImportTemplateComponent.prototype.getSectionCount = function (value) {
        var i = 0;
        this.getKeys(value).forEach(function (j) {
            if (value[j] != undefined) {
                i = i + 1;
            }
        });
        return i;
    };
    ImportTemplateComponent.prototype.getDownloadHref = function () {
        var str = "data:text/plain;charset=utf-8,";
        var data = str + encodeURI(JSON.stringify(this.selProp));
        var link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', "cloudkast.json");
        link.click();
    };
    //Parameters:
    ImportTemplateComponent.prototype.addParam = function (value) {
        if (this.selProp["Parameters"] == undefined)
            this.selProp["Parameters"] = {};
        this.selProp["Parameters"][value] = {};
    };
    ImportTemplateComponent.prototype.removeParam = function (value) {
        this.selProp["Parameters"][value] = undefined;
    };
    ImportTemplateComponent.prototype.isParamRemoved = function (value) {
        if (this.selProp["Parameters"][value] == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ImportTemplateComponent.prototype.onParamSubmit = function (value) {
        var _this = this;
        if (this.selProp["Parameters"] == undefined)
            this.selProp["Parameters"] = {};
        var valArray = this.getKeys(value);
        valArray.forEach(function (i) {
            if (value[i] == "") {
                _this.selProp["Parameters"][i] = _this.selPropCopy["Parameters"][i];
            }
            else {
                _this.selProp["Parameters"][i] = _this.util.getProperJson(value[i]);
            }
        });
    };
    //Mappings:
    ImportTemplateComponent.prototype.addMapping = function (value) {
        if (this.selProp["Mappings"] == undefined)
            this.selProp["Mappings"] = {};
        this.selProp["Mappings"][value] = {};
    };
    ImportTemplateComponent.prototype.removeMapping = function (value) {
        this.selProp["Mappings"][value] = undefined;
    };
    ImportTemplateComponent.prototype.isMappingRemoved = function (value) {
        if (this.selProp["Mappings"][value] == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ImportTemplateComponent.prototype.onMappingSubmit = function (value) {
        var _this = this;
        if (this.selProp["Mappings"] == undefined)
            this.selProp["Mappings"] = {};
        var valArray = this.getKeys(value);
        valArray.forEach(function (i) {
            if (value[i] == "") {
                _this.selProp["Mappings"][i] = _this.selPropCopy["Mappings"][i];
            }
            else {
                _this.selProp["Mappings"][i] = _this.util.getProperJson(value[i]);
            }
        });
    };
    //Conditions:
    ImportTemplateComponent.prototype.addCondition = function (value) {
        if (this.selProp["Conditions"] == undefined)
            this.selProp["Conditions"] = {};
        this.selProp["Conditions"][value] = {};
    };
    ImportTemplateComponent.prototype.removeCondition = function (value) {
        this.selProp["Conditions"][value] = undefined;
    };
    ImportTemplateComponent.prototype.isConditionRemoved = function (value) {
        if (this.selProp["Conditions"][value] == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ImportTemplateComponent.prototype.onConditionSubmit = function (value) {
        var _this = this;
        if (this.selProp["Conditions"] == undefined)
            this.selProp["Conditions"] = {};
        var valArray = this.getKeys(value);
        valArray.forEach(function (i) {
            if (value[i] == "") {
                _this.selProp["Conditions"][i] = _this.selPropCopy["Conditions"][i];
            }
            else {
                _this.selProp["Conditions"][i] = _this.util.getProperJson(value[i]);
            }
        });
    };
    //Resources:
    ImportTemplateComponent.prototype.addResource = function (value) {
        if (this.selProp["Resources"] == undefined)
            this.selProp["Resources"] = {};
        this.selProp["Resources"][value] = {};
    };
    ImportTemplateComponent.prototype.removeResource = function (value) {
        this.selProp["Resources"][value] = undefined;
    };
    ImportTemplateComponent.prototype.isResourceRemoved = function (value) {
        if (this.selProp["Resources"][value] == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ImportTemplateComponent.prototype.onResourceSubmit = function (value) {
        var _this = this;
        if (this.selProp["Resources"] == undefined)
            this.selProp["Resources"] = {};
        var valArray = this.getKeys(value);
        valArray.forEach(function (i) {
            if (value[i] == "") {
                _this.selProp["Resources"][i] = _this.selPropCopy["Resources"][i];
            }
            else {
                _this.selProp["Resources"][i] = _this.util.getProperJson(value[i]);
            }
        });
    };
    //Outputs:
    ImportTemplateComponent.prototype.addOutput = function (value) {
        if (this.selProp["Outputs"] == undefined)
            this.selProp["Outputs"] = {};
        this.selProp["Outputs"][value] = {};
    };
    ImportTemplateComponent.prototype.removeOutput = function (value) {
        this.selProp["Outputs"][value] = undefined;
    };
    ImportTemplateComponent.prototype.isOutputRemoved = function (value) {
        if (this.selProp["Outputs"][value] == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ImportTemplateComponent.prototype.onOutputSubmit = function (value) {
        var _this = this;
        if (this.selProp["Outputs"] == undefined)
            this.selProp["Outputs"] = {};
        var valArray = this.getKeys(value);
        valArray.forEach(function (i) {
            if (value[i] == "") {
                _this.selProp["Outputs"][i] = _this.selPropCopy["Outputs"][i];
            }
            else {
                _this.selProp["Outputs"][i] = _this.util.getProperJson(value[i]);
            }
        });
    };
    ImportTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-template',
            template: __webpack_require__(/*! ./import-template.component.html */ "./src/app/import-template/import-template.component.html"),
            styles: [__webpack_require__(/*! ./import-template.component.css */ "./src/app/import-template/import-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_3__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_2__["UsefulUtilsService"]])
    ], ImportTemplateComponent);
    return ImportTemplateComponent;
}());



/***/ }),

/***/ "./src/app/intrinsic-functions/intrinsic-functions.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/intrinsic-functions/intrinsic-functions.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 250px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cmluc2ljLWZ1bmN0aW9ucy9pbnRyaW5zaWMtZnVuY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9pbnRyaW5zaWMtZnVuY3Rpb25zL2ludHJpbnNpYy1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/intrinsic-functions/intrinsic-functions.component.html":
/*!************************************************************************!*\
  !*** ./src/app/intrinsic-functions/intrinsic-functions.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" > \n<form #funcform=\"ngForm\" id=\"funcform\" (submit)=\"doFunc(funcform.value)\" >\n    <input list=\"functions\" name=\"funcname\" placeholder=\"Pick a function\" #funcname ngModel> <br>\n    <datalist id=\"functions\" label=\"functions\" >\n        <option value=\"Ref\"></option>\n        <option value=\"Fn::Base64\"></option>\n        <option value=\"Fn::Cidr\"></option>\n        <option value=\"Fn::FindInMap\"></option>\n        <option value=\"Fn::GetAtt\"></option>\n        <option value=\"Fn::GetAZs\"></option>\n        <option value=\"Fn::ImportValue\"></option>\n        <option value=\"Fn::Join\"></option>\n        <option value=\"Fn::Select\"></option>\n        <option value=\"Fn::Split\"></option>\n        <option value=\"Fn::Sub\"></option>\n        <option value=\"Fn::And\"></option>\n        <option value=\"Fn::Equals\"></option>\n        <option value=\"Fn::If\"></option>\n        <option value=\"Fn::Not\"></option>\n        <option value=\"Fn::Or\"></option>\n        <option value=\"Fn::Transform\"></option>\n    </datalist>\n\n    <div *ngIf=\"funcname.value=='Fn::Transform'\" >\n      <input type=\"text\" ngModel name=\"traname\">\n      <button type=\"button\" mat-raised-button (click)=\"addTag()\" matTooltip=\"Add a list of key-value pair for Parameters.\" >\n          <mat-icon>add</mat-icon>\n        </button><br>\n        <div *ngFor=\"let i of tagArray\" >\n            <input name=\"tagKey{{i}}\" placeholder=\"Key\" ngModel>\n            <input name=\"tagValue{{i}}\" placeholder=\"Value\" ngModel>\n      </div>\n    </div>\n\n    <div *ngIf=\"funcname.value=='Ref'\" >\n      <select name=\"refvalue\" form=\"funcform\" ngModel #refvalue>\n        <optgroup label=\"values available\">\n          <option  *ngFor=\"let i of retReflist()\" [value]=\"i\">{{i}} </option>\n        </optgroup>\n      </select>\n      <mat-icon matTooltip=\"Resources and Parameters will only get populated once they have been added to the template\"  >info</mat-icon>\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Base64'\">\n      <input type=\"text\" ngModel name=\"b64value\" placeholder=\"Enter String\"> \n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Cidr'\">\n      <input type=\"text\" ngModel name=\"ipblock\" placeholder=\"IP Block\" \n      matTooltip=\"The user-specified CIDR address block to be split into \n      smaller CIDR blocks. e.g. 192.168.0.0/24\"> <br>\n      <input type=\"text\" ngModel name=\"count\" placeholder=\"count\" \n      matTooltip=\"The number of CIDRs to generate. Valid range is between 1 and 256.\"> <br>\n      <input type=\"text\" ngModel name=\"cidrbits\" placeholder=\"CidrBits\" \n      matTooltip=\"The number of subnet bits for the CIDR. For example, specifying a value '8' \n      for this parameter will create a CIDR with a mask of '/24'. Enter a number e.g. 24\" >\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::FindInMap'\">\n      <input type=\"text\" ngModel name=\"maps\" placeholder=\"Mapping element\" #mapname list=\"maplist\">\n      <datalist id=\"maplist\" label=\"Maps\" >\n        <option *ngFor=\"let i of retMaps()\" [value]=\"i\" > {{i}} </option>\n      </datalist>\n      <mat-icon matTooltip=\"Only maps that have been added to the template will be populated here\" >info</mat-icon>\n      <br>\n      <div *ngIf=\"mapname.value != ''\" >\n        <input type=\"text\" ngModel name=\"topkey\" placeholder=\"TopLevelKey\" #topkey list=\"keylist\">\n        <datalist id=\"keylist\" label=\"Keys\">\n          <option *ngFor=\"let j of retMapKeys(mapname.value)\" > {{j}} </option>\n        </datalist>\n        <div *ngIf=\"topkey.value != '' \" >\n          <input type=\"text\" ngModel name=\"secondkey\" placeholder=\"SecondLevelKey\" list=\"secKeyList\">\n          <datalist id=\"secKeyList\"  lable=\"SecondKeys\" >\n            <option *ngFor=\"let k of retMapSecKeys(mapname.value,topkey.value)\"> {{k}} </option>\n          </datalist>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::GetAtt'\">\n      <input type=\"text\" ngModel name=\"resname\" placeholder=\"Resource\"  #resname list=\"reslist\" > \n      <datalist id=\"reslist\" label=\"Resources\" >\n        <option *ngFor=\"let i of retResList()\" [value]=\"i\" > {{i}} </option>\n      </datalist>\n      <mat-icon matTooltip=\"Only resources that have been added to the template will be populated here.\" >info</mat-icon>\n      <br>\n      <div *ngIf=\"resname.value!=''\" >\n        <input list=\"attrs\" ngModel type=\"text\" name=\"propname\" placeholder=\"Property Name\">\n        <datalist id=\"attrs\" label=\"Attributes\" >\n          <option *ngFor=\"let j of ResAttributes[jsonresult.jsonresult.Resources[resname.value]['Type']]\"  [value]=\"j\"> {{j}} </option>\n        </datalist>\n        <mat-icon matTooltip=\"Respective attributes will be populated based on the type of the resource seleted.\"  >info</mat-icon>\n      </div>\n    </div>\n   \n    <div *ngIf=\"funcname.value=='Fn::GetAZs'\">\n      <input type=\"text\" ngModel name=\"zone\" placeholder=\"Zonename or Function\" >\n    </div>\n    \n    <div *ngIf=\"funcname.value=='Fn::ImportValue'\">\n      <input type=\"text\" ngModel name=\"importval\" placeholder=\"ImportValue\" \n      [matTooltip]=\"fnimportvalueTip\" >\n    </div>\n    \n    <div *ngIf=\"funcname.value=='Fn::Join'\">\n      <input type=\"text\" ngModel name=\"delim\" placeholder=\"Delimiter\" matTooltip=\"\n      Enter delimiter.\" #delim>\n      <mat-icon [matTooltip]=\"fnjoinTip\" >info</mat-icon> <br>\n      <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"addFnjoinElement()\">Add Element</button><br>\n      <div *ngFor=\"let i of fnjoinArray\">\n        <input type=\"text\" name=\"element{{i}}\" ngModel >\n      </div>\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Select'\">\n      <input type=\"text\" ngModel name=\"index\" placeholder=\"Index\">\n      <mat-icon [matTooltip]=\"fnselectTip\" >info</mat-icon> <br>\n      <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"addFnselectElement()\">Add Element</button><br>\n      <div *ngFor=\"let i of fnselectArray\">\n        <input type=\"text\" name=\"element{{i}}\" ngModel >\n      </div>\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Split'\">\n      <input type=\"text\" ngModel name=\"split\" placeholder=\"Split By\">\n      <mat-icon [matTooltip]=\"fnsplitTip\">info</mat-icon><br>\n      <input type=\"text\" ngModel name=\"splitvalue\" placeholder=\"Value\"><br>\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Sub'\">\n        <!-- <input type=\"text\" ngModel name=\"sub\" placeholder=\"Substitute\" > -->\n        <textarea name=\"sub\" ngModel id=\"\" cols=\"25\" rows=\"10\"></textarea>\n        <mat-icon [matTooltip]=\"fnsubTip\" >info</mat-icon><br>\n        <input type=\"text\" ngModel name=\"subvalue\" placeholder=\"Subvalue\" \n        matTooltip=\"If you're substituting only template parameters e.g. ${MyVarName}, this field must be left blank.\" >\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::And'\" >\n      <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"addFnAndElement()\">Add Condition</button>\n      <mat-icon [matTooltip]=\"fnAndTip\" >info</mat-icon>\n      <br>\n      <div *ngFor=\"let i of fnandArray\">\n        <input type=\"text\" name=\"element{{i}}\" ngModel >\n      </div>\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Equals'\" >\n      <input type=\"text\" name=\"equal1\" ngModel placeholder=\"value 1\" >\n      <input type=\"text\" name=\"equal2\" ngModel placeholder=\"value 2\" >\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::If'\" >\n      <input type=\"text\" name=\"ifcon\" ngModel placeholder=\"Condition\"> <br>\n      <input type=\"text\" name=\"iftrue\" ngModel placeholder=\"Value if true\">\n      <input type=\"text\" name=\"iffalse\" ngModel placeholder=\"Value if false\">\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Not'\" >\n      <input type=\"text\" name=\"fnnot\" ngModel placeholder=\"Condition\" >\n    </div>\n\n    <div *ngIf=\"funcname.value=='Fn::Or'\" >\n      <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"addFnOrElement()\">Add Condition</button>\n      <mat-icon [matTooltip]=\"fnOrTip\" >info</mat-icon>\n      <br>\n      <div *ngFor=\"let i of fnorArray\">\n        <input type=\"text\" name=\"element{{i}}\" ngModel >\n      </div>\n    </div>\n    <button mat-icon-button color=\"primary\" type=\"submit\" matTooltip=\"Generate function\">\n      <mat-icon>done</mat-icon>\n    </button>\n    <button mat-icon-button  type=\"button\" color=\"accent\" \n      (click)=\"funcname.value=''; funcobj={}; onReset()\"\n      matTooltip=\"Reset function\" >\n      <mat-icon>clear</mat-icon>\n    </button>\n\n</form>\n\n<pre id=\"funcOutput\" >\n  {{funcobj|json}}\n</pre>\n<button mat-icon-button (click)=\"copyToClipboard()\"> <mat-icon>file_copy</mat-icon> </button>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/intrinsic-functions/intrinsic-functions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/intrinsic-functions/intrinsic-functions.component.ts ***!
  \**********************************************************************/
/*! exports provided: IntrinsicFunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrinsicFunctionsComponent", function() { return IntrinsicFunctionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




//import {ResAttributes} from './ResAttributes'
var IntrinsicFunctionsComponent = /** @class */ (function () {
    function IntrinsicFunctionsComponent(jsonresult, utility) {
        this.jsonresult = jsonresult;
        this.utility = utility;
        this.tagCount = 0;
        this.tagArray = [];
        this.funcobj = {};
        this.fnjoinArray = [];
        this.fnjoinCount = 0;
        this.fnselectArray = [];
        this.fnselectCount = 0;
        this.fnandArray = [];
        this.fnandCount = 0;
        this.fnorArray = [];
        this.fnorCount = 0;
        this.fnimportvalueTip = "The intrinsic function Fn::ImportValue returns the value of an output exported by another stack.You can use the following functions in the Fn::ImportValue function. The value of these functions can't depend on a resource. Fn::Base64, Fn::FindInMap, Fn::If, Fn::Join, Fn:Select, Fn::Split, Fn::Sub, Ref";
        this.fnjoinTip = "e.g. The following example returns: a:b:c. \"Fn::Join\" : [ \":\", [ \"a\", \"b\", \"c\" ] ]. For the Fn::Join delimiter, you cannot use any functions. You must specify a string value. For the Fn::Join list of values, you can use the following functions: Fn::Base64, Fn::FindInMap, Fn::GetAtt, Fn::GetAZs, Fn::If, Fn::ImportValue, Fn::Join, Fn::Split, Fn::Select, Fn::Sub, Ref";
        this.fnselectTip = "e.g. The following example returns: 'grapes'. { \"Fn::Select\" : [ \"1\", [ \"apples\", \"grapes\", \"oranges\", \"mangoes\" ]]}. For the Fn::Select index value, you can use the Ref and Fn::FindInMap functions. For the Fn::Select list of objects, you can use the following functions: Fn::FindInMap, Fn::GetAtt, Fn::GetAZs, Fn::If, Fn::Split, Ref";
        this.fnsplitTip = "e.g. The following example splits a string at each vertical bar (|). The function returns [\"a\", \"b\", \"c\"]. { \"Fn::Split\" : [ \"|\" , \"a|b|c\" ] }. If you split a string with consecutive delimiters, the resulting list will include an empty string. For the Fn::Split delimiter, you cannot use any functions. You must specify a string value. For the Fn::Split list of values, you can use the following functions: Fn::Base64,Fn::FindInMap,Fn::GetAtt,Fn::GetAZs,Fn::If,Fn::ImportValue,Fn::Join,Fn::Select,Fn::Sub,Ref";
        this.fnsubTip = "The intrinsic function Fn::Sub substitutes variables in an input string with values that you specify. e.g. { \"Fn::Sub\": [ \"www.${Domain}\", { \"Domain\": {\"Ref\" : \"RootDomainName\" }} ]}. For the String parameter, you cannot use any functions. You must specify a string value.For the VarName and VarValue parameters, you can use the following functions: Fn::Base64, Fn::FindInMap, Fn::GetAtt,Fn::GetAZs,Fn::If,Fn::ImportValue,Fn::Join,Fn::Select,Ref";
        this.fnAndTip = "Fn::And acts as an AND operator. The minimum number of conditions that you can include is 2, and the maximum is 10.";
        this.fnOrTip = "Fn::Or acts as an AND operator. The minimum number of conditions that you can include is 2, and the maximum is 10.";
        this.ResAttributes = {
            "AWS::EC2::Instance": ["AvailabilityZone", "PrivateDnsName", "PublicDnsName", "PrivateIp", "PublicIp"],
            "AWS::DynamoDB::Table": ["Arn", "StreamArn"],
            "AWS::EC2::CapacityReservation": ["AvailabilityZone", "AvailableInstanceCount", "InstanceType", "Tenancy", "TotalInstanceCount"],
            "AWS::EC2::EIP": ["AllocationId"],
            "AWS::EC2::NetworkInterface": ["PrimaryPrivateIpAddress", "SecondaryPrivateIpAddresses"],
            "AWS::EC2::SecurityGroup": ["VpcId", "GroupId"],
            "AWS::EC2::Subnet": ["AvailabilityZone", "Ipv6CidrBlocks", "NetworkAclAssociationId", "VpcId"],
            "AWS::EC2::SubnetNetworkAclAssociation": ["AssociationId"],
            "AWS::EC2::VPC": ["CidrBlock", "CidrBlockAssociations", "DefaultNetworkAcl", "DefaultSecurityGroup", "Ipv6CidrBlocks"],
            "AWS::AmazonMQ::Broker": ["Arn", "ConfigurationId", "ConfigurationRevision"],
            "AWS::AmazonMQ::Configuration": ["Arn", "Revision"],
            "AWS::ApiGateway::DomainName": ["DistributionDomainName"],
            "AWS::ApiGateway::RestApi": ["RootResourceId"],
            "AWS::ApiGatewayV2::DomainName": ["RegionalDomainName", "RegionalHostedZoneId"],
            "AWS::AppMesh::Mesh": ["Arn", "MeshName", "Uid"],
            "AWS::AppMesh::Route": ["Arn", "MeshName", "RouteName", "Uid", "VirtualRouterName"],
            "AWS::AppMesh::VirtualNode": ["Arn", "MeshName", "Uid", "VirtualNodeName"],
            "AWS::AppMesh::VirtualRouter": ["Arn", "MeshName", "Uid", "VirtualRouterName"],
            "AWS::AppMesh::VirtualService": ["Arn", "MeshName", "Uid", "VirtualServiceName"],
            "AWS::AppStream::ImageBuilder": ["StreamingUrl"],
            "AWS::Cloud9::EnvironmentEC2": ["Arn", "Name"],
            "AWS::CloudFormation::WaitCondition": ["Data"],
            "AWS::CloudFormation::Stack": ["Outputs.NestedStackOutputName"],
            "AWS::CloudFront::Distribution": ["DomainName"],
            "AWS::CloudFront::CloudFrontOriginAccessIdentity": ["S3CanonicalUserId"],
            "AWS::CloudTrail::Trail": ["Arn", "SnsTopicArn"],
            "AWS::CloudWatch::Alarm": ["Arn"],
            "AWS::CodeBuild::Project": ["Arn"],
            "AWS::CodeCommit::Repository": ["Arn", "CloneUrlHttp", "CloneUrlSsh", "Name"],
            "AWS::CodePipeline::Pipeline": ["Version"],
            "AWS::CodePipeline::Webhook": ["Url"],
            "AWS::Config::ConfigRule": ["Arn", "ConfigRuleId", "Compliance.Type"],
            "AWS::DAX::Cluster": ["Arn", "ClusterDiscoveryEndpoint"],
            "AWS::DirectoryService::MicrosoftAD": ["Alias", "DnsIpAddresses"],
            "AWS::DirectoryService::SimpleAD": ["Alias", "DnsIpAddresses"],
            "AWS::DLM::LifecyclePolicy": ["Arn"],
            "AWS::DocDB::DBCluster": ["ClusterResourceId", "Endpoint", "ReadEndpoint", "Port"],
            "AWS::DocDB::DBInstance": ["Endpoint", "Port"],
            "AWS::ECR::Repository": ["Arn"],
            "AWS::ECS::Cluster": ["Arn"],
            "AWS::ECS::Service": ["Name"],
            "AWS::EKS::Cluster": ["Arn", "CertificateAuthorityData", "Endpoint"],
            "AWS::ElastiCache::CacheCluster": ["ConfigurationEndpoint.Address", "ConfigurationEndpoint.Port", "RedisEndpoint.Address", "RedisEndpoint.Port"],
            "AWS::ElastiCache::ReplicationGroup": ["ConfigurationEndPoint.Address", "ConfigurationEndPoint.Port", "PrimaryEndPoint.Address", "PrimaryEndPoint.Port", "ReadEndPoint.Addresses", "ReadEndPoint.Ports", "ReadEndPoint.Addresses.List", "ReadEndPoint.Ports.List"],
            "AWS::ElasticBeanstalk::Environment": ["EndpointURL"],
            "AWS::ElasticLoadBalancing::LoadBalancer": ["CanonicalHostedZoneName", "CanonicalHostedZoneNameID", "DNSName", "SourceSecurityGroup.GroupName", "SourceSecurityGroup.OwnerAlias"],
            "AWS::ElasticLoadBalancingV2::LoadBalancer": ["DNSName", "CanonicalHostedZoneID", "LoadBalancerFullName", "LoadBalancerName", "SecurityGroups"],
            "AWS::ElasticLoadBalancingV2::TargetGroup": ["LoadBalancerArns", "TargetGroupFullName", "TargetGroupName"],
            "AWS::Elasticsearch::Domain": ["DomainArn", "DomainEndpoint"],
            "AWS::EMR::Cluster": ["MasterPublicDNS"],
            "AWS::Events::Rule": ["Arn"],
            "AWS::Greengrass::ConnectorDefinition": ["Arn", "Id", "LatestVersionArn", "Name"],
            "AWS::Greengrass::CoreDefinition": ["Arn", "Id", "LatestVersionArn", "Name"],
            "AWS::Greengrass::DeviceDefinition": ["Arn", "Id", "LatestVersionArn", "Name"],
            "AWS::Greengrass::FunctionDefinition": ["Id"],
            "AWS::Greengrass::FunctionDefinitionVersion": ["Arn"],
            "AWS::Greengrass::Group": ["Arn", "Id", "LatestVersionArn", "Name", "RoleArn", "RoleAttachedAt"],
            "AWS::Greengrass::LoggerDefinition": ["Arn", "Id", "LatestVersionArn", "Name"],
            "AWS::Greengrass::ResourceDefinition": ["Arn", "Id", "LatestVersionArn", "Name"],
            "AWS::Greengrass::SubscriptionDefinition": ["Arn", "Id", "LatestVersionArn", "Name"],
            "AWS::IAM::AccessKey": ["SecretAccessKey"],
            "AWS::IAM::Group": ["Arn"],
            "AWS::IAM::InstanceProfile": ["Arn"],
            "AWS::IAM::Role": ["Arn"],
            "AWS::IAM::User": ["Arn"],
            "AWS::IoT::Certificate": ["Arn"],
            "AWS::IoT::Policy": ["Arn"],
            "AWS::IoT::TopicRule": ["Arn"],
            "AWS::IoT1Click::Device": ["Arn", "DeviceId", "Enabled"],
            "AWS::IoT1Click::Placement": ["PlacementName", "ProjectName"],
            "AWS::IoT1Click::Project": ["ProjectName", "Arn"],
            "AWS::Kinesis::Stream": ["Arn"],
            "AWS::Kinesis::StreamConsumer": ["ConsumerARN", "ConsumerCreationTimestamp", "ConsumerName", "ConsumerStatus", "StreamARN"],
            "AWS::KinesisFirehose::DeliveryStream": ["Arn"],
            "AWS::KMS::Key": ["Arn"],
            "AWS::Lambda::Function": ["Arn"],
            "AWS::Lambda::Version": ["Version"],
            "AWS::Logs::Destination": ["Arn"],
            "AWS::Logs::LogGroup": ["Arn"],
            "AWS::OpsWorks::Instance": ["AvailabilityZone", "PrivateDnsName", "PrivateIp", "PublicDnsName", "PublicIp"],
            "AWS::OpsWorks::UserProfile": ["SshUserName"],
            "AWS::OpsWorksCM::Server": ["Arn", "Endpoint"],
            "AWS:RAM::ResourceShare": ["Arn"],
            "AWS::Redshift::Cluster": ["Endpoint.Address", "Endpoint.Port"],
            "AWS::RDS::DBCluster": ["Endpoint.Address", "Endpoint.Port", "ReadEndpoint.Address"],
            "AWS::RDS::DBInstance": ["Endpoint.Address", "Endpoint.Port"],
            "AWS::RoboMaker::Fleet": ["Arn"],
            "AWS::RoboMaker::RobotApplication": ["Arn", "CurrentRevisionId"],
            "AWS::RoboMaker::SimulationApplication": ["Arn", "CurrentRevisionId"],
            "AWS::Route53::HostedZone": ["NameServers"],
            "AWS::Route53Resolver::ResolverEndpoint": ["Arn", "Direction", "HostedVPCId", "IpAddressCount", "Name", "ResolverEndpointId"],
            "AWS::Route53Resolver::ResolverRule": ["Arn", "DomainName", "ResolverEndpointId", "ResolverRuleId", "TargetIps"],
            "AWS::Route53Resolver::ResolverRuleAssociation": ["Name", "ResolverRuleAssociationId", "ResolverRuleId", "VPCId"],
            "AWS::S3::Bucket": ["Arn", "DomainName", "DualStackDomainName", "WebsiteURL"],
            "AWS::Serverless::Function": ["Arn"],
            "AWS::ServiceDiscovery::HttpNamespace": ["Arn", "Id"],
            "AWS::ServiceDiscovery::PrivateDnsNamespace": ["Arn", "Id"],
            "AWS::ServiceDiscovery::PublicDnsNamespace": ["Arn", "Id"],
            "AWS::ServiceDiscovery::Service": ["Arn", "Id", "Name"],
            "AWS::SNS::Topic": ["TopicName"],
            "AWS::StepFunctions::Activity": ["Name"],
            "AWS::StepFunctions::StateMachine": ["Name"],
            "AWS::SQS::Queue": ["Arn", "QueueName"]
        };
    }
    IntrinsicFunctionsComponent.prototype.ngOnInit = function () {
    };
    IntrinsicFunctionsComponent.prototype.addTag = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    IntrinsicFunctionsComponent.prototype.getTagArray = function (value) {
        var _this = this;
        var tags = [];
        this.tagArray.forEach(function (i) {
            tags.push({
                "Key": value["tagKey" + i] ? _this.utility.getProperJson(value["tagKey" + i]) : undefined,
                "Value": value["tagValue" + i] ? _this.utility.getProperJson(value["tagValue" + i]) : undefined
            });
        });
        return tags.length == 0 ? undefined : tags;
    };
    IntrinsicFunctionsComponent.prototype.addFnjoinElement = function () {
        this.fnjoinCount += 1;
        this.fnjoinArray.push(this.fnjoinCount);
    };
    IntrinsicFunctionsComponent.prototype.addFnselectElement = function () {
        this.fnselectCount += 1;
        this.fnselectArray.push(this.fnselectCount);
    };
    IntrinsicFunctionsComponent.prototype.addFnAndElement = function () {
        this.fnandCount += 1;
        this.fnandArray.push(this.fnandCount);
    };
    IntrinsicFunctionsComponent.prototype.addFnOrElement = function () {
        this.fnorCount += 1;
        this.fnorArray.push(this.fnorCount);
    };
    IntrinsicFunctionsComponent.prototype.getKeys = function (val) {
        console.log(Object.keys(val));
        return Object.keys(val);
    };
    IntrinsicFunctionsComponent.prototype.retResList = function () {
        return Object.keys(this.jsonresult.jsonresult.Resources).length > 0 ? Object.keys(this.jsonresult.jsonresult.Resources) : [];
    };
    IntrinsicFunctionsComponent.prototype.retReflist = function () {
        var paramarray = Object.keys(this.jsonresult.jsonresult.Parameters);
        var pseudo = ["AWS::Partition", "AWS::Region", "AWS::StackId", "AWS::StackName", "AWS::URLSuffix", "AWS::AccountId", "AWS::NoValue"];
        return Object.keys(this.jsonresult.jsonresult.Resources).concat(paramarray).concat(pseudo);
        //return pseudo;
    };
    IntrinsicFunctionsComponent.prototype.retMaps = function () {
        return Object.keys(this.jsonresult.jsonresult.Mappings);
    };
    IntrinsicFunctionsComponent.prototype.retMapKeys = function (val) {
        return Object.keys(this.jsonresult.jsonresult.Mappings[val]);
    };
    IntrinsicFunctionsComponent.prototype.retMapSecKeys = function (val1, val2) {
        return Object.keys(this.jsonresult.jsonresult.Mappings[val1][val2]);
    };
    IntrinsicFunctionsComponent.prototype.onReset = function () {
        this.fnjoinArray = [];
        this.fnjoinCount = 0;
        this.fnselectArray = [];
        this.fnselectCount = 0;
        this.fnandArray = [];
        this.fnandCount = 0;
        //this.funcobj={}
        // switch (value.funcname) {      
        //   case "Ref":
        //     value.refvalue=undefined;
        //     break;
        //   case "Fn::Base64":
        //     this.funcobj["Fn::Base64"]=undefined;
        //     break;
        //   case "Fn::Cidr":
        //     value.ipblock=undefined;
        //     value.count=undefined;
        //     value.cidrbits=undefined;
        //     break;
        //   case "Fn::FindInMap":
        //     value.maps=undefined;
        //     value.topkey=undefined;
        //     value.secondkey=undefined;
        //     break;
        //   case "Fn::GetAtt":
        //     value.resname=undefined;
        //     value.propname=undefined;
        //     break;
        //   case "Fn::GetAZs":
        //     value.zone=undefined;
        //     break;
        //   case "Fn::ImportValue":
        //     value.importval=undefined;
        //     break;
        //   case "Fn::Join":
        //     value.delim=undefined;
        //     break;
        //   case "Fn::Select":
        //     value.index=undefined;
        //     break;        
        //   case "Fn::Split":
        //     value.split=undefined;
        //     value.splitvalue=undefined;
        //     break;    
        //   case "Fn::Sub":
        //     value.sub=undefined;
        //     value.subvalue=undefined;
        //     break;                
        //   case "Fn::Transform":
        //     value.trapara=undefined;
        //     break;         
        //   case "Fn::And":
        //     break;  
        //   case "Fn::Equals":
        //     value.equal1=undefined;
        //     value.equal2=undefined;
        //     break;    
        //   case "Fn::If":
        //     value.ifcon=undefined;
        //     value.iftrue=undefined;
        //     value.iffalse=undefined;
        //     break;      
        //   case "Fn::Not":
        //     value.fnnot=undefined;          
        //     break;
        //   case "Fn::Or":
        //     value.fnor=undefined;
        //     break;
        //   default:
        //     break;
        // }
    };
    IntrinsicFunctionsComponent.prototype.retResource = function () {
        //console.log(Object.keys(this.jsonresult.jsonresult.Resources))
        return (Object.keys(this.jsonresult.jsonresult.Resources).length != 0) ? Object.keys(this.jsonresult.jsonresult.Resources) : [];
    };
    IntrinsicFunctionsComponent.prototype.retResProps = function (rname) {
        //return Object.keys(this.jsonresult.jsonresult.Resources[rname]);
        return (Object.keys(this.jsonresult.jsonresult.Resources[rname]["Properties"]).length != 0) ? Object.keys(this.jsonresult.jsonresult.Resources[rname]["Properties"]) : [];
    };
    IntrinsicFunctionsComponent.prototype.retArray = function (num) {
        var joinarr = [];
        for (var i = 0; i < num; i = i + 1) {
            joinarr.push(i);
        }
        return joinarr;
    };
    IntrinsicFunctionsComponent.prototype.copyToClipboard = function () {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.funcobj);
        document.body.appendChild(textArea);
        //textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    // doUnescape(value){
    //   if((value as String).includes('/\\n')){
    //     return (value as String).replace('/\\n',"\n");
    //   }
    // }
    IntrinsicFunctionsComponent.prototype.doFunc = function (value) {
        var _this = this;
        switch (value.funcname) {
            case "Ref":
                this.funcobj = {
                    "Ref": value.refvalue
                };
                break;
            case "Fn::Base64":
                this.funcobj = {
                    "Fn::Base64": this.utility.getProperJson(value.b64value)
                };
                break;
            case "Fn::Cidr":
                this.funcobj = {
                    "Fn::Cidr": [value.ipblock, value.count, value.cidrbits]
                };
                break;
            case "Fn::FindInMap":
                //var val2 = (value.topkey as String).includes("::")?JSON.parse(value.topkey):value.topkey;
                //var val3 = (value.secondkey as String).includes("::")?JSON.parse(value.secondkey):value.secondkey;
                this.funcobj = {
                    "Fn::FindInMap": [value.maps, this.utility.getProperJson(value.topkey), this.utility.getProperJson(value.secondkey)]
                };
                break;
            case "Fn::GetAtt":
                this.funcobj = {
                    "Fn::GetAtt": [value.resname, value.propname]
                };
                break;
            case "Fn::GetAZs":
                this.funcobj = {
                    "Fn::GetAZs": this.utility.getProperJson(value.zone)
                };
                break;
            case "Fn::ImportValue":
                this.funcobj = {
                    "Fn::ImportValue": this.utility.getProperJson(value.importval)
                };
                break;
            case "Fn::Join":
                var joinArr = [];
                var joinElements = [];
                this.fnjoinArray.forEach(function (i) {
                    joinElements.push(_this.utility.doUnescape(_this.utility.getProperJson(value["element" + i])));
                });
                joinArr.push(value.delim);
                joinArr.push(joinElements);
                this.funcobj = {
                    "Fn::Join": this.utility.getProperJson(joinArr)
                };
                break;
            case "Fn::Select":
                var selectArr = [];
                var selectElements = [];
                this.fnselectArray.forEach(function (i) {
                    selectElements.push(_this.utility.getProperJson(value["element" + i]));
                });
                selectArr.push(value.index);
                selectArr.push(selectElements);
                this.funcobj = {
                    "Fn::Select": this.utility.getProperJson(selectArr)
                };
                break;
            case "Fn::Split":
                var splitArr = [];
                splitArr.push(value.split);
                splitArr.push(this.utility.getProperJson(value.splitvalue));
                this.funcobj = {
                    "Fn::Split": this.utility.getProperJson(splitArr)
                };
                break;
            case "Fn::Sub":
                var subParam = "";
                var subArr = [];
                if (value.subvalue != '') {
                    subArr.push(value.sub);
                    subArr.push(this.utility.getProperJson(value.subvalue));
                    this.funcobj = {
                        "Fn::Sub": this.utility.getProperJson(subArr)
                    };
                }
                else {
                    subParam = value.sub;
                    this.funcobj = {
                        "Fn::Sub": subParam
                    };
                }
                break;
            case "Fn::Transform":
                this.funcobj = {
                    "Fn::Transform": {
                        "Name": value.traname,
                        "Parameters": this.getTagArray(value)
                    }
                };
                break;
            case "Fn::And":
                var andArray = [];
                this.fnandArray.forEach(function (i) {
                    andArray.push(_this.utility.getProperJson(value["element" + i]));
                });
                this.funcobj = {
                    "Fn::And": this.utility.getProperJson(andArray)
                };
                break;
            case "Fn::Equals":
                var equalArray = [];
                equalArray.push(this.utility.getProperJson(value.equal1));
                equalArray.push(this.utility.getProperJson(value.equal2));
                this.funcobj = {
                    "Fn::Equals": this.utility.getProperJson(equalArray)
                };
                break;
            case "Fn::If":
                var ifArray = [];
                ifArray.push(value.ifcon);
                ifArray.push(this.utility.getProperJson(value.iftrue));
                ifArray.push(this.utility.getProperJson(value.iffalse));
                this.funcobj = {
                    "Fn::If": this.utility.getProperJson(ifArray)
                };
                break;
            case "Fn::Not":
                var fnnotArray = [];
                fnnotArray.push(this.utility.getProperJson(value.fnnot));
                this.funcobj = {
                    "Fn::Not": this.utility.getProperJson(fnnotArray)
                };
                break;
            case "Fn::Or":
                var orArray = [];
                this.fnorArray.forEach(function (i) {
                    orArray.push(_this.utility.getProperJson(value["element" + i]));
                });
                this.funcobj = {
                    "Fn::Or": this.utility.getProperJson(orArray)
                };
                break;
            default:
                break;
        }
    };
    IntrinsicFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intrinsic-functions',
            template: __webpack_require__(/*! ./intrinsic-functions.component.html */ "./src/app/intrinsic-functions/intrinsic-functions.component.html"),
            styles: [__webpack_require__(/*! ./intrinsic-functions.component.css */ "./src/app/intrinsic-functions/intrinsic-functions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], IntrinsicFunctionsComponent);
    return IntrinsicFunctionsComponent;
}());



/***/ }),

/***/ "./src/app/json-result.service.ts":
/*!****************************************!*\
  !*** ./src/app/json-result.service.ts ***!
  \****************************************/
/*! exports provided: JsonResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonResultService", function() { return JsonResultService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// export interface CloudFormation{
//   AWSTemplateFormatVersion:string,
//   Description:string,
//   Parameters:object,
//   Mappings:object,
//   Conditions:object,
//   Transform:object,
//   Resources:object,
//   Outputs:object
// }
var JsonResultService = /** @class */ (function () {
    function JsonResultService() {
        // jsonresult:CloudFormation={
        //   AWSTemplateFormatVersion:"2010-09-09",
        //   Description:"Template created by CloudKast",
        //   Parameters:undefined,
        //   Mappings:undefined,
        //   Conditions:undefined,
        //   Transform:undefined,
        //   Resources:{},
        //   Outputs:undefined
        // }
        this.jsonresult = {
            "AWSTemplateFormatVersion": "2010-09-09",
            "Description": "Template create by CloudKast",
            "Parameters": undefined,
            "Mappings": undefined,
            "Conditions": undefined,
            "Transform": undefined,
            "Resources": {},
            "Outputs": undefined
        };
    }
    JsonResultService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JsonResultService);
    return JsonResultService;
}());



/***/ }),

/***/ "./src/app/keys-pipe.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/keys-pipe.pipe.ts ***!
  \***********************************/
/*! exports provided: KeysPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipePipe", function() { return KeysPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeysPipePipe = /** @class */ (function () {
    function KeysPipePipe() {
    }
    KeysPipePipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keysPipe'
        })
    ], KeysPipePipe);
    return KeysPipePipe;
}());



/***/ }),

/***/ "./src/app/mappings-tab/mappings-tab.component.css":
/*!*********************************************************!*\
  !*** ./src/app/mappings-tab/mappings-tab.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHBpbmdzLXRhYi9tYXBwaW5ncy10YWIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mappings-tab/mappings-tab.component.html":
/*!**********************************************************!*\
  !*** ./src/app/mappings-tab/mappings-tab.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"addParam()\">Add Mapping</button><br>\n<div *ngFor=\"let i of tagArray\">\n  <app-mappings></app-mappings>\n</div>"

/***/ }),

/***/ "./src/app/mappings-tab/mappings-tab.component.ts":
/*!********************************************************!*\
  !*** ./src/app/mappings-tab/mappings-tab.component.ts ***!
  \********************************************************/
/*! exports provided: MappingsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingsTabComponent", function() { return MappingsTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MappingsTabComponent = /** @class */ (function () {
    function MappingsTabComponent() {
        this.tagCount = 0;
        this.tagArray = [];
    }
    MappingsTabComponent.prototype.ngOnInit = function () {
    };
    MappingsTabComponent.prototype.addParam = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    MappingsTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mappings-tab',
            template: __webpack_require__(/*! ./mappings-tab.component.html */ "./src/app/mappings-tab/mappings-tab.component.html"),
            styles: [__webpack_require__(/*! ./mappings-tab.component.css */ "./src/app/mappings-tab/mappings-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MappingsTabComponent);
    return MappingsTabComponent;
}());



/***/ }),

/***/ "./src/app/mappings/mappings.component.css":
/*!*************************************************!*\
  !*** ./src/app/mappings/mappings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 500px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcGluZ3MvbWFwcGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21hcHBpbmdzL21hcHBpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/mappings/mappings.component.html":
/*!**************************************************!*\
  !*** ./src/app/mappings/mappings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div *ngIf=\"isPresent\" >\n        <mat-accordion>\n            <mat-expansion-panel color=\"accent\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Mapping\n                </mat-panel-title>\n                <mat-panel-description>\n                    {{mapname.value}}\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n        <mat-card  class=\"example-card\">Mapping\n          <form #myForm=\"ngForm\" (submit)=\"onDone(myForm.value)\">\n            <input name=\"resourceName\" #mapname placeholder=\"Mapping Name\" ngModel required > <br>\n            <button type=\"button\" mat-stroked-button (click)=\"addKeying()\" >Add keys</button>\n            <mat-divider></mat-divider>\n            <div *ngFor=\"let i of keyArray\" >\n                <input type=\"text\" name=\"key{{i}}\" placeholder=\"Key\" matTooltip=\"Key identifier\" \n                 style=\"margin-left: 20px\" ngModel> <br>\n                <button type=\"button\" mat-stroked-button (click)=\"addValue()\" \n                style=\"margin-left:20px\" > Add Values </button> \n                <div *ngFor=\"let j of valueArray\">\n                    <input type=\"text\" name=\"name{{i}}{{j}}\" placeholder=\"KeyName\" ngModel \n                    style=\"margin-left: 40px\" matTooltip=\"key in String\" >\n                    <input type=\"text\" name=\"value{{i}}{{j}}\" placeholder=\"KeyValue\" matTooltip=\"\n                    value in String or List. For a list, provide comma separated values\" ngModel> <br>\n                </div>\n                <mat-divider></mat-divider>\n            </div>\n            <button  [disabled]=\"myForm.invalid\" type=\"submit\" mat-icon-button> \n              <mat-icon>done</mat-icon> \n            </button>\n            <button mat-icon-button (click)=\"onRemove(myForm.value)\">\n              <mat-icon>remove_circle</mat-icon>\n            </button>\n          </form>\n          <button [disabled]=\"!isCopyReady\" mat-icon-button \n            matTooltip=\"copy json\" \n            (click)=\"copyToClipboard(myForm.value)\"> \n            <mat-icon>file_copy</mat-icon> \n          </button>\n          <button [disabled]=\"!isCopyReady\" mat-icon-button color=\"accent\" \n            matTooltip=\"copy yaml\" \n            (click)=\"copyToYamlClipboard(myForm.value)\"> \n            <mat-icon>file_copy</mat-icon> \n          </button>\n        </mat-card>\n      </mat-expansion-panel>\n    </mat-accordion>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/mappings/mappings.component.ts":
/*!************************************************!*\
  !*** ./src/app/mappings/mappings.component.ts ***!
  \************************************************/
/*! exports provided: MappingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingsComponent", function() { return MappingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




var MappingsComponent = /** @class */ (function () {
    function MappingsComponent(result, util) {
        this.result = result;
        this.util = util;
        this.tagCount = 0;
        this.tagArray = [];
        this.keyCount = 0;
        this.keyArray = [];
        this.valueCount = 0;
        this.valueArray = [];
        this.isPresent = true;
        this.isCopyReady = false;
    }
    MappingsComponent.prototype.ngOnInit = function () {
    };
    MappingsComponent.prototype.addMapping = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    MappingsComponent.prototype.addKeying = function () {
        this.keyCount += 1;
        this.keyArray.push(this.keyCount);
    };
    MappingsComponent.prototype.addValue = function () {
        this.valueCount += 1;
        this.valueArray.push(this.valueCount);
    };
    MappingsComponent.prototype.onRemove = function (value) {
        this.isPresent = false;
        if (value.resourceName)
            this.result.jsonresult.Mappings[value.resourceName] = undefined;
    };
    MappingsComponent.prototype.onDone = function (val) {
        console.log(val);
        if (this.result.jsonresult.Mappings == undefined) {
            this.result.jsonresult.Mappings = {};
        }
        this.result.jsonresult.Mappings[val.resourceName] = {};
        //this.result.jsonresult.Mappings[val.resourceName][val.key]={};
        for (var i = 1; i <= this.keyArray.length; i++) {
            var curKey = val["key" + i];
            var valObj = {};
            //var curVal=val[`value${i}`];
            for (var j = 1; j <= this.valueArray.length; j++) {
                var curName = val["name" + i + j];
                var curVal = val["value" + i + j];
                if (curName.length == 0 || curVal.length == 0) {
                    valObj[curName] = undefined;
                }
                else {
                    if (curVal.includes(",")) {
                        valObj[curName] = curVal.split(",");
                    }
                    else {
                        valObj[curName] = curVal;
                    }
                }
                if (j == this.valueArray.length) {
                    this.result.jsonresult.Mappings[val.resourceName][curKey] = valObj;
                }
            }
        }
        this.isCopyReady = true;
    };
    MappingsComponent.prototype.copyToClipboard = function (value) {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.result.jsonresult.Mappings[value.resourceName]);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    MappingsComponent.prototype.copyToYamlClipboard = function (value) {
        this.util.copyToClipboardYaml(this.result.jsonresult.Mappings[value.resourceName]);
    };
    MappingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mappings',
            template: __webpack_require__(/*! ./mappings.component.html */ "./src/app/mappings/mappings.component.html"),
            styles: [__webpack_require__(/*! ./mappings.component.css */ "./src/app/mappings/mappings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], MappingsComponent);
    return MappingsComponent;
}());



/***/ }),

/***/ "./src/app/metadata/metadata.component.css":
/*!*************************************************!*\
  !*** ./src/app/metadata/metadata.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-meta-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-meta-container > * {\r\n    width: 40%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YWRhdGEvbWV0YWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbWV0YS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLW1ldGEtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/metadata/metadata.component.html":
/*!**************************************************!*\
  !*** ./src/app/metadata/metadata.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<div class=\"example-meta-container\">\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"result.jsonresult.AWSTemplateFormatVersion\" type=\"text\" \n        name=\"cfnversion\" placeholder=\"Template Version\" matTooltip=\"cannot be edited\"  readonly>\n      </mat-form-field> \n      <mat-form-field>\n        <textarea matInput [(ngModel)]=\"result.jsonresult.Description\" \n        name=\"cfndescription\" placeholder=\"Template Description\" >\n        </textarea>\n      </mat-form-field>\n</div>"

/***/ }),

/***/ "./src/app/metadata/metadata.component.ts":
/*!************************************************!*\
  !*** ./src/app/metadata/metadata.component.ts ***!
  \************************************************/
/*! exports provided: MetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataComponent", function() { return MetadataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");



var MetadataComponent = /** @class */ (function () {
    function MetadataComponent(result) {
        this.result = result;
    }
    MetadataComponent.prototype.ngOnInit = function () {
    };
    MetadataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metadata',
            template: __webpack_require__(/*! ./metadata.component.html */ "./src/app/metadata/metadata.component.html"),
            styles: [__webpack_require__(/*! ./metadata.component.css */ "./src/app/metadata/metadata.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"]])
    ], MetadataComponent);
    return MetadataComponent;
}());



/***/ }),

/***/ "./src/app/object-help/object-help.component.css":
/*!*******************************************************!*\
  !*** ./src/app/object-help/object-help.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JqZWN0LWhlbHAvb2JqZWN0LWhlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vYmplY3QtaGVscC9vYmplY3QtaGVscC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjowXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/object-help/object-help.component.html":
/*!********************************************************!*\
  !*** ./src/app/object-help/object-help.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Property Dealer\n<form id=\"propform\" #propform=\"ngForm\" (submit)=\"onDone(propform.value)\" >\n    <select  #resname name=\"resname\" form=\"propform\" ngModel>\n      <optgroup  *ngFor=\"let i of mainObj.comProp | keyvalue\" [label]=\"i.key\" >\n        <option *ngFor=\"let j of mainObj.comProp[i.key] | keyvalue\" [value]=\"j.key\">{{j.key}}</option>  \n      </optgroup>\n    </select>\n    <button [disabled]=\"resname.value==''\" mat-stroked-button color=\"primary\" type=\"submit\">Generate form</button>\n</form> \n<form *ngIf=\"propSent\"  #jsonform=\"ngForm\" (submit)=\"onSubmit(jsonform.value)\">\n          <div *ngFor=\"let w of getKeys(selProp)\">\n              <input *ngIf=\"getTypeof(selProp[w])=='string' || isArray(selProp[w]) \" \n               type=\"text\" [name]=\"w\" [placeholder]=\"w\" [matTooltip]=\"isArray(selProp[w])?selProp[w][0]:selProp[w]\" ngModel>\n              <mat-chip *ngIf=\"getTypeof(selProp[w])=='object' && !isArray(selProp[w])\">\n                {{w}}\n              </mat-chip>\n              <div *ngIf=\"getDepth(selProp[w]) > 0 && getTypeof(selProp[w])=='object' \">\n                <div *ngFor=\"let x of getKeys(isArray(selProp[w])?[]:selProp[w])\">\n                  <input *ngIf=\"getTypeof(selProp[w][x])=='string' || isArray(selProp[w][x]) \" \n                   type=\"text\" [name]=\"x\" [placeholder]=\"x\" ngModel [matTooltip]=\"isArray(selProp[w][x])?selProp[w][x][0]:selProp[w][x]\" style=\"margin-left: 20px\" >\n                  <mat-chip *ngIf=\"getTypeof(selProp[w][x])=='object' && !isArray(selProp[w][x])\" style=\"margin-left: 20px\" >\n                    {{x}}\n                  </mat-chip>\n                  <div *ngIf=\"getDepth(selProp[w][x]) >0  && getTypeof(selProp[w][x])=='object'\">\n                    <div *ngFor=\"let k of getKeys(isArray(selProp[w][x])?[]:selProp[w][x])\">\n                        <input *ngIf=\"getTypeof(selProp[w][x][k])=='string' || isArray(selProp[w][x][k])\" \n                        type=\"text\" [name]=\"k\" [placeholder]=\"k\" ngModel [matTooltip]=\"isArray(selProp[w][x][k])?selProp[w][x][k][0]:selProp[w][x][k]\" style=\"margin-left: 40px\" >\n\n                        <mat-chip *ngIf=\"getTypeof(selProp[w][x][k])=='object' && !isArray(selProp[w][x][k])\" style=\"margin-left: 40px\" >\n                          {{k}}\n                        </mat-chip>\n                        <div *ngIf=\"getDepth(selProp[w][x][k]) >0  && getTypeof(selProp[w][x][k])=='object'\">\n                          <div *ngFor=\"let v of getKeys(isArray(selProp[w][x][k])?[]:selProp[w][x][k])\">\n                              <input *ngIf=\"getTypeof(selProp[w][x][k][v])=='string' || isArray(selProp[w][x][k][v])\" \n                              type=\"text\" [name]=\"v\" [placeholder]=\"v\" ngModel [matTooltip]=\"isArray(selProp[w][x][k][v])?selProp[w][x][k][v][0]:selProp[w][x][k][v]\" style=\"margin-left: 60px\" >                        \n\n                          </div>\n                        </div>\n                    </div>\n                  </div>\n              </div>\n            </div>\n          </div>\n  <button mat-stroked-button color=\"primary\" type=\"submit\">Generate</button>\n  <button mat-stroked-button color=\"warn\" (click)=\"resname.value=''; onReset()\">Reset</button>\n</form>\n<br>\n<pre>{{myobj|json}}</pre>\n<button [disabled]=\"!isCopyReady\" mat-icon-button (click)=\"copyToClipboard()\"> <mat-icon>file_copy</mat-icon> </button>\n</mat-card>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/object-help/object-help.component.ts":
/*!******************************************************!*\
  !*** ./src/app/object-help/object-help.component.ts ***!
  \******************************************************/
/*! exports provided: ObjectHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectHelpComponent", function() { return ObjectHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource-data.service */ "./src/app/resource-data.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




var ObjectHelpComponent = /** @class */ (function () {
    function ObjectHelpComponent(mainObj, util) {
        this.mainObj = mainObj;
        this.util = util;
        this.propSent = false;
        this.isCopyReady = false;
        this.myobj = {};
        this.nonStringOutput = {};
        //this.resKeys=Object.keys(this.mainObj.comProp);
        //this.propKeys=Object.keys(Object.values(this.mainObj.comProp)[0])
    }
    ObjectHelpComponent.prototype.ngOnInit = function () {
    };
    ObjectHelpComponent.prototype.getKeys = function (value) {
        //return Object.keys(Object.values(value)[0])
        return (Object.keys(value)).length == 0 ? [] : Object.keys(value);
    };
    ObjectHelpComponent.prototype.onDone = function (value) {
        //this.selProp=(Object.values(this.mainObj.comProp)[0])[value.resname];
        this.selProp = this.getSelProp(value.resname);
        //console.log(value);
        //console.log(this.selProp)
        this.propSent = true;
    };
    ObjectHelpComponent.prototype.getSelProp = function (value) {
        var a1 = Object.values(this.mainObj.comProp);
        var a2;
        a1.forEach(function (i) {
            if (i.hasOwnProperty(value)) {
                a2 = i[value];
            }
        });
        console.log(a2);
        return a2;
    };
    ObjectHelpComponent.prototype.onSubmit = function (value) {
        console.log(value);
        this.getLooper(this.selProp, value, this.myobj);
        this.isCopyReady = true;
    };
    ObjectHelpComponent.prototype.getLooper = function (loopval, formval, myobj) {
        var _this = this;
        this.getKeys(loopval).forEach(function (j) {
            if (typeof (loopval[j]) == "string") {
                //myobj[j]=formval[j];
                myobj[j] = _this.util.getProperJson(formval[j]);
            }
            else {
                if (Array.isArray(loopval[j])) {
                    //myobj[j]=(formval[j] as String).split("|");
                    myobj[j] = _this.util.getSemicolonArray(formval[j]);
                }
                else {
                    myobj[j] = {};
                    _this.getLooper(loopval[j], formval, myobj[j]);
                }
            }
        });
    };
    ObjectHelpComponent.prototype.onReset = function () {
        this.propSent = false;
        this.isCopyReady = false;
        this.myobj = {};
    };
    ObjectHelpComponent.prototype.isArray = function (value) {
        return Array.isArray(value);
    };
    ObjectHelpComponent.prototype.getTypeof = function (val) {
        return typeof (val);
    };
    ObjectHelpComponent.prototype.getDepth = function (obj) {
        var level = 1;
        var key;
        for (key in obj) {
            if (!obj.hasOwnProperty(key))
                continue;
            if (typeof obj[key] == 'object') {
                var depth = this.getDepth(obj[key]) + 1;
                level = Math.max(depth, level);
            }
        }
        return level;
    };
    ObjectHelpComponent.prototype.copyToClipboard = function () {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.myobj);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        this.myobj = {};
    };
    ObjectHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-object-help',
            template: __webpack_require__(/*! ./object-help.component.html */ "./src/app/object-help/object-help.component.html"),
            styles: [__webpack_require__(/*! ./object-help.component.css */ "./src/app/object-help/object-help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_data_service__WEBPACK_IMPORTED_MODULE_2__["ResourceDataService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], ObjectHelpComponent);
    return ObjectHelpComponent;
}());



/***/ }),

/***/ "./src/app/outputs-tab/outputs-tab.component.css":
/*!*******************************************************!*\
  !*** ./src/app/outputs-tab/outputs-tab.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHB1dHMtdGFiL291dHB1dHMtdGFiLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/outputs-tab/outputs-tab.component.html":
/*!********************************************************!*\
  !*** ./src/app/outputs-tab/outputs-tab.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"addParam()\">Add Output</button><br>\n<div *ngFor=\"let i of tagArray\">\n  <app-outputs></app-outputs>\n</div>"

/***/ }),

/***/ "./src/app/outputs-tab/outputs-tab.component.ts":
/*!******************************************************!*\
  !*** ./src/app/outputs-tab/outputs-tab.component.ts ***!
  \******************************************************/
/*! exports provided: OutputsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputsTabComponent", function() { return OutputsTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OutputsTabComponent = /** @class */ (function () {
    function OutputsTabComponent() {
        this.tagCount = 0;
        this.tagArray = [];
    }
    OutputsTabComponent.prototype.ngOnInit = function () {
    };
    OutputsTabComponent.prototype.addParam = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    OutputsTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outputs-tab',
            template: __webpack_require__(/*! ./outputs-tab.component.html */ "./src/app/outputs-tab/outputs-tab.component.html"),
            styles: [__webpack_require__(/*! ./outputs-tab.component.css */ "./src/app/outputs-tab/outputs-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OutputsTabComponent);
    return OutputsTabComponent;
}());



/***/ }),

/***/ "./src/app/outputs/outputs.component.css":
/*!***********************************************!*\
  !*** ./src/app/outputs/outputs.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0cy9vdXRwdXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXRzL291dHB1dHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/outputs/outputs.component.html":
/*!************************************************!*\
  !*** ./src/app/outputs/outputs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div *ngIf=\"isPresent\" >\n    <mat-accordion>\n    <mat-expansion-panel>\n    <mat-expansion-panel-header>\n        <mat-panel-title>\n            Output\n        </mat-panel-title>\n        <mat-panel-description>\n            {{outname.value}}\n        </mat-panel-description>\n    </mat-expansion-panel-header>\n        <mat-card  class=\"example-card\">Output\n          <form #myForm=\"ngForm\" (submit)=\"onDone(myForm.value)\">\n            <input name=\"resourceName\" placeholder=\"Output Name\" #outname  ngModel required> <br>\n            <input type=\"text\" name=\"desc\" placeholder=\"Description\" ngModel> <br>\n            <input type=\"text\" name=\"value\" placeholder=\"Value\" matTooltip=\"\n            Value to be returned\" ngModel> <br>\n            <mat-chip>Export</mat-chip> <br>\n            <input type=\"text\" name=\"export\" placeholder=\"Name\" ngModel style=\"margin-left:20px\"\n            matTooltip=\"Value to be exported\"><br>\n            <input type=\"text\" name=\"Condition\" placeholder=\"Condition\" ngModel \n            matTooltip=\"AWS CloudFormation creates entities that are associated with a true condition and ignores entities that are associated with a false condition\" > <br>\n            <button type=\"submit\" mat-icon-button [disabled]=\"myForm.invalid\" >\n              <mat-icon>done</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"onRemove(myForm.value)\">\n              <mat-icon>remove_circle</mat-icon>\n            </button>\n          </form>\n          <button [disabled]=\"!isCopyReady\" mat-icon-button \n            matTooltip=\"copy json\" (click)=\"copyToClipboard(myForm.value)\"> \n            <mat-icon>file_copy</mat-icon> \n          </button>\n          <button [disabled]=\"!isCopyReady\" mat-icon-button color=\"accent\"\n            matTooltip=\"copy yaml\" (click)=\"copyToYamlClipboard(myForm.value)\"> \n            <mat-icon>file_copy</mat-icon> \n          </button>\n        </mat-card>\n      </mat-expansion-panel>\n    </mat-accordion>\n    </div>\n"

/***/ }),

/***/ "./src/app/outputs/outputs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/outputs/outputs.component.ts ***!
  \**********************************************/
/*! exports provided: OutputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputsComponent", function() { return OutputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




var OutputsComponent = /** @class */ (function () {
    function OutputsComponent(result, util) {
        this.result = result;
        this.util = util;
        this.tagCount = 0;
        this.tagArray = [];
        this.isPresent = true;
        this.isCopyReady = false;
        this.resProp = {
            "Description": "Information about the value",
            "Value": "Value to return",
            "Export": { "Name": "Value to export" }
        };
    }
    OutputsComponent.prototype.ngOnInit = function () {
    };
    OutputsComponent.prototype.addOutput = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    OutputsComponent.prototype.onRemove = function (value) {
        this.isPresent = false;
        if (value.resourceName)
            this.result.jsonresult.Outputs[value.resourceName] = undefined;
    };
    OutputsComponent.prototype.onDone = function (value) {
        console.log(value);
        if (this.result.jsonresult.Outputs == undefined) {
            this.result.jsonresult.Outputs = {};
        }
        this.result.jsonresult.Outputs[value.resourceName] = {
            "Description": value.desc,
            "Value": this.util.getProperJson(value.value),
            "Export": {
                "Name": this.util.getProperJson(value.export)
            },
            "Condition": this.util.getProperJson(value.Condition)
        };
        this.isCopyReady = true;
    };
    OutputsComponent.prototype.copyToClipboard = function (value) {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.result.jsonresult.Outputs[value.resourceName]);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    OutputsComponent.prototype.copyToYamlClipboard = function (value) {
        this.util.copyToClipboardYaml(this.result.jsonresult.Outputs[value.resourceName]);
    };
    OutputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outputs',
            template: __webpack_require__(/*! ./outputs.component.html */ "./src/app/outputs/outputs.component.html"),
            styles: [__webpack_require__(/*! ./outputs.component.css */ "./src/app/outputs/outputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], OutputsComponent);
    return OutputsComponent;
}());



/***/ }),

/***/ "./src/app/parameters-tab/parameters-tab.component.css":
/*!*************************************************************!*\
  !*** ./src/app/parameters-tab/parameters-tab.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFtZXRlcnMtdGFiL3BhcmFtZXRlcnMtdGFiLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/parameters-tab/parameters-tab.component.html":
/*!**************************************************************!*\
  !*** ./src/app/parameters-tab/parameters-tab.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"addParam()\">Add Parameter</button><br>\n<div *ngFor=\"let i of tagArray\">\n  <app-parameters></app-parameters>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/parameters-tab/parameters-tab.component.ts":
/*!************************************************************!*\
  !*** ./src/app/parameters-tab/parameters-tab.component.ts ***!
  \************************************************************/
/*! exports provided: ParametersTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersTabComponent", function() { return ParametersTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParametersTabComponent = /** @class */ (function () {
    function ParametersTabComponent() {
        this.tagCount = 0;
        this.tagArray = [];
    }
    ParametersTabComponent.prototype.ngOnInit = function () {
    };
    ParametersTabComponent.prototype.addParam = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    ParametersTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parameters-tab',
            template: __webpack_require__(/*! ./parameters-tab.component.html */ "./src/app/parameters-tab/parameters-tab.component.html"),
            styles: [__webpack_require__(/*! ./parameters-tab.component.css */ "./src/app/parameters-tab/parameters-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParametersTabComponent);
    return ParametersTabComponent;
}());



/***/ }),

/***/ "./src/app/parameters/parameters.component.css":
/*!*****************************************************!*\
  !*** ./src/app/parameters/parameters.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYXJhbWV0ZXJzL3BhcmFtZXRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/parameters/parameters.component.html":
/*!******************************************************!*\
  !*** ./src/app/parameters/parameters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"isPresent\" >\r\n    <mat-accordion>\r\n        <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                Parameters\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n                {{paramname.value}}\r\n            </mat-panel-description>\r\n        </mat-expansion-panel-header>    \r\n    <mat-card  class=\"example-card\" >Parameter\r\n      <form #myForm=\"ngForm\" (submit)=\"onDone(myForm.value)\">\r\n        <input name=\"resourceName\" #paramname placeholder=\"Parameter Name\" ngModel required> <br>\r\n        <input name=\"Type\" placeholder=\"Type\" ngModel list=\"paramtypes\" >\r\n        <datalist id=\"paramtypes\" label=\"Parameter Types\" > \r\n          <option *ngFor=\"let i of paramTypes\" [value]=\"i\"> {{i}} </option>\r\n        </datalist>\r\n        <!-- <input name=\"AllowedPattern\" placeholder=\"Allowed Pattern\" ngModel pattern='[\\\\A-Z0-9]*'> <br> -->\r\n        <div *ngFor=\"let j of resPropkeys\">\r\n          <input ngModel type=\"text\" [name]=\"j\" [placeholder]=\"j\" [matTooltip]=\"resProp[j]\" >\r\n          <mat-icon *ngIf=\"j=='AllowedPattern'\" color=\"warn\"  [matTooltip]=\"regexTooltip\" >warning</mat-icon>\r\n        </div>\r\n        <button [disabled]=\"myForm.invalid\" type=\"submit\" mat-icon-button>\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n        <button  mat-icon-button type=\"button\" (click)=\"onRemove(myForm.value)\">\r\n          <mat-icon>remove_circle</mat-icon>\r\n        </button>\r\n      </form>\r\n      <button [disabled]=\"!isCopyReady\" mat-icon-button \r\n        matTooltip=\"copy json\" \r\n        (click)=\"copyToClipboard(myForm.value)\"> \r\n        <mat-icon>file_copy</mat-icon> \r\n      </button>\r\n      <button [disabled]=\"!isCopyReady\" mat-icon-button color=\"accent\"\r\n        matTooltip=\"copy yaml (beta)\" \r\n        (click)=\"copyToClipboardYaml(myForm.value)\"> \r\n      <mat-icon>file_copy</mat-icon> \r\n    </button>\r\n    </mat-card>\r\n  </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/parameters/parameters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/parameters/parameters.component.ts ***!
  \****************************************************/
/*! exports provided: ParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersComponent", function() { return ParametersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




var ParametersComponent = /** @class */ (function () {
    function ParametersComponent(result, util) {
        this.result = result;
        this.util = util;
        this.tagCount = 0;
        this.tagArray = [];
        this.isPresent = true;
        this.isCopyReady = false;
        this.regexTooltip = "Do not add an additional backslash to any backslash characters in your regular expression. Escape characters will be automatically added. E.g. if you need to include a \\d in your regular expression, leave it as \\d.";
        this.paramTypes = ["String", "Number", "List<Number>", "CommaDelimitedList", "AWS::EC2::AvailabilityZone::Name", "AWS::EC2::Image::Id", "AWS::EC2::Instance::Id", "AWS::EC2::KeyPair::KeyName", "AWS::EC2::SecurityGroup::GroupName", "AWS::EC2::SecurityGroup::Id", "AWS::EC2::Subnet::Id", "AWS::EC2::Volume::Id", "AWS::EC2::VPC::Id", "AWS::Route53::HostedZone::Id", "List<AWS::EC2::AvailabilityZone::Name>", "List<AWS::EC2::Image::Id>", "List<AWS::EC2::Instance::Id>", "List<AWS::EC2::SecurityGroup::GroupName>", "List<AWS::EC2::SecurityGroup::Id>", "List<AWS::EC2::Subnet::Id>", "List<AWS::EC2::Volume::Id>", "List<AWS::EC2::VPC::Id>", "List<AWS::Route53::HostedZone::Id>", "AWS::SSM::Parameter::Name", "AWS::SSM::Parameter::Value<String>", "AWS::SSM::Parameter::Value<List<String>>", "AWS::SSM::Parameter::Value<CommaDelimitedList>", "AWS::SSM::Parameter::Value<AWS::EC2::AvailabilityZone::Name>", "AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>", "AWS::SSM::Parameter::Value<AWS::EC2::Instance::Id>", "AWS::SSM::Parameter::Value<AWS::EC2::KeyPair::KeyName>", "AWS::SSM::Parameter::Value<AWS::EC2::SecurityGroup::GroupName>", "AWS::SSM::Parameter::Value<AWS::EC2::SecurityGroup::Id>", "AWS::SSM::Parameter::Value<AWS::EC2::Subnet::Id>", "AWS::SSM::Parameter::Value<AWS::EC2::Volume::Id>", "AWS::SSM::Parameter::Value<AWS::EC2::VPC::Id>", "AWS::SSM::Parameter::Value<AWS::Route53::HostedZone::Id>", "AWS::SSM::Parameter::Value<List<AWS::EC2::AvailabilityZone::Name>>", "AWS::SSM::Parameter::Value<List<AWS::EC2::Image::Id>>", "AWS::SSM::Parameter::Value<List<AWS::EC2::Instance::Id>>", "AWS::SSM::Parameter::Value<List<AWS::EC2::SecurityGroup::GroupName>>", "AWS::SSM::Parameter::Value<List<AWS::EC2::SecurityGroup::Id>>", "AWS::SSM::Parameter::Value<List<AWS::EC2::Subnet::Id>>", "AWS::SSM::Parameter::Value<List<AWS::EC2::Volume::Id>>", "AWS::SSM::Parameter::Value<List<AWS::EC2::VPC::Id>>", "AWS::SSM::Parameter::Value<List<AWS::Route53::HostedZone::Id>>"];
        this.resProp = {
            //"Type":"String | Number | List<Number> | CommaDelimitedList | AWS-Specific Parameter Types| SSM Parameter Types. AWS-specific parameter types are helpful in catching invalid values at the start of creating or updating a stack. Supported AWS-Specific Parameter Types: AWS::EC2::AvailabilityZone::Name, AWS::EC2::Image::Id, AWS::EC2::Instance::Id, AWS::EC2::KeyPair::KeyName, AWS::EC2::SecurityGroup::GroupName, AWS::EC2::SecurityGroup::Id, AWS::EC2::Subnet::Id, AWS::EC2::Volume::Id, AWS::EC2::VPC::Id, AWS::Route53::HostedZone::Id, List<AWS::EC2::AvailabilityZone::Name>, List<AWS::EC2::Image::Id>, List<AWS::EC2::Instance::Id>, List<AWS::EC2::SecurityGroup::GroupName>, List<AWS::EC2::SecurityGroup::Id>, List<AWS::EC2::Subnet::Id>, List<AWS::EC2::Volume::Id>, List<AWS::EC2::VPC::Id>, List<AWS::Route53::HostedZone::Id>. SSM parameter types correspond to existing parameters in Systems Manager Parameter Store. You specify a Systems Manager parameter key as the value of the SSM parameter, and AWS CloudFormation fetches the latest value from Parameter Store to use for the stack. Supported SSM Parameter Types: AWS::SSM::Parameter::Name, AWS::SSM::Parameter::Value<String>, AWS::SSM::Parameter::Value<List<String>> or AWS::SSM::Parameter::Value<CommaDelimitedList>, AWS::SSM::Parameter::Value<AWS-specific parameter type>, AWS::SSM::Parameter::Value<List<AWS-specific parameter type>> ",
            "AllowedPattern": "A regular expression that represents the patterns to allow for String types.",
            "AllowedValues": "An array(comma separated) containing the list of values allowed for the parameter.",
            "ConstraintDescription": "A string that explains a constraint when the constraint is violated.",
            "Default": "A value of the appropriate type for the template to use if no value is specified when a stack is created.",
            "Description": "Description",
            "MaxLength": "MaxLength",
            "MaxValue": "MaxValue",
            "MinLength": "MinLength",
            "MinValue": "MinValue",
            "NoEcho": "Whether to mask the parameter value when a call is made that describes the stack. If you set the value to true, the parameter value is masked with asterisks (*****)."
        };
        this.resPropkeys = Object.keys(this.resProp);
    }
    ParametersComponent.prototype.ngOnInit = function () {
    };
    ParametersComponent.prototype.addParam = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    ParametersComponent.prototype.onRemove = function (value) {
        this.isPresent = false;
        if (value.resourceName)
            this.result.jsonresult.Parameters[value.resourceName] = undefined;
    };
    ParametersComponent.prototype.fixRegex = function (value) {
        return decodeURI(value);
    };
    ParametersComponent.prototype.copyToClipboard = function (value) {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.result.jsonresult.Parameters[value.resourceName]);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    ParametersComponent.prototype.copyToClipboardYaml = function (value) {
        this.util.copyToClipboardYaml(this.result.jsonresult.Parameters[value.resourceName]);
    };
    ParametersComponent.prototype.onDone = function (value) {
        if (this.result.jsonresult.Parameters == undefined) {
            this.result.jsonresult.Parameters = {};
        }
        console.log(value);
        //this.result.jsonresult.Parameters={};
        this.result.jsonresult.Parameters[value.resourceName] = {
            "Type": value.Type ? value.Type : undefined,
            "AllowedPattern": value.AllowedPattern ? value.AllowedPattern : undefined,
            "AllowedValues": value.AllowedValues ? value.AllowedValues.split(",") : undefined,
            "ConstraintDescription": value.ConstraintDescription ? value.ConstraintDescription : undefined,
            "Default": value.Default ? value.Default : undefined,
            "Description": value.Description ? value.Description : undefined,
            "MaxLength": value.MaxLength ? value.MaxLength : undefined,
            "MaxValue": value.MaxValue ? value.MaxValue : undefined,
            "MinLength": value.MinLength ? value.MinLength : undefined,
            "MinValue": value.MinValue ? value.MinValue : undefined,
            "NoEcho": value.NoEcho ? value.NoEcho : undefined
        };
        this.isCopyReady = true;
    };
    ParametersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parameters',
            template: __webpack_require__(/*! ./parameters.component.html */ "./src/app/parameters/parameters.component.html"),
            styles: [__webpack_require__(/*! ./parameters.component.css */ "./src/app/parameters/parameters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], ParametersComponent);
    return ParametersComponent;
}());



/***/ }),

/***/ "./src/app/property-dialog-tab/property-dialog-tab.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/property-dialog-tab/property-dialog-tab.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LWRpYWxvZy10YWIvcHJvcGVydHktZGlhbG9nLXRhYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/property-dialog-tab/property-dialog-tab.component.html":
/*!************************************************************************!*\
  !*** ./src/app/property-dialog-tab/property-dialog-tab.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"addParam()\"> <mat-icon>add</mat-icon> </button><br>\n<div *ngFor=\"let i of tagArray\">\n  <app-property-dialog  [curRes]=\"data\" ></app-property-dialog>\n</div>\n<app-intrinsic-functions></app-intrinsic-functions>"

/***/ }),

/***/ "./src/app/property-dialog-tab/property-dialog-tab.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/property-dialog-tab/property-dialog-tab.component.ts ***!
  \**********************************************************************/
/*! exports provided: PropertyDialogTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDialogTabComponent", function() { return PropertyDialogTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PropertyDialogTabComponent = /** @class */ (function () {
    function PropertyDialogTabComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tagCount = 1;
        this.tagArray = [1];
    }
    PropertyDialogTabComponent.prototype.ngOnInit = function () {
    };
    PropertyDialogTabComponent.prototype.addParam = function () {
        this.tagCount += 1;
        this.tagArray.push(this.tagCount);
    };
    PropertyDialogTabComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PropertyDialogTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-dialog-tab',
            template: __webpack_require__(/*! ./property-dialog-tab.component.html */ "./src/app/property-dialog-tab/property-dialog-tab.component.html"),
            styles: [__webpack_require__(/*! ./property-dialog-tab.component.css */ "./src/app/property-dialog-tab/property-dialog-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PropertyDialogTabComponent);
    return PropertyDialogTabComponent;
}());



/***/ }),

/***/ "./src/app/property-dialog/property-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/property-dialog/property-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LWRpYWxvZy9wcm9wZXJ0eS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/property-dialog/property-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/property-dialog/property-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Property Dealer\n  <mat-icon color=\"warn\" [matTooltip]=\"prophelp\" >help</mat-icon>\n  <form id=\"propform\" #propform=\"ngForm\" (submit)=\"onDone(propform.value)\" >\n      <select  #resname name=\"resname\" form=\"propform\" ngModel>\n        <optgroup  [label]=\"curRes\" >\n          <option *ngFor=\"let j of mainObj.comProp[curRes] | keyvalue\" [value]=\"j.key\">{{j.key}}</option>  \n        </optgroup>\n      </select>\n      <button [disabled]=\"resname.value==''\" mat-stroked-button color=\"primary\" type=\"submit\">Generate form</button>\n  </form> \n  <form *ngIf=\"propSent\"  #jsonform=\"ngForm\" (submit)=\"onSubmit(jsonform.value)\">\n            <div *ngFor=\"let w of getKeys(selProp)\">\n                <input *ngIf=\"getTypeof(selProp[w])=='string' || isArray(selProp[w]) \" \n                 type=\"text\" [name]=\"w\" [placeholder]=\"w\" [matTooltip]=\"isArray(selProp[w])?selProp[w][0]:selProp[w]\" ngModel>\n                <mat-chip *ngIf=\"getTypeof(selProp[w])=='object' && !isArray(selProp[w])\">\n                  {{w}}\n                </mat-chip>\n                <div *ngIf=\"getDepth(selProp[w]) > 0 && getTypeof(selProp[w])=='object' \">\n                  <div *ngFor=\"let x of getKeys(isArray(selProp[w])?[]:selProp[w])\">\n                    <input *ngIf=\"getTypeof(selProp[w][x])=='string' || isArray(selProp[w][x]) \" \n                     type=\"text\" [name]=\"x\" [placeholder]=\"x\" ngModel [matTooltip]=\"isArray(selProp[w][x])?selProp[w][x][0]:selProp[w][x]\" style=\"margin-left: 20px\" >\n                    <mat-chip *ngIf=\"getTypeof(selProp[w][x])=='object' && !isArray(selProp[w][x])\" style=\"margin-left: 20px\">\n                      {{x}}\n                    </mat-chip>\n                    <div *ngIf=\"getDepth(selProp[w][x]) >0  && getTypeof(selProp[w][x])=='object'\">\n                      <div *ngFor=\"let k of getKeys(isArray(selProp[w][x])?[]:selProp[w][x])\">\n                          <input *ngIf=\"getTypeof(selProp[w][x][k])=='string' || isArray(selProp[w][x][k])\" \n                          type=\"text\" [name]=\"k\" [placeholder]=\"k\" ngModel [matTooltip]=\"isArray(selProp[w][x][k])?selProp[w][x][k][0]:selProp[w][x][k]\" style=\"margin-left: 40px\" >\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>    \n    <button mat-icon-button color=\"primary\" type=\"submit\"> <mat-icon>done</mat-icon> </button>\n    <button mat-icon-button color=\"warn\" (click)=\"resname.value=''; onReset()\">  <mat-icon>clear</mat-icon> </button>\n  </form>\n  <br>\n  <pre >{{myobj|json}}</pre>\n  <button  [disabled]=\"!isCopyReady\" mat-icon-button (click)=\"copyToClipboard()\"> <mat-icon>file_copy</mat-icon> </button>\n  </mat-card>\n  <mat-divider></mat-divider>\n  "

/***/ }),

/***/ "./src/app/property-dialog/property-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/property-dialog/property-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: PropertyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDialogComponent", function() { return PropertyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource-data.service */ "./src/app/resource-data.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




var PropertyDialogComponent = /** @class */ (function () {
    function PropertyDialogComponent(mainObj, util) {
        this.mainObj = mainObj;
        this.util = util;
        this.reqColor = "red";
        this.conColor = "darkorange";
        this.propSent = false;
        //prophelp="Properties that include '*' in the tooltip are 'required' properties. Properties that include '**' in the tooltip are 'conditional' properties. Properties that include none of these in the tooltip are optional properties. Tooltips also indicate the type of property e.g. string, boolean, list of strings, list of custom object. Properties that are of type array denoated by 'List of strings' or 'List of <custom type>' in the tooltip. Pleaes click on the 'plus' sign above to populate another 'Property Dealer' widget to generate values of custom objects to be inserted as a value in another property. List of strings are to be entered as is separated by commas. List of custom types are to be enterred within sqaure brackets. Use the function widget below to generate function values."
        this.prophelp = "Tooltip guide: Required properties(starting with *), Conditional properties(starting with **). \n A property of type array should start with 'List of <string|<object>>' \n Enter list of items delimited by semicolon(;) for a property of type array. \nUse the 'plus' icon above to open an additional property dealer widget. Use the function widget below to generate functions. ";
        this.isCopyReady = false;
        this.myobj = {};
        this.nonStringOutput = {};
        //this.resKeys=Object.keys(this.mainObj.comProp);
        //this.propKeys=Object.keys(Object.values(this.mainObj.comProp)[0])
    }
    PropertyDialogComponent.prototype.ngOnInit = function () {
    };
    PropertyDialogComponent.prototype.getKeys = function (value) {
        //return Object.keys(Object.values(value)[0])
        return (Object.keys(value)).length == 0 ? [] : Object.keys(value);
    };
    PropertyDialogComponent.prototype.onDone = function (value) {
        //this.selProp=(Object.values(this.mainObj.comProp)[0])[value.resname];
        this.selProp = this.getSelProp(value.resname);
        //console.log(value);
        //console.log(this.selProp)
        this.propSent = true;
    };
    PropertyDialogComponent.prototype.isRequired = function (value) {
        if (this.getTypeof(value) == 'object') {
            if (this.isArray(value)) {
                if (value[0].includes("*")) {
                    if (value[0].startsWith("**")) {
                        return { "color": this.conColor, "required": false };
                    }
                    else {
                        return { "color": this.reqColor, "required": true };
                    }
                }
            }
            else {
                if (value['info'].includes("*")) {
                    if (value['info'].startsWith("**")) {
                        return { "color": this.conColor, "required": false };
                    }
                    else {
                        return { "color": this.reqColor, "required": true };
                    }
                }
            }
        }
        else {
            if (value.includes("*")) {
                if (value.startsWith("**")) {
                    return { "color": this.conColor, "required": false };
                }
                else {
                    return { "color": this.reqColor, "required": true };
                }
            }
        }
        return { "color": "grey", "required": false };
    };
    PropertyDialogComponent.prototype.getSelProp = function (value) {
        var a1 = Object.values(this.mainObj.comProp);
        var a2;
        a1.forEach(function (i) {
            if (i.hasOwnProperty(value)) {
                a2 = i[value];
            }
        });
        //console.log(a2);
        return a2;
    };
    PropertyDialogComponent.prototype.onSubmit = function (value) {
        this.getLooper(this.selProp, value, this.myobj);
        this.clearUndefinedObj(this.myobj);
        this.clearEmptyObj(this.myobj);
        this.isCopyReady = true;
    };
    PropertyDialogComponent.prototype.getLooper = function (loopval, formval, myobj) {
        var _this = this;
        this.getKeys(loopval).forEach(function (j) {
            if (typeof (loopval[j]) == "string") {
                myobj[j] = _this.util.getProperJson(formval[j]);
            }
            else {
                if (Array.isArray(loopval[j])) {
                    myobj[j] = _this.util.getSemicolonArray(formval[j]);
                }
                else {
                    myobj[j] = {};
                    _this.getLooper(loopval[j], formval, myobj[j]);
                }
            }
        });
    };
    PropertyDialogComponent.prototype.clearUndefinedObj = function (obj) {
        for (var key in obj) {
            if (typeof (obj[key]) == 'object' && !Array.isArray(obj[key])) {
                this.clearUndefinedObj(obj[key]);
            }
            else {
                if (obj[key] == undefined) {
                    delete obj[key];
                }
            }
        }
    };
    PropertyDialogComponent.prototype.clearEmptyObj = function (obj) {
        console.log(obj);
        for (var key in obj) {
            if (typeof (obj[key]) == 'object' && !Array.isArray(obj[key])) {
                if (Object.entries(obj[key]).length == 0) {
                    obj[key] = undefined;
                }
                else {
                    this.clearEmptyObj(obj[key]);
                }
            }
        }
    };
    PropertyDialogComponent.prototype.onReset = function () {
        this.propSent = false;
        this.isCopyReady = false;
        this.myobj = {};
    };
    PropertyDialogComponent.prototype.isArray = function (value) {
        return Array.isArray(value);
    };
    PropertyDialogComponent.prototype.getTypeof = function (val) {
        return typeof (val);
    };
    PropertyDialogComponent.prototype.getDepth = function (obj) {
        var level = 1;
        var key;
        for (key in obj) {
            if (!obj.hasOwnProperty(key))
                continue;
            if (typeof obj[key] == 'object') {
                var depth = this.getDepth(obj[key]) + 1;
                level = Math.max(depth, level);
            }
        }
        return level;
    };
    PropertyDialogComponent.prototype.copyToClipboard = function () {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.myobj);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        this.myobj = {};
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('curRes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PropertyDialogComponent.prototype, "curRes", void 0);
    PropertyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-dialog',
            template: __webpack_require__(/*! ./property-dialog.component.html */ "./src/app/property-dialog/property-dialog.component.html"),
            styles: [__webpack_require__(/*! ./property-dialog.component.css */ "./src/app/property-dialog/property-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_data_service__WEBPACK_IMPORTED_MODULE_2__["ResourceDataService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], PropertyDialogComponent);
    return PropertyDialogComponent;
}());



/***/ }),

/***/ "./src/app/resource-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/resource-data.service.ts ***!
  \******************************************/
/*! exports provided: ResourceDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDataService", function() { return ResourceDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResourceDataService = /** @class */ (function () {
    function ResourceDataService() {
        this.comProp = {
            "AWS::EC2::Instance": {
                "AssociationParameters": {
                    "Key": "*The name of an input parameter that is in the associated SSM document.",
                    "Value": ["*The value of an input parameter. List of String values"]
                },
                "BlockDeviceMapping_ec2": {
                    "DeviceName": "*The name of the device within Amazon EC2. Recommended for EBS Volumes: /dev/sd[f-p], /dev/sd[f-p][1-6](only for paravirtual).",
                    "Ebs": {
                        "DeleteOnTermination": "Boolean. Determines whether to delete the volume on instance termination. The default value is true.",
                        "Encrypted": "Boolean. Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be attached to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses encrypted volumes, you can only launch the AMI on supported instance types.",
                        "Iops": "**Number. The number of I/O operations per second (IOPS) that the volume supports. This can be an integer from 100 – 20000.Required when the volume type is io1; not used with other volume types.",
                        "SnapshotId": "**If you specify both SnapshotId and VolumeSize, VolumeSize must be equal or greater than the size of the snapshot.",
                        "VolumeSize": "**Integer. The size of the volume, in GiBs.Constraints: 1-16,384 for gp2, 4-16,384 for io1, 500-16,384 for st1, 500-16,384 for sc1, and 1-1,024 for standard. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size.Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.",
                        "VolumeType": "The volume type. If you set the type to io1, you must also set the Iops property. The volume type. This can be gp2 for General Purpose SSD, io1 for Provisioned IOPS SSD, st1 for Throughput Optimized HDD, sc1 for Cold HDD, or standard for Magnetic volumes.Defaults: If no volume type is specified, the default is standard in us-east-1, eu-west-1, eu-central-1, us-west-2, us-west-1, sa-east-1, ap-northeast-1, ap-northeast-2, ap-southeast-1, ap-southeast-2, ap-south-1, us-gov-west-1, and cn-north-1. In all other Regions, EBS defaults to gp2. standard | io1 | gp2 | sc1 | st1"
                    },
                    "NoDevice": "This property can be used to unmap a defined device. Suppresses the specified device included in the block device mapping of the AMI. To suppress a device, specify an empty string {}.",
                    "VirtualName": "**The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0); for example, ephemeral0. You can specify either VirtualName or Ebs, but not both."
                },
                "CreditSpecification": {
                    "CPUCredits": "The credit option for CPU usage of a T2 or T3 instance. Valid values are unlimited and standard. T3 instances launch as unlimited by default. T2 instances launch as standard by default."
                },
                "ElasticGpuSpecification": {
                    "Type": "*The type of Elastic GPU."
                },
                "ElasticInferenceAccelerator": {
                    "Type": "*The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge."
                },
                "LaunchTemplateSpecification_ec2": {
                    "LaunchTemplateId": "**The ID of the launch template.You must specify either LaunchTemplateId or LaunchTemplateName, but not both.",
                    "LaunchTemplateName": "**You must specify either LaunchTemplateId or LaunchTemplateName, but not both",
                    "Version": "*The version number. AWS CloudFormation does not support specifying $Latest, or $Default for the template version number."
                },
                "LicenseSpecification_ec2": {
                    "LicenseConfigurationArn": "*The Amazon Resource Name (ARN) of license configuration to associate with the instance."
                },
                "MountPoint_ec2": {
                    "Device": "*How the device is exposed to the instance (such as /dev/sdh, or xvdh).",
                    "VolumeId": "*The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone and the instance must be running."
                },
                "NetworkInterface_ec2": {
                    "AssociatePublicIpAddress": "Boolean. Indicates whether the network interface receives a public IP address. You can associate a public IP address with a network interface only if it has a device index of eth0 and if it is a new network interface (not an existing one). In other words, if you specify true, don't specify a network interface ID.",
                    "DeleteOnTermination": "Boolean. Whether to delete the network interface when the instance terminates.",
                    "Description": "",
                    "DeviceIndex": "*The network interface's position in the attachment order.",
                    "GroupSet": ["List of strings. A list of security group IDs associated with this network interface."],
                    "NetworkInterfaceId": "**If you don't specify the SubnetId property, you must specify this property.",
                    "Ipv6AddressCount": "Integer. The number of IPv6 addresses to associate with the network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.",
                    "Ipv6Addresses": ["List of EC2 NetworkInterface Ipv6Addresses. One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. To specify a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property."],
                    "PrivateIpAddress": "Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.",
                    "PrivateIpAddresses": ["list of PrivateIpAddressSpecification. Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want Amazon EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property."],
                    "SecondaryPrivateIpAddressCount": "The number of secondary private IP addresses that Amazon EC2 auto assigns to the network interface. Amazon EC2 uses the value of the PrivateIpAddress property as the primary private IP address. If you don't specify that property, Amazon EC2 auto assigns both the primary and secondary private IP addresses.",
                    "SubnetId": "**The ID of the subnet to associate with the network interface. If you don't specify the NetworkInterfaceId property, you must specify this property."
                },
                "SsmAssociations": {
                    "AssociationParameters": ["List of Amazon EC2 Instance SsmAssociations AssociationParameters"],
                    "DocumentName": "*The name of an SSM document to associate with the instance."
                },
                "CreationPolicy_ec2": {
                    "ResourceSignal": {
                        "Count": "Integer. Default :1 . The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.",
                        "Timeout": "The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours. The value must be in ISO8601 duration format, in the form: 'PT#H#M#S', where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback. Default: PT5M (5 minutes)"
                    }
                },
                "InstanceIpv6Address_ec2": {
                    "Ipv6Address": "*String, The IPv6 Address."
                },
                "PrivateIpAddressSpecification_ec2": {
                    "Primary": "*Boolean. Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary",
                    "PrivateIpAddress": "*String"
                }
            },
            "AWS::EC2::SecurityGroup": {
                "SecurityGroupEgress": {
                    "CidrIp": "**",
                    "CidrIpv6": "**",
                    "Description": "**",
                    "DestinationPrefixListId": "**",
                    "DestinationSecurityGroupId": "**",
                    "FromPort": "",
                    "IpProtocol": "*",
                    "ToPort": ""
                },
                "SecurityGroupIngress": {
                    "CidrIp": "**",
                    "CidrIpv6": "**",
                    "Description": "**",
                    "FromPort": "",
                    "IpProtocol": "*",
                    "SourceSecurityGroupId": "**",
                    "SourceSecurityGroupName": "**",
                    "SourceSecurityGroupOwnerId": "**",
                    "ToPort": ""
                }
            },
            "AWS::EC2::EC2Fleet": {
                "FleetLaunchTemplateConfigRequest": {
                    "LaunchTemplateSpecification": {
                        "LaunchTemplateId": "The ID of the launch template.",
                        "LaunchTemplateName": "",
                        "Version": "The version number of the launch template."
                    },
                    "Overrides": []
                },
                "FleetLaunchTemplateOverridesRequest": {
                    "AvailabilityZone": "",
                    "InstanceType": "",
                    "MaxPrice": "The maximum price per unit hour that you are willing to pay for a Spot Instance.",
                    "Priority": "The priority for the launch template override. If AllocationStrategy is set to prioritized, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity. The highest priority is launched first. Valid values are whole numbers starting at 0. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority.",
                    "SubnetId": "",
                    "WeightedCapacity": ""
                },
                "OnDemandOptionsRequest": {
                    "AllocationStrategy": "The order of the launch template overrides to use in fulfilling On-Demand capacity. If you specify lowest-price, EC2 Fleet uses price to determine the order, launching the lowest price first. If you specify prioritized, EC2 Fleet uses the priority that you assigned to each launch template override, launching the highest priority first. If you do not specify a value, EC2 Fleet defaults to lowest-price."
                },
                "SpotOptionsRequest": {
                    "AllocationStrategy": "Indicates how to allocate the target capacity across the Spot pools specified by the Spot Fleet request. The default is lowestPrice.",
                    "InstanceInterruptionBehavior": "The behavior when a Spot Instance is interrupted. The default is terminate.",
                    "InstancePoolsToUseCount": "The number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot AllocationStrategy is set to lowest-price. EC2 Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify."
                },
                "TagSpecification": {
                    "ResourceType": "The type of resource to tag. Currently, the resource types that support tagging on creation are fleet, dedicated-host, instance, snapshot, and volume.",
                    "Tags": []
                },
                "TargetCapacitySpecificationRequest": {
                    "DefaultTargetCapacityType": "",
                    "OnDemandTargetCapacity": "",
                    "SpotTargetCapacity": "",
                    "TotalTargetCapacity": "*The number of units to request, filled using DefaultTargetCapacityType."
                }
            },
            "AWS::EC2::LaunchTemplate": {
                "LaunchTemplateData": {
                    "SecurityGroups": ["List of String values."],
                    "TagSpecifications": ["Type: List of TagSpecification"],
                    "UserData": "The Base64-encoded user data to make available to the instance.",
                    "InstanceInitiatedShutdownBehavior": "Valid values include stop and terminate. The default is stop.",
                    "BlockDeviceMappings": ["list of BlockDeviceMapping"],
                    "IamInstanceProfile": {
                        "Arn": "",
                        "Name": ""
                    },
                    "KernelId": "",
                    "SecurityGroupIds": ["Type: List of String values. One or more security group IDs."],
                    "EbsOptimized": "Boolean.Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.",
                    "KeyName": "The name of the key pair. If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.",
                    "DisableApiTermination": "Boolean. If set to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API",
                    "ElasticGpuSpecifications": ["list of ElasticGpuSpecification"],
                    "Placement": {
                        "GroupName": "String",
                        "Tenancy": "Valid values include default, dedicated, and host.",
                        "AvailabilityZone": "String",
                        "Affinity": "The affinity setting for an instance on a Dedicated Host.",
                        "HostId": "String"
                    },
                    "InstanceMarketOptions": {
                        "SpotOptions": {
                            "SpotInstanceType": "Valid values include: one-time and persistent.",
                            "InstanceInterruptionBehavior": "Valid values include: hibernate, stop, and terminate.",
                            "MaxPrice": "The maximum hourly price you're willing to pay for the Spot Instances."
                        },
                        "MarketType": "Valid values include: spot"
                    },
                    "NetworkInterfaces": [" list of NetworkInterface"],
                    "ImageId": "",
                    "InstanceType": "",
                    "RamDiskId": "",
                    "Monitoring": {
                        "Enabled": "Boolean.Specify true to enable detailed monitoring. Otherwise, basic monitoring is enabled."
                    },
                    "CreditSpecification": {
                        "CpuCredits": "The credit option for CPU usage of a T2 instance. Valid values include standard and unlimited."
                    }
                },
                "TagSpecification": {
                    "ResourceType": "The type of resource to tag. Currently, the resource types that support tagging on creation are instance and volume.",
                    "Tags": ["The tags to apply to the resource."]
                },
                "Ebs": {
                    "SnapshotId": "String. ",
                    "VolumeType": "String. Valid values include: standard, io1, gp2, sc1, and st1.",
                    "KmsKeyId": "String",
                    "Encrypted": "Boolean",
                    "Iops": "Integer",
                    "VolumeSize": "Integer. If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.",
                    "DeleteOnTermination": "Boolean"
                },
                "ElasticGpuSpecification": {
                    "Type": "String"
                },
                "NetworkInterface": {
                    "Description": "String",
                    "PrivateIpAddress": "String",
                    "PrivateIpAddresses": ["list of privateipaddresses"],
                    "SecondaryPrivateIpAddressCount": "Integer",
                    "Ipv6AddressCount": "Integer",
                    "Groups": ["Type: List of String values. The IDs of one or more security groups."],
                    "DeviceIndex": "Integer",
                    "SubnetId": "String",
                    "Ipv6Addresses": ["Type: List of Ipv6Add"],
                    "AssociatePublicIpAddress": "Boolean. Associates a public IPv4 address with eth0 for a new network interface.",
                    "NetworkInterfaceId": "String",
                    "DeleteOnTermination": "Boolean"
                }
            },
            "AWS::EC2::VPNConnection": {
                "VpnTunnelOptionsSpecification": {
                    "PreSharedKey": "The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.",
                    "TunnelInsideCidr": "The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway."
                }
            },
            "AWS::EC2::SpotFleet": {
                "SpotFleetRequestConfigData": {
                    "AllocationStrategy": "Indicates how to allocate the target capacity across the Spot pools that you specified in the Spot fleet request.",
                    "ExcessCapacityTerminationPolicy": "Indicates whether running Spot instances are terminated if you decrease the target capacity of the Spot fleet request below the current size of the Spot fleet.",
                    "IamFleetRole": "*The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants the Spot fleet the ability to bid on, launch, and terminate instances on your behalf. ",
                    "InstanceInterruptionBehavior": "The behavior when a Spot Instance is interrupted.",
                    "LaunchSpecifications": ["**List of Amazon Elastic Compute Cloud SpotFleet LaunchSpecifications. You must specify either LaunchSpecifications or LaunchTemplateConfigs."],
                    "LaunchTemplateConfigs": ["**List of LaunchTemplateConfig"],
                    "LoadBalancersConfig": {
                        "ClassicLoadBalancersConfig": {
                            "ClassicLoadBalancers": ["*List of Amazon EC2 SpotFleet ClassicLoadBalancer"]
                        },
                        "TargetGroupsConfig": {
                            "TargetGroups": ["Type: List of Amazon EC2 SpotFleet TargetGroup"]
                        }
                    },
                    "ReplaceUnhealthyInstances": "Boolean. Indicates whether the Spot fleet should replace unhealthy instances.",
                    "SpotPrice": "The bid price per unit hour. For more information, see How Spot Fleet Works in the Amazon EC2 User Guide for Linux Instances.",
                    "TargetCapacity": "*The number of units to request for the spot fleet. You can choose to set the target capacity as the number of instances or as a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. ",
                    "TerminateInstancesWithExpiration": "Boolean. Indicates whether running Spot instances are terminated when the Spot fleet request expires.",
                    "Type": "The type of request, which indicates whether the fleet will only request the target capacity or also attempt to maintain it.",
                    "ValidFrom": "The start date and time of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). By default, Amazon Elastic Compute Cloud (Amazon EC2 ) starts fulfilling the request immediately.",
                    "ValidUntil": "The end date and time of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). After the end date and time, Amazon EC2 doesn't request new Spot instances or enable them to fulfill the request."
                },
                "LaunchSpecifications": {
                    "BlockDeviceMappings": ["BlockDeviceMapping, ... "],
                    "EbsOptimized": "Boolean",
                    "IamInstanceProfile": {
                        "Arn": "String"
                    },
                    "ImageId": "String",
                    "InstanceType": "String",
                    "KernelId": "String",
                    "KeyName": "String",
                    "Monitoring": "Boolean",
                    "NetworkInterfaces": [" NetworkInterface, ... "],
                    "Placement": {
                        "AvailabilityZone": "String",
                        "GroupName": "String",
                        "Tenancy": "String"
                    },
                    "RamdiskId": "String",
                    "SecurityGroups": ["SecurityGroup, ..."],
                    "SpotPrice": "String",
                    "SubnetId": "String",
                    "TagSpecifications": ["SpotFleetTagSpecification, ... "],
                    "UserData": "String",
                    "WeightedCapacity": "Number"
                },
                "BlockDeviceMappings": {
                    "DeviceName": "String",
                    "Ebs": {
                        "DeleteOnTermination": "Boolean",
                        "Encrypted": "Boolean",
                        "Iops": "Integer",
                        "SnapshotId": "String",
                        "VolumeSize": "Integer",
                        "VolumeType": "String"
                    },
                    "NoDevice": "Boolean",
                    "VirtualName": "String"
                },
                "LaunchTemplateConfig": {
                    "LaunchTemplateSpecification": {
                        "LaunchTemplateId": "String",
                        "LaunchTemplateName": "String",
                        "Version": "String"
                    },
                    "Overrides": [" LaunchTemplateOverrides, ... "]
                },
                "LaunchTemplateOverrides": {
                    "AvailabilityZone": "String",
                    "InstanceType": "String",
                    "SpotPrice": "String",
                    "SubnetId": "String",
                    "WeightedCapacity": "Double"
                },
                "SpotFleetTagSpecification": {
                    "ResourceType": "String",
                    "Tags": ["Resource Tag, ... "]
                },
                "SecurityGroups": {
                    "GroupId": "String"
                },
                "NetworkInterfaces": {
                    "AssociatePublicIpAddress": "Boolean",
                    "DeleteOnTermination": "Boolean",
                    "Description": "String",
                    "DeviceIndex": "Integer",
                    "Groups": [" String, ... "],
                    "Ipv6AddressCount": "Integer",
                    "Ipv6Addresses": [" IPv6 Address Type, ... "],
                    "NetworkInterfaceId": "String",
                    "PrivateIpAddresses": ["PrivateIpAddresses, ..."],
                    "SecondaryPrivateIpAddressCount": "Integer",
                    "SubnetId": "String"
                },
                "PrivateIpAddresses": {
                    "Primary": "Boolean",
                    "PrivateIpAddress": "String"
                },
                "TargetGroup": {
                    "Arn": "String"
                },
                "TargetGroupsConfig": {
                    "TargetGroups": ["TargetGroup, ..."]
                },
                "Monitoring": {
                    "Enabled": "Boolean"
                }
            },
            "AWS::EC2::NetworkAclEntry": {
                "Icmp": {
                    "Code": "** The Internet Control Message Protocol (ICMP) code. You can use -1 to specify all ICMP codes for the given ICMP type. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter.",
                    "Type": "**Integer. The Internet Control Message Protocol (ICMP) type. You can use -1 to specify all ICMP types. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter."
                },
                "PortRange": {
                    "From": "**Integer. The first port in the range. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter. ",
                    "To": "**Integer. The last port in the range. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter. "
                },
            },
            "AWS::EC2::NetworkInterface": {
                "Ipv6Addresses": {
                    "Ipv6Address": "*The IPv6 address to associate with the network interface."
                },
                "PrivateIpAddressSpecification": {
                    "PrivateIpAddress": "*String. The private IP address of the network interface.",
                    "Primary": "*Boolean. Sets the private IP address as the primary private address. You can set only one primary private IP address. If you don't specify a primary private IP address, Amazon EC2 automatically assigns a primary private IP address. "
                }
            },
            "AWS::Route53::HealthCheck": {
                "AlarmIdentifier": {
                    "Name": "*The name of the Amazon CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy.",
                    "Region": "*A complex type that identifies the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy. For example, us-west-2."
                },
                "HealthCheckConfig": {
                    "AlarmIdentifier": {
                        "Name": "The name of the Amazon CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy.",
                        "Region": "A complex type that identifies the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy. For example, us-west-2."
                    },
                    "ChildHealthChecks": ["Type: List of String values. (CALCULATED Health Checks Only) A complex type that contains one ChildHealthCheck element for each health check that you want to associate with a CALCULATED health check."],
                    "EnableSNI": "Boolean. Specifies whether you want Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate.",
                    "FailureThreshold": "Integer. The number of consecutive health checks that an endpoint must pass or fail for Route 53 to change the current status of the endpoint from unhealthy to healthy or healthy to unhealthy.",
                    "FullyQualifiedDomainName": "**If you specified the IPAddress property, the value that you want Route 53 to pass in the host header in all health checks except for TCP health checks. If you don't specify an IP address, the domain that Route 53 sends a DNS request to. Route 53 uses the IP address that the DNS returns to check the health of the endpoint.",
                    "HealthThreshold": "Integer. The number of child health checks that are associated with a CALCULATED health that Route 53 must consider healthy for the CALCULATED health check to be considered healthy.",
                    "InsufficientDataHealthStatus": "When Amazon CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Route 53 to assign to the health check (Healthy, Unhealthy, or LastKnownStatus).",
                    "Inverted": "Specifies whether you want Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.",
                    "IPAddress": "The IPv4 IP address of the endpoint on which you want Route 53 to perform health checks. If you don't specify an IP address, Route 53 sends a DNS request to resolve the domain name that you specify in the FullyQualifiedDomainName property.",
                    "MeasureLatency": "Boolean. Specifies whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and display CloudWatch latency graphs on the Health Checks page in the Route 53 console.",
                    "Port": "**Integer. Required when you specify TCP for the Type property.",
                    "Regions": ["Type: List of String values. The regions from which you want Amazon Route 53 health checkers to check the specified endpoint. Duplicates are not allowed."],
                    "RequestInterval": "Integer. The number of seconds between the time that Route 53 gets a response from your endpoint and the time that it sends the next health check request.",
                    "ResourcePath": "The path that you want Route 53 to request when performing health checks. The path can be any value for which your endpoint returns an HTTP status code of 2xx or 3xx when the endpoint is healthy, such as /docs/route53-health-check.html.",
                    "SearchString": "If the value of the Type property is HTTP_STR_MATCH or HTTPS_STR_MATCH, the string that you want Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy.",
                    "Type": "*The type of health check that you want to create. This indicates how Route 53 determines whether an endpoint is healthy. You can specify HTTP, HTTPS, HTTP_STR_MATCH, HTTPS_STR_MATCH, TCP, CLOUDWATCH_METRIC, or CALCULATED."
                },
                "HealthCheckTags": {
                    "Key": "String",
                    "Value": "String"
                }
            },
            "AWS::Route53::HostedZone": {
                "HostedZoneConfig": {
                    "Comment": "String"
                },
                "HostedZoneTags": {
                    "Key": "String",
                    "Value": "String"
                },
                "HostedZoneVPCs": {
                    "VPCId": "String",
                    "VPCRegion": "String"
                },
                "QueryLoggingConfig": {
                    "CloudWatchLogsLogGroupArn": "String"
                }
            },
            "AWS::Route53::RecordSet": {
                "AliasTarget": {
                    "DNSName": "*The DNS name of the load balancer, the domain name of the CloudFront distribution, the website endpoint of the Amazon S3 bucket, or another record set in the same hosted zone that is the target of the alias.",
                    "EvaluateTargetHealth": "Boolean. Whether Route 53 checks the health of the resource record sets in the alias target when responding to DNS queries",
                    "HostedZoneId": "*The hosted zone ID. For load balancers, use the canonical hosted zone ID of the load balancer. For Amazon S3, use the hosted zone ID for your bucket's website endpoint. For CloudFront, use Z2FDTNDATAQYW2. "
                },
                "GeoLocation": {
                    "ContinentCode": "All DNS queries from the continent that you specified are routed to this resource record set. If you specify this property, omit the CountryCode and SubdivisionCode properties.",
                    "CountryCode": "All DNS queries from the country that you specified are routed to this resource record set. If you specify this property, omit the ContinentCode property. To specify the default location, use * for this property.",
                    "SubdivisionCode": "If you specified US for the country code, you can specify a state in the United States. All DNS queries from the state that you specified are routed to this resource record set. If you specify this property, you must specify US for the CountryCode and omit the ContinentCode property."
                }
            },
            "AWS::Route53Resolver::ResolverEndpoint": {
                "IpAddressRequest": {
                    "Ip": "String",
                    "SubnetId": "*The subnet that contains the IP address."
                }
            },
            "AWS::Route53Resolver::ResolverRule": {
                "TargetAddress": {
                    "Ip": "*One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.",
                    "Port": "*The port at Ip that you want to forward DNS queries to."
                }
            },
            "AWS::IAM::User": {
                "LoginProfile": {
                    "Password": "*The password for the user.",
                    "PasswordResetRequired": "Boolean. Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console."
                }
            },
            "AWS::IAM::Role": {
                "Policies": {
                    "PolicyDocument": "A JSON object. create a policy object using AWS policy generator",
                    "PolicyName": "String"
                }
            },
            "AWS::AutoScaling::AutoScalingGroup": {
                "MixedInstancesPolicy": {
                    "InstancesDistribution": {
                        "OnDemandAllocationStrategy": "String. Indicates how to allocate instance types to fulfill On-Demand capacity. The only valid value is prioritized, which is also the default value. This strategy uses the order of instance types in the Overrides array of LaunchTemplate to define the launch priority of each instance type. The first instance type in the array is prioritized higher than the last. If all your On-Demand capacity cannot be fulfilled using your highest priority instance, then the Auto Scaling groups launches the remaining capacity using the second priority instance type, and so on.",
                        "OnDemandBaseCapacity": "Integer. The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is provisioned first as your group scales. The default value is 0. If you leave this parameter set to 0, On-Demand Instances are launched as a percentage of the Auto Scaling group's desired capacity, per the OnDemandPercentageAboveBaseCapacity setting.",
                        "OnDemandPercentageAboveBaseCapacity": "Integer. Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond OnDemandBaseCapacity. The range is 0–100. The default value is 100. If you leave this parameter set to 100, the percentages are 100% for On-Demand Instances and 0% for Spot Instances.",
                        "SpotAllocationStrategy": "String. The only valid value is lowest-price, which is also the default value. The Auto Scaling group selects the cheapest Spot pools and evenly allocates your Spot capacity across the number of Spot pools that you specify.",
                        "SpotInstancePools": "Integer. The number of Spot pools to use to allocate your Spot capacity. The range is 1–20 and the default is 2.",
                        "SpotMaxPrice": "String. The maximum price per unit hour that you are willing to pay for a Spot Instance. If you leave this value blank (which is the default), the maximum Spot price is set at the On-Demand price. Minimum length of 1. Maximum length of 255."
                    },
                    "LaunchTemplate": {
                        "LaunchTemplateSpecification": {
                            "LaunchTemplateId": "String. The ID of the launch template. You must specify either a template ID or a template name.",
                            "LaunchTemplateName": "String. The name of the launch template. You must specify either a template name or a template ID.",
                            "Version": "String. The version number. AWS CloudFormation does not support specifying $Latest, or $Default for the template version number."
                        },
                        "Overrides": ["*Type: List of LaunchTemplateOverrides property types. Any parameters that you specify override the same parameters in the launch template. Currently, the only supported override is instance type. You must specify between 2 and 20 overrides."]
                    }
                },
                "LaunchTemplateOverrides": {
                    "InstanceType": "String"
                },
                "MetricsCollection": {
                    "Granularity": "*String. The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is 1Minute.",
                    "Metrics": ["Type: List of String values. The list of metrics to collect. If you don't specify any metrics, all metrics are enabled."]
                },
                "LifecycleHookSpecification": {
                    "DefaultResult": "The action that the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. Valid values: CONTINUE, ABANDON (default)",
                    "HeartbeatTimeout": "Integer. The maximum time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, Auto Scaling performs the default action.",
                    "LifecycleHookName": "*String. The name of the lifecycle hook.",
                    "LifecycleTransition": "*String. The state of the EC2 instance to attach the lifecycle hook to.",
                    "NotificationMetadata": "String. Additional information to include when Amazon EC2 Auto Scaling sends a message to the notification target. ",
                    "NotificationTargetARN": "String.The Amazon Resource Name (ARN) of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in the transition state for the lifecycle hook. The notification target can be either an Amazon SQS queue or an Amazon SNS topic.",
                    "RoleARN": "String. The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target."
                },
                "LaunchTemplateSpecification": {
                    "LaunchTemplateId": "String. The ID of the launch template. You must specify either a template ID or a template name.",
                    "LaunchTemplateName": "String. The name of the launch template. You must specify either a template name or a template ID.",
                    "Version": "String. The version number. AWS CloudFormation does not support specifying $Latest, or $Default for the template version number."
                },
                "NotificationConfiguration": {
                    "NotificationTypes": ["*list of string values. A list of event types that trigger a notification. Event types can include any of the following types: autoscaling:EC2_INSTANCE_LAUNCH, autoscaling:EC2_INSTANCE_LAUNCH_ERROR, autoscaling:EC2_INSTANCE_TERMINATE, autoscaling:EC2_INSTANCE_TERMINATE_ERROR, and autoscaling:TEST_NOTIFICATION. "],
                    "TopicARN": "*String. The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic."
                },
                "Tags": {
                    "Key": "*String",
                    "Value": "*String",
                    "PropagateAtLaunch": "*Boolean. Set to true if you want AWS CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to false if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group."
                },
                "CreationPolicy": {
                    "AutoScalingCreationPolicy": {
                        "MinSuccessfulInstancesPercent": "Specifies the percentage of instances in an Auto Scaling replacement update that must signal success for the update to succeed. You can specify a value from 0 to 100. AWS CloudFormation rounds to the nearest tenth of a percent. For example, if you update five instances with a minimum successful percentage of 50, three instances must signal success. If an instance doesn't send a signal within the time specified by the Timeout property, AWS CloudFormation assumes that the instance wasn't created. Default: 100"
                    },
                    "ResourceSignal": {
                        "Count": "Integer. Default :1 . The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.",
                        "Timeout": "The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours. The value must be in ISO8601 duration format, in the form: 'PT#H#M#S', where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback. Default: PT5M (5 minutes)"
                    }
                },
                "AutoScalingReplacingUpdate(UpdatePolicy)": {
                    "AutoScalingReplacingUpdate": {
                        "WillReplace": "Boolean. Specifies whether an Auto Scaling group and the instances it contains are replaced during an update. During replacement, AWS CloudFormation retains the old group until it finishes creating the new one. If the update fails, AWS CloudFormation can roll back to the old Auto Scaling group and delete the new Auto Scaling group. While AWS CloudFormation creates the new group, it doesn't detach or attach any instances. After successfully creating the new Auto Scaling group, AWS CloudFormation deletes the old Auto Scaling group during the cleanup process. When you set the WillReplace parameter, remember to specify a matching CreationPolicy. If the minimum number of instances (specified by the MinSuccessfulInstancesPercent property) don't signal success within the Timeout period (specified in the CreationPolicy policy), the replacement update fails and AWS CloudFormation rolls back to the old Auto Scaling group. "
                    }
                },
                "AutoScalingRollingUpdate(UpdatePolicy)": {
                    "AutoScalingRollingUpdate": {
                        "MaxBatchSize": "Integer. Specifies the maximum number of instances that AWS CloudFormation updates.",
                        "MinInstancesInService": "Integer. Specifies the minimum number of instances that must be in service within the Auto Scaling group while AWS CloudFormation updates old instances. This value must be less than the MaxSize of the Auto Scaling group. ",
                        "MinSuccessfulInstancesPercent": "Integer. Specifies the percentage of instances in an Auto Scaling rolling update that must signal success for an update to succeed. You can specify a value from 0 to 100. AWS CloudFormation rounds to the nearest tenth of a percent. For example, if you update five instances with a minimum successful percentage of 50, three instances must signal success. If an instance doesn't send a signal within the time specified in the PauseTime property, AWS CloudFormation assumes that the instance wasn't updated. If you specify this property, you must also enable the WaitOnResourceSignals and PauseTime properties. The MinSuccessfulInstancesPercent parameter applies only to instances only for signaling purpose. Default: 100",
                        "PauseTime": "String. The amount of time that AWS CloudFormation pauses after making a change to a batch of instances to give those instances time to start software applications. For example, you might need to specify PauseTime when scaling up the number of instances in an Auto Scaling group. If you enable the WaitOnResourceSignals property, PauseTime is the amount of time that AWS CloudFormation should wait for the Auto Scaling group to receive the required number of valid signals from added or replaced instances. If the PauseTime is exceeded before the Auto Scaling group receives the required number of signals, the update fails. For best results, specify a time period that gives your applications sufficient time to get started. If the update needs to be rolled back, a short PauseTime can cause the rollback to fail. Specify PauseTime in the ISO8601 duration format (in the format PT#H#M#S, where each # is the number of hours, minutes, and seconds, respectively). The maximum PauseTime is one hour (PT1H).Default: PT0S (zero seconds). If the WaitOnResourceSignals property is set to true, the default is PT5M.  ",
                        "SuspendProcesses": ["Type: List of Auto Scaling processes. Specifies the Auto Scaling processes to suspend during a stack update. Suspending processes prevents Auto Scaling from interfering with a stack update. For example, you can suspend alarming so that Amazon EC2 Auto Scaling doesn't execute scaling policies associated with an alarm.One or more of the following processes. If you omit this parameter, all processes are specified : Launch, Terminate, HealthCheck, ReplaceUnhealthy, AZRebalance, AlarmNotification, ScheduledActions, AddToLoadBalancer"],
                        "WaitOnResourceSignals": "**Boolean. If you specify the MinSuccessfulInstancesPercent property, you must also enable the WaitOnResourceSignals and PauseTime properties. Specifies whether the Auto Scaling group waits on signals from new instances during an update. Use this property to ensure that instances have completed installing and configuring applications before the Auto Scaling group update proceeds. AWS CloudFormation suspends the update of an Auto Scaling group after new EC2 instances are launched into the group. AWS CloudFormation must receive a signal from each new instance within the specified PauseTime before continuing the update. To have instances wait for an Elastic Load Balancing health check before they signal success, add a health-check verification by using the cfn-init helper script."
                    }
                },
                "AutoScalingScheduledAction(UpdatePolicy)": {
                    "AutoScalingScheduledAction": {
                        "IgnoreUnmodifiedGroupSizeProperties": "Boolean. Specifies whether AWS CloudFormation ignores differences in group size properties between your current Auto Scaling group and the Auto Scaling group described in the AWS::AutoScaling::AutoScalingGroup resource of your template during a stack update. If you modify any of the group size property values in your template, AWS CloudFormation uses the modified values and updates your Auto Scaling group. "
                    }
                }
            },
            "AWS::AutoScaling::LaunchConfiguration": {
                "BlockDeviceMapping": {
                    "DeviceName": "*String",
                    "Ebs": {
                        "DeleteOnTermination": "Boolean. Indicates whether to delete the volume when the instance is terminated. By default, Amazon EC2 Auto Scaling uses true.",
                        "Encrypted": "Boolean. Indicates whether the volume is encrypted. Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. Volumes that you create from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or an unencrypted volume from an encrypted snapshot.",
                        "Iops": "Integer. The number of I/O operations per second (IOPS) that the volume supports. The maximum ratio of IOPS to volume size is 30.",
                        "SnapshotId": "**String. If you specify both SnapshotId and VolumeSize, VolumeSize must be equal or greater than the size of the snapshot.",
                        "VolumeSize": "**Integer. If you specify both SnapshotId and VolumeSize, VolumeSize must be equal or greater than the size of the snapshot. The volume size, in Gibibytes (GiB). This can be a number from 1 – 1024. If the volume type is EBS optimized, the minimum value is 10. ",
                        "VolumeType": "String. The volume type. By default, Amazon EC2 Auto Scaling uses the standard volume type. Valid values: standard | io1 | gp2 | st1 | sc1"
                    },
                    "NoDevice": "Boolean. Suppresses the device mapping. If NoDevice is set to true for the root device, the instance might fail the Amazon EC2 health check. ",
                    "VirtualName": "**String. The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0), for example, ephemeral0. You can specify either VirtualName or Ebs, but not both."
                }
            },
            "AWS::AutoScaling::ScalingPolicy": {
                "StepAdjustments": {
                    "MetricIntervalLowerBound": "**Number. you must specify at least one upper or lower bound. The lower bound of the breach size. The lower bound is the difference between the breach threshold and the aggregated CloudWatch metric value. If the metric value is within the lower and upper bounds, Auto Scaling triggers this step adjustment. If the metric value is above the breach threshold, the metric must be greater than or equal to the threshold plus the lower bound to trigger this step adjustment (the metric value is inclusive). If the metric value is below the breach threshold, the metric must be greater than the threshold plus the lower bound to trigger this step adjustment (the metric value is exclusive). A null value indicates negative infinity.",
                    "MetricIntervalUpperBound": "**Number. You must specify at least one upper or lower bound. The upper bound of the breach size. The upper bound is the difference between the breach threshold and the CloudWatch metric value. If the metric value is within the lower and upper bounds, Auto Scaling triggers this step adjustment. If the metric value is above the breach threshold, the metric must be less than the threshold plus the upper bound to trigger this step adjustment (the metric value is exclusive). If the metric value is below the breach threshold, the metric must be less than or equal to the threshold plus the upper bound to trigger this step adjustment (the metric value is inclusive). A null value indicates positive infinity.",
                    "ScalingAdjustment": "*Integer. The amount by which to scale. The adjustment is based on the value that you specified in the AdjustmentType property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity."
                },
                "TargetTrackingConfiguration": {
                    "CustomizedMetricSpecification": {
                        "Dimensions": ["list of MetricDimension"],
                        "MetricName": "*String",
                        "Namespace": "*String",
                        "Statistic": "*String",
                        "Unit": "String"
                    },
                    "DisableScaleIn": "Boolean. Indicates whether to disable scale-in for the target tracking policy. If true, the target tracking policy will not scale in the Auto Scaling group. The default value is false.",
                    "PredefinedMetricSpecification": {
                        "PredefinedMetricType": "String",
                        "ResourceLabel": "String"
                    },
                    "TargetValue": "*Double"
                },
                "MetricDimension": {
                    "Name": "*String",
                    "Value": "*String"
                }
            },
            "AWS::ElasticLoadBalancingV2::Listener": {
                "Action": {
                    "AuthenticateCognitoConfig": {
                        "AuthenticationRequestExtraParams": "PLEASE NOTE: Type: String to String map. The query parameters (up to 10) to include in the redirect request to the authorization endpoint. ",
                        "OnUnauthenticatedRequest": "String. The behavior if the user is not authenticated. The following are possible values: deny, allow, authenticate",
                        "Scope": "String. The set of user claims to be requested from the IdP. The default is openid.",
                        "SessionCookieName": "The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.",
                        "SessionTimeout": "*Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
                        "UserPoolArn": "*String. The Amazon Resource Name (ARN) of the Amazon Cognito user pool.",
                        "UserPoolClientId": "*String. The ID of the Amazon Cognito user pool client.",
                        "UserPoolDomain": "*String. The domain prefix or fully-qualified domain name of the Amazon Cognito user pool."
                    },
                    "AuthenticateOidcConfig": {
                        "AuthenticationRequestExtraParams": "PLEASE NOTE: Type: Map of string-to-string values. The query parameters (up to 10) to include in the redirect request to the authorization endpoint.",
                        "AuthorizationEndpoint": "*String. The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
                        "ClientId": "*String. The OAuth 2.0 client identifier.",
                        "ClientSecret": "*String. The OAuth 2.0 client secret.",
                        "Issuer": "*String. The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
                        "OnUnauthenticatedRequest": "String. The behavior if the user is not authenticated. The following are possible values: allow, deny, authenticate",
                        "Scope": "String. The set of user claims to be requested from the IdP. The default is openid.",
                        "SessionCookieName": "String. The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.",
                        "SessionTimeout": "Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
                        "TokenEndpoint": "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
                        "UserInfoEndpoint": "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). "
                    },
                    "FixedResponseConfig": {
                        "ContentType": "String. Valid Values: text/plain | text/css | text/html | application/javascript | application/json",
                        "MessageBody": "String. The message",
                        "StatusCode": "*String. The HTTP response code (2XX, 4XX, or 5XX)."
                    },
                    "Order": "Integer. The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. The final action to be performed must be a forward or a fixed-response action. Valid Range: Minimum value of 1. Maximum value of 50000.",
                    "RedirectConfig": {
                        "Host": "String. The hostname. This component is not percent-encoded. The hostname can contain #{host}.",
                        "Path": "String. The absolute path, starting with the leading '/'. This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.",
                        "Port": "String",
                        "Protocol": "String. The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.",
                        "Query": "String. The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading '?', as it is automatically added. You can specify any of the reserved keywords.",
                        "StatusCode": "*String. Valid Values: HTTP_301 | HTTP_302"
                    },
                    "TargetGroupArn": "String. The Amazon Resource Name (ARN) of the target group to which Elastic Load Balancing routes the traffic. Specify only when Type is forward.",
                    "Type": "*String. The type of action. Each rule must include exactly one of the following types of actions: forward | authenticate-oidc | authenticate-cognito | redirect | fixed-response"
                },
                "Certificate": {
                    "CertificateArn": "String"
                }
            },
            "AWS::ElasticLoadBalancingV2::ListenerCertificate": {
                "Certificate": {
                    "CertificateArn": "String"
                }
            },
            "AWS::ElasticLoadBalancingV2::ListenerRule": {
                "Conditions": {
                    "Field": "String. The name of the condition that you want to define, such as path-pattern (which forwards requests based on the URL of the request). Valid values: host-header | path-pattern",
                    "Values": ["Type: List of String values. If you specified host-header for Field, you can specify a single host name (for example, my.example.com). A host name is case insensitive. If you specified path-pattern for Field, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length. The value for the field that you specified in the Field property. "]
                },
                "Action": {
                    "AuthenticateCognitoConfig": {
                        "AuthenticationRequestExtraParams": "PLEASE NOTE: Type: String to String map. The query parameters (up to 10) to include in the redirect request to the authorization endpoint. ",
                        "OnUnauthenticatedRequest": "String. The behavior if the user is not authenticated. The following are possible values: deny, allow, authenticate",
                        "Scope": "String. The set of user claims to be requested from the IdP. The default is openid.",
                        "SessionCookieName": "The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.",
                        "SessionTimeout": "*Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
                        "UserPoolArn": "*String. The Amazon Resource Name (ARN) of the Amazon Cognito user pool.",
                        "UserPoolClientId": "*String. The ID of the Amazon Cognito user pool client.",
                        "UserPoolDomain": "*String. The domain prefix or fully-qualified domain name of the Amazon Cognito user pool."
                    },
                    "AuthenticateOidcConfig": {
                        "AuthenticationRequestExtraParams": "PLEASE NOTE: Type: Map of string-to-string values. The query parameters (up to 10) to include in the redirect request to the authorization endpoint.",
                        "AuthorizationEndpoint": "*String. The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
                        "ClientId": "*String. The OAuth 2.0 client identifier.",
                        "ClientSecret": "*String. The OAuth 2.0 client secret.",
                        "Issuer": "*String. The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
                        "OnUnauthenticatedRequest": "String. The behavior if the user is not authenticated. The following are possible values: allow, deny, authenticate",
                        "Scope": "String. The set of user claims to be requested from the IdP. The default is openid.",
                        "SessionCookieName": "String. The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.",
                        "SessionTimeout": "Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
                        "TokenEndpoint": "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
                        "UserInfoEndpoint": "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). "
                    },
                    "FixedResponseConfig": {
                        "ContentType": "String. Valid Values: text/plain | text/css | text/html | application/javascript | application/json",
                        "MessageBody": "String. The message",
                        "StatusCode": "*String. The HTTP response code (2XX, 4XX, or 5XX)."
                    },
                    "Order": "Integer. The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. The final action to be performed must be a forward or a fixed-response action. Valid Range: Minimum value of 1. Maximum value of 50000.",
                    "RedirectConfig": {
                        "Host": "String. The hostname. This component is not percent-encoded. The hostname can contain #{host}.",
                        "Path": "String. The absolute path, starting with the leading '/'. This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.",
                        "Port": "String",
                        "Protocol": "String. The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.",
                        "Query": "String. The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading '?', as it is automatically added. You can specify any of the reserved keywords.",
                        "StatusCode": "*String. Valid Values: HTTP_301 | HTTP_302"
                    },
                    "TargetGroupArn": "String. The Amazon Resource Name (ARN) of the target group to which Elastic Load Balancing routes the traffic. Specify only when Type is forward.",
                    "Type": "*String. The type of action. Each rule must include exactly one of the following types of actions: forward | authenticate-oidc | authenticate-cognito | redirect | fixed-response"
                }
            },
            "AWS::ElasticLoadBalancingV2::LoadBalancer": {
                "LoadBalancerAttributes": {
                    "Key": "String. The name of an attribute that you want to configure.The following attributes are supported by both Application Load Balancers and Network Load Balancers:1. access_logs.s3.enabled - Indicates whether access logs are enabled. The value is true or false. The default is false. 2. access_logs.s3.bucket - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket. 3. access_logs.s3.prefix - The prefix for the location in the S3 bucket for the access logs. 4.deletion_protection.enabled - Indicates whether deletion protection is enabled. The value is true or false. The default is false.The following attributes are supported by only Application Load Balancers: 1. idle_timeout.timeout_seconds - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds. 2. routing.http2.enabled - Indicates whether HTTP/2 is enabled. The value is true orfalse. The default is true.The following attributes are supported by only Network Load Balancers: 1. load_balancing.cross_zone.enabled - Indicates whether cross-zone load balancing is enabled. The value is true or false. The default is false.",
                    "Value": "String"
                },
                "SubnetMappings": {
                    "SubnetId": "*String",
                    "AllocationId": "*String. [Network Load Balancer] The ID that represents the allocation of the Elastic IP address."
                }
            },
            "AWS::ElasticLoadBalancingV2::TargetGroup": {
                "Matcher": {
                    "HttpCode": "String. The HTTP codes that a healthy target must use when responding to a health check, such as 200,202 or 200-399. "
                },
                "TargetDescription": {
                    "AvailabilityZone": "String",
                    "Id": "*String. The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. ",
                    "Port": "Integer. The port number on which the target is listening for traffic."
                },
                "TargetGroupAttributes": {
                    "Key": "The following attribute is supported by both Application Load Balancers and Network Load Balancers: 1. deregistration_delay.timeout_seconds - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds. If the target is a Lambda function, this attribute is not supported. The following attributes are supported by Application Load Balancers if the target is not a Lambda function: 1. slow_start.duration_seconds - The time period, in seconds, during which a newly registered target receives a linearly increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). Slow start mode is disabled by default. 2. stickiness.enabled - Indicates whether sticky sessions are enabled. The value is true or false. The default is false. 3. stickiness.type - The type of sticky sessions. The possible value is lb_cookie. 4. stickiness.lb_cookie.duration_seconds - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).The following attribute is supported only if the target is a Lambda function. 1. lambda.multi_value_headers.enabled - Indicates whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. The value is true or false. The default is false. If the value is false and the request contains a duplicate header field name or query parameter key, the load balancer uses the last value sent by the client. The following attribute is supported only by Network Load Balancers: 1.proxy_protocol_v2.enabled - Indicates whether Proxy Protocol version 2 is enabled. The value is true or false. The default is false.",
                    "Value": "String"
                }
            },
            "AWS::CertificateManager::Certificate": {
                "DomainValidationOption": {
                    "DomainName": "*String. Fully Qualified Domain Name (FQDN) of the Certificate that you are requesting.",
                    "ValidationDomain": "*String. The domain that domain name registrars use to send validation emails. Registrars use this value as the email address suffix when sending emails to verify your identity. This value must be the same as the domain name or a superdomain of the domain name."
                }
            },
            "AWS::DynamoDB::Table": {
                "AttributeDefinition": {
                    "AttributeName": "*String",
                    "AttributeType": "*String. The data type for the attribute. You can specify S for string data, N for numeric data, or B for binary data. "
                },
                "ProvisionedThroughput": {
                    "ReadCapacityUnits": "*Number. Sets the desired minimum number of consistent reads of items (up to 4KB in size) per second for the specified table before Amazon DynamoDB balances the load. ",
                    "WriteCapacityUnits": "*Number. Sets the desired minimum number of consistent writes of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load. "
                },
                "SSESpecification": {
                    "SSEEnabled": "*Boolean. Whether server-side encryption is enabled or not"
                },
                "StreamSpecification": {
                    "StreamViewType": "*String. Determines the information that the stream captures when an item in the table is modified. Valid Values: NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY"
                },
                "TimeToLiveSpecification": {
                    "AttributeName": "*String. The name of the TTL attribute that stores the expiration time for items in the table. The name can be 1–255 characters long, and has no character restrictions. ",
                    "Enabled": "*Boolean. Indicates whether to enable (by specifying true) or disable (by specifying false) TTL on the table."
                },
                "KeySchema": {
                    "AttributeName": "*String. The attribute name that is used as the primary key for this table. Primary key element names can be 1 – 255 characters long and have no character restrictions.",
                    "KeyType": "*Represents the attribute data, consisting of the data type and the attribute value itself. You can specify HASH or RANGE."
                },
                "PointInTimeRecoverySpecification": {
                    "PointInTimeRecoveryEnabled": "Boolean. Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. "
                },
                "LocalSecondaryIndex": {
                    "IndexName": "*String",
                    "KeySchema": ["*Type: List of KeySchema. The complete index key schema for the local secondary index, which consists of one or more pairs of attribute names and key types. For local secondary indexes, the hash key must be the same as that of the source table.##"],
                    "Projection": {
                        "NonKeyAttributes": ["Type: List of String values. The non-key attribute names that are projected into the index. For local secondary indexes, the total count of NonKeyAttributes summed across all of the local secondary indexes must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes in determining the total. This limit does not apply for secondary indexes with a ProjectionType of KEYS_ONLY or ALL. "],
                        "ProjectionType": "*String. KEYS_ONLY=Only the index and primary keys are projected into the index. |INCLUDE= Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes. |ALL=All of the table attributes are projected into the index.. "
                    }
                },
                "GlobalSecondaryIndex": {
                    "IndexName": "*String. The name of the global secondary index. ",
                    "KeySchema": ["*Type: List of KeySchema. The complete index key schema for the local secondary index, which consists of one or more pairs of attribute names and key types. For local secondary indexes, the hash key must be the same as that of the source table.##"],
                    "Projection": {
                        "NonKeyAttributes": ["Type: List of String values. The non-key attribute names that are projected into the index. For local secondary indexes, the total count of NonKeyAttributes summed across all of the local secondary indexes must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes in determining the total. This limit does not apply for secondary indexes with a ProjectionType of KEYS_ONLY or ALL. "],
                        "ProjectionType": "*String. KEYS_ONLY=Only the index and primary keys are projected into the index. |INCLUDE= Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes. |ALL=All of the table attributes are projected into the index.. "
                    },
                    "ProvisionedThroughput": {
                        "ReadCapacityUnits": "*Number. Sets the desired minimum number of consistent reads of items (up to 4KB in size) per second for the specified table before Amazon DynamoDB balances the load. ",
                        "WriteCapacityUnits": "*Number. Sets the desired minimum number of consistent writes of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load. "
                    }
                }
            },
            "AWS::SQS::Queue": {
                "RedrivePolicy": {
                    "deadLetterTargetArn": "*String. The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded. ",
                    "maxReceiveCount": "*Integer. The number of times a message is delivered to the source queue before being moved to the dead-letter queue. "
                }
            },
            "AWS::SNS::Topic": {
                "Subscription": {
                    "Endpoint": "*String. The subscription's endpoint (format depends on the protocol).",
                    "Protocol": "*String. The subscription's protocol."
                }
            },
            "AWS::ECS::Service": {
                "NetworkConfiguration": {
                    "AwsvpcConfiguration": {
                        "AssignPublicIp": "String. Allowed Values: DISABLED | ENABLED. Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.",
                        "SecurityGroups": ["Type: List of String. The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration."],
                        "Subnets": ["*Type: List of String. The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration."]
                    }
                },
                "DeploymentConfiguration": {
                    "MaximumPercent": "Integer. If a service is using the rolling update (ECS) deployment type, the maximum percent parameter represents an upper limit on the number of tasks in a service that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desired number of tasks (rounded down to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%. If a service is using the blue/green (CODE_DEPLOY) or EXTERNAL deployment types and tasks that use the EC2 launch type, the maximum percent value is set to the default value and is used to define the upper limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the maximum percent value is not used, although it is returned when describing your service.",
                    "MinimumHealthyPercent": "Integer. If a service is using the rolling update (ECS) deployment type, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the RUNNING state during a deployment, as a percentage of the desired number of tasks (rounded up to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desired number of four tasks and a minimum healthy percent of 50%, the scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state; tasks for services that do use a load balancer are considered healthy if they are in the RUNNING state and they are reported as healthy by the load balancer. The default value for minimum healthy percent is 100%. If a service is using the blue/green (CODE_DEPLOY) or EXTERNAL deployment types and tasks that use the EC2 launch type, the minimum healthy percent value is set to the default value and is used to define the lower limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service."
                },
                "LoadBalancer": {
                    "ContainerName": "String. The name of the container (as it appears in a container definition) to associate with the load balancer.",
                    "ContainerPort": "*Integer. The port on the container to associate with the load balancer. This port must correspond to a containerPort in the service's task definition. Your container instances must allow ingress traffic on the hostPort of the port mapping.",
                    "LoadBalancerName": "String. The name of the load balancer to associate with the Amazon ECS service.",
                    "TargetGroupArn": "String. The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service. For services using the ECS deployment controller, you are limited to one target group. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer."
                },
                "PlacementConstraint": {
                    "Expression": "String. A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance.",
                    "Type": "*String. The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates. The value distinctInstance is not supported in task definitions. Allowed Values: distinctInstance | memberOf. "
                },
                "PlacementStrategy": {
                    "Field": "String. The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.",
                    "Type": "*String. The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task). Allowed Values: binpack | random | spread. "
                },
                "ServiceRegistry": {
                    "ContainerName": "String. The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.",
                    "ContainerPort": "Integer. The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.",
                    "Port": "Integer. The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.",
                    "RegistryArn": "String. The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map."
                }
            },
            "AWS::ECS::TaskDefinition": {
                "ContainerDefinition": {
                    "Command": ["Type: List of String. The command that is passed to the container. "],
                    "Cpu": "Integer. The number of cpu units reserved for the container.",
                    "DisableNetworking": "Boolean. When this parameter is true, networking is disabled within the container.",
                    "DnsSearchDomains": ["list of strings. A list of DNS search domains that are presented to the container. This parameter maps to DnsSearch in the Create a container section of the Docker Remote API and the --dns-search option to docker run. Not supported for windows containers."],
                    "DnsServers": ["List of strings. A list of DNS servers that are presented to the container. This parameter maps to Dns in the Create a container section of the Docker Remote API and the --dns option to docker run."],
                    "DockerLabels": { "info": "Type: Map of String. A key/value map of labels to add to the container. This parameter maps to Labels in the Create a container section of the Docker Remote API and the --label option to docker run. e.g. a:b,c:d " },
                    "DockerSecurityOptions": ["List of strings. A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems. This field is not valid for containers in tasks using the Fargate launch type."],
                    "EntryPoint": ["List of string. The entry point that is passed to the container. This parameter maps to Entrypoint in the Create a container section of the Docker Remote API and the --entrypoint option to docker run. "],
                    "Environment": ["Type: List of KeyValuePair. The environment variables to pass to a container. This parameter maps to Env in the Create a container section of the Docker Remote API and the --env option to docker run.##"],
                    "Essential": "Boolean. If the essential parameter of a container is marked as true, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the essential parameter of a container is marked as false, then its failure does not affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential. All tasks must have at least one essential container. If you have an application that is composed of multiple containers, you should group containers that are used for a common purpose into components, and separate the different components into multiple task definitions.",
                    "ExtraHosts": [" Type: List of HostEntry. A list of hostnames and IP address mappings to append to the /etc/hosts file on the container. This parameter maps to ExtraHosts in the Create a container section of the Docker Remote API and the --add-host option to docker run. This parameter is not supported for Windows containers or tasks that use the awsvpc network mode. ##"],
                    "HealthCheck": {
                        "Command": ["*Type: List of String. A string array representing the command that the container runs to determine if it is healthy. The string array must start with CMD to execute the command arguments directly, or CMD-SHELL to run the command with the container's default shell. "],
                        "Interval": "Integer. The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.",
                        "Retries": "Integer. The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3.",
                        "StartPeriod": "Integer. The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.",
                        "Timeout": "Integer. The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5."
                    },
                    "Hostname": "String. The hostname to use for your container. This parameter maps to Hostname in the Create a container section of the Docker Remote API and the --hostname option to docker run.",
                    "Image": "String. The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either repository-url/image:tag or repository-url/image@digest . Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to Image in the Create a container section of the Docker Remote API and the IMAGE parameter of docker run.",
                    "Links": ["List of strings. The link parameter allows containers to communicate with each other without the need for port mappings. Only supported if the network mode of a task definition is set to bridge. The name:internalName construct is analogous to name:alias in Docker links. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This parameter maps to Links in the Create a container section of the Docker Remote API and the --link option to docker run ."],
                    "LinuxParameters": {
                        "Capabilities": {
                            "Add": ["List of String. The Linux capabilities for the container that have been added to the default configuration provided by Docker. Valid values: 'ALL' | 'AUDIT_CONTROL' | 'AUDIT_WRITE' | 'BLOCK_SUSPEND' | 'CHOWN' | 'DAC_OVERRIDE' | 'DAC_READ_SEARCH' | 'FOWNER' | 'FSETID' | 'IPC_LOCK' | 'IPC_OWNER' | 'KILL' | 'LEASE' | 'LINUX_IMMUTABLE' | 'MAC_ADMIN' | 'MAC_OVERRIDE' | 'MKNOD' | 'NET_ADMIN' | 'NET_BIND_SERVICE' | 'NET_BROADCAST' | 'NET_RAW' | 'SETFCAP' | 'SETGID' | 'SETPCAP' | 'SETUID' | 'SYS_ADMIN' | 'SYS_BOOT' | 'SYS_CHROOT' | 'SYS_MODULE' | 'SYS_NICE' | 'SYS_PACCT' | 'SYS_PTRACE' | 'SYS_RAWIO' | 'SYS_RESOURCE' | 'SYS_TIME' | 'SYS_TTY_CONFIG' | 'SYSLOG' | 'WAKE_ALARM'"],
                            "Drop": ["List of string. The Linux capabilities for the container that have been removed from the default configuration provided by Docker. Valid values: 'ALL' | 'AUDIT_CONTROL' | 'AUDIT_WRITE' | 'BLOCK_SUSPEND' | 'CHOWN' | 'DAC_OVERRIDE' | 'DAC_READ_SEARCH' | 'FOWNER' | 'FSETID' | 'IPC_LOCK' | 'IPC_OWNER' | 'KILL' | 'LEASE' | 'LINUX_IMMUTABLE' | 'MAC_ADMIN' | 'MAC_OVERRIDE' | 'MKNOD' | 'NET_ADMIN' | 'NET_BIND_SERVICE' | 'NET_BROADCAST' | 'NET_RAW' | 'SETFCAP' | 'SETGID' | 'SETPCAP' | 'SETUID' | 'SYS_ADMIN' | 'SYS_BOOT' | 'SYS_CHROOT' | 'SYS_MODULE' | 'SYS_NICE' | 'SYS_PACCT' | 'SYS_PTRACE' | 'SYS_RAWIO' | 'SYS_RESOURCE' | 'SYS_TIME' | 'SYS_TTY_CONFIG' | 'SYSLOG' | 'WAKE_ALARM'"]
                        },
                        "Devices": ["Type: List of Device. Any host devices to expose to the container. This parameter maps to Devices in the Create a container section of the Docker Remote API and the --device option to docker run. If you are using tasks that use the Fargate launch type, the devices parameter is not supported.##"],
                        "InitProcessEnabled": "Boolean. Run an init process inside the container that forwards signals and reaps processes. This parameter maps to the --init option to docker run. ",
                        "SharedMemorySize": "Integer. The value for the size (in MiB) of the /dev/shm volume. This parameter maps to the --shm-size option to docker run.",
                        "Tmpfs": ["Type: List of Tmpfs. The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the --tmpfs option to docker run ##. "]
                    },
                    "LogConfiguration": {
                        "LogDriver": "*String. Allowed Values: awslogs | fluentd | gelf | journald | json-file | splunk | syslog. For tasks using the Fargate launch type, the supported log drivers are awslogs and splunk.",
                        "Options": { "info": "Type: Map of String e.g. a:b,c:d,e:f. The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}'" }
                    },
                    "Memory": "Integer. The hard limit (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. This parameter maps to Memory in the Create a container section of the Docker Remote API and the --memory option to docker run.If your containers are part of a task using the Fargate launch type, this field is optional and the only requirement is that the total amount of memory reserved for all containers within a task be lower than the task memory value. For containers that are part of a task using the EC2 launch type, you must specify a non-zero integer for one or both of memory or memoryReservation in container definitions. If you specify both, memory must be greater than memoryReservation. If you specify memoryReservation, then that value is subtracted from the available memory resources for the container instance on which the container is placed. Otherwise, the value of memory is used.",
                    "MemoryReservation": "Integer. The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the memory parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to MemoryReservation in the Create a container section of the Docker Remote API and the --memory-reservation option to docker run.",
                    "MountPoints": ["Type: List of MountPoint. This parameter maps to Volumes in the Create a container section of the Docker Remote API and the --volume option to docker run. Windows containers can mount whole directories on the same drive as $env:ProgramData. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives. ##"],
                    "Name": "String. The name of a container. If you are linking multiple containers together in a task definition, the name of one container can be entered in the links of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This parameter maps to name in the Create a container section of the Docker Remote API and the --name option to docker run.",
                    "PortMappings": ["Type: List of PortMapping. The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings on Windows use the NetNAT gateway address rather than localhost. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself."],
                    "Privileged": "Boolean. When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user). This parameter maps to Privileged in the Create a container section of the Docker Remote API and the --privileged option to docker run.",
                    "ReadonlyRootFilesystem": "Boolean. When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ReadonlyRootfs in the Create a container section of the Docker Remote API and the --read-only option to docker run.",
                    "RepositoryCredentials": {
                        "CredentialsParameter": "The Amazon Resource Name (ARN) of the secret containing the private repository credentials."
                    },
                    "Ulimits": ["Type: List of Ulimit. A list of ulimits to set in the container. This parameter maps to Ulimits in the Create a container section of the Docker Remote API and the --ulimit option to docker run."],
                    "User": "String. The user name to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run. This parameter is not supported for Windows containers.",
                    "VolumesFrom": ["Type: List of VolumeFrom. Data volumes to mount from another container. This parameter maps to VolumesFrom in the Create a container section of the Docker Remote API and the --volumes-from option to docker run."],
                    "WorkingDirectory": "String. The working directory in which to run commands inside the container. This parameter maps to WorkingDir in the Create a container section of the Docker Remote API and the --workdir option to docker run."
                },
                "Device": {
                    "ContainerPath": "String. The path inside the container at which to expose the host device.",
                    "HostPath": "*String. The path for the device on the host container instance.",
                    "Permissions": ["List of string. The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and mknod for the device."]
                },
                "DockerVolumeConfiguration": {
                    "Autoprovision": "Boolean. If this value is true, the Docker volume is created if it does not already exist.",
                    "Driver": "String. The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use docker plugin ls to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. For more information, see Docker plugin discovery. This parameter maps to Driver in the Create a volume section of the Docker Remote API and the xxdriver option to docker volume create .",
                    "DriverOpts": { "info": "Type: Map of String e.g. a:b, c:d, e:f. A map of Docker driver-specific options passed through. This parameter maps to DriverOpts in the Create a volume section of the Docker Remote API and the xxopt option to docker volume create ." },
                    "Labels": { "info": "Type: Map of String e.g. a:b, c:d, e:f. Custom metadata to add to your Docker volume. This parameter maps to Labels in the Create a volume section of the Docker Remote API and the xxlabel option to docker volume create ." },
                    "Scope": "String. Allowed Values: shared | task. The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as shared persist after the task stops."
                },
                "HostEntry": {
                    "Hostname": "*String. The hostname to use in the /etc/hosts entry.",
                    "IpAddress": "*String. The IP address to use in the /etc/hosts entry."
                },
                "HostVolumeProperties": {
                    "SourcePath": "String. When the host parameter is used, specify a sourcePath to declare the path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the host parameter contains a sourcePath file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the sourcePath value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported. If you are using the Fargate launch type, the sourcePath parameter is not supported."
                },
                "KeyValuePair": {
                    "Name": "String",
                    "Value": "String"
                },
                "MountPoint": {
                    "ContainerPath": "String. The path on the container to mount the host volume at.",
                    "ReadOnly": "Boolean. If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false.",
                    "SourceVolume": "String. The name of the volume to mount. Must be a volume name referenced in the name parameter of task definition volume."
                },
                "PortMapping": {
                    "ContainerPort": "Integer. The port number on the container that is bound to the user-specified or automatically assigned host port.",
                    "HostPort": "Integer. The port number on the container instance to reserve for your container.",
                    "Protocol": "String. Allowed Values: tcp | udp"
                },
                "Tmpfs": {
                    "ContainerPath": "String. The absolute file path where the tmpfs volume is to be mounted.",
                    "MountOptions": ["List of string. Valid values: 'defaults' | 'ro' | 'rw' | 'suid' | 'nosuid' | 'dev' | 'nodev' | 'exec' | 'noexec' | 'sync' | 'async' | 'dirsync' | 'remount' | 'mand' | 'nomand' | 'atime' | 'noatime' | 'diratime' | 'nodiratime' | 'bind' | 'rbind' | 'unbindable' | 'runbindable' | 'private' | 'rprivate' | 'shared' | 'rshared' | 'slave' | 'rslave' | 'relatime' | 'norelatime' | 'strictatime' | 'nostrictatime' | 'mode' | 'uid' | 'gid' | 'nr_inodes' | 'nr_blocks' | 'mpol'"],
                    "Size": "Integer. The size (in MiB) of the tmpfs volume."
                },
                "Ulimit": {
                    "HardLimit": "*Integer",
                    "Name": "*String. Allowed Values: core | cpu | data | fsize | locks | memlock | msgqueue | nice | nofile | nproc | rss | rtprio | rttime | sigpending | stack ",
                    "SoftLimit": "*Integer"
                },
                "Volume": {
                    "DockerVolumeConfiguration": {
                        "Autoprovision": "Boolean. If this value is true, the Docker volume is created if it does not already exist.",
                        "Driver": "String. The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use docker plugin ls to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. For more information, see Docker plugin discovery. This parameter maps to Driver in the Create a volume section of the Docker Remote API and the xxdriver option to docker volume create .",
                        "DriverOpts": { "info": "Type: Map of String e.g. a:b, c:d, e:f. A map of Docker driver-specific options passed through. This parameter maps to DriverOpts in the Create a volume section of the Docker Remote API and the xxopt option to docker volume create ." },
                        "Labels": { "info": "Type: Map of String e.g. a:b, c:d, e:f. Custom metadata to add to your Docker volume. This parameter maps to Labels in the Create a volume section of the Docker Remote API and the xxlabel option to docker volume create ." },
                        "Scope": "String. Allowed Values: shared | task. The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as shared persist after the task stops."
                    },
                    "Host": {
                        "SourcePath": "String. When the host parameter is used, specify a sourcePath to declare the path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the host parameter contains a sourcePath file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the sourcePath value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported. If you are using the Fargate launch type, the sourcePath parameter is not supported."
                    },
                    "Name": "String. The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This name is referenced in the sourceVolume parameter of container definition mountPoints."
                },
                "VolumeFrom": {
                    "ReadOnly": "Boolean. If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false",
                    "SourceContainer": "String. The name of another container within the same task definition from which to mount volumes."
                }
            },
            "AWS::CloudTrail::Trail": {
                "EventSelector": {
                    "DataResources": ["Type: List of DataResource. CloudTrail supports data event logging for Amazon S3 objects and AWS Lambda functions. You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.## "],
                    "IncludeManagementEvents": "Boolean. Specify if you want your event selector to include management events for your trail.",
                    "ReadWriteType": "String. Allowed Values: All | ReadOnly | WriteOnly"
                },
                "DataResource": {
                    "Type": "*String. The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources. ",
                    "Values": ["Type: List of String. An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects. To log data events for all objects in all S3 buckets in your AWS account, specify the prefix as arn:aws:s3:::. To log data events for all objects in an S3 bucket, specify the bucket and an empty object prefix such as arn:aws:s3:::bucket-1/. The trail logs data events for all objects in this S3 bucket. To log data events for specific objects, specify the S3 bucket and object prefix such as arn:aws:s3:::bucket-1/example-images. The trail logs data events for objects in this S3 bucket that match the prefix.To log data events for all functions in your AWS account, specify the prefix as arn:aws:lambda. To log data events for a specific Lambda function, specify the function ARN."]
                }
            },
            "AWS::CloudWatch::Alarm": {
                "Dimension": {
                    "Name": "*String",
                    "Value": "*String"
                },
                "Metric": {
                    "Dimensions": ["Type: List of Dimensions##"],
                    "MetricName": "String",
                    "Namespace": "String"
                },
                "MetricDataQuery": {
                    "Expression": "String. The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the Id of the other metrics to refer to those metrics, and can also use the Id of other expressions to use the result of those expressions.",
                    "Id": "*String. A short name used to tie this object to the results in the response. This name must be unique within a single call to GetMetricData. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.",
                    "Label": "String. A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.",
                    "MetricStat": {
                        "Metric": "*Type: Metric.## ",
                        "Period": "*Integer. The period, in seconds, to use when retrieving the metric",
                        "Stat": "*String. The statistic to return. It can include any CloudWatch statistic or extended statistic.",
                        "Unit": "String. Allowed Values: Bits | Bits/Second | Bytes | Bytes/Second | Count | Count/Second | Gigabits | Gigabits/Second | Gigabytes | Gigabytes/Second | Kilobits | Kilobits/Second | Kilobytes | Kilobytes/Second | Megabits | Megabits/Second | Megabytes | Megabytes/Second | Microseconds | Milliseconds | None | Percent | Seconds | Terabits | Terabits/Second | Terabytes | Terabytes/Second"
                    },
                    "ReturnData": "Boolean. This option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify False. If you omit this, the default of True is used."
                }
            },
            "AWS::Logs::MetricFilter": {
                "MetricTransformation": {
                    "DefaultValue": "Double. (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.",
                    "MetricName": "*String",
                    "MetricNamespace": "*String",
                    "MetricValue": "*String. The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like Error, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $ followed by the name of the field that you specified in the filter pattern, such as $size."
                }
            },
            "AWS::Events::EventBusPolicy": {
                "Condition": {
                    "Key": "String. Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.",
                    "Type": "String. Specifies the type of condition. Currently the only supported value is StringEquals.",
                    "Value": "String. Specifies the value for the key. Currently, this must be the ID of the organization."
                }
            },
            "AWS::Events::Rule": {
                "Target": {
                    "Arn": "String",
                    "EcsParameters": {
                        "TaskCount": "Integer. The number of tasks to create based on TaskDefinition. The default is 1.",
                        "TaskDefinitionArn": "*String. The ARN of the task definition to use. If no task revision is supplied, it defaults to the most recent revision at the time of resource creation."
                    },
                    "Id": "*String. The ID of the target.",
                    "Input": "String. Valid JSON text passed to the target. If you use this property, nothing from the event text itself is passed to the target.",
                    "InputPath": "String. When you don't want to pass the entire matched event, InputPath describes which part of the event to pass to the target.",
                    "InputTransformer": {
                        "InputPathsMap": "Type: Map of String. {Key : Value, ...}. Map of JSON paths to be extracted from the event. You can then insert these in the template in InputTemplate to produce the output you want to be sent to the target. InputPathsMap is an array key-value pairs, where each value is a valid JSON path. You can have as many as 10 key-value pairs. You must use JSON dot notation, not bracket notation. The keys cannot start with 'AWS'",
                        "InputTemplate": "*String. Input template where you specify placeholders that will be filled with the values of the keys from InputPathsMap to customize the data sent to the target. Enclose each InputPathsMaps value in brackets: <value> The InputTemplate must be valid JSON."
                    },
                    "KinesisParameters": {
                        "PartitionKeyPath": "*String. The JSON path to be extracted from the event and used as the partition key. "
                    },
                    "RoleArn": "String",
                    "RunCommandParameters": {
                        "RunCommandTargets": ["Type: List of RunCommandTarget. The criteria (either InstanceIds or a tag) that specifies which EC2 instances the command is sent to. ##"]
                    },
                    "SqsParameters": {
                        "MessageGroupId": "*String. The FIFO message group ID to use as the target."
                    }
                },
                "RunCommandTarget": {
                    "Key": "*String. Can be either tag: tag-key or InstanceIds.",
                    "Values": ["*List of strings. If Key is tag: tag-key, Values is a list of tag values. If Key is InstanceIds, Values is a list of Amazon EC2 instance IDs."]
                }
            },
            "AWS::EKS::Cluster": {
                "ResourcesVpcConfig": {
                    "SecurityGroupIds": ["Type: List of String. Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used."],
                    "SubnetIds": ["* Type: List of string. Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your worker nodes and the Kubernetes control plane."]
                }
            },
            "AWS::EFS::FileSystem": {
                "ElasticFileSystemTag": {
                    "Key": "*String",
                    "Value": "*String"
                }
            },
            "AWS::S3::Bucket": {
                "AccelerateConfiguration": {
                    "AccelerationStatus": "*String. Allowed Values: Enabled | Suspended. "
                },
                "AnalyticsConfiguration": {
                    "Id": "*String",
                    "Prefix": "String. The prefix that an object must have to be included in the analytics results.",
                    "StorageClassAnalysis": {
                        "DataExport": {
                            "Destination": {
                                "BucketAccountId": "String. The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.",
                                "BucketArn": "*String. The Amazon Resource Name (ARN) of the bucket to which data is exported.",
                                "Format": "*String. Specifies the file format used when exporting data to Amazon S3.",
                                "Prefix": "String. The prefix to use when exporting data. The prefix is prepended to all results."
                            },
                            "OutputSchemaVersion": "*String. The version of the output schema to use when exporting data. Must be V_1."
                        }
                    },
                    "TagFilters": ["Type: List of TagFilter. The tags to use when evaluating an analytics filter. The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.##"]
                },
                "TagFilter": {
                    "Key": "*String",
                    "Value": "*String"
                },
                "BucketEncryption": {
                    "ServerSideEncryptionConfiguration": ["*Type: List of ServerSideEncryptionRule. Specifies the default server-side-encryption configuration.##"]
                },
                "ServerSideEncryptionRule": {
                    "ServerSideEncryptionByDefault": {
                        "KMSMasterKeyID": "String. KMS master key ID to use for the default encryption. This parameter is allowed if and only if SSEAlgorithm is set to aws:kms.",
                        "SSEAlgorithm": "*String. Allowed Values: AES256 | aws:kms"
                    }
                },
                "CorsConfiguration": {
                    "CorsRules": ["*Type: List of CorsRule. A set of allowed origins and methods."]
                },
                "CorsRule": {
                    "AllowedHeaders": ["Type: List of String. Headers that are specified in the Access-Control-Request-Headers header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed."],
                    "AllowedMethods": ["*Type: List of String. An HTTP method that you allow the origin to execute. Valid values are GET, PUT, HEAD, POST, and DELETE."],
                    "AllowedOrigins": ["*Type: List of String. One or more origins you want customers to be able to access the bucket from."],
                    "ExposedHeaders": ["Type: List of String. One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object)."],
                    "Id": "String. A unique identifier for this rule. The value must be no more than 255 characters.",
                    "MaxAge": "Integer. The time in seconds that your browser is to cache the preflight response for the specified resource."
                },
                "InventoryConfiguration": {
                    "Destination": {
                        "BucketAccountId": "String. The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.",
                        "BucketArn": "*String. The Amazon Resource Name (ARN) of the bucket to which data is exported.",
                        "Format": "*String. Specifies the file format used when exporting data to Amazon S3.",
                        "Prefix": "String. The prefix to use when exporting data. The prefix is prepended to all results."
                    },
                    "Enabled": "*Boolean. Specifies whether the inventory is enabled or disabled. If set to True, an inventory list is generated. If set to False, no inventory list is generated.",
                    "Id": "*String. The ID used to identify the inventory configuration.",
                    "IncludedObjectVersions": "*String. Allowed Values: All | Current. Object versions to include in the inventory list. If set to All, the list includes all the object versions, which adds the version-related fields VersionId, IsLatest, and DeleteMarker to the list. If set to Current, the list does not contain these version-related fields.",
                    "OptionalFields": ["List of string. Contains the optional fields that are included in the inventory results."],
                    "Prefix": "String. The prefix that is prepended to all inventory results.",
                    "ScheduleFrequency": "*String. Specifies the schedule for generating inventory results."
                },
                "LifecycleConfiguration": {
                    "Rules": ["*Type: List of Rule. ##"]
                },
                "Rule": {
                    "AbortIncompleteMultipartUpload": {
                        "DaysAfterInitiation": "*Integer. Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload."
                    },
                    "ExpirationDate": "**Type: Timestamp. Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. You must specify at least one of the following properties: AbortIncompleteMultipartUpload, ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.",
                    "ExpirationInDays": "**Integer. Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.",
                    "Id": "String. Unique identifier for the rule. The value can't be longer than 255 characters.",
                    "NoncurrentVersionExpirationInDays": "**Integer. For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.",
                    "NoncurrentVersionTransition": {
                        "StorageClass": "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
                        "TransitionInDays": "*Integer. Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations."
                    },
                    "NoncurrentVersionTransitions": ["**Type: List of NoncurrentVersionTransition. "],
                    "Prefix": "String. Object key prefix that identifies one or more objects to which this rule applies.",
                    "Status": "*String. If Enabled, the rule is currently being applied. If Disabled, the rule is not currently being applied. Allowed Values: Disabled | Enabled",
                    "TagFilters": ["Type: List of TagFilters. "],
                    "Transition": {
                        "StorageClass": "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
                        "TransitionDate": "**Timestamp. Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.",
                        "TransitionInDays": "**Integer. Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer."
                    },
                    "Transitions": ["Type: List of Transition"]
                },
                "NoncurrentVersionTransition": {
                    "StorageClass": "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
                    "TransitionInDays": "*Integer. Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations."
                },
                "Transition": {
                    "StorageClass": "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
                    "TransitionDate": "**Timestamp. Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.",
                    "TransitionInDays": "**Integer. Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer."
                },
                "LoggingConfiguration": {
                    "DestinationBucketName": "String. The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the LoggingConfiguration property is defined.",
                    "LogFilePrefix": "String. A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket."
                },
                "MetricsConfiguration": {
                    "Id": "*String",
                    "Prefix": "String. The prefix that an object must have to be included in the metrics results.",
                    "TagFilters": ["Type: List of TagFilters"]
                },
                "NotificationConfiguration": {
                    "LambdaConfigurations": ["List of LambdaConfiguration, ..."],
                    "QueueConfigurations": ["List of QueueConfiguration"],
                    "TopicConfigurations": ["List of TopicConfiguration, ..."]
                },
                "LambdaConfiguration": {
                    "Event": "*String. The Amazon S3 bucket event for which to invoke the AWS Lambda function. s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy , s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated, s3:ObjectRestore:Post, s3:ObjectRestore:Completed, s3:ReducedRedundancyLostObject",
                    "Filter": {
                        "S3Key": {
                            "Rules": ["*List of  FilterRule, ..."]
                        }
                    },
                    "Function": "*String. The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs."
                },
                "FilterRule": {
                    "Name": "*String. The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. Allowed Values: prefix | suffix",
                    "Value": "*String. The value that the filter searches for in object key names."
                },
                "QueueConfiguration": {
                    "Event": "*String. The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy , s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated, s3:ObjectRestore:Post, s3:ObjectRestore:Completed, s3:ReducedRedundancyLostObject",
                    "Filter": {
                        "S3Key": {
                            "Rules": ["Type: List of FilterRule, ..."]
                        }
                    },
                    "Queue": "*String. The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type."
                },
                "TopicConfiguration": {
                    "Event": "*String. The Amazon S3 bucket event about which to send notifications. Available events from s3: s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy , s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated, s3:ObjectRestore:Post, s3:ObjectRestore:Completed, s3:ReducedRedundancyLostObject",
                    "Filter": {
                        "S3Key": {
                            "Rules": ["Type: List of FilterRule, ..."]
                        }
                    },
                    "Topic": "*String. The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type."
                },
                "PublicAccessBlockConfiguration": {
                    "BlockPublicAcls": "Boolean. Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to TRUE causes the following behavior: PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public., PUT Object calls fail if the request includes a public ACL.",
                    "BlockPublicPolicy": "Boolean. Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.",
                    "IgnorePublicAcls": "Boolean. Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.",
                    "RestrictPublicBuckets": "Boolean. Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy. Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked."
                },
                "ReplicationConfiguration": {
                    "Role": "*String. The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. ",
                    "Rules": ["*Type: List of  ReplicationRule, ..."]
                },
                "ReplicationRule": {
                    "Destination": {
                        "AccessControlTranslation": {
                            "Owner": "*String. Specifies the replica ownership. Allowed Values: Destination"
                        },
                        "Account": "*String. Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS account that owns the destination bucket by specifying the AccessControlTranslation property, this is the account ID of the destination bucket owner. If you specify the AccessControlTranslation property, the Account property is required.",
                        "Bucket": "*String. The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store replicas of the object identified by the rule.",
                        "EncryptionConfiguration": {
                            "ReplicaKmsKeyID": "*String. Specifies the AWS KMS Key ID (Key ARN or Alias ARN) for the destination bucket. Amazon S3 uses this key to encrypt replica objects."
                        },
                        "StorageClass": "String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | REDUCED_REDUNDANCY | STANDARD | STANDARD_IA"
                    },
                    "Id": "String. A unique identifier for the rule. The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID.",
                    "Prefix": "String. An object keyname prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string.",
                    "SourceSelectionCriteria": {
                        "SseKmsEncryptedObjects": {
                            "Status": "*String. Allowed Values: Disabled | Enabled. Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS-managed key."
                        }
                    },
                    "Status": "*String. Allowed Values: Disabled | Enabled. Specifies whether the rule is enabled or not."
                },
                "VersioningConfiguration": {
                    "Status": "String. Allowed Values: Enabled | Suspended"
                },
                "WebsiteConfiguration": {
                    "ErrorDocument": "String",
                    "IndexDocument": "String",
                    "RedirectAllRequestsTo": {
                        "HostName": "*String. Name of the host where requests are redirected.",
                        "Protocol": "*String. Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Allowed Values: http | https"
                    },
                    "RoutingRules": ["Type: List of RoutingRule"]
                },
                "RoutingRule": {
                    "RedirectRule": {
                        "HostName": "String",
                        "HttpRedirectCode": "String. The HTTP redirect code to use on the response. Not required if one of the siblings is present.",
                        "Protocol": "String. Allowed Values: http | https",
                        "ReplaceKeyPrefixWith": "String. The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix docs/ (objects in the docs/ folder) to documents/, you can set a condition block with KeyPrefixEquals set to docs/ and in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of the siblings is present. Can be present only if ReplaceKeyWith is not provided.",
                        "ReplaceKeyWith": "String. The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the siblings is present. Can be present only if ReplaceKeyPrefixWith is not provided."
                    },
                    "RoutingRuleCondition": {
                        "HttpErrorCodeReturnedEquals": "**String. The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element Condition is specified and sibling KeyPrefixEquals is not specified. If both are specified, then both must be true for the redirect to be applied.",
                        "KeyPrefixEquals": "**String. The object key name prefix when the redirect is applied. For example, to redirect requests for ExamplePage.html, the key prefix will be ExamplePage.html. To redirect request for all pages with the prefix docs/, the key prefix will be /docs, which identifies all objects in the docs/ folder. Required when the parent element Condition is specified and sibling HttpErrorCodeReturnedEquals is not specified. If both conditions are specified, both must be true for the redirect to be applied."
                    }
                }
            },
            "AWS::ECR::Repository": {
                "LifecyclePolicy": {
                    "LifecyclePolicyText": "String. The JSON repository policy text to apply to the repository.",
                    "RegistryId": "String. The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed."
                }
            },
            "AWS::CloudFormation::WaitCondition": {
                "CreationPolicy": {
                    "ResourceSignal": {
                        "Count": "Integer. Default :1 . The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.",
                        "Timeout": "The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours. The value must be in ISO8601 duration format, in the form: 'PT#H#M#S', where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback. Default: PT5M (5 minutes)"
                    }
                }
            },
            "AWS::Lambda::Alias": {
                "VersionWeight": {
                    "FunctionVersion": "*String. The name of the second alias",
                    "FunctionWeight": "*Double. The percentage of traffic that's routed to the second alias."
                }
            },
            "AWS::Lambda::Function": {
                "DeadLetterConfig": {
                    "TargetArn": "String. The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic."
                },
                "Code": {
                    "S3Bucket": "**String. An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.",
                    "S3Key": "**String. The Amazon S3 key of the deployment package.",
                    "S3ObjectVersion": "**String. For versioned objects, the version of the deployment package object to use.",
                    "ZipFile": "**String. (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, AWS CloudFormation places it in a file named index and zips it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example, index.handler. Your source code can contain up to 4096 characters. For JSON, you must escape quotes and special characters such as newline (\n) with a backslash. f you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module (cfn-response) that simplifies sending responses."
                },
                "Environment": {
                    "Variables": "Map of string. Environment variable key-value pairs."
                },
                "TracingConfig": {
                    "Mode": "String. Allowed Values: Active | PassThrough"
                },
                "VpcConfig": {
                    "SecurityGroupIds": ["List of strings. A list of security group ids"],
                    "SubnetIds": ["list of strings. A list of VPC subnet ids"]
                }
            },
            "AWS::Lambda::LayerVersion": {
                "Content": {
                    "S3Bucket": "*String",
                    "S3Key": "*String",
                    "S3ObjectVersion": "String"
                }
            },
            "AWS::SecretsManager::RotationSchedule": {
                "RotationRules": {
                    "AutomaticallyAfterDays": "Integer. Specifies the number of days after the previous rotation before Secrets Manager triggers the next automatic rotation."
                }
            },
            "AWS::SecretsManager::Secret": {
                "GenerateSecretString": {
                    "ExcludeCharacters": "String. A string that includes characters that should not be included in the generated password. The default is that all characters from the included sets can be used. The string can be a minimum length of 0 characters and a maximum length of 7168 characters.",
                    "ExcludeLowercase": "Boolean. Specifies that the generated password should not include lowercase letters. The default if you don't include this switch parameter is False, and the generated password can include lowercase letters.",
                    "ExcludeNumbers": "Boolean. Specifies that the generated password should not include digits. The default if you don't include this switch parameter is False, and the generated password can include digits.",
                    "ExcludePunctuation": "Boolean. Specifies that the generated password should not include punctuation characters. The default if you do not include this switch parameter is that punctuation characters can be included.",
                    "ExcludeUppercase": "Boolean. Specifies that the generated password should not include uppercase letters. The default if you do not include this switch parameter is False, and the generated password can include uppercase letters.",
                    "GenerateStringKey": "String. The JSON key name that's used to add the generated password to the JSON structure specified by the SecretStringTemplateparameter. If you specify this parameter, then you must also specify SecretStringTemplate.",
                    "IncludeSpace": "Boolean. Specifies that the generated password can include the space character. The default if you do not include this switch parameter is False, and the generated password doesn't include space characters.",
                    "PasswordLength": "Integer. The desired length of the generated password. The default value if you do not include this parameter is 32 characters.",
                    "RequireEachIncludedType": "Boolean. Specifies whether the generated password must include at least one of every allowed character type. If you don't include this switch, the default value is True, and the generated password includes at least one of every character type.",
                    "SecretStringTemplate": "String. A properly structured JSON string that the generated password can be added to. If you specify this parameter, then you must also specify GenerateStringKey. That key is combined with the generated random string and inserted into the JSON structure that's specified by this parameter. The merged JSON string is returned as the completed SecretStringof the secret. The default if you don't include this parameter is that the generated random password string is returned by itself, and isn't embeded in a JSON structure."
                }
            },
            "AWS::CodeBuild::Project": {
                "Artifacts": {
                    "ArtifactIdentifier": "String",
                    "EncryptionDisabled": "Boolean. Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type is Amazon Simple Storage Service (Amazon S3). If this is set with another artifacts type, an invalidInputException is thrown.",
                    "Location": "**String. If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output locations instead of AWS CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced.If type is set to S3, this is the name of the output bucket. If you specify CODEPIPELINE or NO_ARTIFACTS for the Type property, don't specify this property. For all of the other types, you must specify this property.",
                    "Name": "**String. Along with path and namespaceType, the pattern that AWS CodeBuild uses to name and store the output artifact:",
                    "NamespaceType": "String. Allowed Values: BUILD_ID | NONE. Along with path and name, the pattern that AWS CodeBuild uses to determine the name and location to store the output artifact: If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type is set to S3, valid values include:BUILD_ID: Include the build ID in the location of the build output artifact.NONE: Do not include the build ID. This is the default if namespaceType is not specified. ",
                    "OverrideArtifactName": "Boolean. If set to true a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell command language. For example, you can append a date and time to your artifact name so that it is always unique.",
                    "Packaging": "String. Allowed Values: NONE | ZIP. The type of build output artifact to create:",
                    "Path": "String. Along with namespaceType and name, the pattern that AWS CodeBuild uses to name and store the output artifact:",
                    "Type": "*String. Allowed Values: CODEPIPELINE | NO_ARTIFACTS | S3"
                },
                "CloudWatchLogsConfig": {
                    "GroupName": "String",
                    "Status": "*String. Allowed Values: DISABLED | ENABLED. The current status of the logs in Amazon CloudWatch Logs for a build project.",
                    "StreamName": "String. The prefix of the stream name of the Amazon CloudWatch Logs."
                },
                "Environment(CodeBuild)": {
                    "Certificate": "String. The certificate to use with this build project.",
                    "ComputeType": "*String. The type of compute environment. This determines the number of CPU cores and memory the build environment uses. BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds. BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds. BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds.",
                    "EnvironmentVariables": ["Type: List of EnvironmentVariable ##"],
                    "Image": "*String. The image tag or image digest that identifies the Docker image to use for this build project. For an image tag: registry/repository:tag. For example, to specify an image with the tag 'latest,' use registry/repository:latest. For an image digest: registry/repository@digest. For example, to specify an image with the digest 'sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf' use registry/repository@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf.",
                    "ImagePullCredentialsType": "String. Allowed Values: CODEBUILD | SERVICE_ROLE. CODEBUILD specifies that AWS CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust AWS CodeBuild's service principal. SERVICE_ROLE specifies that AWS CodeBuild uses your build project's service role.",
                    "PrivilegedMode": "Boolean. Enables running the Docker daemon inside a Docker container. Set to true only if the build project is used to build Docker images. Otherwise, a build that attempts to interact with the Docker daemon fails.",
                    "RegistryCredential": { "info": "Type:RegistryCredential. specifies information about credentials that provide access to a private Docker registry.##" },
                    "Type": "*String. Allowed Values: LINUX_CONTAINER | WINDOWS_CONTAINER"
                },
                "EnvironmentVariable": {
                    "Name": "*String. The name or key of the environment variable.",
                    "Type": "String. Allowed Values: PARAMETER_STORE | PLAINTEXT",
                    "Value": "*String. The value of the environment variable. We strongly discourage the use of environment variables to store sensitive values, especially AWS secret key IDs and secret access keys. Environment variables can be displayed in plain text using the AWS CodeBuild console and the AWS Command Line Interface (AWS CLI)."
                },
                "GitSubmodulesConfig": {
                    "FetchSubmodules": "*Boolean. Set to true to fetch Git submodules for your AWS CodeBuild build project."
                },
                "LogsConfig": {
                    "CloudWatchLogs": "Type: CloudWatchLogsConfig",
                    "S3Logs": "Type: S3LogsConfig"
                },
                "ProjectCache": {
                    "Location": "String. NO_CACHE or LOCAL: This value is ignored. S3: This is the S3 bucket name/prefix.",
                    "Modes": ["Type: List of strings. Allowed Values: LOCAL_SOURCE_CACHE  || LOCAL_DOCKER_LAYER_CACHE  || LOCAL_CUSTOM_CACHE"],
                    "Type": "*String. Allowed Values: LOCAL | NO_CACHE | S3. NO_CACHE: The build project does not use any cache. S3: The build project reads and writes from and to S3.LOCAL: The build project stores a cache locally on a build host that is only available to that build host."
                },
                "ProjectSourceVersion": {
                    "SourceIdentifier": "*String",
                    "SourceVersion": "String"
                },
                "ProjectTriggers": {
                    "FilterGroups": ["Type: List of WebhookFilter ##"],
                    "Webhook": "Boolean. Specifies whether or not to begin automatically rebuilding the source code every time a code change is pushed to the repository."
                },
                "WebhookFilter": {
                    "ExcludeMatchedPattern": "Boolean. Used to indicate that the pattern determines which webhook events do not trigger a build. If true, then a webhook event that does not match the pattern triggers a build. If false, then a webhook event that matches the pattern triggers a build.",
                    "Pattern": "*String. For a WebHookFilter that uses EVENT type, a comma-separated string that specifies one or more events. For example, the webhook filter PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED allows all push, pull request created, and pull request updated events to trigger a build. For a WebHookFilter that uses any of the other filter types, a regular expression pattern. For example, a WebHookFilter that uses HEAD_REF for its type and the pattern ^refs/heads/ triggers a build when the head reference is a branch with a reference name refs/heads/branch-name.",
                    "Type": "*String. Allowed Values: ACTOR_ACCOUNT_ID | BASE_REF | EVENT | FILE_PATH | HEAD_REF"
                },
                "RegistryCredential": {
                    "Credential": "*String. The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets Manager.",
                    "CredentialProvider": "*String. Allowed Values: SECRETS_MANAGER. The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for AWS Secrets Manager."
                },
                "S3LogsConfig": {
                    "EncryptionDisabled": "Boolean. Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are encrypted.",
                    "Location": "String. The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is my-bucket, and your path prefix is build-log, then acceptable formats are my-bucket/build-log or arn:aws:s3:::my-bucket/build-log.",
                    "Status": "*String. Allowed Values: DISABLED | ENABLED"
                },
                "Source": {
                    "Auth": {
                        "Resource": "String. The resource value that applies to the specified authorization type.",
                        "Type": "*String. The authorization type to use. The only valid value is OAUTH, which represents the OAuth authorization type."
                    },
                    "BuildSpec": "String. The build specification for the project. If this value is not provided, then the source code must contain a buildspec file named buildspec.yml at the root level. If this value is provided, it can be either a single string containing the entire build specification, or the path to an alternate buildspec file relative to the value of the built-in environment variable CODEBUILD_SRC_DIR. The alternate buildspec file can have a name other than buildspec.yml, for example myspec.yml or build_spec_qa.yml or similar.",
                    "GitCloneDepth": "Integer. The depth of history to download. Minimum value is 0. If this value is 0, greater than 25, or not provided, then the full history is downloaded with each build project. If your source type is Amazon S3, this value is not supported.",
                    "GitSubmodulesConfig": {
                        "FetchSubmodules": "*Boolean. Set to true to fetch Git submodules for your AWS CodeBuild build project."
                    },
                    "InsecureSsl": "Boolean. This is used with GitHub Enterprise only. Set to true to ignore SSL warnings while connecting to your GitHub Enterprise project repository. The default value is false. InsecureSsl should be used for testing purposes only. It should not be used in a production environment.",
                    "Location": "String. Information about the location of the source code to be built. ",
                    "ReportBuildStatus": "Boolean. Set to true to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, or Bitbucket. If this is set and you use a different source provider, an invalidInputException is thrown.",
                    "SourceIdentifier": "String",
                    "Type": "String. Allowed Values: BITBUCKET | CODECOMMIT | CODEPIPELINE | GITHUB | GITHUB_ENTERPRISE | NO_SOURCE | S3"
                },
                "VpcConfig(CodeBuild)": {
                    "SecurityGroupIds": ["List of Strings."],
                    "Subnets": ["List of strings."],
                    "VpcId": "String. The id of the vpc."
                }
            },
            "AWS::MSK::Cluster": {
                "BrokerNodeGroupInfo": {
                    "BrokerAZDistribution": "String. The distribution of broker nodes across Availability Zones.",
                    "ClientSubnets": ["*List of strings. The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't be in Availability Zone us-east-1e."],
                    "InstanceType": "*String. The type of Amazon EC2 instances to use for Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge, kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.",
                    "SecurityGroups": ["List of strings. The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC. If you specify security groups that were shared with you, you must ensure that you have permissions to them. Specifically, you need the ec2:DescribeSecurityGroups permission."],
                    "StorageInfo": {
                        "EBSStorageInfo": {
                            "VolumeSize": "Integer. The size in GiB of the EBS volume for the data drive on each broker node."
                        }
                    }
                },
                "ClientAuthentication": {
                    "Tls": {
                        "CertificateAuthorityArnList": ["List of strings. List of ACM Certificate Authority ARNs."]
                    }
                },
                "ConfigurationInfo": {
                    "Arn": "*String. The Amazon Resource Name (ARN) of the MSK configuration to use. For example, arn:aws:kafka:us-east-1:123456789012:configuration/example-configuration-name/abcdabcd-1234-abcd-1234-abcd123e8e8e-1.",
                    "Revision": "*Integer. The revision of the Amazon MSK configuration to use."
                },
                "EncryptionInfo": {
                    "EncryptionAtRest": {
                        "DataVolumeKMSKeyId": "*String. The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it on your behalf."
                    },
                    "EncryptionInTransit": {
                        "ClientBroker": "String.  TLS| TLS_PLAINTEXT| PLAINTEXT ",
                        "InCluster": "Boolean. When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext. The default value is true."
                    }
                }
            }
        };
    }
    ResourceDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResourceDataService);
    return ResourceDataService;
}());



/***/ }),

/***/ "./src/app/resource-view/resource-list.ts":
/*!************************************************!*\
  !*** ./src/app/resource-view/resource-list.ts ***!
  \************************************************/
/*! exports provided: RESOURCE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DATA", function() { return RESOURCE_DATA; });
var RESOURCE_DATA = [
    {
        servicename: "EC2",
        subresource: [
            {
                resourcename: "CustomerGateway",
                resourcesyntax: "AWS::EC2::CustomerGateway",
                resourcecount: 0
            },
            {
                resourcename: "DHCPOptions",
                resourcesyntax: "AWS::EC2::DHCPOptions",
                resourcecount: 0
            },
            {
                resourcename: "EC2Fleet",
                resourcesyntax: "AWS::EC2::EC2Fleet",
                resourcecount: 0
            },
            {
                resourcename: "EgressOnlyInternetGateway",
                resourcesyntax: "AWS::EC2::EgressOnlyInternetGateway",
                resourcecount: 0
            },
            {
                resourcename: "EIP",
                resourcesyntax: "AWS::EC2::EIP",
                resourcecount: 0
            },
            {
                resourcename: "EIPAssociation",
                resourcesyntax: "AWS::EC2::EIPAssociation",
                resourcecount: 0
            },
            {
                resourcename: "FlowLog",
                resourcesyntax: "AWS::EC2::FlowLog",
                resourcecount: 0
            },
            {
                resourcename: "Host",
                resourcesyntax: "AWS::EC2::Host",
                resourcecount: 0
            },
            {
                resourcename: "Instance",
                resourcesyntax: "AWS::EC2::Instance",
                resourcecount: 0
            },
            {
                resourcename: "InternetGateway",
                resourcesyntax: "AWS::EC2::InternetGateway",
                resourcecount: 0
            },
            {
                resourcename: "LaunchTemplate",
                resourcesyntax: "AWS::EC2::LaunchTemplate",
                resourcecount: 0
            },
            {
                resourcename: "NatGateway",
                resourcesyntax: "AWS::EC2::NatGateway",
                resourcecount: 0
            },
            {
                resourcename: "NetworkACL",
                resourcesyntax: "AWS::EC2::NetworkAcl",
                resourcecount: 0
            },
            {
                resourcename: "NetworkAclEntry",
                resourcesyntax: "AWS::EC2::NetworkAclEntry",
                resourcecount: 0
            },
            {
                resourcename: "NetworkInterface",
                resourcesyntax: "AWS::EC2::NetworkInterface",
                resourcecount: 0
            },
            {
                resourcename: "NetworkInterfaceAttachment",
                resourcesyntax: "AWS::EC2::NetworkInterfaceAttachment",
                resourcecount: 0
            },
            {
                resourcename: "NetworkInterfacePermission",
                resourcesyntax: "AWS::EC2::NetworkInterfacePermission",
                resourcecount: 0
            },
            {
                resourcename: "PlacementGroup",
                resourcesyntax: "AWS::EC2::PlacementGroup",
                resourcecount: 0
            },
            {
                resourcename: "Route",
                resourcesyntax: "AWS::EC2::Route",
                resourcecount: 0
            },
            {
                resourcename: "RouteTable",
                resourcesyntax: "AWS::EC2::RouteTable",
                resourcecount: 0
            },
            {
                resourcename: "SecurityGroup",
                resourcesyntax: "AWS::EC2::SecurityGroup",
                resourcecount: 0
            },
            {
                resourcename: "SecurityGroupEgress",
                resourcesyntax: "AWS::EC2::SecurityGroupEgress",
                resourcecount: 0
            },
            {
                resourcename: "SecurityGroupIngress",
                resourcesyntax: "AWS::EC2::SecurityGroupIngress",
                resourcecount: 0
            },
            {
                resourcename: "SpotFleet",
                resourcesyntax: "AWS::EC2::SpotFleet",
                resourcecount: 0
            },
            {
                resourcename: "Subnet",
                resourcesyntax: "AWS::EC2::Subnet",
                resourcecount: 0
            },
            {
                resourcename: "SubnetCidrBlock",
                resourcesyntax: "AWS::EC2::SubnetCidrBlock",
                resourcecount: 0
            },
            {
                resourcename: "SubnetNetworkAclAssociation",
                resourcesyntax: "AWS::EC2::SubnetNetworkAclAssociation",
                resourcecount: 0
            },
            {
                resourcename: "SubnetRouteTableAssociation",
                resourcesyntax: "AWS::EC2::SubnetRouteTableAssociation",
                resourcecount: 0
            },
            {
                resourcename: "TransitGateway",
                resourcesyntax: "AWS::EC2::TransitGateway",
                resourcecount: 0
            },
            {
                resourcename: "TransitGatewayAttachment",
                resourcesyntax: "AWS::EC2::TransitGatewayAttachment",
                resourcecount: 0
            },
            {
                resourcename: "TransitGatewayRoute",
                resourcesyntax: "AWS::EC2::TransitGatewayRoute",
                resourcecount: 0
            },
            {
                resourcename: "TransitGatewayRouteTable",
                resourcesyntax: "AWS::EC2::TransitGatewayRouteTable",
                resourcecount: 0
            },
            {
                resourcename: "TransitGatewayRouteTableAssociation",
                resourcesyntax: "AWS::EC2::TransitGatewayRouteTableAssociation",
                resourcecount: 0
            },
            {
                resourcename: "TransitGatewayRouteTablePropagation",
                resourcesyntax: "AWS::EC2::TransitGatewayRouteTablePropagation",
                resourcecount: 0
            },
            {
                resourcename: "Volume",
                resourcesyntax: "AWS::EC2::Volume",
                resourcecount: 0
            },
            {
                resourcename: "VolumeAttachment",
                resourcesyntax: "AWS::EC2::VolumeAttachment",
                resourcecount: 0
            },
            {
                resourcename: "VPC",
                resourcesyntax: "AWS::EC2::VPC",
                resourcecount: 0
            },
            {
                resourcename: "VPCCidrBlock",
                resourcesyntax: "AWS::EC2::VPCCidrBlock",
                resourcecount: 0
            },
            {
                resourcename: "VPCDHCPOptionsAssociation",
                resourcesyntax: "AWS::EC2::VPCDHCPOptionsAssociation",
                resourcecount: 0
            },
            {
                resourcename: "VPCEndpoint",
                resourcesyntax: "AWS::EC2::VPCEndpoint",
                resourcecount: 0
            },
            {
                resourcename: "VPCEndpointConnectionNotification",
                resourcesyntax: "AWS::EC2::VPCEndpointConnectionNotification",
                resourcecount: 0
            },
            {
                resourcename: "VPCEndpointService",
                resourcesyntax: "AWS::EC2::VPCEndpointService",
                resourcecount: 0
            },
            {
                resourcename: "VPCEndpointServicePermissions",
                resourcesyntax: "AWS::EC2::VPCEndpointServicePermissions",
                resourcecount: 0
            },
            {
                resourcename: "VPCGatewayAttachment",
                resourcesyntax: "AWS::EC2::VPCGatewayAttachment",
                resourcecount: 0
            },
            {
                resourcename: "VPCPeeringConnection",
                resourcesyntax: "AWS::EC2::VPCPeeringConnection",
                resourcecount: 0
            },
            {
                resourcename: "VPNConnection",
                resourcesyntax: "AWS::EC2::VPNConnection",
                resourcecount: 0
            },
            {
                resourcename: "VPNConnectionRoute",
                resourcesyntax: "AWS::EC2::VPNConnectionRoute",
                resourcecount: 0
            },
            {
                resourcename: "VPNGateway",
                resourcesyntax: "AWS::EC2::VPNGateway",
                resourcecount: 0
            },
            {
                resourcename: "VPNGatewayRoutePropagation",
                resourcesyntax: "AWS::EC2::VPNGatewayRoutePropagation",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "Route53",
        subresource: [
            {
                resourcename: "HealthCheck",
                resourcesyntax: "AWS::Route53::HealthCheck",
                resourcecount: 0
            },
            {
                resourcename: "HostedZone",
                resourcesyntax: "AWS::Route53::HostedZone",
                resourcecount: 0
            },
            {
                resourcename: "RecordSet",
                resourcesyntax: "AWS::Route53::RecordSet",
                resourcecount: 0
            },
            {
                resourcename: "RecordSetGroup",
                resourcesyntax: "AWS::Route53::RecordSetGroup",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "Route53Resolver",
        subresource: [
            {
                resourcename: "ResolverEndpoint",
                resourcesyntax: "AWS::Route53Resolver::ResolverEndpoint",
                resourcecount: 0
            },
            {
                resourcename: "ResolverRule",
                resourcesyntax: "AWS::Route53Resolver::ResolverRule",
                resourcecount: 0
            },
            {
                resourcename: "ResolverRuleAssociation",
                resourcesyntax: "AWS::Route53Resolver::ResolverRuleAssociation",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "IAM",
        subresource: [
            {
                resourcename: "AccessKey",
                resourcesyntax: "AWS::IAM::AccessKey",
                resourcecount: 0
            },
            {
                resourcename: "Group",
                resourcesyntax: "AWS::IAM::Group",
                resourcecount: 0
            },
            {
                resourcename: "InstanceProfile",
                resourcesyntax: "AWS::IAM::InstanceProfile",
                resourcecount: 0
            },
            {
                resourcename: "ManagedPolicy",
                resourcesyntax: "AWS::IAM::ManagedPolicy",
                resourcecount: 0
            },
            {
                resourcename: "Policy",
                resourcesyntax: "AWS::IAM::Policy",
                resourcecount: 0
            },
            {
                resourcename: "Role",
                resourcesyntax: "AWS::IAM::Role",
                resourcecount: 0
            },
            {
                resourcename: "ServiceLinkedRole",
                resourcesyntax: "AWS::IAM::ServiceLinkedRole",
                resourcecount: 0
            },
            {
                resourcename: "User",
                resourcesyntax: "AWS::IAM::User",
                resourcecount: 0
            },
            {
                resourcename: "UserToGroupAddition",
                resourcesyntax: "AWS::IAM::UserToGroupAddition",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "AutoScaling",
        subresource: [
            {
                resourcename: "AutoScalingGroup",
                resourcesyntax: "AWS::AutoScaling::AutoScalingGroup",
                resourcecount: 0
            },
            {
                resourcename: "LaunchConfiguration",
                resourcesyntax: "AWS::AutoScaling::LaunchConfiguration",
                resourcecount: 0
            },
            {
                resourcename: "LifecycleHook",
                resourcesyntax: "AWS::AutoScaling::LifecycleHook",
                resourcecount: 0
            },
            {
                resourcename: "ScalingPolicy",
                resourcesyntax: "AWS::AutoScaling::ScalingPolicy",
                resourcecount: 0
            },
            {
                resourcename: "ScheduledAction",
                resourcesyntax: "AWS::AutoScaling::ScheduledAction",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "ElasticLoadBalancingV2",
        subresource: [
            {
                resourcename: "Listener",
                resourcesyntax: "AWS::ElasticLoadBalancingV2::Listener",
                resourcecount: 0
            },
            {
                resourcename: "ListenerCertificate",
                resourcesyntax: "AWS::ElasticLoadBalancingV2::ListenerCertificate",
                resourcecount: 0
            },
            {
                resourcename: "ListenerRule",
                resourcesyntax: "AWS::ElasticLoadBalancingV2::ListenerRule",
                resourcecount: 0
            },
            {
                resourcename: "LoadBalancer",
                resourcesyntax: "AWS::ElasticLoadBalancingV2::LoadBalancer",
                resourcecount: 0
            },
            {
                resourcename: "TargetGroup",
                resourcesyntax: "AWS::ElasticLoadBalancingV2::TargetGroup",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "SQS",
        subresource: [
            {
                resourcename: "Queue",
                resourcesyntax: "AWS::SQS::Queue",
                resourcecount: 0
            },
            {
                resourcename: "QueuePolicy",
                resourcesyntax: "AWS::SQS::QueuePolicy",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "SNS",
        subresource: [
            {
                resourcename: "Subscription",
                resourcesyntax: "AWS::SNS::Subscription",
                resourcecount: 0
            },
            {
                resourcename: "Topic",
                resourcesyntax: "AWS::SNS::Topic",
                resourcecount: 0
            },
            {
                resourcename: "TopicPolicy",
                resourcesyntax: "AWS::SNS::TopicPolicy",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "Certificate Manager",
        subresource: [
            {
                resourcename: "Certificate",
                resourcesyntax: "AWS::CertificateManager::Certificate",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "DynamoDB",
        subresource: [
            {
                resourcename: "Table",
                resourcesyntax: "AWS::DynamoDB::Table",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "ECS",
        subresource: [
            {
                resourcename: "Cluster",
                resourcesyntax: "AWS::ECS::Cluster",
                resourcecount: 0
            },
            {
                resourcename: "Service",
                resourcesyntax: "AWS::ECS::Service",
                resourcecount: 0
            },
            {
                resourcename: "TaskDefinition",
                resourcesyntax: "AWS::ECS::TaskDefinition",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "CloudTrail",
        subresource: [
            {
                resourcename: "Trail",
                resourcesyntax: "AWS::CloudTrail::Trail",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "CloudWatch",
        subresource: [
            {
                resourcename: "Alarm",
                resourcesyntax: "AWS::CloudWatch::Alarm",
                resourcecount: 0
            },
            {
                resourcename: "Dashboard",
                resourcesyntax: "AWS::CloudWatch::Dashboard",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "CloudWatchLogs",
        subresource: [
            {
                resourcename: "Destination",
                resourcesyntax: "AWS::Logs::Destination",
                resourcecount: 0
            },
            {
                resourcename: "LogGroup",
                resourcesyntax: "AWS::Logs::LogGroup",
                resourcecount: 0
            },
            {
                resourcename: "LogStream",
                resourcesyntax: "AWS::Logs::LogStream",
                resourcecount: 0
            },
            {
                resourcename: "MetricFilter",
                resourcesyntax: "AWS::Logs::MetricFilter",
                resourcecount: 0
            },
            {
                resourcename: "SubscriptionFilter",
                resourcesyntax: "AWS::Logs::SubscriptionFilter",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "CloudWatchEvents",
        subresource: [
            {
                resourcename: "EventBusPolicy",
                resourcesyntax: "AWS::Events::EventBusPolicy",
                resourcecount: 0
            },
            {
                resourcename: "Rule",
                resourcesyntax: "AWS::Events::Rule",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "EKS",
        subresource: [
            {
                resourcename: "Cluster",
                resourcesyntax: "AWS::EKS::Cluster",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "EFS",
        subresource: [
            {
                resourcename: "FileSystem",
                resourcesyntax: "AWS::EFS::FileSystem",
                resourcecount: 0
            },
            {
                resourcename: "MountTarget",
                resourcesyntax: "AWS::EFS::MountTarget",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "S3",
        subresource: [
            {
                resourcename: "Bucket",
                resourcesyntax: "AWS::S3::Bucket",
                resourcecount: 0
            },
            {
                resourcename: "BucketPolicy",
                resourcesyntax: "AWS::S3::BucketPolicy",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "ECR",
        subresource: [
            {
                resourcename: "Repository",
                resourcesyntax: "AWS::ECR::Repository",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "CloudFormation",
        subresource: [
            {
                resourcename: "CustomResource",
                resourcesyntax: "AWS::CloudFormation::CustomResource",
                resourcecount: 0
            },
            {
                resourcename: "Macro",
                resourcesyntax: "AWS::CloudFormation::Macro",
                resourcecount: 0
            },
            {
                resourcename: "Stack",
                resourcesyntax: "AWS::CloudFormation::Stack",
                resourcecount: 0
            },
            {
                resourcename: "WaitCondition",
                resourcesyntax: "AWS::CloudFormation::WaitCondition",
                resourcecount: 0
            },
            {
                resourcename: "WaitConditionHandle",
                resourcesyntax: "AWS::CloudFormation::WaitConditionHandle",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "Lambda",
        subresource: [
            {
                resourcename: "Alias",
                resourcesyntax: "AWS::Lambda::Alias",
                resourcecount: 0
            },
            {
                resourcename: "EventSourceMapping",
                resourcesyntax: "AWS::Lambda::EventSourceMapping",
                resourcecount: 0
            },
            {
                resourcename: "Function",
                resourcesyntax: "AWS::Lambda::Function",
                resourcecount: 0
            },
            {
                resourcename: "LayerVersion",
                resourcesyntax: "AWS::Lambda::LayerVersion",
                resourcecount: 0
            },
            {
                resourcename: "LayerVersionPermission",
                resourcesyntax: "AWS::Lambda::LayerVersionPermission",
                resourcecount: 0
            },
            {
                resourcename: "Permission",
                resourcesyntax: "AWS::Lambda::Permission",
                resourcecount: 0
            },
            {
                resourcename: "Version",
                resourcesyntax: "AWS::Lambda::Version",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "RAM",
        subresource: [
            {
                resourcename: "ResourceShare",
                resourcesyntax: "AWS::RAM::ResourceShare",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "SecretsManager",
        subresource: [
            {
                resourcename: "ResourcePolicy",
                resourcesyntax: "AWS::SecretsManager::ResourcePolicy",
                resourcecount: 0
            },
            {
                resourcename: "RotationSchedule",
                resourcesyntax: "AWS::SecretsManager::RotationSchedule",
                resourcecount: 0
            },
            {
                resourcename: "Secret",
                resourcesyntax: "AWS::SecretsManager::Secret",
                resourcecount: 0
            },
            {
                resourcename: "SecretTargetAttachment",
                resourcesyntax: "AWS::SecretsManager::SecretTargetAttachment",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "CodeBuild",
        subresource: [
            {
                resourcename: "Project",
                resourcesyntax: "AWS::CodeBuild::Project",
                resourcecount: 0
            },
            {
                resourcename: "SourceCredential",
                resourcesyntax: "AWS::CodeBuild::SourceCredential",
                resourcecount: 0
            }
        ]
    },
    {
        servicename: "MSK",
        subresource: [
            {
                resourcename: "Cluster",
                resourcesyntax: "AWS::MSK::Cluster",
                resourcecount: 0
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/resource-view/resource-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/resource-view/resource-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    width: 1240px;\r\n    height: 440px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  \r\n  .main-container{\r\n    display: inline-block;\r\n  }\r\n\r\n  \r\n  .example-sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: left;\r\n    justify-content: left;\r\n  }\r\n\r\n  \r\n  .example-sidenav {\r\n    padding: 20px;\r\n    width:350px\r\n  }\r\n\r\n  \r\n  .example-sidenav-res {\r\n    padding: 20px;\r\n    width:220px\r\n  }\r\n\r\n  \r\n  .property-dealer{\r\n    display:inline-block;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztFQUN0Qzs7O0VBR0E7SUFDRSxxQkFBcUI7RUFDdkI7OztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCOzs7RUFFQTtJQUNFLGFBQWE7SUFDYjtFQUNGOzs7RUFFQTtJQUNFLGFBQWE7SUFDYjtFQUNGOzs7RUFFQTtJQUNFLG9CQUFvQjs7RUFFdEIiLCJmaWxlIjoic3JjL2FwcC9yZXNvdXJjZS12aWV3L3Jlc291cmNlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTI0MHB4O1xyXG4gICAgaGVpZ2h0OiA0NDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5tYWluLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6MzUwcHhcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXNpZGVuYXYtcmVzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDoyMjBweFxyXG4gIH1cclxuXHJcbiAgLnByb3BlcnR5LWRlYWxlcntcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/resource-view/resource-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/resource-view/resource-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n<mat-drawer-container class=\"example-container\" autosize >\n      <mat-drawer #function class=\"example-sidenav\" mode=\"side\" position=\"end\" >\n            <mat-icon color=\"primary\"  matTooltip=\"Two identical function widgets are provided so that one function's output can be used in another function easily. E.g. output of Fn::Join to be used in Fn::Base64 to generate UserData property for AWS::EC2::Instance. Use the scroller at the bottom to scroll to the right to preview lengthy function outputs.\" >\n                  info\n            </mat-icon>\n            <app-intrinsic-functions></app-intrinsic-functions><br>\n            <app-intrinsic-functions></app-intrinsic-functions>\n      </mat-drawer>\n    <mat-drawer #drawer class=\"example-sidenav-res\" mode=\"side\" opened >\n          <button type=\"button\" mat-button color=\"primary\" (click)=\"function.toggle()\"\n          matTooltip=\"click to open intrinsic functions side panel. click again to close\">\n                Intrinsic Functions\n          </button>\n          <mat-divider></mat-divider>\n          <mat-select *ngFor=\"let service of resourcelist\" [placeholder]=\"service.servicename\">\n              <mat-option *ngFor=\"let resource of service.subresource\">\n                \n                <button mat-raised-button (click)=\"serviceAddition(resource)\">\n                  <span [matBadge]=\"resource.resourcecount\" matBadgeOverlap=\"false\">{{resource.resourcename}}</span>  \n                </button>\n              </mat-option>\n          </mat-select>\n        <mat-divider></mat-divider>\n    </mat-drawer>  \n     <button *ngIf=\"!drawer.opened\" type=\"button\" color=\"accent\" mat-button (click)=\"drawer.toggle()\" >show resource panel</button>\n     <div>\n      <div *ngFor=\"let i of ec2_instance\">\n            <app-common-resource [myresource]=\"awsresource.ec2_instance\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_volume\">\n        <app-common-resource [myresource]=\"awsresource.ec2_volume\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_eip\">\n            <app-common-resource [myresource]=\"awsresource.ec2_eip\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_securitygroup\">\n            <app-common-resource [myresource]=\"awsresource.ec2_securitygroup\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_customergateway\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_customergateway\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_dhcpoptions\">\n            <app-common-resource [myresource]=\"awsresource.ec2_dhcpoptions\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_egressonlyinternetgateway\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_egressonlyinternetgateway\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_ec2fleet\">\n            <app-common-resource [myresource]=\"awsresource.ec2_ec2fleet\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_eipassociation\">\n            <app-common-resource [myresource]=\"awsresource.ec2_eipassociation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_flowlog\">\n            <app-common-resource [myresource]=\"awsresource.ec2_flowlog\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_host\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_host\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_internetgateway\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_internetgateway\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_launchtemplate\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_launchtemplate\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_natgateway\">\n            <app-common-resource [myresource]=\"awsresource.ec2_natgateway\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_networkacl\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_networkacl\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_networkaclentry\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_networkaclentry\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_networkinterface\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_networkinterface\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_networkinterfaceattachment\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_networkinterfaceattachment\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_networkinterfacepermission\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_networkinterfacepermission\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_placementgroup\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_placementgroup\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_route\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_route\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_routetable\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_routetable\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_securitygroupegress\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_securitygroupegress\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_securitygroupingress\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_securitygroupingress\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_spotfleet\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_spotfleet\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_subnet\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_subnet\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_subnetcidrblock\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_subnetcidrblock\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_subnetnetworkaclassociation\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_subnetnetworkaclassociation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_subnetroutetableassociation\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_subnetroutetableassociation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_transitgateway\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_transitgateway\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_transitgatewayattachment \">\n            <app-common-resource [myresource]=\"awsresource.ec2_transitgatewayattachment\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_transitgatewayroute\">\n            <app-common-resource [myresource]=\"awsresource.ec2_transitgatewayroute\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_transitgatewayroutetable \">\n            <app-common-resource [myresource]=\"awsresource.ec2_transitgatewayroutetable\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_transitgatewayroutetableassociation\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_transitgatewayroutetableassociation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_transitgatewayroutetablepropagation\">\n            <app-common-resource [myresource]=\"awsresource.ec2_transitgatewayroutetablepropagation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_volumeattachment\">\n            <app-common-resource [myresource]=\"awsresource.ec2_volumeattachment\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpc\">\n            <app-common-resource [myresource]=\"awsresource.ec2_vpc\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpccidrblock\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_vpccidrblock\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpcdhcpoptionsassociation\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_vpcdhcpoptionsassociation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpcendpoint\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_vpcendpoint\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpcendpointconnectionnotification\">\n            <app-common-resource [myresource]=\"awsresource.ec2_vpcendpointconnectionnotification\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpcendpointservice\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_vpcendpointservice\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpcendpointservicepermissions\">  \n            <app-common-resource [myresource]=\"awsresource.ec2_vpcendpointservicepermissions\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpcgatewayattachment\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_vpcgatewayattachment\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpcpeeringconnection\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_vpcpeeringconnection\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpnconnection\">\n            <app-common-resource [myresource]=\"awsresource.ec2_vpnconnection\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpnconnectionroute\">\n            <app-common-resource [myresource]=\"awsresource.ec2_vpnconnectionroute\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpngateway\">\n            <app-common-resource [myresource]=\"awsresource.ec2_vpngateway\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of ec2_vpngatewayroutepropagation\" >\n            <app-common-resource [myresource]=\"awsresource.ec2_vpngatewayroutepropagation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n\n      <div *ngFor=\"let i of route53_healthcheck\">\n            <app-common-resource [myresource]=\"awsresource.route53_healthcheck\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of route53_hostedzone\" >\n            <app-common-resource [myresource]=\"awsresource.route53_hostedzone\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of route53_recordset\" >\n            <app-common-resource [myresource]=\"awsresource.route53_recordset\" [isTagged]=\"false\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of route53_recordsetgroup\" >\n            <app-common-resource [myresource]=\"awsresource.route53_recordsetgroup\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n\n      <div *ngFor=\"let i of r53_resolver_resolverendpoint\" >\n            <app-common-resource [myresource]=\"awsresource.r53_resolver_resolverendpoint\" [isTagged]=\"true\" ></app-common-resource>\n      </div>      \n      <div *ngFor=\"let i of r53_resolver_resolverrule\" >\n            <app-common-resource [myresource]=\"awsresource.r53_resolver_resolverrule\" [isTagged]=\"true\" ></app-common-resource>\n      </div>  \n      <div *ngFor=\"let i of r53_resolver_resolverruleassociation\" >\n            <app-common-resource [myresource]=\"awsresource.r53_resolver_resolverruleassociation\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n      \n      \n      <div *ngFor=\"let i of iam_accesskey\" >\n            <app-common-resource [myresource]=\"awsresource.iam_accesskey\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of iam_group\" >\n            <app-common-resource [myresource]=\"awsresource.iam_group\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n      <div *ngFor=\"let i of iam_instanceprofile\" >\n            <app-common-resource [myresource]=\"awsresource.iam_instanceprofile\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n      <div *ngFor=\"let i of iam_managedpolicy\" >\n            <app-common-resource [myresource]=\"awsresource.iam_managedpolicy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of iam_policy\" >\n            <app-common-resource [myresource]=\"awsresource.iam_policy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of iam_role\" >\n            <app-common-resource [myresource]=\"awsresource.iam_role\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of iam_servicelinkedrole\" >\n            <app-common-resource [myresource]=\"awsresource.iam_servicelinkedrole\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of iam_user\" >\n            <app-common-resource [myresource]=\"awsresource.iam_user\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of iam_usertogroupaddition\" >\n            <app-common-resource [myresource]=\"awsresource.iam_usertogroupaddition\" [isTagged]=\"false\" ></app-common-resource>\n      </div>   \n      \n      <div *ngFor=\"let i of ag_agGroup\" >\n            <app-common-resource [myresource]=\"awsresource.ag_agGroup\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n      <div *ngFor=\"let i of ag_launchConfiguration\" >\n            <app-common-resource [myresource]=\"awsresource.ag_launchConfiguration\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n      <div *ngFor=\"let i of ag_lifecyclehook\" >\n            <app-common-resource [myresource]=\"awsresource.ag_lifecyclehook\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n      <div *ngFor=\"let i of ag_scalingpolicy\" >\n            <app-common-resource [myresource]=\"awsresource.ag_scalingpolicy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>      \n      <div *ngFor=\"let i of ag_scheduledAction\" >\n            <app-common-resource [myresource]=\"awsresource.ag_scheduledAction\" [isTagged]=\"false\" ></app-common-resource>\n      </div>       \n      \n      <div *ngFor=\"let i of elbv2_listener\" >\n            <app-common-resource [myresource]=\"awsresource.elbv2_listener\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of elbv2_listenercertificate\" >\n            <app-common-resource [myresource]=\"awsresource.elbv2_listenercertificate\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of elbv2_listenerrule\" >\n            <app-common-resource [myresource]=\"awsresource.elbv2_listenerrule\" [isTagged]=\"false\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of elbv2_loadbalancer\" >\n            <app-common-resource [myresource]=\"awsresource.elbv2_loadbalancer\" [isTagged]=\"true\" ></app-common-resource>\n      </div>            \n      <div *ngFor=\"let i of elbv2_targetgroup\" >\n            <app-common-resource [myresource]=\"awsresource.elbv2_targetgroup\" [isTagged]=\"true\" ></app-common-resource>\n      </div>            \n\n      <div *ngFor=\"let i of acm_certificate\" >\n            <app-common-resource [myresource]=\"awsresource.acm_certificate\" [isTagged]=\"true\" ></app-common-resource>\n      </div>            \n\n      <div *ngFor=\"let i of dynamodb_table\" >\n            <app-common-resource [myresource]=\"awsresource.dynamodb_table\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n\n      <div *ngFor=\"let i of sqs_queue\" >\n            <app-common-resource [myresource]=\"awsresource.sqs_queue\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n      <div *ngFor=\"let i of sqs_queuepolicy\" >\n            <app-common-resource [myresource]=\"awsresource.sqs_queuepolicy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                        \n\n      <div *ngFor=\"let i of sns_subscription\" >\n            <app-common-resource [myresource]=\"awsresource.sns_subscription\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                        \n      <div *ngFor=\"let i of sns_topic\" >\n            <app-common-resource [myresource]=\"awsresource.sns_topic\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                        \n      <div *ngFor=\"let i of sns_topicpolicy\" >\n            <app-common-resource [myresource]=\"awsresource.sns_topicpolicy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                        \n\n      <div *ngFor=\"let i of ecs_cluster\" >\n            <app-common-resource [myresource]=\"awsresource.ecs_cluster\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                        \n      <div *ngFor=\"let i of ecs_service\" >\n            <app-common-resource [myresource]=\"awsresource.ecs_service\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                        \n      <div *ngFor=\"let i of ecs_taskdefinition\" >\n            <app-common-resource [myresource]=\"awsresource.ecs_taskdefinition\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n\n      <div *ngFor=\"let i of cloudtrail_trail\" >\n            <app-common-resource [myresource]=\"awsresource.cloudtrail_trail\" [isTagged]=\"true\" ></app-common-resource>\n      </div>\n\n      <div *ngFor=\"let i of cw_alarm\" >\n            <app-common-resource [myresource]=\"awsresource.cw_alarm\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n      <div *ngFor=\"let i of cw_dashboard\" >\n            <app-common-resource [myresource]=\"awsresource.cw_dashboard\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n\n      <div *ngFor=\"let i of cwlogs_destination\" >\n            <app-common-resource [myresource]=\"awsresource.cwlogs_destination\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n      <div *ngFor=\"let i of cwlogs_loggroup\" >\n            <app-common-resource [myresource]=\"awsresource.cwlogs_loggroup\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n      <div *ngFor=\"let i of cwlogs_logstream\" >\n            <app-common-resource [myresource]=\"awsresource.cwlogs_logstream\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n      <div *ngFor=\"let i of cwlogs_metricfilter\" >\n            <app-common-resource [myresource]=\"awsresource.cwlogs_metricfilter\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n      <div *ngFor=\"let i of cwlogs_subscriptionfilter\" >\n            <app-common-resource [myresource]=\"awsresource.cwlogs_subscriptionfilter\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n\n      <div *ngFor=\"let i of cwevents_eventbuspolicy\" >\n            <app-common-resource [myresource]=\"awsresource.cwevents_eventbuspolicy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                    \n      <div *ngFor=\"let i of cwevents_rule\" >\n            <app-common-resource [myresource]=\"awsresource.cwevents_rule\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n\n      <div *ngFor=\"let i of eks_cluster\" >\n            <app-common-resource [myresource]=\"awsresource.eks_cluster\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n\n      <div *ngFor=\"let i of efs_filesystem\" >\n            <app-common-resource [myresource]=\"awsresource.efs_filesystem\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of efs_mounttarget\" >\n            <app-common-resource [myresource]=\"awsresource.efs_mounttarget\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n\n      <div *ngFor=\"let i of s3_bucket\" >\n            <app-common-resource [myresource]=\"awsresource.s3_bucket\" [isTagged]=\"true\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of s3_bucketpolicy\" >\n            <app-common-resource [myresource]=\"awsresource.s3_bucketpolicy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n\n      <div *ngFor=\"let i of ecr_repository\" >\n            <app-common-resource [myresource]=\"awsresource.ecr_repository\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n\n      <div *ngFor=\"let i of cfn_customresource\" >\n            <app-common-resource [myresource]=\"awsresource.cfn_customresource\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of cfn_macro\" >\n            <app-common-resource [myresource]=\"awsresource.cfn_macro\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of cfn_stack\" >\n            <app-common-resource [myresource]=\"awsresource.cfn_stack\" [isTagged]=\"true\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of cfn_waitcondition\" >\n            <app-common-resource [myresource]=\"awsresource.cfn_waitcondition\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of cfn_waitconditionhandle\" >\n            <app-common-resource [myresource]=\"awsresource.cfn_waitconditionhandle\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                           \n      \n      <div *ngFor=\"let i of lambda_alias\" >\n            <app-common-resource [myresource]=\"awsresource.lambda_alias\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of lambda_eventsourcemapping\" >\n            <app-common-resource [myresource]=\"awsresource.lambda_eventsourcemapping\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of lambda_function\" >\n            <app-common-resource [myresource]=\"awsresource.lambda_function\" [isTagged]=\"true\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of lambda_layerversion\" >\n            <app-common-resource [myresource]=\"awsresource.lambda_layerversion\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of lambda_layerversionpermission\" >\n            <app-common-resource [myresource]=\"awsresource.lambda_layerversionpermission\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                           \n      <div *ngFor=\"let i of lambda_permission\" >\n            <app-common-resource [myresource]=\"awsresource.lambda_permission\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                                          \n      <div *ngFor=\"let i of lambda_version\" >\n            <app-common-resource [myresource]=\"awsresource.lambda_version\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                           \n\n      <div *ngFor=\"let i of ram_resourceshare\" >\n            <app-common-resource [myresource]=\"awsresource.ram_resourceshare\" [isTagged]=\"true\" ></app-common-resource>\n      </div>                                         \n\n      <div *ngFor=\"let i of sm_resourcepolicy\" >\n            <app-common-resource [myresource]=\"awsresource.sm_resourcepolicy\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                           \n      <div *ngFor=\"let i of sm_rotationschedule\" >\n            <app-common-resource [myresource]=\"awsresource.sm_rotationschedule\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                           \n      <div *ngFor=\"let i of sm_secret\" >\n            <app-common-resource [myresource]=\"awsresource.sm_secret\" [isTagged]=\"true\" ></app-common-resource>\n      </div>                           \n      <div *ngFor=\"let i of sm_secrettargetattachment\" >\n            <app-common-resource [myresource]=\"awsresource.sm_secrettargetattachment\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                           \n\n      <div *ngFor=\"let i of cb_project\" >\n            <app-common-resource [myresource]=\"awsresource.cb_project\" [isTagged]=\"true\" ></app-common-resource>\n      </div>                           \n      <div *ngFor=\"let i of cb_sourcecredential\" >\n            <app-common-resource [myresource]=\"awsresource.cb_sourcecredential\" [isTagged]=\"false\" ></app-common-resource>\n      </div>                           \n\n      <div *ngFor=\"let i of msk_cluster\" >\n            <app-common-resource [myresource]=\"awsresource.msk_cluster\" [isTagged]=\"true\" ></app-common-resource>\n      </div>                           \n\n    </div>\n</mat-drawer-container>\n</div>\n<!-- <div style=\"float:left\" >\n    <app-object-help></app-object-help>\n</div> -->\n<!-- <div style=\"float:left\">\n      <app-intrinsic-functions></app-intrinsic-functions>\n</div>\n<div style=\"float:left\">\n      <app-intrinsic-functions></app-intrinsic-functions>\n</div> -->"

/***/ }),

/***/ "./src/app/resource-view/resource-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resource-view/resource-view.component.ts ***!
  \**********************************************************/
/*! exports provided: ResourceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceViewComponent", function() { return ResourceViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource-list */ "./src/app/resource-view/resource-list.ts");
/* harmony import */ var _aws_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aws-resources.service */ "./src/app/aws-resources.service.ts");




var ResourceViewComponent = /** @class */ (function () {
    function ResourceViewComponent(awsresource) {
        this.awsresource = awsresource;
        this.resourcelist = _resource_list__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_DATA"];
        this.resource_detail = [];
        //Route53 resources
        this.route53_healthcheck = [];
        this.route53_hostedzone = [];
        this.route53_recordset = [];
        this.route53_recordsetgroup = [];
        //Route53 Resolver resources
        this.r53_resolver_resolverendpoint = [];
        this.r53_resolver_resolverrule = [];
        this.r53_resolver_resolverruleassociation = [];
        //IAM resources
        this.iam_accesskey = [];
        this.iam_group = [];
        this.iam_instanceprofile = [];
        this.iam_managedpolicy = [];
        this.iam_policy = [];
        this.iam_role = [];
        this.iam_servicelinkedrole = [];
        this.iam_user = [];
        this.iam_usertogroupaddition = [];
        //EC2 resources
        this.ec2_volume = [];
        this.ec2_eip = [];
        this.ec2_instance = [];
        this.ec2_securitygroup = [];
        this.ec2_customergateway = [];
        this.ec2_dhcpoptions = [];
        this.ec2_ec2fleet = [];
        this.ec2_egressonlyinternetgateway = [];
        this.ec2_eipassociation = [];
        this.ec2_flowlog = [];
        this.ec2_host = [];
        this.ec2_internetgateway = [];
        this.ec2_launchtemplate = [];
        this.ec2_natgateway = [];
        this.ec2_networkacl = [];
        this.ec2_networkaclentry = [];
        this.ec2_networkinterface = [];
        this.ec2_networkinterfaceattachment = [];
        this.ec2_networkinterfacepermission = [];
        this.ec2_placementgroup = [];
        this.ec2_route = [];
        this.ec2_routetable = [];
        this.ec2_securitygroupegress = [];
        this.ec2_securitygroupingress = [];
        this.ec2_spotfleet = [];
        this.ec2_subnet = [];
        this.ec2_subnetcidrblock = [];
        this.ec2_subnetnetworkaclassociation = [];
        this.ec2_subnetroutetableassociation = [];
        this.ec2_transitgateway = [];
        this.ec2_transitgatewayattachment = [];
        this.ec2_transitgatewayroute = [];
        this.ec2_transitgatewayroutetable = [];
        this.ec2_transitgatewayroutetableassociation = [];
        this.ec2_transitgatewayroutetablepropagation = [];
        this.ec2_volumeattachment = [];
        this.ec2_vpc = [];
        this.ec2_vpccidrblock = [];
        this.ec2_vpcdhcpoptionsassociation = [];
        this.ec2_vpcendpoint = [];
        this.ec2_vpcendpointconnectionnotification = [];
        this.ec2_vpcendpointservice = [];
        this.ec2_vpcendpointservicepermissions = [];
        this.ec2_vpcgatewayattachment = [];
        this.ec2_vpcpeeringconnection = [];
        this.ec2_vpnconnection = [];
        this.ec2_vpnconnectionroute = [];
        this.ec2_vpngateway = [];
        this.ec2_vpngatewayroutepropagation = [];
        //autoscaling
        this.ag_agGroup = [];
        this.ag_launchConfiguration = [];
        this.ag_lifecyclehook = [];
        this.ag_scalingpolicy = [];
        this.ag_scheduledAction = [];
        //elbv2
        this.elbv2_listener = [];
        this.elbv2_listenercertificate = [];
        this.elbv2_listenerrule = [];
        this.elbv2_loadbalancer = [];
        this.elbv2_targetgroup = [];
        //certificate manager
        this.acm_certificate = [];
        //dynamodb
        this.dynamodb_table = [];
        //sqs
        this.sqs_queue = [];
        this.sqs_queuepolicy = [];
        //sns
        this.sns_subscription = [];
        this.sns_topic = [];
        this.sns_topicpolicy = [];
        //ecs
        this.ecs_cluster = [];
        this.ecs_service = [];
        this.ecs_taskdefinition = [];
        //cloudtrail
        this.cloudtrail_trail = [];
        //cloudwatch
        this.cw_alarm = [];
        this.cw_dashboard = [];
        //CloudWatch Logs
        this.cwlogs_destination = [];
        this.cwlogs_loggroup = [];
        this.cwlogs_logstream = [];
        this.cwlogs_metricfilter = [];
        this.cwlogs_subscriptionfilter = [];
        //CloudWatch Events
        this.cwevents_eventbuspolicy = [];
        this.cwevents_rule = [];
        //EKS
        this.eks_cluster = [];
        //EFS
        this.efs_filesystem = [];
        this.efs_mounttarget = [];
        //S3
        this.s3_bucket = [];
        this.s3_bucketpolicy = [];
        //ecr
        this.ecr_repository = [];
        //cloudformation
        this.cfn_customresource = [];
        this.cfn_macro = [];
        this.cfn_stack = [];
        this.cfn_waitcondition = [];
        this.cfn_waitconditionhandle = [];
        //lambda
        this.lambda_alias = [];
        this.lambda_eventsourcemapping = [];
        this.lambda_function = [];
        this.lambda_layerversion = [];
        this.lambda_layerversionpermission = [];
        this.lambda_permission = [];
        this.lambda_version = [];
        //RAM
        this.ram_resourceshare = [];
        //secretsmanager
        this.sm_resourcepolicy = [];
        this.sm_rotationschedule = [];
        this.sm_secret = [];
        this.sm_secrettargetattachment = [];
        //codebuild
        this.cb_project = [];
        this.cb_sourcecredential = [];
        //mks(kafka)
        this.msk_cluster = [];
    }
    ResourceViewComponent.prototype.ngOnInit = function () {
    };
    ResourceViewComponent.prototype.serviceAddition = function (subresource) {
        //console.log(`${subresource.resourcename} ${subresource.resourcecount} ${subresource.resourcesyntax}`);
        subresource.resourcecount = subresource.resourcecount + 1;
        //console.log((subresource.resourcesyntax as string).split("::"));
        this.resource_detail = subresource.resourcesyntax.split("::");
        switch (this.resource_detail[1]) {
            case "Route53":
                if (this.resource_detail[2] == "HealthCheck")
                    this.route53_healthcheck.push(subresource.resourcecount);
                if (this.resource_detail[2] == "HostedZone")
                    this.route53_hostedzone.push(subresource.resourcecount);
                if (this.resource_detail[2] == "RecordSet")
                    this.route53_recordset.push(subresource.resourcecount);
                if (this.resource_detail[2] == "RecordSetGroup")
                    this.route53_recordsetgroup.push(subresource.resourcecount);
                break;
            case "Route53Resolver":
                if (this.resource_detail[2] == "ResolverEndpoint")
                    this.r53_resolver_resolverendpoint.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ResolverRule")
                    this.r53_resolver_resolverrule.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ResolverRuleAssociation")
                    this.r53_resolver_resolverruleassociation.push(subresource.resourcecount);
                break;
            case "EC2":
                if (this.resource_detail[2] == "Volume")
                    this.ec2_volume.push(subresource.resourcecount);
                if (this.resource_detail[2] == "EIP")
                    this.ec2_eip.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Instance")
                    this.ec2_instance.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SecurityGroup")
                    this.ec2_securitygroup.push(subresource.resourcecount);
                if (this.resource_detail[2] == "CustomerGateway")
                    this.ec2_customergateway.push(subresource.resourcecount);
                if (this.resource_detail[2] == "DHCPOptions")
                    this.ec2_dhcpoptions.push(subresource.resourcecount);
                if (this.resource_detail[2] == "EC2Fleet")
                    this.ec2_ec2fleet.push(subresource.resourcecount);
                if (this.resource_detail[2] == "EgressOnlyInternetGateway")
                    this.ec2_egressonlyinternetgateway.push(subresource.resourcecount);
                if (this.resource_detail[2] == "EIPAssociation")
                    this.ec2_eipassociation.push(subresource.resourcecount);
                if (this.resource_detail[2] == "FlowLog")
                    this.ec2_flowlog.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Host")
                    this.ec2_host.push(subresource.resourcecount);
                if (this.resource_detail[2] == "InternetGateway")
                    this.ec2_internetgateway.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LaunchTemplate")
                    this.ec2_launchtemplate.push(subresource.resourcecount);
                if (this.resource_detail[2] == "NatGateway")
                    this.ec2_natgateway.push(subresource.resourcecount);
                if (this.resource_detail[2] == "NetworkAcl")
                    this.ec2_networkacl.push(subresource.resourcecount);
                if (this.resource_detail[2] == "NetworkAclEntry")
                    this.ec2_networkaclentry.push(subresource.resourcecount);
                if (this.resource_detail[2] == "NetworkInterface")
                    this.ec2_networkinterface.push(subresource.resourcecount);
                if (this.resource_detail[2] == "NetworkInterfaceAttachment")
                    this.ec2_networkinterfaceattachment.push(subresource.resourcecount);
                if (this.resource_detail[2] == "NetworkInterfacePermission")
                    this.ec2_networkinterfacepermission.push(subresource.resourcecount);
                if (this.resource_detail[2] == "PlacementGroup")
                    this.ec2_placementgroup.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Route")
                    this.ec2_route.push(subresource.resourcecount);
                if (this.resource_detail[2] == "RouteTable")
                    this.ec2_routetable.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SecurityGroupEgress")
                    this.ec2_securitygroupegress.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SecurityGroupIngress")
                    this.ec2_securitygroupingress.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SpotFleet")
                    this.ec2_spotfleet.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Subnet")
                    this.ec2_subnet.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SubnetCidrBlock")
                    this.ec2_subnetcidrblock.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SubnetNetworkAclAssociation")
                    this.ec2_subnetnetworkaclassociation.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SubnetRouteTableAssociation")
                    this.ec2_subnetroutetableassociation.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TransitGateway")
                    this.ec2_transitgateway.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TransitGatewayAttachment")
                    this.ec2_transitgatewayattachment.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TransitGatewayRoute")
                    this.ec2_transitgatewayroute.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TransitGatewayRouteTable")
                    this.ec2_transitgatewayroutetable.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TransitGatewayRouteTableAssociation")
                    this.ec2_transitgatewayroutetableassociation.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TransitGatewayRouteTablePropagation")
                    this.ec2_transitgatewayroutetablepropagation.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VolumeAttachment")
                    this.ec2_volumeattachment.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPC")
                    this.ec2_vpc.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCCidrBlock")
                    this.ec2_vpccidrblock.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCDHCPOptionsAssociation")
                    this.ec2_vpcdhcpoptionsassociation.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCEndpoint")
                    this.ec2_vpcendpoint.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCEndpointConnectionNotification")
                    this.ec2_vpcendpointconnectionnotification.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCEndpointService")
                    this.ec2_vpcendpointservice.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCEndpointServicePermissions")
                    this.ec2_vpcendpointservicepermissions.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCGatewayAttachment")
                    this.ec2_vpcgatewayattachment.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPCPeeringConnection")
                    this.ec2_vpcpeeringconnection.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPNConnection")
                    this.ec2_vpnconnection.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPNConnectionRoute")
                    this.ec2_vpnconnectionroute.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPNGateway")
                    this.ec2_vpngateway.push(subresource.resourcecount);
                if (this.resource_detail[2] == "VPNGatewayRoutePropagation")
                    this.ec2_vpngatewayroutepropagation.push(subresource.resourcecount);
                break;
            case "IAM":
                if (this.resource_detail[2] == "AccessKey")
                    this.iam_accesskey.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Group")
                    this.iam_group.push(subresource.resourcecount);
                if (this.resource_detail[2] == "InstanceProfile")
                    this.iam_instanceprofile.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ManagedPolicy")
                    this.iam_managedpolicy.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Policy")
                    this.iam_policy.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Role")
                    this.iam_role.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ServiceLinkedRole")
                    this.iam_servicelinkedrole.push(subresource.resourcecount);
                if (this.resource_detail[2] == "User")
                    this.iam_user.push(subresource.resourcecount);
                if (this.resource_detail[2] == "UserToGroupAddition")
                    this.iam_usertogroupaddition.push(subresource.resourcecount);
                break;
            case "AutoScaling":
                if (this.resource_detail[2] == "AutoScalingGroup")
                    this.ag_agGroup.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LaunchConfiguration")
                    this.ag_launchConfiguration.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LifecycleHook")
                    this.ag_lifecyclehook.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ScalingPolicy")
                    this.ag_scalingpolicy.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ScheduledAction")
                    this.ag_scheduledAction.push(subresource.resourcecount);
                break;
            case "ElasticLoadBalancingV2":
                if (this.resource_detail[2] == "Listener")
                    this.elbv2_listener.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ListenerCertificate")
                    this.elbv2_listenercertificate.push(subresource.resourcecount);
                if (this.resource_detail[2] == "ListenerRule")
                    this.elbv2_listenerrule.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LoadBalancer")
                    this.elbv2_loadbalancer.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TargetGroup")
                    this.elbv2_targetgroup.push(subresource.resourcecount);
                break;
            case "CertificateManager":
                if (this.resource_detail[2] == "Certificate")
                    this.acm_certificate.push(subresource.resourcecount);
                break;
            case "SNS":
                if (this.resource_detail[2] == "Subscription")
                    this.sns_subscription.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Topic")
                    this.sns_topic.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TopicPolicy")
                    this.sns_topicpolicy.push(subresource.resourcecount);
                break;
            case "SQS":
                if (this.resource_detail[2] == "Queue")
                    this.sqs_queue.push(subresource.resourcecount);
                if (this.resource_detail[2] == "QueuePolicy")
                    this.sqs_queuepolicy.push(subresource.resourcecount);
                break;
            case "DynamoDB":
                if (this.resource_detail[2] == "Table")
                    this.dynamodb_table.push(subresource.resourcecount);
                break;
            case "ECS":
                if (this.resource_detail[2] == "Cluster")
                    this.ecs_cluster.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Service")
                    this.ecs_service.push(subresource.resourcecount);
                if (this.resource_detail[2] == "TaskDefinition")
                    this.ecs_taskdefinition.push(subresource.resourcecount);
                break;
            case "CloudTrail":
                if (this.resource_detail[2] == "Trail")
                    this.cloudtrail_trail.push(subresource.resourcecount);
                break;
            case "CloudWatch":
                if (this.resource_detail[2] == "Alarm")
                    this.cw_alarm.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Dashboard")
                    this.cw_dashboard.push(subresource.resourcecount);
                break;
            case "Logs":
                if (this.resource_detail[2] == "Destination")
                    this.cwlogs_destination.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LogGroup")
                    this.cwlogs_loggroup.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LogStream")
                    this.cwlogs_logstream.push(subresource.resourcecount);
                if (this.resource_detail[2] == "MetricFilter")
                    this.cwlogs_metricfilter.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SubscriptionFilter")
                    this.cwlogs_subscriptionfilter.push(subresource.resourcecount);
                break;
            case "Events":
                if (this.resource_detail[2] == "EventBusPolicy")
                    this.cwevents_eventbuspolicy.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Rule")
                    this.cwevents_rule.push(subresource.resourcecount);
                break;
            case "EKS":
                if (this.resource_detail[2] == "Cluster")
                    this.eks_cluster.push(subresource.resourcecount);
                break;
            case "EFS":
                if (this.resource_detail[2] == "FileSystem")
                    this.efs_filesystem.push(subresource.resourcecount);
                if (this.resource_detail[2] == "MountTarget")
                    this.efs_mounttarget.push(subresource.resourcecount);
                break;
            case "S3":
                if (this.resource_detail[2] == "Bucket")
                    this.s3_bucket.push(subresource.resourcecount);
                if (this.resource_detail[2] == "BucketPolicy")
                    this.s3_bucketpolicy.push(subresource.resourcecount);
                break;
            case "ECR":
                if (this.resource_detail[2] == "Repository")
                    this.ecr_repository.push(subresource.resourcecount);
                break;
            case "CloudFormation":
                if (this.resource_detail[2] == "CustomResource")
                    this.cfn_customresource.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Macro")
                    this.cfn_macro.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Stack")
                    this.cfn_stack.push(subresource.resourcecount);
                if (this.resource_detail[2] == "WaitCondition")
                    this.cfn_waitcondition.push(subresource.resourcecount);
                if (this.resource_detail[2] == "WaitConditionHandle")
                    this.cfn_waitconditionhandle.push(subresource.resourcecount);
            case "Lambda":
                if (this.resource_detail[2] == "Alias")
                    this.lambda_alias.push(subresource.resourcecount);
                if (this.resource_detail[2] == "EventSourceMapping")
                    this.lambda_eventsourcemapping.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Function")
                    this.lambda_function.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LayerVersion")
                    this.lambda_layerversion.push(subresource.resourcecount);
                if (this.resource_detail[2] == "LayerVersionPermission")
                    this.lambda_layerversionpermission.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Permission")
                    this.lambda_permission.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Version")
                    this.lambda_version.push(subresource.resourcecount);
            case "RAM":
                if (this.resource_detail[2] == "ResourceShare")
                    this.ram_resourceshare.push(subresource.resourcecount);
            case "SecretsManager":
                if (this.resource_detail[2] == "ResourcePolicy")
                    this.sm_resourcepolicy.push(subresource.resourcecount);
                if (this.resource_detail[2] == "RotationSchedule")
                    this.sm_rotationschedule.push(subresource.resourcecount);
                if (this.resource_detail[2] == "Secret")
                    this.sm_secret.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SecretTargetAttachment")
                    this.sm_secrettargetattachment.push(subresource.resourcecount);
            case "CodeBuild":
                if (this.resource_detail[2] == "Project")
                    this.cb_project.push(subresource.resourcecount);
                if (this.resource_detail[2] == "SourceCredential")
                    this.cb_sourcecredential.push(subresource.resourcecount);
            case "MSK":
                if (this.resource_detail[2] == "Cluster")
                    this.msk_cluster.push(subresource.resourcecount);
            default:
                break;
        }
    };
    ResourceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource-view',
            template: __webpack_require__(/*! ./resource-view.component.html */ "./src/app/resource-view/resource-view.component.html"),
            styles: [__webpack_require__(/*! ./resource-view.component.css */ "./src/app/resource-view/resource-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_aws_resources_service__WEBPACK_IMPORTED_MODULE_3__["AwsResourcesService"]])
    ], ResourceViewComponent);
    return ResourceViewComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<mat-accordion class=\"example-headers-align\" >\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>Validate Template</mat-panel-title>\r\n            <mat-panel-description>\r\n                Enter AWS specific information\r\n            </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <div class=\"example-container\">\r\n                <form #loginform=\"ngForm\" (submit)=\"validateTemplate(loginform.value)\">\r\n                        <mat-form-field>\r\n                                <input matInput type=\"text\" name=\"access_key\" placeholder=\"Access Key\" required ngModel>\r\n                            </mat-form-field><br>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"password\" name=\"secret_access_key\" placeholder=\"Secret Access Key\" required ngModel\r\n                                matTooltip=\"secret access key never leaves your machine, or stored in your browser local storage\">  <br>  \r\n                            </mat-form-field><br>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" name=\"region\" placeholder=\"Region\" required ngModel> <br>\r\n                            </mat-form-field><br>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" name=\"bucket\" placeholder=\"Bucket\" required ngModel\r\n                                matTooltip=\"Make sure your bucket has CORS enabled\" > <br>\r\n                            </mat-form-field><br>\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" name=\"filename\" placeholder=\"Filename on S3\" required ngModel \r\n                                matTooltip=\"File will be created with authenticated-read access\"> <br>\r\n                            </mat-form-field><br>\r\n                            <button mat-icon-button color=\"primary\" [disabled]=\"loginform.invalid\" type=\"submit\">\r\n                                <mat-icon>cloud_done</mat-icon>\r\n                            </button>\r\n                    </form>\r\n                </div>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<br>\r\n\r\n    <a mat-button href=\"#\" (click)=\"getDownloadHref()\" matTooltip=\"Download Template\" >\r\n            <mat-icon>save</mat-icon>\r\n    </a> <br>\r\n    <mat-spinner  *ngIf=\"(s3message.length==0 || message.length==0) && showSpinner\" ></mat-spinner>\r\n    <span [ngStyle]=\"{'color':uploadColor}\" *ngIf=\"s3message.length!=0\"> {{s3message}} </span> <br>\r\n    <span [ngStyle]=\"{'color':validateColor}\" *ngIf=\"message.length!=0\"> {{message}} </span> <br>\r\n    <button type=\"button\" color=\"primary\"  [disabled]=\"isJsonOn\"  mat-raised-button (click)=\"isJsonOn=true;isYamlOn=false\" >json</button>\r\n    <button type=\"button\" color=\"accent\"  [disabled]=\"isYamlOn\"  mat-raised-button (click)=\"convertToYaml();isYamlOn=true;isJsonOn=false\"  > yaml(beta) </button>\r\n    <button *ngIf=\"isJsonOn\"  mat-icon-button color=\"primary\" matTooltip=\"copy Json\" (click)=\"copyToClipboardJson()\"> <mat-icon>file_copy</mat-icon> </button>\r\n    <button *ngIf=\"isYamlOn\" mat-icon-button color=\"accent\" matTooltip=\"copy yaml\" (click)=\"copyToClipboardYaml()\"> <mat-icon>file_copy</mat-icon> </button>\r\n    <pre *ngIf=\"isJsonOn\" >{{jsonresult.jsonresult | json}}</pre>\r\n    <pre *ngIf=\"isYamlOn\" > {{yamlTemplate}}  </pre>"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");



//import { saveAs } from 'file-saver';
var AWS = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
//var FileSaver = require('file-saver');
var yaml = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
var ResultComponent = /** @class */ (function () {
    function ResultComponent(jsonresult) {
        this.jsonresult = jsonresult;
        this.s3message = "";
        this.message = "";
        this.showSpinner = false;
        this.uploadColor = "";
        this.validateColor = "";
        this.isYamlOn = false;
        this.isJsonOn = true;
    }
    ResultComponent.prototype.getDownloadHref = function () {
        var str = "data:text/json;charset=utf-8,";
        var data = str + encodeURIComponent(JSON.stringify(this.jsonresult.jsonresult));
        var link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', "cloudkast.json");
        link.click();
        //var blob = new Blob([JSON.stringify(this.jsonresult.jsonresult)], {type: "text/plain;charset=utf-8"});
        //FileSaver.saveAs(blob, "cloudfurner.json");
        //var file = new File([JSON.stringify(this.jsonresult.jsonresult)], "hello world.txt", {type: "text/plain;charset=utf-8"});
        //saveAs(file);
        var data = str + encodeURIComponent(this.yamlTemplate);
        link.setAttribute('href', data);
        link.setAttribute('download', "cloudkast.yaml");
        link.click();
    };
    ResultComponent.prototype.convertToYaml = function () {
        this.isYamlOn = true;
        this.isJsonOn = false;
        this.yamlTemplate = yaml.safeDump(this.jsonresult.jsonresult, { "skipInvalid": true });
    };
    ResultComponent.prototype.copyToClipboardJson = function () {
        var textArea = document.createElement("textarea");
        textArea.value = JSON.stringify(this.jsonresult.jsonresult);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    ResultComponent.prototype.copyToClipboardYaml = function () {
        var textArea = document.createElement("textarea");
        textArea.value = this.yamlTemplate;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    ResultComponent.prototype.validateTemplate = function (value) {
        var _this = this;
        this.showSpinner = true;
        var s3params = {
            Body: JSON.stringify(this.jsonresult.jsonresult),
            ACL: "authenticated-read",
            Bucket: value.bucket,
            Key: value.filename
        };
        var s3 = new AWS.S3({
            region: value.region,
            accessKeyId: value.access_key,
            secretAccessKey: value.secret_access_key
        });
        s3.putObject(s3params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                _this.s3message = err;
                _this.uploadColor = "red";
            }
            else {
                _this.s3message = "object uploaded successfully on S3";
                _this.uploadColor = "green";
                var url = "https://s3-" + value.region + ".amazonaws.com/" + value.bucket + "/" + value.filename;
                var cloudformation = new AWS.CloudFormation({
                    region: value.region,
                    accessKeyId: value.access_key,
                    secretAccessKey: value.secret_access_key
                });
                var cloudformationParams = {
                    TemplateURL: url
                };
                cloudformation.validateTemplate(cloudformationParams, function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                        _this.message = err;
                        _this.validateColor = "red";
                    }
                    else {
                        _this.message = "Validation successful";
                        _this.validateColor = "green";
                    }
                });
            }
        });
    };
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/transform/transform.component.css":
/*!***************************************************!*\
  !*** ./src/app/transform/transform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZm9ybS90cmFuc2Zvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/transform/transform.component.html":
/*!****************************************************!*\
  !*** ./src/app/transform/transform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onDone(myForm.value)\" #myForm=\"ngForm\" >\n<mat-form-field>\n  <input type=\"text\" matInput ngModel placeholder=\"comma delimited list\"  name=\"transform\" required >\n</mat-form-field>\n<mat-icon [matTooltip]=\"transformInfo\" >info</mat-icon>\n<br>\n<button color=\"primary\" [disabled]=\"myForm.invalid\" mat-icon-button type=\"submit\" matTooltip=\"Add to Transform section.\" >\n  <mat-icon>done</mat-icon>\n</button>\n<button color=\"warn\" [disabled]=\"myForm.invalid\" mat-icon-button type=\"button\" (click)=\"onRemove()\" matTooltip=\"Remove Transform section entirely.\" >\n  <mat-icon>remove_all</mat-icon>\n</button>\n</form>"

/***/ }),

/***/ "./src/app/transform/transform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/transform/transform.component.ts ***!
  \**************************************************/
/*! exports provided: TransformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformComponent", function() { return TransformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-result.service */ "./src/app/json-result.service.ts");
/* harmony import */ var _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useful-utils.service */ "./src/app/useful-utils.service.ts");




var TransformComponent = /** @class */ (function () {
    function TransformComponent(jsonresult, util) {
        this.jsonresult = jsonresult;
        this.util = util;
        this.transformInfo = "Provide a list of Strings separated by commas. You can declare one or more macros within a template. AWS CloudFormation executes macros in the order that they are specified. When you create a change set, AWS CloudFormation generates a change set that includes the processed template content. You can then review the changes and execute the change set. AWS CloudFormation also supports the AWS::Serverless and AWS::Include transforms, which are macros hosted by AWS CloudFormation. The AWS::Serverless transform specifies the version of the AWS Serverless Application Model (AWS SAM) to use e.g. AWS::Serverless-2016-10-31. This model defines the AWS SAM syntax that you can use and how AWS CloudFormation processes it. The AWS::Include transform works with template snippets that are stored separately from the main AWS CloudFormation template, You can insert these snippets into your main template using it.";
    }
    TransformComponent.prototype.ngOnInit = function () {
    };
    TransformComponent.prototype.onDone = function (value) {
        this.jsonresult.jsonresult.Transform = value.transform.split(",");
    };
    TransformComponent.prototype.onRemove = function () {
        this.jsonresult.jsonresult.Transform = undefined;
    };
    TransformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transform',
            template: __webpack_require__(/*! ./transform.component.html */ "./src/app/transform/transform.component.html"),
            styles: [__webpack_require__(/*! ./transform.component.css */ "./src/app/transform/transform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_result_service__WEBPACK_IMPORTED_MODULE_2__["JsonResultService"], _useful_utils_service__WEBPACK_IMPORTED_MODULE_3__["UsefulUtilsService"]])
    ], TransformComponent);
    return TransformComponent;
}());



/***/ }),

/***/ "./src/app/useful-utils.service.ts":
/*!*****************************************!*\
  !*** ./src/app/useful-utils.service.ts ***!
  \*****************************************/
/*! exports provided: UsefulUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsefulUtilsService", function() { return UsefulUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var yaml = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
var UsefulUtilsService = /** @class */ (function () {
    function UsefulUtilsService() {
    }
    UsefulUtilsService.prototype.getProperJson = function (val) {
        try {
            //any function, any object, not for array of strings or arrays of objects.
            if (val.includes("{") && !val.includes("{{")) {
                return JSON.parse(val);
            }
            else {
                if (val.includes("{{")) {
                    console.log(val);
                    //var dynamicVal = (val as String)
                    if (val.length != 0) {
                        try {
                            return JSON.parse(JSON.parse(JSON.stringify(val)));
                        }
                        catch (e) {
                            console.log(e);
                            return val;
                        }
                    }
                    //return (val as String).length!=0? JSON.parse(JSON.parse(JSON.stringify(val))) :undefined
                }
                else {
                    return val.length != 0 ? val : undefined;
                }
            }
        }
        catch (e) {
            alert("Oops! An error occurred. Please check the input field type.");
            console.log(e);
        }
    };
    ;
    UsefulUtilsService.prototype.getPropertyDialogJson = function (val) {
        try {
            //any function, any object, not for array of strings or arrays of objects.
            if (val.includes("{") && !val.includes("{{")) {
                return JSON.parse(val);
            }
            else {
                if (val.includes("{{")) {
                    return val.length != 0 ? val : undefined;
                }
                else {
                    return val.length != 0 ? val : undefined;
                }
            }
        }
        catch (e) {
            alert("Oops! An error occurred. Please check the input field type.");
            console.log(e);
        }
    };
    ;
    UsefulUtilsService.prototype.getArray = function (val) {
        try {
            if (val.includes("{")) {
                //console.log("in array of objects...")
                return JSON.parse(val);
            }
            else {
                //console.log("in array of strings...")
                return val.length != 0 ? (val.split(",")) : undefined;
            }
        }
        catch (error) {
            alert("Oops! An error occurred. Please check the input field type");
            console.log(error);
        }
    };
    UsefulUtilsService.prototype.getSemicolonArray = function (val) {
        try {
            if (val.includes("{")) {
                if (val.includes("Fn::Split")) {
                    return JSON.parse(val);
                }
                else {
                    var kk = (val.split(";"));
                    var mm = [];
                    kk.forEach(function (i) {
                        if (i.includes("{") && !val.includes("{{")) {
                            mm.push(JSON.parse(i));
                        }
                        else if (i.includes("{{")) {
                            try {
                                mm.push(JSON.parse(JSON.parse(JSON.stringify(i))));
                            }
                            catch (err) {
                                console.log(err);
                                mm.push(i);
                            }
                        }
                        else {
                            mm.push(i);
                        }
                    });
                    return mm;
                }
            }
            else {
                return val.length != 0 ? (val.split(";")) : undefined;
            }
        }
        catch (error) {
            alert("Oops! An Error occurred. Please check the input field type");
            console.log(error);
        }
    };
    UsefulUtilsService.prototype.doUnescape = function (val) {
        //var kk = this.getProperJson(val);
        if (typeof (val) == 'string') {
            return val.replace('\\n', "\n");
        }
        else {
            return val;
        }
    };
    UsefulUtilsService.prototype.addCommonProperties = function (value) {
        value["Properties"]["DeletionPolicy"] = "With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.Possible values : 'Delete', 'Retain','Snapshot'. Snapshot applies to ec2volume, elasticcache-cachecluster and replication group, rds-dbcluster and dbinstance, redshift-cluster, neptune-dbcluster";
        value["Properties"]["DependsOn"] = ["List of strings. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute."];
        value["Properties"]["UpdateReplacePolicy"] = "If you update a resource property that requires that the resource be replaced, AWS CloudFormation recreates the resource during the update. By default, AWS CloudFormation then deletes the old resource. Using the UpdateReplacePolicy, you can specify that AWS CloudFormation retain or (in some cases) create a snapshot of the old resource. Acceptable values : Retain, Delete, Snapshot";
        value["Properties"]["Condition"] = "Use the Condition key and a condition's logical ID to associate it with a resource or output.  you can create a condition and then associate it with a resource or output so that AWS CloudFormation only creates the resource or output if the condition is true. Similarly you can associate the condition with a property so that AWS CloudFormation only sets the property to a specific value if the condition is true. If the condition is false, AWS CloudFormation sets the property to a different value that you specify.";
        value["Properties"]["Metadata"] = { "info": "The Metadata attribute enables you to associate structured data with a resource. By adding a Metadata attribute to a resource, you can add data in JSON or YAML to the resource declaration. AWS CloudFormation does not validate the syntax within the Metadata attribute. AWS CloudFormation won't recognize some template changes as an update, such as changes to a deletion policy, update policy, condition declaration, or output declaration. If you need to make such changes without making any other change, you can add or modify a metadata attribute for any of your resources. You can retrieve this data using the AWS command aws cloudformation describe-stack-resource. Note: Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key. " };
        return value;
    };
    UsefulUtilsService.prototype.copyToClipboardYaml = function (yamlTemplate) {
        yamlTemplate = yaml.safeDump(yamlTemplate, { "skipInvalid": true });
        var textArea = document.createElement("textarea");
        textArea.value = yamlTemplate;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };
    UsefulUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsefulUtilsService);
    return UsefulUtilsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IT\learn-angular\cloudFurner\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map