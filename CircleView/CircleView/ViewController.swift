/*
 Copyright (C) 2017 Apple Inc. All Rights Reserved.
 See LICENSE.txt for this sample’s licensing information
 
 Abstract:
 A NSViewController subclass showing how to use IBActions to manipulate a view.
 */

import Cocoa

// Many of the methods here are similar to those in the simpler DotView example.
// See that example for detailed explanations; here we will discuss those
// features that are unique to CircleView.

class ViewController: NSViewController {

    @IBOutlet weak var circleView: CircleView!

    // DotView uses action methods to set its parameters.  Here we have
    // factored each of those into a method to set each parameter directly
    // and a separate action method.

    @IBAction func applyRadius(_ sender: NSSlider) {
        circleView.radius = CGFloat(sender.doubleValue)
    }

    @IBAction func applyStartingAngle(_ sender: NSSlider) {
        circleView.startingAngle = CGFloat(sender.doubleValue)
    }

    @IBAction func applyString(_ sender: NSTextField) {
        circleView.string = sender.stringValue
    }

    @IBAction func applyColor(_ sender: NSColorWell) {
        circleView.textColor = sender.color
    }

    @IBAction func toggleAnimation(_ sender: NSButton) {
        circleView.toggleAnimation()
    }

    // DotView changes location on mouse up, but here we choose to do so
    // on mouse down and mouse drags, so the text will follow the mouse.
    public override func mouseDown(with event: NSEvent) {
        self.adjustView(with: event)
    }

    public override func mouseDragged(with event: NSEvent) {
        self.adjustView(with: event)
    }

    private func adjustView(with event: NSEvent) {
        circleView.center = circleView.convert(event.locationInWindow, from: nil)
    }
}
