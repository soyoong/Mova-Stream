//
//  HomeViewHeader.swift
//  MovaStream
//
//  Created by HauNguyen on 26/04/2566 BE.
//

import UIKit

class NavBarHeader: MasterView {
    
    private var containerView = UIView()
    
    private let logoView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = UIImage(named: "mova")?.resize(to: 32)
        imageView.layer.cornerRadius = 6
        return imageView
    }()
    
    private let searchButtonIcon: MButton = {
        var button = MButton()
        button.setImage(UIImage(named: "search"), color: .white, size: 20, for: .normal)
        return button
    }()
    
    private let ringButtonIcon: MButton = {
        var button = MButton()
        button.setImage(UIImage(named: "bell"), color: .white, size: 20, for: .normal)
        return button
    }()

    override func setupViews() {
        super.setupViews()
        containerView.insertSubview(logoView, at: 0)
        containerView.insertSubview(searchButtonIcon, at: 1)
        containerView.insertSubview(ringButtonIcon, at: 2)
        addSubview(containerView)
    }

    override func setupLayoutSubviews() {
        super.setupLayoutSubviews()
        logoView.anchor(top: containerView.topAnchor, leading: containerView.leadingAnchor)
        searchButtonIcon.anchor(top: containerView.topAnchor, trailing: ringButtonIcon.leadingAnchor)
        ringButtonIcon.anchor(top: containerView.topAnchor, trailing: containerView.trailingAnchor)
        containerView.fillSuperview(superview: self, constant: UIEdgeInsets(top: 20, left: 20, bottom: 0, right: -20))
        
    }
}

import SwiftUI

struct NavBarHeader_Previews: PreviewProvider {
    static var previews: some View {
        PreviewUIViewController(viewController: HomeViewController())
    }
}

