//
//  BuildingLoader.swift
//  FreeroomsAssessment
//
//  Created by Anh Nguyen on 31/1/2025.
//

import Foundation

public class BuildingLoader {
    private var client: HttpClient
    private var url: URL
    
    public enum Error: Swift.Error {
        case connectivity, invalidData
    }
    
    public typealias Result = Swift.Result<[Building], Swift.Error>
    
    public init(client: HttpClient, url: URL) {
        self.client = client
        self.url = url
    }
    
    public func fetchBuildings() async -> Result  {
        let result = await client.get(from: url)

        switch result {
        case .success(let (data, response)):

            if response.statusCode != 200 {
                return .failure(Error.invalidData)
            }

            // Try decoding and mapping
            do {
                let remote = try JSONDecoder().decode([RemoteBuilding].self, from: data)
                let buildings = remote.map {
                    Building(
                        name: $0.building_name,
                        // Convert UUID to string
                        id: $0.building_id.uuidString,
                        latitude: $0.building_latitude,
                        longitude: $0.building_longitude,
                        aliases: $0.building_aliases
                    )
                }

                return .success(buildings)
            } catch {
                return .failure(Error.invalidData)
            }
        case .failure:
            return .failure(Error.connectivity)
        }
    }
}
