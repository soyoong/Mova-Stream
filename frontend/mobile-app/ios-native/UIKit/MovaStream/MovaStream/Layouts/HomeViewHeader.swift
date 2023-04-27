//
//  HomeViewHeader.swift
//  Mova
//
//  Created by HauNguyen on 19/12/2565 BE.
//

import UIKit

class HomeViewHeader: MasterView {
    
    private var containerView = UIView()

    public var stretchyHeader: StretchyTableHeaderView = {
        let header = StretchyTableHeaderView()
        header.imageView.image = UIImage(named: "doctor_strange2")
        return header
    }()
    
    private let buttonPlay: UIButton = {
        var button = UIButton(configuration: .filled())
        button.setTitle("Play", for: .normal)
        button.configuration?.image = UIImage(named: "play")?.resize(to: 20)?.withTintColor(.black)
        button.configuration?.imagePadding = 10
        button.configuration?.baseForegroundColor = .black
        button.configuration?.baseBackgroundColor = .white
        return button
    }()
    
    private let buttonList: UIButton = {
        var button = UIButton(configuration: .filled())
        button.configuration?.title = "More info"
        button.configuration?.image = UIImage(named: "info")?.resize(to: 20)?.withTintColor(.white)
        button.configuration?.imagePadding = 10
        button.configuration?.imagePlacement = .trailing
        button.configuration?.baseForegroundColor = .white
        button.configuration?.baseBackgroundColor = .greyLight
        return button
    }()
    
    private let largeTitle: UILabel = {
        let title = UILabel()
        title.text = "Dr.Strange 2"
        title.font = .boldSystemFont(ofSize: 26)
        title.textColor = .textColor
        return title
    }()
    
    private let subTitle: UILabel = {
        let title = UILabel()
        title.text = "Action, Superhero, Science Fiction."
        title.font = .medium(size: 16)
        title.textColor = .white
        return title
    }()
    
    override func setupViews() {
        super.setupViews()
        self.addSubview(self.stretchyHeader)
        self.addSubview(self.containerView)
        self.bringSubviewToFront(self.containerView)
        
        let views = [self.largeTitle, self.subTitle, self.buttonPlay, self.buttonList] as [UIView]
        views.forEach { view in
            self.containerView.insertSubview(view, at: views.firstIndex(of: view)!)
        }
    }
    
    override func setupLayoutSubviews() {
        super.setupLayoutSubviews()
        self.stretchyHeader.fillSuperview(superview: self)
                
        self.containerView.anchor(
            top: self.topAnchor,
            leading: self.leadingAnchor,
            bottom: self.bottomAnchor,
            trailing: self.trailingAnchor,
            constant: UIEdgeInsets(top: 0, left: 20, bottom: -20, right: 0)
        )
        
        self.largeTitle.anchor(
            top: nil,
            leading: self.containerView.leadingAnchor,
            bottom: nil,
            trailing: nil
        )
        
        self.subTitle.anchor(
            top: self.largeTitle.bottomAnchor,
            leading: self.containerView.leadingAnchor,
            constant: UIEdgeInsets(top: 8, left: 0, bottom: 0, right: 0)
        )
        
        self.buttonPlay.anchor(
            top: self.subTitle.bottomAnchor,
            leading: self.containerView.leadingAnchor,
            bottom: self.containerView.bottomAnchor,
            constant: UIEdgeInsets(top: 10, left: 0, bottom: 0, right: 0)
        )
        self.buttonPlay.layer.cornerRadius = self.buttonPlay.bounds.size.height/2
        
        self.buttonList.anchor(
            leading: self.buttonPlay.trailingAnchor,
            bottom: self.containerView.bottomAnchor,
            constant: UIEdgeInsets(top: 10, left: 10, bottom: 0, right: 0)
        )
        self.buttonList.layer.cornerRadius = self.buttonList.bounds.size.height/2
    }

}

import SwiftUI

struct HomeViewHeader_Previews: PreviewProvider {
    static var previews: some View {
        PreviewUIViewController(viewController: HomeViewController())
    }
}
