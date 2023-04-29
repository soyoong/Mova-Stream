//
//  Button.swift
//  MovaStream
//
//  Created by HauNguyen on 27/04/2566 BE.
//

import UIKit

// Custom button
class MasterButton: UIButton {
    
    func setIcon(_ icon: UIImage?, color: UIColor? = nil, size: CGFloat? = nil, for state: UIControl.State) {
        if let getIcon = icon {
            self.setImage(getIcon.resize(to: size ?? 24.0)?.tintColor(color ?? .white), for: state)
            self.bringSubviewToFront(self.imageView!)
            self.configuration?.baseBackgroundColor = .transparent
        } else {
            print("Can't get icon image in Button component")
        }
    }
    
    func setTitle(_ title: String?, font: UIFont? = nil, textColor: UIColor? = .blue, for state: UIControl.State) {
        self.titleLabel?.font = font
        self.setTitle(title, for: state)
        self.setTitleColor(textColor, for: state)
    }
}
