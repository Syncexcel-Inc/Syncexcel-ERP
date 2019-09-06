"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var reusable = animations_1.animation([
    animations_1.style({
        opacity: "{{opacity}}",
        transform: "scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"
    }),
    animations_1.animate("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)", animations_1.style("*"))
], {
    params: {
        duration: "200ms",
        delay: "0ms",
        opacity: "0",
        scale: "1",
        x: "0",
        y: "0",
        z: "0"
    }
});
exports.egretAnimations = [
    animations_1.trigger("animate", [animations_1.transition("void => *", [animations_1.useAnimation(reusable)])]),
    animations_1.trigger("fadeInOut", [
        animations_1.state("0", animations_1.style({
            opacity: 0,
            display: "none"
        })),
        animations_1.state("1", animations_1.style({
            opacity: 1,
            display: "block"
        })),
        animations_1.transition("0 => 1", animations_1.animate("300ms")),
        animations_1.transition("1 => 0", animations_1.animate("300ms"))
    ])
];
//# sourceMappingURL=egret-animations.js.map