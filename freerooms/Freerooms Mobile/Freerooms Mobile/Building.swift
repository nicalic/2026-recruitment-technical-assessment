//
//  Building.swift
//  FreeroomsAssessment
//
//  Created by Anh Nguyen on 31/1/2025.
//

import Foundation

public struct Building: Codable, Identifiable {
    public let name: String
    public let id: String
    public let lat: Double
    public let long: Double
    public let aliases: [String]
    
    public init(name: String, id: String, lat: Double, long: Double, aliases: [String]) {
        self.name = name
        self.id = id
        self.lat = lat
        self.long = long
        self.aliases = aliases
    }
}
