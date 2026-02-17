//
//  SearchBar.swift
//  Freerooms Mobile
//
//  Created by Nicole Xie on 2026/2/17.
//

import SwiftUI

struct SearchBar: View {
    var body: some View {
        HStack {
            Image(systemName: "magnifyingglass")
            Text("Search...")
            Spacer()
        }
        .padding(12)
        .background(.ultraThinMaterial)
        .cornerRadius(14)
    }
}

#Preview {
    SearchBar()
}
