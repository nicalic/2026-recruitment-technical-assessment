//
//  TabBar.swift
//  Freerooms Mobile
//
//  Created by Nicole Xie on 2026/2/18.
//

import SwiftUI

struct TabBar: View {
    var body: some View {
        HStack {
            Tab(image: "building.fill", label: "Buildings")
            Tab(image: "map.fill", label: "Map")
            Tab(image: "door.left.hand.closed", label: "Rooms")
        }
        .padding(14)
        .background(.white)
        .clipShape(Capsule())
    }
}

struct Tab: View {
    var image: String
    var label: String
    
    var body: some View {
        VStack(spacing: 2) {
            Image(systemName: image)
            Text(label).font(.caption)
        }
        .font(.system(size: 18))
        .padding(.horizontal, 20)
    }
}

#Preview {
    TabBar()
}
