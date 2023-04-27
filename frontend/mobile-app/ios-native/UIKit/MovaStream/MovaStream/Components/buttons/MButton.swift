//
//  MButton.swift
//  MovaStream
//
//  Created by HauNguyen on 27/04/2566 BE.
//

import UIKit

class MButton: MasterButton {
    
    enum ButtonSize {
        case small, primary
    }
    
    var buttonSize: ButtonSize = .primary
    
    convenience init(buttonSize: ButtonSize? = .primary) {
        self.init(configuration: .filled())
        self.buttonSize = buttonSize!
        setupViews()
    }

    func setupViews() {
        
    }
}
