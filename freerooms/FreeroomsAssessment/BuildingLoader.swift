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

            let building = [Building]()
            return .success(building)
        case .failure:
            return .failure(Error.connectivity)
        }
    }
}
