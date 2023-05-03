//
//  HomeViewController.swift
//  Netflix Clone
//
//  Created by HauNguyen on 04/12/2565 BE.
//

import UIKit
import SwiftUI


class HomeViewController: MasterViewController {
    
    // MARK: - Variables
    private let rowData: [RowTableViewCellModel] = {
        return tmdbs
    }()
    
    // Navbar
    private let navBarHeader: NavBarHeader = {
        return NavBarHeader()
    }()
    
    // TableView
    private var homeTableView: UITableView = {
        let table = UITableView(frame: .zero, style: .grouped)
        table.backgroundColor = .greyDark
        return table
    }()
    
    // Section view
    private func rowSectionHeader(_ sectionTitle: String) -> UIView {
        let view = UIView()
        let titleLabel = UILabel(frame: CGRect(origin: .zero, size: CGSize(width: 200, height: 80)))
        titleLabel.textColor = UIColor.white
        titleLabel.font = UIFont.systemFont(ofSize: 20, weight: .bold)
        titleLabel.text = sectionTitle
        let seeAllBtn = MButton(type: .custom)
        seeAllBtn.setTitle("See all", font: .medium(size: 14), textColor: .primaryRed, for: .normal)
        view.insertSubview(titleLabel, at: 0)
        view.insertSubview(seeAllBtn, at: 1)
        titleLabel.anchor(top: view.topAnchor, leading: view.leadingAnchor, bottom: view.bottomAnchor, constant: UIEdgeInsets(top: 0, left: 20, bottom: 0, right: 0))
        seeAllBtn.anchor(top: view.topAnchor, bottom: view.bottomAnchor, trailing: view.trailingAnchor, constant: UIEdgeInsets(top: 0, left: 0, bottom: 0, right: -20))
        return view
    }
    
    // Home view header
    private var homeViewHeader: HomeViewHeader = {
        return HomeViewHeader()
    }()
    
    // ViewDidLoad
    override func viewDidLoad() {
        super.viewDidLoad()
        self.setupViews()
    }
    
    // ViewDidLayoutSubviews
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        self.setupLayouts()
    }
    
    // Setup view
    private func setupViews() {
        self.homeTableView.frame = view.bounds
        self.homeTableView.delegate = self
        self.homeTableView.dataSource = self
        self.view.insertSubview(self.homeTableView, at: 0)
        self.view.insertSubview(self.navBarHeader, at: 1)
        self.homeTableView.register(RowTableViewCell.self, forCellReuseIdentifier: RowTableViewCell.identifier)
        self.homeViewHeader = HomeViewHeader(frame: CGRect(x: 0, y: 0, width: self.view.bounds.width, height: self.view.bounds.height/2))
        self.homeTableView.tableHeaderView = self.homeViewHeader
        self.homeTableView.refreshControl?.addTarget(self, action: #selector(self.reloadData), for: .valueChanged)
        self.reloadData()
    }
    
    // Setup layouts
    private func setupLayouts() {
        homeTableView.fillSuperview(superview: self.view)
        navBarHeader.anchor(top: view.topAnchor, leading: view.leadingAnchor, trailing: view.trailingAnchor)
    }
    
    // Reload data or call api..
    @objc private func reloadData() {
        print("Data loading...")
    }
}


extension HomeViewController: UITableViewDelegate, UITableViewDataSource {
    
    // willDisplayHeaderView
    func tableView(_ tableView: UITableView, willDisplayHeaderView view: UIView, forSection section: Int) {
        guard let header = view as? UITableViewHeaderFooterView else { return }
        header.textLabel?.font = .systemFont(ofSize: 18, weight: .semibold)
        header.textLabel?.frame = CGRect(x: header.bounds.origin.x + 20, y: header.bounds.origin.y, width: 100, height: header.bounds.height)
        header.textLabel?.textColor = .textColor
        header.textLabel?.text = header.textLabel?.text?.capitalizeFirstLetter()
    }
    
    // numberOfSections
    func numberOfSections(in tableView: UITableView) -> Int {
        return rowData.count
    }
    
    // titleForHeaderInSection
//    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
//        return rowData[section].rowName
//    }
    
    // numberOfRowsInSection
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    
    // cellForRowAt
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: RowTableViewCell.identifier, for: indexPath) as? RowTableViewCell else {
            return UITableViewCell()
        }
        cell.updateCellWith(with: tmdbs[indexPath.row].movies)
        return cell
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        
        return rowSectionHeader(rowData[section].rowName)
    }
    
    // heightForHeaderInSection
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 44
    }
    
    // heightForRowAt
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 200
    }
}

extension HomeViewController {
    
    // scrollView
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        if let headerView = self.homeTableView.tableHeaderView as? HomeViewHeader {
            headerView.stretchyHeader.scrollViewDidScroll(scrollView: scrollView)
        }
    }
    
}
