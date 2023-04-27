//
//  RowItemCollectionViewCell.swift
//  MovaStream
//
//  Created by HauNguyen on 27/04/2566 BE.
//

import UIKit
import NukeUI

class RowItemCollectionViewCell: UICollectionViewCell {
    
    static let identifier = "RowItemCollectionViewCell"
    
    private let posterImageView: LazyImageView = {
        let imageView = LazyImageView()
        imageView.placeholderView = UIActivityIndicatorView()
        imageView.priority = .high
        imageView.pipeline = .shared
        imageView.onCompletion = { _ in print("Request completed") }
        return imageView
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        contentView.addSubview(posterImageView)
        layer.cornerRadius = 8
    }
    
    required init?(coder: NSCoder) {
        fatalError()
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        posterImageView.frame = contentView.bounds
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    
    public func configure(with model: String) {
        
        guard let url = URL(string: "https://image.tmdb.org/t/p/w500/\(model)") else {
            return
        }
        posterImageView.url = url
    }
}


import SwiftUI

struct RowItemCollectionViewCell_Previews: PreviewProvider {
    static var previews: some View {
        PreviewUIViewController(viewController: HomeViewController())
    }
}
