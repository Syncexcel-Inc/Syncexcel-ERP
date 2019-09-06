"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var left_sidebar_plain_component_1 = require("./left-sidebar-plain.component");
describe('LeftSidebarPlainComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [left_sidebar_plain_component_1.LeftSidebarPlainComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(left_sidebar_plain_component_1.LeftSidebarPlainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=left-sidebar-plain.component.spec.js.map