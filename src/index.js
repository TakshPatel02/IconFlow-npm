const AnimatedIcon = require('./AnimatedIcon.jsx')

class IconFlow {
    constructor(options = {}) {
        this.defaultSize = options.size ?? 24
        this.defaultColor = options.color ?? 'currentColor'
        this.defaultSpeed = options.speed ?? 1
        this.defaultStrokeWidth = options.strokeWidth ?? 2
        this.defaultAnimation = options.animation ?? 'shake'
        this.defaultTrigger = options.trigger ?? 'hover'
    }

    getDefaults(overrides = {}) {
        return {
            size: this.defaultSize,
            color: this.defaultColor,
            speed: this.defaultSpeed,
            strokeWidth: this.defaultStrokeWidth,
            animation: this.defaultAnimation,
            trigger: this.defaultTrigger,
            ...overrides
        }
    }
}

module.exports = IconFlow
module.exports.AnimatedIcon = AnimatedIcon
module.exports.default = IconFlow