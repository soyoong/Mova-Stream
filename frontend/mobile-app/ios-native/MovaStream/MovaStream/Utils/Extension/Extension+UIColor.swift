//
//  Extension+UIColor.swift
//  Mova
//
//  Created by HauNguyen on 08/12/2565 BE.
//

import UIKit

extension [UIColor] {
    
    var toCGColors: [CGColor] {
        
        var colors = [CGColor]()
        
        if self.count > 1 {
            colors = self.map({$0.cgColor})
        } else {
            colors.append(contentsOf: self.map({$0.cgColor}))
        }
        
        return colors
    }
    
}

