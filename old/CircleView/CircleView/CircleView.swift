/*
 Copyright (C) 2017 Apple Inc. All Rights Reserved.
 See LICENSE.txt for this sample’s licensing information
 
 Abstract:
 A NSView subclass showing how to draw text using the Cocoa text system, and how render the view in Inteface Builder.
 */

import Cocoa

// CircleView draws text around a circle, using Cocoa's text system for
// glyph generation and layout, then calculating the positions of glyphs
// based on that layout, and using NSLayoutManager for drawing.

@IBDesignable
public class CircleView: NSView {

    var timer: Timer?
    var lastAnimationTime: TimeInterval = 0

    var center: NSPoint {
        didSet {
            self.needsDisplay = true
        }
    }
    
    var radius: CGFloat = 115.0 {
        didSet {
            self.needsDisplay = true
        }
    }
    
    var startingAngle: CGFloat = .pi / 2 {
        didSet {
            self.needsDisplay = true
        }
    }
    
    var angularVelocity: CGFloat = .pi / 2 {
        didSet {
            self.needsDisplay = true
        }
    }
    
    var string: String {
        get {
            return self.textStorage.string
        }
        set {
            self.textStorage.replaceCharacters(in: NSRange(location: 0, length:self.textStorage.length), with: newValue)
            self.needsDisplay = true
        }
    }
    
    let textStorage: NSTextStorage = NSTextStorage(string: "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes, the ones who see things differently.")
    let layoutManager: NSLayoutManager = NSLayoutManager()
    let textContainer: NSTextContainer = NSTextContainer()

    var textColor: NSColor = NSColor.black {
        didSet {
            // Text drawing uses the attributes set on the text storage rather
            // than drawing context attributes like the current color.
            let range = NSRange(location: 0, length: self.textStorage.length)
            self.textStorage.addAttribute(NSAttributedStringKey.foregroundColor, value: textColor, range: range)
            self.needsDisplay = true
        }
    }

    required public init?(coder: NSCoder) {
        // This initalizer is used when running the app, as well as when rendering the view as an IBDesignable
        // First, we set default values for the various parameters.
        self.center = NSPoint(x: 180, y: 135)
        super.init(coder: coder)

        // Setup the text system using NSTextStorage, NSLayoutManager, and NSTextContainer
        self.layoutManager.addTextContainer(self.textContainer)
        self.textStorage.addLayoutManager(self.layoutManager)
    }

    deinit {
        timer?.invalidate()
    }

    override public func draw(_ dirtyRect: NSRect) {
        super.draw(dirtyRect)

        NSColor.white.set()
        self.bounds.fill()

        // Note that usedRect(for:) does not force layout, so it must
        // be called after glyphRange(for:), which does force layout.
        let glyphRange = self.layoutManager.glyphRange(for: self.textContainer)
        let usedRect = self.layoutManager.usedRect(for: self.textContainer)
        
        for glyphIndex in glyphRange.location ..< NSMaxRange(glyphRange) {
            let context = NSGraphicsContext.current
            let lineFragmentRect = self.layoutManager.lineFragmentRect(forGlyphAt: glyphIndex, effectiveRange: nil)
            var layoutLocation = self.layoutManager.location(forGlyphAt: glyphIndex)
            let transform = NSAffineTransform()

            // Here layoutLocation is the location (in container coordinates) where the glyph was laid out.
            layoutLocation.x += lineFragmentRect.origin.x
            layoutLocation.y += lineFragmentRect.origin.y

            // We then use the layoutLocation to calculate an appropriate position for the glyph
            // around the circle (by angle and distance, or viewLocation in rectangular coordinates).
            let distance = self.radius + usedRect.size.height - layoutLocation.y
            let angle = self.startingAngle + layoutLocation.x / distance
            
            let viewLocationX = center.x + distance * sin(angle)
            let viewLocationY = center.y + distance * cos(angle)
            let viewLocation = NSPoint(x: viewLocationX, y: viewLocationY)

            // We use a different affine transform for each glyph, to position and rotate it
            // based on its calculated position around the circle.
            transform.translateX(by: viewLocation.x, yBy: viewLocation.y)
            transform.rotate(byRadians: -angle)

            // We save and restore the graphics state so that the transform applies only to this glyph.
            context?.saveGraphicsState()
            transform.concat()
            // drawGlyphs(forGlyphRange:at:) draws the glyph at its laid-out location in container coordinates.
            // Since we are using the transform to place the glyph, we subtract the laid-out location here.
            layoutManager.drawGlyphs(forGlyphRange: NSRange(location: glyphIndex, length:1), at: NSPoint(x: -layoutLocation.x, y: -layoutLocation.y))
            context?.restoreGraphicsState()
        }
    }
    
    override public var isOpaque: Bool {
        return false
    }
}

extension CircleView {

    private func startAnimation() {
        self.stopAnimation()

        // We schedule a timer for a desired 30fps animation rate.
        // In CircleView.animate(with:) we determine exactly how much time has elapsed and animate accordingly.
        timer = Timer.scheduledTimer(withTimeInterval: 1.0 / 30.0, repeats: true, block: { (timer) in
            self.animate(with: timer)
        })

        // The next two lines make sure that animation will continue to occur
        // while modal panels are displayed and while event tracking is taking
        // place (for example, while a slider is being dragged).
        RunLoop.current.add(timer!, forMode: .modalPanelRunLoopMode)
        RunLoop.current.add(timer!, forMode: .eventTrackingRunLoopMode)
        lastAnimationTime = Date.timeIntervalSinceReferenceDate
    }

    private func stopAnimation() {
        timer?.invalidate()
        timer = nil
    }

    func animate(with timer: Timer) {
        // We determine how much time has elapsed since the last animation,
        // and we advance the angle accordingly.
        let now = Date.timeIntervalSinceReferenceDate
        startingAngle = self.startingAngle + self.angularVelocity * CGFloat(now - lastAnimationTime)
        lastAnimationTime = now
    }

    func toggleAnimation() {
        if timer == nil {
            startAnimation()
        } else {
            stopAnimation()
        }
    }
}
