//
//  BuildingsContainer.swift
//  Freerooms Mobile
//
//  Created by Nicole Xie on 2026/2/18.
//

import SwiftUI

struct BuildingsContainer: View {
    var body: some View {
        List {
            ForEach(buildings) { building in
                BuildingListView(building: building)
            }
        }
        .listStyle(.plain)
        .clipShape(RoundedRectangle(cornerRadius: 20))
        .shadow(color: .gray.opacity(0.25), radius: 5)
        .overlay(RoundedRectangle(cornerRadius: 20).stroke(.accent.opacity(0.5)))
    }
}
