//
//  Movie.swift
//  MovaStream
//
//  Created by HauNguyen on 27/04/2566 BE.
//

import Foundation

struct Movie: Codable {
    let title: String
    let backdrop_path: String
    let media_type: String?
    let release_date: String?
    let first_air_date: String?
    let genre_ids: [Double]
    let id: Double
    let name: String?
    let origin_country: [String]?
    let original_language: String
    let original_name: String?
    let overview: String
    let popularity: Double
    let poster_path: String?
    let vote_average: Double
    let vote_count: Double
}
