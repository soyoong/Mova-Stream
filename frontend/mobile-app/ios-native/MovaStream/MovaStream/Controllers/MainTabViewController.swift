//
//  MainViewController.swift
//  MovaStream
//
//  Created by HauNguyen on 26/04/2566 BE.
//

import UIKit

class MainTabViewController: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    private func tabBarConfig() {
        self.tabBar.tintColor = .red // Selected item color
        self.tabBar.unselectedItemTintColor = .systemGray // Un selected item color
        self.tabBar.isTranslucent = true
        self.tabBar.backgroundColor = .clear
        // Make background blur view
        
        self.tabBar.insertSubview(UIView.blurView(frame: self.tabBar.bounds), at: 0)
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
